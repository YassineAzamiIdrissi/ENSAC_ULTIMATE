const Chapter = require("../models/AppSchemas/Chapter");
const Course = require("../models/AppSchemas/Course");
const HttpError = require("../models/HttpError/ErrorModel");
exports.addChapterToCourse = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const { title, content, video } = req.body;
    if (!title.trim() || !content.trim() || !video.trim()) {
      return next(new HttpError("Données nécéssaires qui manquent !! "));
    }
    const exists = await Chapter.find({ title });
    if (exists[0] && exists[0].courseId == courseId) {
      return next(
        new HttpError(
          "Attention un chapitre portant ce titre existe déja dans cette formaion"
        )
      );
    }
    const newChapter = await Chapter.create({
      title,
      content,
      video,
      courseId,
    });
    const concernedCourse = await Course.findById(courseId);
    const currentChapters = concernedCourse.chapters;
    let newChapters;
    if (!currentChapters.length) {
      newChapters = [newChapter._id];
    } else {
      newChapters = [...currentChapters, newChapter._id];
    }
    const newCourse = await Course.findByIdAndUpdate(
      courseId,
      { chapters: newChapters },
      { new: true }
    );
    res.status(201).json(newCourse);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getChapter = async (req, res, next) => {
  const chapterId = req.params.chapterId;
  try {
    const concernedChapter = await Chapter.findById(chapterId);
    res.status(201).json(concernedChapter);
  } catch (err) {
    return next(new HttpError());
  }
};
exports.getChaptersByCourse = async (req, res, next) => {
  const { courseId } = req.params;
  try {
    const concernedCourse = await Course.findById(courseId);
    const chaptersWithin = concernedCourse.chapters;
    let chaps = [];
    for (let i = 0; i < chaptersWithin.length; i++) {
      const concernedChapter = await Chapter.findById(chaptersWithin[i]);
      chaps.push(concernedChapter);
    }
    res.status(201).json(chaps);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.deleteChapter = async (req, res, next) => {
  // il faut décrémenter la liste des chapitres dans le cours relatif... et puis on supprimera le chapitre en question.....
  const { chapterId } = req.params;
  try {
    const concernedChapter = await Chapter.findById(chapterId);
    const courseId = concernedChapter.courseId;
    const concernedCourse = await Course.findById(courseId);
    await Chapter.findByIdAndDelete(chapterId);
    const currentChaps = concernedCourse.chapters;
    let newChaps = currentChaps.filter((item) => item != chapterId);
    await Course.findByIdAndUpdate(courseId, { chapters: newChaps });
    res.status(201).json("Ressource supprimée avec succés ");
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.updateChapter = async (req, res, next) => {
  const { chapterId } = req.params;
  const { title, content, video } = req.body;
  if (!title?.trim() || !content?.trim()) {
    return next(new HttpError("Données nécéssaires qui manquent !! "));
  }
  try {
    const thisChap = await Chapter.findById(chapterId);
    const exists = await Chapter.find({ title });
    if (
      exists[0] &&
      exists[0]._id != chapterId &&
      exists[0].courseId == thisChap.courseId
    ) {
      return next(
        new HttpError(
          "Attention un chapitre avec ce titre est déja enregistré dans le meme cours..."
        )
      );
    }
    let newRessource;
    if (!video) {
      newRessource = await Chapter.findByIdAndUpdate(
        chapterId,
        {
          title,
          content,
        },
        { new: true }
      );
    } else {
      newRessource = await Chapter.findByIdAndUpdate(
        chapterId,
        { title, content, video },
        { new: true }
      );
    }
    res.status(201).json(newRessource);
  } catch (err) {
    return next(new HttpError(err));
  }
};
exports.getTrainingIdFromChapterId = async (req, res, next) => {
  const { chapterId } = req.params;
  try {
    const chapter = await Chapter.findById(chapterId);
    const courseId = chapter.courseId;
    const parentCourse = await Course.findById(courseId);
    const trainingId = parentCourse.trainingId;
    res.status(201).json(trainingId);
  } catch (err) {
    return next(new HttpError(err));
  }
};
