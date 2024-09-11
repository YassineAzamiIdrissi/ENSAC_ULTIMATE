const Training = require("../models/AppSchemas/Training");
const Academy = require("../models/AppSchemas/Academy");
const Course = require("../models/AppSchemas/Course");
const Chapter = require("../models/AppSchemas/Chapter");
const Enrollement = require("../models/AppSchemas/Enrollment");
const Professor = require("../models/AppSchemas/Professor");
const Student = require("../models/AppSchemas/Student");
const HttpError = require("../models/HttpError/ErrorModel");
// protégé par un mw..
exports.addTraining = async (req, res, next) => {
  const id = req.user.id;
  const {
    academyId,
    name,
    category,
    picture,
    video,
    difficulty,
    subtitle,
    description,
  } = req.body;
  try {
    if (
      !academyId.trim() ||
      !name.trim() ||
      !category.trim() ||
      !picture.trim() ||
      !video.trim() ||
      !difficulty.trim() ||
      !subtitle.trim() ||
      !description.trim()
    ) {
      return next(
        new HttpError("Données nécéssaires qui manquent !,(addTraining)")
      );
    }
    const existingTraining = await Training.find({ name });
    const existingId = existingTraining.academyId;
    if (existingTraining && existingId == academyId) {
      return next(
        new HttpError(
          "Cette formation porte le meme nom qu'une autre formation dans cette académie ! (AddTraining)"
        )
      );
    }
    const concernedAcademy = await Academy.findById(academyId);
    if (!concernedAcademy.professors.includes(id)) {
      return next(
        new HttpError(
          "Ce professeur ne peut pas ajouter une formation dans cette académie !!"
        )
      );
    }
    const newTraining = await Training.create({
      academyId,
      providerProf: id,
      name,
      category,
      picture,
      video,
      difficulty,
      subtitle,
      description,
    });
    const academy = await Academy.findById(academyId);
    const currentTrainings = academy.trainings;
    let newTrainings;
    if (!currentTrainings.length) {
      newTrainings = [newTraining._id];
    } else {
      newTrainings = [...currentTrainings, newTraining._id];
    }
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      {
        trainings: newTrainings,
      },
      { new: true }
    );
    const concernedProfessor = await Professor.findById(id);
    concernedProfessor.trainingsList.push(newTraining._id);
    concernedProfessor.save();
    res.status(201).json(newTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getTraining = async (req, res, next) => {
  const trainingId = req.params.id;
  try {
    const concernedTraining = await Training.findById(trainingId);
    res.status(201).json(concernedTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllTrainings = async (req, res, next) => {
  try {
    const allTrainings = await Training.find();
    res.status(201).json(allTrainings);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// ces deux contolrs servent à faire qlq configs, je les ai fait juste pour recifier une petite erreur que j'ai commit au niveau du controlr addTraining(tu n'est pas censé de les lire....)
exports.addToAcademyTraining = async (req, res, next) => {
  const academyId = req.params.academyId;
  const newTrainingId = req.body.trainingId;
  try {
    const concernedAcademy = await Academy.findById(academyId);
    const currentTrainings = concernedAcademy.trainings;
    let newTrainings;
    if (!currentTrainings.length) {
      newTrainings = [newTrainingId];
    } else {
      newTrainings = [...currentTrainings, newTrainingId];
    }
    console.log(newTrainings);
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      {
        trainings: newTrainings,
      },
      { new: true }
    );
    res.status(201).json(newAcademy);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.freeTrainingsFromAcademy = async (req, res, next) => {
  const academyId = req.params.academyId;
  try {
    const newAcademy = await Academy.findByIdAndUpdate(
      academyId,
      { trainings: [] },
      { new: true }
    );
    res.status(201).json(newAcademy);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// ce controleur est trop spécifique , je l'utilise dans le composant CourseSideBar pour formuler ce qu'on appel "room" (room : une voie virtuelle pour canaliser les notifications entre ses deux coté)en se basant sur les Id des responsables de l'académie qui a fournit ce cours :
exports.getRoomFromTraining = async (req, res, next) => {
  const trainingId = req.params.trainingId;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const academyId = concernedTraining.academyId;
    const concernedAcademy = await Academy.findById(academyId);
    const responsables = concernedAcademy.responsables;
    let room = "";
    for (let i = 0; i < responsables.length; i++) {
      room += responsables[i];
    }
    res.status(201).json(room);
  } catch (err) {
    return next(new HttpError(err));
  }
};
// Fetch des formations faites par le user actuel :
exports.getTrainingsByProf = async (req, res, next) => {
  const profId = req.user.id;
  try {
    const listOfTrainings = await Training.find({ providerProf: profId });
    res.status(201).json(listOfTrainings);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.deleteTraining = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const academyId = concernedTraining.academyId;
    const concernedAcademy = await Academy.findById(academyId);
    const coursesIds = concernedTraining.courses;
    // tous les cours de la dite formation seront supp. à la fin de cette boucle englobante...
    for (let i = 0; i < coursesIds.length; ++i) {
      const specCourse = await Course.findById(coursesIds[i]);
      // tous les chapitres seront supp. à la fin de cette boucle...
      for (let j = 0; j < specCourse.chapters.length; ++j) {
        await Chapter.findByIdAndDelete(specCourse.chapters[j]);
      }
      await Course.findByIdAndDelete(coursesIds[i]);
    }
    // Suppression des enrollements ayant l'id de ce training comme trainingId :
    await Enrollement.deleteMany({ trainingId });
    // Suppression des certifications :
    // code....
    await Training.findByIdAndDelete(trainingId);
    let trainingsList = concernedAcademy.trainings;
    let newList = trainingsList.filter((item) => item != trainingId);
    await Academy.findByIdAndUpdate(concernedAcademy._id, {
      trainings: newList,
    });
    res.status(201).json("Formation Supprimée avec succés ");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.updateTraining = async (req, res, next) => {
  const { trainingId } = req.params;
  const { name, category, difficulty, description, subtitle, picture, video } =
    req.body;
  if (
    !name?.trim() ||
    !category?.trim() ||
    !difficulty?.trim() ||
    !description?.trim() ||
    !subtitle?.trim()
  ) {
    return next(new HttpError("Des données nécéssaires qui manquent !"));
  }
  try {
    // petit test (si le nom donné correspond déja à une ressource existante dans la bd....)
    const thisTraining = await Training.findById(trainingId);
    const exists = await Training.find({ name });
    if (
      exists[0] &&
      thisTraining.academyId == exists[0].academyId &&
      exists[0]._id != trainingId
    ) {
      return next(
        new HttpError(
          "Attention ce nom correspond déja à une autre formation au sein de la meme académie..."
        )
      );
    }
    let newTraining;
    if (picture || video) {
      if (!video) {
        newTraining = await Training.findByIdAndUpdate(
          trainingId,
          {
            name,
            category,
            picture,
            difficulty,
            subtitle,
            description,
          },
          { new: true }
        );
        res.status(201).json(newTraining);
      } else {
        if (!picture) {
          newTraining = await Training.findByIdAndUpdate(
            trainingId,
            {
              name,
              category,
              video,
              difficulty,
              subtitle,
              description,
            },
            { new: true }
          );
          res.status(201).json(newTraining);
        } else {
          await Training.findByIdAndUpdate(
            trainingId,
            {
              name,
              category,
              video,
              picture,
              difficulty,
              subtitle,
              description,
            },
            { new: true }
          );
          res.status(201).json(newTraining);
        }
      }
    } else {
      newTraining = await Training.findByIdAndUpdate(
        trainingId,
        {
          name,
          category,
          difficulty,
          subtitle,
          description,
        },
        { new: true }
      );
      res.status(201).json(newTraining);
    }
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getNotRegisteredTrainings = async (req, res, next) => {
  const studentId = req.user.id;
  try {
    const concernedStudent = await Student.findById(studentId);
    const followedTrainings = concernedStudent.followedTrainings;
    const allTrainings = await Training.find();
    const criticalTrainings = allTrainings.filter(
      (training) => !followedTrainings.includes(training._id)
    );
    console.log("THOSE ARE CRITICAL TRAININGS : ");
    console.log(criticalTrainings);
    res.status(201).json(criticalTrainings);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.unfollowTraining = async (req, res, next) => {
  const { trainingId } = req.params;
  const { studentId } = req.body;
  if (!studentId) {
    return next(new HttpError("Etudiant concerné est introuvable", 403));
  }
  try {
    const concernedStudent = await Student.findById(studentId);
    const concernedTraining = await Training.findById(trainingId);
    const newFollowedTrainings = concernedStudent.followedTrainings.filter(
      (id) => id != trainingId
    );
    const newSubs = concernedTraining.subscribers.filter(
      (id) => id != studentId
    );
    concernedStudent.followedTrainings = newFollowedTrainings;
    concernedTraining.subscribers = newSubs;
    concernedTraining.save();
    const enrollment = await Enrollement.find({ studentId, trainingId });
    console.log("Here it is the enrollement : ");
    console.log(enrollment);
    const newEnrolls = concernedStudent.enrollments.filter(
      (id) => id != enrollment[0]._id
    );
    concernedStudent.enrollments = newEnrolls;
    concernedStudent.save();
    await Enrollement.findByIdAndDelete(enrollment[0]._id);
    res
      .status(201)
      .json(
        `${concernedStudent.firstName} n'est plus abonné à ${concernedTraining.name}`
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllChaptersFromTrainingId = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedTraining = await Training.findById(trainingId);
    let chaps = [];
    for (let i = 0; i < concernedTraining.courses.length; ++i) {
      const concernedCourse = await Course.findById(
        concernedTraining.courses[i]
      );
      for (let j = 0; j < concernedCourse.chapters.length; ++j) {
        const concernedChapter = await Chapter.findById(
          concernedCourse.chapters[j]
        );
        chaps.push(concernedChapter);
      }
    }
    res.status(201).json(chaps);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getFirstChapFromTraining = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const firstCourse = await Course.findById(concernedTraining.courses[0]);
    const first_chap_id = firstCourse.chapters[0];
    res.status(201).json(first_chap_id);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getLastChapterId = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const lastCourseId =
      concernedTraining.courses[concernedTraining.courses.length - 1];
    const lastCourse = await Course.findById(lastCourseId);
    res.status(201).json(lastCourse.chapters[lastCourse.chapters.length - 1]);
  } catch (err) {
    return next(new HttpError(err));
  }
};

exports.getTrainingsByProfessorId = async (req, res, next) => {
  const { professorId } = req.params; // On récupère l'ID du professeur à partir des paramètres de la requête

  try {
    const trainings = await Training.find({ providerProf: professorId });

    if (!trainings.length) {
      return next(new HttpError("Aucune formation trouvée pour ce professeur.", 404));
    }

    res.status(200).json(trainings);
  } catch (err) {
    return next(new HttpError("Erreur lors de la récupération des formations.", 500));
  }
};
