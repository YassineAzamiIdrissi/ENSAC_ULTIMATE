const Certification = require("../models/AppSchemas/Certification");
const Training = require("../models/AppSchemas/Training");
const Academy = require("../models/AppSchemas/Academy");
const Mark = require("../models/AppSchemas/Mark");
const Quiz = require("../models/AppSchemas/Quiz");
const HttpError = require("../models/HttpError/ErrorModel");
const Student = require("../models/AppSchemas/Student");
exports.newCertif = async (req, res, next) => {
  const { studentId, trainingId } = req.body;
  try {
    const newCertif = await Certification.create({ studentId, trainingId });
    res.status(201).json(newCertif);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllMyCertifs = async (req, res, next) => {
  const studentId = req.user.id;
  try {
    const certifs = await Certification.find({ studentId });
    const concStudent = await Student.findById(studentId);
    const studentName = concStudent.firstName + " " + concStudent.lastName;
    // retrieving the mark ::
    const useRet = [];
    for (let i = 0; i < certifs.length; ++i) {
      const concTraining = await Training.findById(certifs[i].trainingId);
      const quiz = await Quiz.find({ trainingId: certifs[i].trainingId });
      const quiz_id = quiz[0]._id;
      const mark_ = await Mark.find({ quizId: quiz_id });
      const mark = mark_[0].mark;
      const trainingName = concTraining.name;
      const trainingPicture = concTraining.picture;
      const academyId = concTraining.academyId;
      const academy = await Academy.findById(academyId);
      const academyName = academy.name;
      const obj = {
        studentName,
        academyName,
        trainingName,
        trainingPicture,
        mark,
      };
      useRet.push(obj);
    }
    res.status(200).json(useRet);
  } catch (err) {
    return next(new HttpError(err));
  }
};
