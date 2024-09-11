import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export const useReadTraining = () => {
  const { trainingID, chapterID } = useParams();
  const [training, setTraining] = useState(null);
  const [courses, setCourses] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [chapter, setChapter] = useState(null);
  const [profTrainings, setProfTrainings] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // État de chargement

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Début du chargement
      try {
        const courseResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/courses/getCoursesByTraining/${trainingID}`
        );
        const chaptersResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/chapsFromTraining/${trainingID}`
        );
        const trainingResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${trainingID}`
        );

        const singleChapterResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getChapter/${chapterID}`
        );

        setCourses(courseResponse.data);
        setChapters(chaptersResponse.data);
        setTraining(trainingResponse.data);
        setChapter(singleChapterResponse.data);

        // Fetch professor trainings after training is set
        if (trainingResponse.data && trainingResponse.data.providerProf) {
          const profTrainingsResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/trainings/getTrainingsByProfessorId/${trainingResponse.data.providerProf}`
          );
          setProfTrainings(profTrainingsResponse.data);
        }
      } catch (err) {
        toast.error(
          "Une erreur est survenue lors de la récupération des données."
        );
        console.log(err);
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };

    fetchData();
  }, [trainingID, chapterID]);

  // Regroupement des chapitres par cours
  const groupedChapters = courses.map((course) => ({
    ...course,
    chapters: chapters.filter((chapter) =>
      course.chapters.includes(chapter._id)
    ),
  }));

  return {
    trainingID,
    chapterID,
    training,
    courses,
    chapters,
    groupedChapters,
    chapter,
    profTrainings,
    isLoading, // Retourner l'état de chargement
  };
};