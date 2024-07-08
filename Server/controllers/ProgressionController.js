const Progression = require("../models/AppSchemas/Progression");
const Student = require("../models/AppSchemas/Student");
const Training = require("../models/AppSchemas/Training");
const HttpError = require("../models/HttpError/ErrorModel");
const Professor = require("../models/AppSchemas/Professor");
exports.getSpecProgression = async (req, res, next) => {
  const { trainingId, studentId } = req.params;
  try {
    const specProg = await Progression.find({ trainingId, studentId });
    if (specProg[0].studentId == studentId) {
      res.status(200).json(specProg[0]);
    } else {
      return next(new HttpError("Une telle analogie n'existe pas..."));
    }
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getProgressionInMyTrainings = async (req, res, next) => {
  const profId = req.user.id;
  try {
    const concernedProf = await Professor.findById(profId);
    const writtenTrainings = concernedProf.trainingsList;
    const progressions = [];
    for (let i = 0; i < writtenTrainings.length; ++i) {
      const concernedProgression = await Progression.find({
        trainingId: writtenTrainings[i],
      });
      if (concernedProgression[i]) progressions.push(concernedProgression[0]);
    }
    const usefulReturn = [];
    for (let i = 0; i < progressions.length; ++i) {
      console.log("TRAINING ID : ");
      console.log(progressions[i].trainingId);
      const concernedTraining = await Training.findById(
        progressions[i].trainingId
      );
      const concernedStudent = await Student.findById(
        progressions[i].studentId
      );
      const trainingName = concernedTraining.name;
      const profile = concernedStudent.profilePicture;
      const fullName =
        concernedStudent.firstName + " " + concernedStudent.lastName;
      let startDate = progressions[i].createdAt;
      startDate = startDate.toString();
      const progression = progressions[i].progression;
      const label = progression
        ? progression < 100
          ? "en cours"
          : "terminée"
        : "non commencée";
      const type =
        label == "inactive"
          ? "warning"
          : label == "completed"
          ? "success"
          : "danger";
      usefulReturn.push({
        name: trainingName,
        profile,
        fullName,
        start: startDate,
        progress: { min: progression, max: 100 },
        status: { label, type },
        bg: profile,
      });
    }
    res.status(201).json(usefulReturn);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.updateProgression = async (req, res, next) => {
  let { studentId, trainingId, step, nextChap, thisChap } = req.params;
  step = Number(step);
  if (nextChap == "last") {
    nextChap = `/view-quiz/${trainingId}`;
  }
  try {
    let prog;
    const concernedProgression = await Progression.find({ studentId });
    if (concernedProgression.length) {
      for (let i = 0; i < concernedProgression.length; i++) {
        if (concernedProgression[i].trainingId == trainingId) {
          prog = concernedProgression[i];
          if (!prog.completedChaps.includes(thisChap)) {
            prog.stopChap = nextChap;
            let currentProgression = prog.progression;
            currentProgression += step;
            if (currentProgression - Math.floor(currentProgression) >= 0.5) {
              currentProgression = Math.floor(currentProgression) + 1;
            } else {
              currentProgression = Math.floor(currentProgression);
            }
            if (currentProgression >= 97) {
              currentProgression = 100;
            }
            prog.progression = currentProgression;
            prog.completedChaps.push(thisChap);
          }
          prog.save();
          break;
        }
      }
      res.status(201).json(prog);
    } else {
      return next(new HttpError("Pas de progression relative à ces inputs.."));
    }
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getComChaps = async (req, res, next) => {
  const { studentId, trainingId } = req.params;
  try {
    const prog = await Progression.find({ studentId });
    let wantedProg = null;
    for (let i = 0; i < prog.length; ++i) {
      if (prog[i].trainingId == trainingId) {
        wantedProg = prog[i];
      }
    }
    if (!wantedProg) {
      return next(new HttpError("Introuvable !! "));
    }
    res.status(200).json(wantedProg.completedChaps);
  } catch (err) {
    return next(new HttpError(err));
  }
};
