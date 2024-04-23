const Domain = require("../models/AppSchemas/Domain");
const Professor = require("../models/AppSchemas/Professor");
const Academy = require("../models/AppSchemas/Academy");
const Training = require("../models/AppSchemas/Training");
const Progression = require("../models/AppSchemas/Progression");
const Course = require("../models/AppSchemas/Course");
const HttpError = require("../models/HttpError/ErrorModel");
const bcrypt = require("bcrypt");
// ces controlleurs ne sont pas liés directement à un certain shéma mais ce sont des taches effectuées par un membrz d'administration.

exports.addProfessor = async (req, res, next) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      password2,
      profilePicture,
      phone,
      description,
    } = req.body;
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim() ||
      !phone.trim() ||
      !description.trim()
    ) {
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent , catch(addProfessor !)",
          422
        )
      );
    }
    const newMail = email.toLowerCase();
    const emailExists = await Professor.findOne({ email: newMail });
    if (emailExists) {
      return next(
        new HttpError(
          "Cet email est déja utilisé par un autre professeur ! catch(addProfessor)"
        )
      );
    }
    if (password.trim().length < 12) {
      return next(
        new HttpError(
          "Mot de passe faible, le mot de passe doit contenir au moins 12 caractéres non vides ! ",
          422
        )
      );
    }
    if (password != password2) {
      return next(
        new HttpError("Les Mots de passe ne sont pas identiques !", 422)
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    let newProfessor;
    if (profilePicture) {
      newProfessor = await Professor.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
        phone,
        profilePicture: profilePicture,
        isResponsable: false,
        description,
      });
    } else {
      newProfessor = await Professor.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
        isResponsable: false,
        phone,
        description,
      });
    }
    res.status(201).json(`Professeur ${newProfessor.email} Ajouté`);
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        "Inscription du professeur a echoué , catch(addProfessor)",
        422
      )
    );
  }
};
exports.deleteProfessor = async (req, res, next) => {
  const { profIf } = req.body;
  try {
    // on la laisse à plus tard.. c'est pas assez diff
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.changeProfResponsability = async (req, res, next) => {
  try {
    const { id, order } = req.body;
    if (!id || !order) {
      return next(new HttpError("Données nécéssaires manquantes !"));
    }
    let updatedProf = await Professor.findByIdAndUpdate(
      id,
      { isResponsable: order == "resp" },
      { new: true }
    );
    res.status(201).json(updatedProf);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.defineProfAsResponsable = async (req, res, next) => {
  const { academyId } = req.body;
  const profId = req.params.id;
  try {
    const concernedProf = await Professor.findById(profId);
    const currentWorksFor = concernedProf.worksFor;
    if (!concernedProf.isResponsable) {
      return next(
        new HttpError("Ce prof n'est pas candidat a devenir un respo !!!")
      );
    }
    if (!currentWorksFor.includes(academyId)) {
      return next(
        new HttpError(
          "Ce prof ne peut pas etre un respo de cette académie (il ne fait pas partie de son corps professoral).."
        )
      );
    }
    const concernedAcademy = await Academy.findById(academyId);
    if (concernedAcademy.responsables.length == 2) {
      return next(
        new HttpError("cette académie ne peut plus admettre des respos !")
      );
    }
    if (concernedProf.responsableFor) {
      return next(
        new HttpError("Ce professeur est déja attaché à une autre académie !")
      );
    }
    const newProfessor = await Professor.findByIdAndUpdate(
      profId,
      {
        responsableFor: academyId,
      },
      { new: true }
    );
    const currentRespos = concernedAcademy.responsables;
    let newRespos;
    if (!currentRespos.length) {
      newRespos = [profId];
    } else {
      newRespos = [...currentRespos, profId];
    }
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { responsables: newRespos },
      { new: true }
    );
    console.log("NEW RESP ACADEMy : ");
    console.log(newAcademy);
    console.log("NEW RESP PROF : ");
    console.log(newProfessor);
    res
      .status(201)
      .json(
        `${newProfessor.lastName} est un responsable chez ${newAcademy.name}`
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.undefineResponsable = async (req, res, next) => {
  const { profId } = req.body;
  try {
    const concernedProf = await Professor.findById(profId);
    const academyId = concernedProf.responsableFor;
    const concernedAcademy = await Academy.findById(academyId);
    const newProf = await Professor.findByIdAndUpdate(
      profId,
      { responsableFor: "" },
      { new: true }
    );
    const currentResps = concernedAcademy.responsables;
    const newResps = currentResps.filter((resp) => resp != profId);
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { responsables: newResps },
      { new: true }
    );
    console.log("DERESP PROF : ");
    console.log(newProf);
    console.log("DERESP ACADEMY : ");
    console.log(newAcademy);
    res
      .status(201)
      .json(
        `${newProf.lastName} n'est plus un responsable chez ${newAcademy.name}`
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.defineProfAsWorker = async (req, res, next) => {
  const { academyId } = req.body;
  const profId = req.params.id;
  try {
    const concernedProf = await Professor.findById(profId);
    const concernedAcademy = await Academy.findById(academyId);
    const currentWorksFor = concernedProf.worksFor;
    let newWorksFor;
    const academyId_string = concernedAcademy._id.toString();
    if (!currentWorksFor.length) {
      newWorksFor = [academyId_string];
    } else {
      newWorksFor = [...currentWorksFor, academyId_string];
    }
    const newProfessor = await Professor.findByIdAndUpdate(
      profId,
      { worksFor: newWorksFor },
      { new: true }
    );
    const currentProfessors = concernedAcademy.professors;
    let newProfessors;
    if (!currentProfessors.length) {
      newProfessors = [profId];
    } else {
      newProfessors = [...currentProfessors, profId];
    }
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { professors: newProfessors },
      { new: true }
    );
    console.log("NEW PROFESSOR : ");
    console.log(newProfessor);
    console.log("NEW ACADEMY : ");
    console.log(newAcademy);
    res
      .status(201)
      .json(
        newProfessor.lastName + " est un professeur chez " + newAcademy.name
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.undefineWorker = async (req, res, next) => {
  const { profId, academyId } = req.body;
  try {
    const concernedProf = await Professor.findById(profId);
    const concernedAcademy = await Academy.findById(academyId);
    const currentWorkers = concernedAcademy.professors;
    const currentEmpAcademies = concernedProf.worksFor;
    const newWorkers = currentWorkers.filter((prof) => prof != profId);
    const newEmpAcademies = currentEmpAcademies.filter(
      (academy) => academy != academyId
    );

    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { professors: newWorkers },
      { new: true }
    );
    const newProf = await Professor.findByIdAndUpdate(
      profId,
      { worksFor: newEmpAcademies },
      { new: true }
    );
    res
      .status(201)
      .json(`${newProf.lastName} n'est plus un tuteur chez ${newAcademy.name}`);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.addDomain = async (req, res, next) => {
  const { name } = req.body;
  try {
    if (!name) {
      return next(
        new HttpError("Veuillez insérer le nom du domaine à ajouter ")
      );
    } else {
      const newDomain = await Domain.create({
        name,
      });
      res.status(201).json(newDomain);
    }
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue lors de la tentative d'ajout d'un nv domaine catch(addDomain)"
      )
    );
  }
};
exports.addCategory = async (req, res, next) => {
  const { category, domain } = req.body;
  try {
    if (!category.trim() || !domain.trim()) {
      return next(new HttpError("Des données nécéssaires qui manquent !"));
    }
    const concernedDomain = await Domain.find({ name: domain });
    if (!concernedDomain) {
      return next(
        new HttpError(
          "Ce nom de domaine ne correspond à aucune ressource existante dans la bd ! "
        )
      );
    }
    console.log(concernedDomain[0]);
    const currentCats = concernedDomain[0].categories;
    let newCats;
    if (!currentCats.length) {
      newCats = [category];
    } else {
      newCats = [...currentCats, category];
    }
    console.log(newCats);
    const newDomEntity = await Domain.findByIdAndUpdate(
      concernedDomain[0]._id,
      { categories: newCats },
      { new: true }
    );
    res.status(201).json(newDomEntity);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// JUSTE POUR RECTIFIER UNE TOUTE PETITE ERREUR D'ATTRIBUTION DES % DES PROGRESSIONS QLQ COURS (AVANT L'AJOUT DE CE DETAIL DANS LE RESTE DU CODE DU CONTROLLEUR acceptEnroll ---> ProfessorController.js......):
exports.addProgression = async (req, res, next) => {
  const { trainingId } = req.params;
  const { studentId } = req.body;
  try {
    const progression = 0;
    const concernedTraining = await Training.findById(trainingId);
    const firstCourseId = concernedTraining.courses[0];
    const firstCourseObj = await Course.findById(firstCourseId);
    const stopChap = firstCourseObj.chapters[0];
    const newProg = await Progression.create({
      studentId,
      trainingId,
      stopChap,
      progression,
    });
    res.status(200).json(newProg);
  } catch (err) {
    return next(new HttpError(err));
  }
};
