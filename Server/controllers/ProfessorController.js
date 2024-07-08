const Progression = require("../models/AppSchemas/Progression");
const Professor = require("../models/AppSchemas/Professor");
const Enrollement = require("../models/AppSchemas/Enrollment");
const Course = require("../models/AppSchemas/Course");
const HttpError = require("../models/HttpError/ErrorModel");
const Student = require("../models/AppSchemas/Student");
const Training = require("../models/AppSchemas/Training");
const Academy = require("../models/AppSchemas/Academy");
const Notification = require("../models/AppSchemas/Notification");
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
        entity: "professor",
        academyResponsables,
      });
    } else {
      res.status(200).json({
        token,
        id,
        fullName,
        isResp: prof.isResponsable,
        entity: "professor",
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
    for (let i = 0; i < currentProfessor.worksFor.length; ++i) {
      const concernedAcademy = await Academy.findById(
        currentProfessor.worksFor[i]
      );
      empNames.push(concernedAcademy.name);
    }
    res.status(201).json(empNames);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.acceptSubscription = async (req, res, next) => {
  const { id } = req.params;
  try {
    const concernedEnrollment = await Enrollement.findById(id);
    concernedEnrollment.decision = true;
    concernedEnrollment.save();
    res.status(201).json("Abonnement accépté");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getUnreadDemands = async (req, res, next) => {
  try {
    const demands = await Enrollement.find({ decision: false });
    return res.status(201).json(demands);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.markAsRead = async (req, res, next) => {
  try {
    await Enrollement.updateMany({ decision: false }, { decision: true });
    res.status(201).json("Demandes non lues sont marquées comme");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.acceptEnroll = async (req, res, next) => {
  const { idEnroll } = req.params;
  try {
    const concernedEnrollment = await Enrollement.findById(idEnroll);
    const studentId = concernedEnrollment.studentId;
    const trainingId = concernedEnrollment.trainingId;
    const concernedStudent = await Student.findById(studentId);
    const concernedTraining = await Training.findById(trainingId);
    if (!concernedStudent.followedTrainings.includes(trainingId)) {
      concernedStudent.followedTrainings.push(trainingId);
    }
    if (!concernedStudent.enrollments.includes(idEnroll)) {
      concernedStudent.enrollments.push(idEnroll);
    }
    if (!concernedStudent.academies.includes(concernedTraining.academyId)) {
      concernedStudent.academies.push(concernedTraining.academyId);
    }
    if (!concernedTraining.subscribers.includes(studentId)) {
      concernedTraining.subscribers.push(studentId);
    }
    concernedEnrollment.decision = true;
    concernedEnrollment.answered = true;
    concernedEnrollment.save();
    concernedStudent.save();
    concernedTraining.save();

    // Accord d'une progression :
    // -- Getting first ever chapter id :
    const firstCourseId = concernedTraining.courses[0];

    const firstCourseObj = await Course.findById(firstCourseId);
    console.log("FIRST COURSE OBJECT ");
    console.log(firstCourseObj);
    const stopChap = firstCourseObj.chapters[0];
    console.log("THIS IS THE STOOPPP CHAP ");
    console.log(stopChap);
    await Progression.create({
      studentId,
      trainingId,
      stopChap,
      progression: 0,
    });
    res
      .status(201)
      .json(
        `l'etudiant ${concernedStudent.firstName} ${concernedStudent.lastName} est bien inscrit à la formation ${concernedTraining.name}`
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.refuseEnroll = async (req, res, next) => {
  const { idEnroll } = req.params;
  const { idResp } = req.body;
  try {
    const concernedEnrollment = await Enrollement.findById(idEnroll);
    concernedEnrollment.answered = true;
    concernedEnrollment.save();
    const studentId = concernedEnrollment.studentId;
    const trainingId = concernedEnrollment.trainingId;
    const concernedTraining = await Training.findById(trainingId);
    const title = `Incription refusée`;
    const content = concernedTraining.name;
    const notification = await Notification.create({
      toNotified: studentId,
      fromNotifier: idResp,
      title,
      picture: "https://www.pngmart.com/files/23/Cancel-PNG-Photo.png",
      content,
      read: false,
    });
    res.status(201).json(notification);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getSubscribedStudents = async (req, res, next) => {
  const professorId = req.user.id;
  try {
    const concernedProfessor = await Professor.findById(professorId);
  } catch (err) {}
};
exports.getAllProfessorsInAcademy = async (req, res, next) => {
  const respId = req.user.id;
  try {
    const respo = await Professor.findById(respId);
    const academyId = respo.responsableFor;
    const concernedAcademy = await Academy.findById(academyId);
    const instructorsIds = concernedAcademy.professors;
    const instructors = [];
    const ret = [];
    for (let i = 0; i < instructorsIds.length; ++i) {
      if (instructorsIds[i] != respId) {
        const concernedProfessor = await Professor.findById(instructorsIds[i]);
        instructors.push(concernedProfessor);
        const newObj = {
          name:
            concernedProfessor.firstName + " " + concernedProfessor.lastName,
          bg: concernedProfessor.profilePicture,
          start: concernedProfessor.createdAt,
          contributions: concernedProfessor.trainingsList.length,
          id: concernedProfessor._id,
          respId,
        };
        ret.push(newObj);
      }
    }
    res.status(200).json(ret);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.excludeStudent = async (req, res, next) => {
  const { studentId, respId } = req.params;
  try {
    const resp = await Professor.findById(respId);
    const concStudent = await Student.findById(studentId);
    const followedTrainings = concStudent.followedTrainings;
    const academy = await Academy.findById(resp.responsableFor);
    const academyTrainings = academy.trainings;
    for (let i = 0; i < academyTrainings.length; ++i) {
      const concernedTraining = await Training.findById(academyTrainings[i]);
      const subs = concernedTraining.subscribers;
      const subs_minus = subs.filter((id) => id != studentId);
      concernedTraining.subscribers = subs_minus;
      concernedTraining.save();
    }
    const nwList_1 = [];
    for (let i = 0; i < followedTrainings.length; ++i) {
      if (!academyTrainings.includes(followedTrainings[i])) {
        nwList_1.push(followedTrainings[i]);
      }
    }
    concStudent.followedTrainings = nwList_1;
    concStudent.save();
    res.status(200).json(concStudent);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.excludeProfessor = async (req, res, next) => {
  const { profId, respId } = req.params;
  try {
    const professor = await Professor.findById(profId);
    const responsable = await Professor.findById(respId);
    const academyId = responsable.responsableFor;
    const academy = await Academy.findById(academyId);
    let filter_1 = professor.worksFor;
    let filter_2 = academy.professors;
    filter_1 = filter_1.filter((id) => id != academyId);
    filter_2 = filter_2.filter((id) => id != profId);
    professor.worksFor = filter_1;
    academy.professors = filter_2;
    professor.save();
    academy.save();
    res.status(201).json(professor);
  } catch (err) {
    return next(new HttpError(err));
  }
};
