const Post = require("../models/AppSchemas/Post");
const Professor = require("../models/AppSchemas/Professor");
const Admin = require("../models/AppSchemas/Admin");
const Student = require("../models/AppSchemas/Student");
const PostComment = require("../models/AppSchemas/PostComment");
const HttpError = require("../models/HttpError/ErrorModel");
const PostReaction = require("../models/AppSchemas/PostReaction");
const { connections } = require("mongoose");

exports.addNewPost = async (req, res, next) => {
  const { caption, picture, userId, userName, entity } = req.body;

  //Oublier le fonctionnement
  // const { id, entity } = req.user;
  try {
    // let concernedUser;
    // let userName;
    // const UserEntities = {
    //   professor: Professor,
    //   student: Student,
    //   admin: Admin,
    // };
    // const User = UserEntities[entity];

    // if (entity == "professor") {
    //   concernedUser = await Professor.findById(id);
    //   userName = concernedUser.firstName + " " + concernedUser.lastName;
    // } else if (entity == "student") {
    //   concernedUser = await Student.findById(id);
    //   userName = concernedUser.firstName + " " + concernedUser.lastName;
    // } else {
    //   concernedUser = await Admin.findById(id);
    //   userName = concernedUser.firstName + " " + concernedUser.lastName;
    // }
    const savedPost = await Post.create({
      userId,
      userName,
      caption,
      picture,
      userType: entity,
    });
    res.status(201).json(savedPost);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à l'essaie d'ajouter un nouveau post.."
      )
    );
  }
};
exports.updatePost = async (req, res, next) => {
  const { postId } = req.params;
  const { caption, image } = req.body;
  const { id } = req.user;
  try {
    const concernedPost = await Post.findById(postId);
    if (concernedPost.userId !== id) {
      return next(new HttpError("Action refusée !", 403));
    } else {
      concernedPost.caption = caption;
      concernedPost.image = image;
      concernedPost.save();
    }
    res.status(201).json(concernedPost);
  } catch (err) {
    return next(
      new HttpError(
        "une erreur est survenue à l'essaie de commenter un nouveau post.."
      )
    );
  }
};
exports.deletePost = async (req, res, next) => {
  const { id } = req.user;
  const { postId } = req.params;
  let username;
  try {
    const concernedPost = await Post.findById(postId);
    username = concernedPost.userName;
    if (concernedPost.userId !== id) {
      return next(new HttpError("Action refusée !", 403));
    } else {
      await Post.findByIdAndDelete(postId);
    }
    res
      .status(200)
      .json(
        "Post portant l'id " + postId + " par " + username + " est supprimé"
      );
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getAllMyPosts = async (req, res, next) => {
  const { id } = req.user;
  try {
    const allPosts = await Post.find({ userId: id });
    res.status(200).json(allPosts);
  } catch (err) {
    return next(
      new HttpError(
        "Une erreur est survenue à l'essaie de lire les posts de l'utilisateur " +
          id
      )
    );
  }
};
exports.getAllPosts = async (req, res, next) => {
  try {
    // Récupérer tous les posts dans la collection "Post"
    //trier dans l'ordre decroissant

    const allPosts = await Post.find().sort({ createdAt: -1 });

    // Vérifier si des posts existent
    if (!allPosts || allPosts.length === 0) {
      return res.status(404).json({ message: "Aucun post trouvé" });
    }

    // Renvoie de la liste des posts
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à la tentative de récupérer les posts.",
        500
      )
    );
  }
};

