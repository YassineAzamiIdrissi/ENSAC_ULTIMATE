const Testimonial = require("../models/AppSchemas/Testimonial");
const Professor = require("../models/AppSchemas/Professor");
const Student = require("../models/AppSchemas/Student");
const HttpError = require("../models/HttpError/ErrorModel");

exports.addNewTestimonial = async (req, res, next) => {
  const { id, entity } = req.user;
  const { testimonial } = req.body;
  try {
    const userEntities = {
      student: Student,
      professor: Professor,
    };
    const User = userEntities[entity];
    const concernedUser = await User.findById(id);

    const personName = concernedUser.firstName + " " + concernedUser.lastName;
    const personImg = personName.profilePicture;
    const personPos =
      entity == "student" ? "student" : concernedUser.description;

    const newTestimonial = await Testimonial.create({
      personName,
      personImg,
      personPos,
      testimonial,
    });
    res.status(201).json(newTestimonial);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à l'essaie d'ajouter ce testimonial"
      )
    );
  }
};
