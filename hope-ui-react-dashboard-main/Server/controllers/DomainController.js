const Domain = require("../models/AppSchemas/Domain");
const Academy = require("../models/AppSchemas/Academy");
const Trainings = require("../models/AppSchemas/Training");
const HttpError = require("../models/HttpError/ErrorModel");
exports.getAllDomains = async (req, res, next) => {
  try {
    const allDomains = await Domain.find();
    res.status(201).json(allDomains);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllCategories = async (req, res, next) => {
  try {
    const allDomains = await Domain.find();
    const categoriesTable = [];
    for (let i = 0; i < allDomains.length; ++i) {
      for (let j = 0; j < allDomains[i].categories.length; ++j) {
        categoriesTable.push(allDomains[i].categories[j]);
      }
    }
    res.status(201).json(categoriesTable);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getTrainingsByDomain = async (req, res, next) => {
  const domain = req.params.domain;
  try {
    const domainDocumentTable = await Domain.find({ name: domain });
    const domainDocument = domainDocumentTable[0];
    const domain_id = domainDocument._id;
    const concernedAcademyTable = await Academy.find({ domain: domain_id });
    const concernedAcademy = concernedAcademyTable[0];
    const trainingsList = concernedAcademy.trainings;
    res.status(201).json(trainingsList);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getCategoriesByAcademy = async (req, res, next) => {
  const { name } = req.params;
  try {
    const concernedAcademy = await Academy.find({ name });
    const domainId = concernedAcademy[0].domain;
    const concernedDomain = await Domain.findById(domainId);
    res.status(201).json(concernedDomain.categories);
  } catch (err) {
    return next(new HttpError(err));
  }
};

/* const trainingObjects = trainingsList.map(async (training) => {
      const ret = await Trainings.findById(training);
      return ret;
    });*/