exports.getPostsOfUser = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const allPosts = await Post.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur est survenue à l'essaie de lire les posts de l'utilisateur " +
          userId
      )
    );
  }
};
exports.getTimeLine = async (req, res, next) => {
  const { id, entity } = req.user;
  try {
    const UserEntities = {
      professor: Professor,
      student: Student,
      admin: Admin,
    };
    const User = UserEntities[entity];
    let allPosts = [];
    let flag = false;
    const concernedUser = await User.findById(id);
    for (let i = 0; i < concernedUser.followers.length; ++i) {
      const followerEntity = concernedUser.followers[i].split(" ")[1];

      const followerId = concernedUser.followers[i].split(" ")[0];
      console.log("HEEEEEEEEERE :::::: ");
      console.log(followerId);
      const Follower = UserEntities[followerEntity];
      const followerDoc = await Follower.findById(followerId);
      const followerPosts = await Post.find({ userId: followerDoc._id });
      allPosts = [...allPosts, ...followerPosts];
    }
    // concernedUser.followings.forEach(async (following, index) => {
    //   const followingEntity = following.split(" ")[1];
    //   const followindId = following.split(" ")[0];
    //   if (
    //     concernedUser.followers.includes(followindId + " " + followingEntity)
    //   ) {
    //     flag = true;
    //     console.log("THAT CASE//////////");
    //     return;
    //   }
    //   const Following = UserEntities[followingEntity];
    //   const followingDoc = await Following.findById(followindId);
    //   const followingPosts = await Post.find({
    //     userId: followingDoc._id.toString(),
    //   });
    //   allPosts = [...allPosts, ...followingPosts];
    //   if (index == concernedUser.followings.length - 1) {
    //     res.status(200).json(allPosts);
    //     return;
    //   }
    // });
    for (let i = 0; i < concernedUser.followings.length; ++i) {
      let following = concernedUser.followings[i];
      const followingEntity = following.split(" ")[1];
      const followindId = following.split(" ")[0];
      if (
        concernedUser.followers.includes(followindId + " " + followingEntity)
      ) {
        continue;
      }
      const Following = UserEntities[followingEntity];
      const followingDoc = await Following.findById(followindId);
      const followingPosts = await Post.find({
        userId: followingDoc._id.toString(),
      });
      allPosts = [...allPosts, ...followingPosts];
    }
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur se produisait à l'essaie de lire le fil d'actualité.."
      )
    );
  }
};
// réagir à un certain post :::::
exports.reactToPost = async (req, res, next) => {
  const { id, entity } = req.user;
  const { postId } = req.params;
  const { reaction } = req.body;
  try {
    const userEntities = {
      professor: Professor,
      student: Student,
      admin: Admin,
    };
    const User = userEntities[entity];
    const concernedUser = await User.findById(id);
    const userName = concernedUser.firstName + " " + concernedUser.lastName;
    const picture = concernedUser.profilePicture;
    let newReaction;
    if (picture) {
      newReaction = await PostReaction.create({
        userName,
        postId,
        userId: id + " " + entity,
        reaction,
        picture,
      });
    } else {
      newReaction = await PostReaction.create({
        userName,
        postId,
        userId: id + " " + entity,
        reaction,
      });
      const reactionId = newReaction._id.toString();
      const concernerPost = await Post.findById(postId);
      concernerPost.reactions.push(reactionId);
      concernerPost.save();
      res.status(201).json(concernerPost);
    }
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur s'est produite à l'essaie de réagir au post " + postId
      )
    );
  }
};
// tous ce qui est relatifs au commentaires ::::
exports.commentPost = async (req, res, next) => {
  const { id, entity } = req.user;
  const { postId } = req.params;
  const { content } = req.body;
  try {
    const userEntities = {
      professor: Professor,
      admin: Admin,
      student: Student,
    };
    const User = userEntities[entity];
    const concernedUser = await User.findById(id);
    const picture = concernedUser.profilePicture;
    const username = concernedUser.firstName + " " + concernedUser.lastName;
    let newPostComment;
    if (picture) {
      newPostComment = await PostComment.create({
        content,
        postId,
        userId: id + " " + entity,
        userName: username,
        picture,
      });
    } else {
      newPostComment = await PostComment.create({
        content,
        postId,
        userId: id + " " + entity,
        userName: username,
      });
    }
    const newCommentId = newPostComment._id.toString();
    const concernedPost = await Post.findById(postId);
    concernedPost.comments.push(newCommentId);
    concernedPost.save();
    res.status(201).json(concernedPost);
  } catch (err) {
    console.log(err);
    return next(
      new HttpError(
        "Une erreur s'est produit à l'essaie d'ajouter un nouveau commentaire.. "
      )
    );
  }
};
exports.getAllCommentsOfSpecPost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const allComments = await PostComment.find({ postId });
    res.status(200).json(allComments);
  } catch (err) {
    console.log(err);
    console.log(
      "Une erreur est survenue à la tentative de lire les commentaires du post portant l'id " +
        postId
    );
  }
};

// NOTE BIEN ::: ON LAISSERA LE TRUC DE NOTIFICATION PAR LA FIN.. JUSTE APRES AVOIR FINI LES PAGES NECESSAIRES.. PAR CE QU'UNE NOTIFICATION A BESOIN D'UN LIEN DE REDIRECTION DANS LES ATTRIBUTS QUE NOUS NOUS DIPOSONS PAS ACTUELLEMENT (ROUTEAGES DANS LE FRONT)... ALORS LES CONTROLLEURS :
// reactToPost - commentPost SERONT AJUSTES PAR LA SUITE..
// AINSI QUE LE CONTROLEUR : - replyToComment AU NIVEAU PostCommentController.js
// ON ESSAIERA ENCORE DE CODER LA FONCTIONNALITE DE PARTAGER UN POSTE...
