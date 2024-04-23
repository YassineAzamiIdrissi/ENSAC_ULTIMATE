const Academy = require("../models/AppSchemas/Academy");
const HttpError = require("../models/HttpError/ErrorModel");
const Training = require("../models/AppSchemas/Training");
// ce controlr sera uniquement utilisé via Postman (interface d'administration)
exports.addAcademy = async (req, res, next) => {
  try {
    const { name, picture, description, domain } = req.body;
    if (!name.trim() || !description.trim() || !domain.trim()) {
      return next(
        new HttpError(
          "Des données nécéssaires qui manquent , catch(addAcademy !)",
          422
        )
      );
    }
    const lowerName = name.toLowerCase();
    const lowerDesc = description.toLowerCase();
    const academyExists = await Academy.findOne({ name: lowerName });
    if (academyExists) {
      return next(
        new HttpError(
          "Le nom de cette Académie correspond déja à une autre académie existante !"
        )
      );
    }
    let newAcademy;
    if (picture) {
      newAcademy = await Academy.create({
        name: lowerName,
        picture,
        description: lowerDesc,
        domain,
      });
    } else {
      newAcademy = await Academy.create({
        name: lowerName,
        description: lowerDesc,
        domain,
      });
    }
    res.status(201).json(newAcademy);
  } catch (error) {
    return next(
      new HttpError("l'ajout de l'académie a echoué, catch(addAcademy)", 422)
    );
  }
};
exports.getAcademy = async (req, res, next) => {
  const id = req.params.id;
  try {
    const concernedAcademy = await Academy.findById(id);
    if (!concernedAcademy) {
      return next(
        new HttpError("Aucune ressource qui correspond à cette académie !")
      );
    }
    res.status(201).json(concernedAcademy);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllAcademies = async (req, res, next) => {
  console.log("THIS IS THE CURRENT CONTROLLER");
  try {
    const allAcademies = await Academy.find();
    console.log(allAcademies);
    res.status(201).json(allAcademies);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAcademyIdByName = async (req, res, next) => {
  const { name } = req.params;
  try {
    const concernedAcademy = await Academy.find({ name });
    res.status(201).json(concernedAcademy[0]._id);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAcademyByOneTrainingId = async (req, res, next) => {
  const { trainingId } = req.params;
  try {
    const concernedTraining = await Training.findById(trainingId);
    const concernedAcademy = await Academy.findById(
      concernedTraining.academyId
    );
    res.status(201).json(concernedAcademy.name);
  } catch (err) {
    return next(new HttpError(err));
  }
};
