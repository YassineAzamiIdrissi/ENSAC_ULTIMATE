const Professor = require("../models/AppSchemas/Professor");
const Student = require("../models/AppSchemas/Student");
const Admin = require("../models/AppSchemas/Admin");
const HttpError = require("../models/HttpError/ErrorModel");
exports.followUser = async (req, res, next) => {
  const { toBeFollowed } = req.params;
  const { toBeFollowedEntity } = req.body;
  const { id, entity } = req.user;
  try {
    const UserEntities = {
      professor: Professor,
      student: Student,
      admin: Admin,
    };
    const User = UserEntities[entity];
    const FollowedEntity = UserEntities[toBeFollowedEntity];
    const concernedUser = await User.findById(id);
    const toBeFollowedUser = await FollowedEntity.findById(toBeFollowed);
    if (
      concernedUser.followings.includes(toBeFollowed + " " + toBeFollowedEntity)
    ) {
      return next(new HttpError("Ce compte est déja suivi ", 400));
    }
    concernedUser.followings.push(toBeFollowed + " " + toBeFollowedEntity);
    concernedUser.save();
    // autre side :::
    toBeFollowedUser.followers.push(id + " " + entity);
    toBeFollowedUser.save();
    res
      .status(200)
      .json(concernedUser.firstName + " suit " + toBeFollowedUser.firstName);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à la tentative de suivre ce compte.."
      )
    );
  }
};

exports.unfollowUser = async (req, res, next) => {
  const { id, entity } = req.user;
  const { toBeUnfollowed } = req.params;
  const { toBeUnfollowedEntity } = req.body;
  try {
    const UserEntities = {
      professor: Professor,
      student: Student,
      admin: Admin,
    };
    const User = UserEntities[entity];
    const concernedUser = await User.findById(id);
    const UnfollowedEntity = UserEntities[toBeUnfollowedEntity];
    const unfollowed = await UnfollowedEntity.findById(toBeUnfollowed);
    if (
      !concernedUser.followings.includes(
        toBeUnfollowed + " " + toBeUnfollowedEntity
      )
    ) {
      return next(new HttpError("Ce compte n'est pas déja suivi pour", 400));
    }
    const index_1 = concernedUser.followings.indexOf(
      toBeUnfollowed + " " + toBeUnfollowedEntity
    );
    concernedUser.followings.splice(index_1, 1);
    concernedUser.save();
    // autre side ::::::
    const index_2 = unfollowed.followers.indexOf(id + " " + entity);
    unfollowed.followers.splice(index_2, 1);
    unfollowed.save();
    res
      .status(200)
      .json(concernedUser.firstName + " ne suit plus " + unfollowed.firstName);
  } catch (err) {
    console.log(err);
    return next(new HttpError(err));
  }
};
