const Student = require("../models/AppSchemas/Student");
const Training = require("../models/AppSchemas/Training");
const HttpError = require("../models/HttpError/ErrorModel");
const Enrollement = require("../models/AppSchemas/Enrollment");
const Academy = require("../models/AppSchemas/Academy");
const Professor = require("../models/AppSchemas/Professor");
const Chapter = require("../models/AppSchemas/Chapter");
const Comment = require("../models/AppSchemas/Comment");
const Course = require("../models/AppSchemas/Course");
const Progression = require("../models/AppSchemas/Progression");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.registerStudent = async (req, res, next) => {
  try {
    console.log("Corps de la requette : ");
    console.log(req.body); 
    const { firstname, lastname, email, password, password2, profilePicture } =
      req.body;
    if (!firstname.trim() || !lastname.trim() || !email.trim() || !password) {
      console.log("firstname : ");
      console.log(firstname);
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent , catch(registerStudent)",
          422
        )
      );
    }
    const newMail = email.toLowerCase();
    const emailExists = await Student.findOne({ email: newMail });
    if (emailExists) {
      return next(
        new HttpError(
          "Cet email est déja utilisé par un autre étudiant !"
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
    let newStudent;
    if (profilePicture) {
      newStudent = await Student.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
        profilePicture: profilePicture,
      });
    } else {
      newStudent = await Student.create({
        firstName: firstname,
        lastName: lastname,
        email: newMail,
        password: hashedPass,
      });
    }
    res.status(201).json(`Etudiant ${newStudent.email} Ajouté`);
  } catch (error) {
    console.log(error);
    return next(
      new HttpError(
        "Inscription de l'etudiant a echoué",
        422
      )
    );
  }
};
exports.loginStudent = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(
        new HttpError(
          "Veuillez insérer les champs nécéssaires à la connexion , (loginStudent)",
          422
        )
      );
    }
    const newEmail = email.toLowerCase();
    const student = await Student.findOne({ email: newEmail });
    if (!student) {
      return next(
        new HttpError(
          "L'email entré ne convient aucune ressource existante !",
          422
        )
      );
    }
    const comparePass = await bcrypt.compare(password, student.password);
    if (!comparePass) {
      return next(new HttpError("Mot de passe incorrecte !", 422));
    }
    // login réussie : GENERAION D'UN TOKEN :
    const { _id: id, firstName, lastName } = student; // : ici est "as"
    const fullName = firstName + " " + lastName;
    const token = jwt.sign(
      { id, fullName, entity: "student" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ token, id, fullName, entity: "Student" });
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
exports.getStudent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).select("-password");
    if (!student) {
      return next(new HttpError("Ressource introuvable !", 404));
    }
    res.status(200).json(student);
  } catch (error) {
    return next(new HttpError(error, 500));
  }
};
exports.editStudent = async (req, res, next) => {
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
  console.log(req.body);
  if (!firstName || !lastName || !email || !currentPassword) {
    return next(new HttpError("Données nécéssaires qui manquent !", 400));
  }
  try {
    const lowerMail = email.toLowerCase();
    const prevStudent = await Student.findOne({ email: lowerMail });
    if (prevStudent && prevStudent._id != id) {
      return next(
        new HttpError("Cet email est déja utilisé par un autre utilisateur : ")
      );
    }
    const student = await Student.findById(id);
    // additional test ... (meaningless)
    const match = await bcrypt.compare(currentPassword, student.password);
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
        newInfo = await Student.findByIdAndUpdate(
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
        newInfo = await Student.findByIdAndUpdate(
          id,
          { firstName, lastName, password: hashedNewPass, email: lowerMail },
          { new: true }
        );
      }
    } else {
      if (newProfilePicture) {
        newInfo = await Student.findByIdAndUpdate(
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
        newInfo = await Student.findByIdAndUpdate(
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
exports.sendDemand = async (req, res, next) => {
  const { trainingId } = req.params;
  const { studentId } = req.body;
  let match = false;
  try {
    const exists = await Enrollement.find({ trainingId });
    if (!exists.length) {
      const enrollment = await Enrollement.create({ trainingId, studentId });
      res.status(201).json("env");
    } else {
      for (let i = 0; i < exists.length; i++) {
        if (exists[i].studentId == studentId && !exists[i].answered) {
          match = true;
          break;
        }
      }
      if (match) {
        res.status(201).json("dj");
      } else {
        const enrollment = await Enrollement.create({ trainingId, studentId });
        res.status(201).json("env");
      }
    }
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getCurrentStudentFollowedTrainings = async (req, res, next) => {
  const id = req.user.id;
  try {
    const concerenedStudent = await Student.findById(id);
    const followedTrainings = concerenedStudent.followedTrainings;
    let folTraings = [];
    for (let i = 0; i < followedTrainings.length; i++) {
      const training = await Training.findById(followedTrainings[i]);
      folTraings.push(training);
    }
    res.status(201).json(folTraings);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getStudentsInTheAcademy = async (req, res, next) => {
  const respId = req.user.id;
  try {
    const concernedResp = await Professor.findById(respId);
    const academyId = concernedResp.responsableFor;
    const concernedAcademy = await Academy.findById(academyId);
    const studentsMap = {};
    for (let i = 0; i < concernedAcademy.trainings.length; ++i) {
      const concernedTraining = await Training.findById(
        concernedAcademy.trainings[i]
      );
      for (let j = 0; j < concernedTraining.subscribers.length; ++j) {
        const studentId = concernedTraining.subscribers[j];
        studentsMap[studentId] = await Student.findById(studentId);
      }
    }
    const subs = Object.values(studentsMap);
    let ret = [];
    for (let i = 0; i < subs.length; ++i) {
      const id = subs[i]._id;
      const name = subs[i].firstName + " " + subs[i].lastName;
      const avatar = subs[i].profilePicture;
      const email = subs[i].email;
      const branch = subs[i].branch;
      const Cycle = subs[i].cycle;
      ret.push({
        id,
        name,
        avatar,
        email,
        branch: branch ? branch : "Encore en cycle préparatoire",
        Cycle,
        respId,
      });
    }
    res.status(201).json(ret);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// protected !!
exports.deleteAcess = async (req, res, next) => {
  const { studentId } = req.params;
  const respId = req.user.id;
  try {
    const resp = await Professor.findById(respId);
    const academy = await Academy.findById(resp.responsableFor);
    const academyTrainings = academy.trainings;
    const concernedStudent = await Student.findById(studentId);
    const trList = concernedStudent.followedTrainings;
    // deleting comments on this academy chaps :
    const comments = await Comment.find({ studentId });
    for (let i = 0; i < comments.length; ++i) {
      const chapter = await Chapter.findById(comments[i].elementId);
      const course = await Course.findById(chapter.courseId);
      const training = await Training.findById(course.trainingId);
      const ac_ = await Academy.findById(training.academyId);
      if (ac_._id == academy._id) {
        comments[i].deleteOne();
      }
    }
    // deleting student Id from all this academy courses :
    for (let i = 0; i < trList.length; ++i) {
      const training = await Training.findById(trList[i]);
      const nwLis = training.subscribers.filter((id) => id != studentId);
      training.subscribers = nwLis;
      training.save();
    }
    // deleting academy trainings from the student followed trainings :
    const nwList = trList.filter((id) => !academyTrainings.includes(id));
    concernedStudent.followedTrainings = nwList; // SAVE STUDENT.
    // deleting the student's Enrollments related to this academy :
    const conEnrs = await Enrollement.find({ studentId });
    for (let i = 0; i < conEnrs.length; ++i) {
      const training = await Training.findById(conEnrs[i].trainingId);
      const trainAcd = training.academyId;
      if (trainAcd == academy._id) {
        await conEnrs[i].deleteOne();
      }
    }
    // deleting the student's progressions in the
  } catch (err) {
    return next(new HttpError(err));
  }
};
