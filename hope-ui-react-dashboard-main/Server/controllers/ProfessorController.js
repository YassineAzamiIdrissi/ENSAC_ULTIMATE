const Professor = require("../models/AppSchemas/Professor");
const HttpError = require("../models/HttpError/ErrorModel");
const Academy = require("../models/AppSchemas/Academy");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.loginProfessor = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new HttpError(
          "Veuillez insérer les champs nécéssaires à la connexion , (loginProfessor)",
          422
        )
      );
    }
    const newEmail = email.toLowerCase();
    const prof = await Professor.findOne({ email: newEmail });
    if (!prof) {
      return next(
        new HttpError(
          "L'email entré ne convient aucune ressource existante !",
          422
        )
      );
    }
    const comparePass = await bcrypt.compare(password, prof.password);
    if (!comparePass) {
      return next(new HttpError("Mot de passe incorrecte !", 422));
    }
    // Generation du token :
    const { _id: id, firstName, lastName } = prof;
    const fullName = firstName + " " + lastName;
    const token = jwt.sign(
      { id, fullName, entity: "professor" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    if (prof.isResponsable) {
      const academyId = prof.responsableFor;
      const concernedAcademy = await Academy.findById(academyId);
      const academyResponsables = concernedAcademy.responsables;
      res.status(200).json({
        token,
        id,
        fullName,
        isResp: prof.isResponsable,
        entity: "Professor",
        academyResponsables,
      });
    } else {
      res.status(200).json({
        token,
        id,
        fullName,
        isResp: prof.isResponsable,
        entity: "Professor",
      });
    }
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        "Une erreur imprévu est survenue lors de cette tentative à la connexion, reprenez le plus tot possible !"
      ),
      422
    );
  }
};
exports.getProfessor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prof = await Professor.findById(id).select("-password");
    if (!prof) {
      return next(new HttpError("Ressource introuvable !", 404));
    }
    res.status(200).json(prof);
  } catch (error) {
    return next(new HttpError(error, 500));
  }
};
exports.getAllProfs = async (req, res, next) => {
  try {
    const profs = await Professor.find();
    res.status(201).json(profs);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.editProfessor = async (req, res, next) => {
  const id = req.user.id;
  const {
    email,
    firstName,
    lastName,
    currentPassword,
    newPassword,
    confirmNewPassword,
    newProfilePicture,
  } = req.body;
  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !currentPassword.trim()
  ) {
    return next(new HttpError("Données nécéssaires qui manquent !", 400));
  }
  try {
    const lowerMail = email.toLowerCase();
    const prevProf = await Professor.findOne({ email: lowerMail });
    if (prevProf && prevProf._id != id) {
      return next(
        new HttpError("Cet email est déja utilisé par un autre utilisateur : ")
      );
    }
    const prof = await Professor.findById(id);
    const match = await bcrypt.compare(currentPassword, prof.password);
    if (!match) {
      return next(new HttpError("Mot de passe actuel est incorrecte !", 400));
    }
    let newInfo;
    if (newPassword && confirmNewPassword) {
      if (newPassword.trim().length < 12) {
        return next(
          new HttpError(
            "Votre nouveau mot de passe ne satisfait pas la condition de sécurité, un mot de passe doit avoir au moins 12 caractéres"
          )
        );
      }
      if (newPassword != confirmNewPassword) {
        return next(
          new HttpError(
            "Le nouveau mot de passe et celui de confirmation ne sont pas identiques..",
            400
          )
        );
      }
      const salt = await bcrypt.genSalt(10);
      const hashedNewPass = await bcrypt.hash(newPassword, salt);
      if (newProfilePicture) {
        newInfo = await Professor.findByIdAndUpdate(
          id,
          {
            firstName,
            lastName,
            password: hashedNewPass,
            email: lowerMail,
            profilePicture: newProfilePicture,
          },
          { new: true }
        );
      } else {
        newInfo = await Professor.findByIdAndUpdate(
          id,
          { firstName, lastName, password: hashedNewPass, email: lowerMail },
          { new: true }
        );
      }
    } else {
      if (newProfilePicture) {
        newInfo = await Professor.findByIdAndUpdate(
          id,
          {
            firstName,
            lastName,
            email: lowerMail,
            profilePicture: newProfilePicture,
          },
          { new: true }
        );
      } else {
        newInfo = await Professor.findByIdAndUpdate(
          id,
          { firstName, lastName, email: lowerMail },
          { new: true }
        );
      }
    }
    res.status(201).json(newInfo);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getEmployerAcademies = async (req, res, next) => {
  const id = req.user.id;
  try {
    const currentProfessor = await Professor.findById(id);
    let empNames = [];
    for(let i=0;i<currentProfessor.worksFor.length;++i){
      const concernedAcademy = await Academy.findById(currentProfessor.worksFor[i]); 
      empNames.push(concernedAcademy.name);  
    }
    res.status(201).json(empNames);
  } catch (err) {
    return next(new HttpError(err));
  }
};
