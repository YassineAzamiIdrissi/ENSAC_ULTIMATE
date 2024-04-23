const Progression = require("../models/AppSchemas/Progression");
const HttpError = require("../models/HttpError/ErrorModel");
exports.getSpecProgression = async (req, res, next) => {
  const { trainingId, studentId } = req.params;
  try {
    console.log("TRAINING ID : ");
    console.log(trainingId);
    console.log("STUDENT ID : ");
    console.log(studentId);
    const specProg = await Progression.find({ trainingId });
    console.log("CANDIDAT : ");
    console.log(specProg[0]);
    if (specProg[0].studentId == studentId) {
      res.status(200).json(specProg[0]);
    } else {
      return next(new HttpError("Une telle analogie n'existe pas..."));
    }
  } catch (err) {
    return next(new HttpError(err));
  }
};
