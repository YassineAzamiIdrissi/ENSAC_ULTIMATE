const Course = require("../models/AppSchemas/Course");
const Training = require("../models/AppSchemas/Training");
const Chapter = require("../models/AppSchemas/Chapter");
const HttpError = require("../models/HttpError/ErrorModel");
// truc à gerer : une fois un cours est ajouté, on doit avoir une certaine séparation entre sa crétion et la création des chapitres...
exports.addCourseToTraining = async (req, res, next) => {
  const trainingId = req.params.trainingId;
  try {
    const { title } = req.body;
    if (!title) {
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent (addCourseToTraining)"
        )
      );
    }
    const existCourse = await Course.find({ title });
    if (existCourse.length && existCourse[0].trainingId == trainingId) {
      return next(
        new HttpError(
          "Attention, ce titre correspond dèja à un cours existant au sein de cette formation"
        )
      );
    }
    const newCourse = await Course.create({ title, trainingId });
    const concernedTraining = await Training.findById(trainingId);
    const currentCourses = concernedTraining.courses;
    let newCourses;
    if (!currentCourses.length) {
      newCourses = [newCourse._id];
    } else {
      newCourses = [...currentCourses, newCourse._id];
    }
    const newTraining = await Training.findByIdAndUpdate(
      trainingId,
      { courses: newCourses },
      { new: true }
    );
    res.status(201).json(newTraining);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getCourse = async (req, res, next) => {
  const courseId = req.params.courseId;
  try {
    const concernedCourse = await Course.findById(courseId);
    res.status(201).json(concernedCourse);
  } catch (err) {
    console.log(err);
    return next(new HttpError(err));
  }
};
exports.getCoursesByTraining = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const training = await Training.findById(trainingId);
    const courses = training.courses;
    let coursesList = [];
    for (let i = 0; i < courses.length; ++i) {
      const concernedCourse = await Course.findById(courses[i]);
      coursesList.push(concernedCourse);
    }
    res.status(201).json(coursesList);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.deleteCourse = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    // il faut : supprimer le cours. supprimer son Id du tableau de sa formation. supprimer les chapitres qui appartiennent à ce cours...
    const concernedCourse = await Course.findById(courseId);
    const trainingId = concernedCourse.trainingId;
    await Chapter.deleteMany({ courseId });
    await concernedCourse.deleteOne();
    const relatifTraining = await Training.findById(trainingId);
    let actualCourses = relatifTraining.courses;
    let newCourses = actualCourses.filter((item) => item != courseId);
    await relatifTraining.updateOne({ courses: newCourses });
    res.status(201).json("Course Deleted ");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.updateCourse = async (req, res, next) => {
  const { courseId } = req.params;
  const { title } = req.body;
  try {
    if (!title?.trim()) {
      return next(new HttpError("Veuillez insérer un nouveau titre "));
    }
    // petit test :
    const thisCourse = await Course.findById(courseId);
    const exists = await Course.find({ title });
    if (
      exists[0] &&
      exists[0].trainingId == thisCourse.trainingId &&
      exists._id != courseId
    ) {
      return next(
        new HttpError("Ce titre correspond déja à une ressource existante ")
      );
    }
    const updatedRssource = await Course.findByIdAndUpdate(
      courseId,
      { title },
      { new: true }
    );
    res.status(201).json(updatedRssource);
  } catch (err) {
    return next(new HttpError(err));
  }
};
