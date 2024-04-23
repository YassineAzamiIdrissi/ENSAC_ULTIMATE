const Student = require("../models/AppSchemas/Student");
const Training = require("../models/AppSchemas/Training");
const Academy = require("../models/AppSchemas/Academy");
const Professor = require("../models/AppSchemas/Professor");
const HttpError = require("../models/HttpError/ErrorModel");
const Enrollement = require("../models/AppSchemas/Enrollment");
exports.deleteEnrollment = async (req, res, next) => {
  const id = req.params.id;
  try {
    const concernedEnrollment = await Enrollement.findById(id);
    const trainingId = concernedEnrollment.trainingId;
    const studentId = concernedEnrollment.studentId;

    const training = await Training.findById(trainingId);
    const student = await Student.findById(studentId);

    const currentSubs = training.subscribers;
    let newSubs = currentSubs.filter((subId) => subId != studentId);
    training.subscribers = newSubs;
    training.save();

    const currentFollowings = student.followedTrainings;
    let newFollowings = currentFollowings.filter(
      (followingId) => followingId != trainingId
    );
    student.followedTrainings = newFollowings;
    student.save();

    await Enrollement.findByIdAndDelete(id);
    res.status(201).json("Enrollement supprimé avec succés !");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllEnrolls = async (req, res, next) => {
  try {
    const all = await Enrollement.find();
    res.status(201).json(all);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getNotifEnrolls = async (req, res, next) => {
  const currentProfId = req.user.id;
  try {
    const respo = await Professor.findById(currentProfId);
    const concernedAcademy = await Academy.findById(respo.responsableFor);
    const trainingsInAcademy = concernedAcademy.trainings;
    const allEnrolls = await Enrollement.find();
    const criticalEnrs = [];
    for (let i = 0; i < allEnrolls.length; ++i) {
      if (
        trainingsInAcademy.includes(allEnrolls[i].trainingId) &&
        !allEnrolls[i].read
      ) {
        criticalEnrs.push(allEnrolls[i]);
      }
    }
    res.status(201).json(criticalEnrs);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.readOwnDemands = async (req, res, next) => {
  const { currentProfId } = req.params;
  try {
    const respo = await Professor.findById(currentProfId);
    const concernedAcademy = await Academy.findById(respo.responsableFor);
    const trainingsInAcademy = concernedAcademy.trainings;
    const allEnrolls = await Enrollement.find();
    const criticalEnrs = [];
    for (let i = 0; i < allEnrolls.length; ++i) {
      if (
        trainingsInAcademy.includes(allEnrolls[i].trainingId) &&
        !allEnrolls[i].read
      ) {
        console.log("PUSH Happened ");
        criticalEnrs.push(allEnrolls[i]);
      }
    }
    const newCriticalEnrs = criticalEnrs.filter(async (enroll) => {
      return await enroll.updateOne({ read: true }, { new: true });
    });
    // jst pour débogagee :
    console.log(newCriticalEnrs);
    res.status(201).json([]);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getNonAnsweredDemands = async (req, res, next) => {
  const currentProfId = req.user.id;
  try {
    const respo = await Professor.findById(currentProfId);
    const concernedAcademy = await Academy.findById(respo.responsableFor);
    const trainingsInAcademy = concernedAcademy.trainings;
    const allEnrolls = await Enrollement.find();
    const criticalEnrs = [];
    for (let i = 0; i < allEnrolls.length; ++i) {
      if (
        trainingsInAcademy.includes(allEnrolls[i].trainingId) &&
        !allEnrolls[i].answered
      ) {
        criticalEnrs.push(allEnrolls[i]);
      }
    }
    res.status(201).json(criticalEnrs);
  } catch (err) {
    return next(new HttpError(err));
  }
};
