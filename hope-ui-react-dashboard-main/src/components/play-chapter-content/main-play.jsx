import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Grid,
  Button,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CommentIcon from "@mui/icons-material/Comment";
import DownloadIcon from "@mui/icons-material/Download";
import AvatarPh from "../../profile/profile-user.png";
import Bg from "../../profile/profile-bg.png";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ArrowBack, PreviewOutlined, Star } from "@mui/icons-material";
import DisplayComment from "./display-comment";
import CommentChapter from "./comment-chapter";
import Infos from "./infos";
import SensorOccupiedTwoToneIcon from "@mui/icons-material/SensorOccupiedTwoTone";
import ForumTwoToneIcon from "@mui/icons-material/ForumTwoTone";
import Plus from "./plus";
import { useReadTraining } from "../../hook/use-read-training";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Empty from "../../assets/empty-animation.json";
import Lottie from "react-lottie";
import LoadBackdrop from "../../page/LoadBackdrop";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useCurrentUser } from "../../hook/use-user";
import QuizTwoToneIcon from "@mui/icons-material/QuizTwoTone";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Empty,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const buttonStyles = {
  marginRight: "10px",
  color: "gray",
  textTransform: "initial",
  borderRadius: "5px",
  border: "1px solid gray",
  transition: "all 0.2s ease-in", // Transition pour tous les changements
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "black",
    fontWeight: "bold",
    backgroundColor: "transparent",
    border: "1px solid black",
  },
};
const buttonStyles2 = {
  marginRight: "10px",
  color: "black",
  textTransform: "initial",
  borderRadius: "5px",
  border: "1px solid black",
  transition: "all 0.2s ease-in", // Transition pour tous les changements
  display: "flex",
  alignItems: "center",
  "&:hover": {
    color: "white",
    border: "none",
    background: "black",
  },
};
/**
 * MainPlay est la page principale qui affiche un chapitre d'un cours.
 * Elle contient un lecteur multimédia, des commentaires, des téléchargements
 * et des informations sur le chapitre.
 * Elle appelle les fonctions de lecture des commentaires, de mise à jour de la
 * progression du chapitre et de passage au chapitre suivant.
 * @returns {JSX.Element} La page principale qui affiche un chapitre d'un cours.
 */
const MainPlay = () => {
  const [value, setValue] = React.useState("1");
  const [commentsList, setCommentsList] = useState([]);
  const [extObject, setExtObject] = useState(null);
  const [progression, setProgression] = useState(null);
  const [compChaps, setCompChaps] = useState(null);
  const navigate = useNavigate();
  const { chapterID, trainingID } = useParams();
  console.log(trainingID);

  //LES COMMENTAIRES
  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/comments/getAllCommentsOfChap/${chapterID}`
        );
        setCommentsList(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de récup. les commentaires d'un chapitre spec"
        );
        // console.log(err);
      }
    };
    fetchAllComments();
  }, [commentsList]);
  console.log("extObject : ", extObject);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { chapter, training, profTrainings, isLoading } = useReadTraining();
  const { currentUser } = useCurrentUser();
  const studentId = currentUser?.id;
  const entity = currentUser?.entity;

  useEffect(() => {
    const fetchPrevNext = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getPrevNext/${chapterID}`
        );
        setExtObject(response.data);
      } catch (err) {
        toast.error("Erreur lors de la récupération des chapitres");
        console.log(err);
      }
    };
    fetchPrevNext();
  }, [chapterID]);
  useEffect(() => {
    if (entity === "Student") {
      const fetchCompletedChaps = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/progressions/getComChaps/${studentId}/${trainingID}`
          );
          setCompChaps(response.data);
        } catch (err) {
          toast.error("Erreur lors de la récupération des chapitres terminés");
          console.log(err);
        }
      };
      fetchCompletedChaps();
    }
  }, [studentId, trainingID, entity]);

  useEffect(() => {
    if (entity === "Student") {
      const getProgression = async () => {
        try {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/progressions/getSpecProgression/${trainingID}/${studentId}`
          );
          setProgression(response.data);
        } catch (err) {
          toast.error("Erreur lors de la récupération de la progression");
          console.log(err);
        }
      };
      getProgression();
    }
  }, [studentId, trainingID, entity]);

  const handleProgress = async () => {
    try {
      const count = extObject.length;
      const step = (1 / count) * 100;
      await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/progressions/updateProgression/${studentId}/${trainingID}/${step}/${extObject.next}/${chapterID}`
      );
    } catch (err) {
      toast.error("Erreur lors de la mise à jour de la progression");
      console.log(err);
    }
  };

  // Fonction pour passer au chapitre précédent
  const moveBack = () => {
    navigate(`/training/${trainingID}/chapter/${extObject.prev}`);
    window.location.reload(); // Forcer un rechargement
  };

  // Fonction pour passer au chapitre suivant
  const moveForward = () => {
    navigate(`/training/${trainingID}/chapter/${extObject.next}`);
    if (entity === "Student") {
      handleProgress();
    }
    toast.success("Bravo ! Chapitre terminé !");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  // Passer au quiz
  const goExam = () => {
    navigate(`/view-quiz/${trainingID}`);
  };

  // Filtrer la liste des trainings pour enlever celui qui correspond à l'ID spécifique
  const profOthersTrainings = profTrainings.filter(
    (item) => item._id !== training?._id
  );

  const views =
    chapter && typeof chapter.views === "string"
      ? chapter.views.split(".")[0]
      : String(chapter?.views || "");

  if (isLoading) return <LoadBackdrop open={isLoading} />;
  return (
    <Box
      sx={{
        marginLeft: "15px",
        mr: "30px",
        height: "auto",
        bgColor: "transparent",
      }}
    >
      {/* Vidéo/Lecteur Multimédia */}
      <Box
        component="div"
        sx={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <iframe
          src={chapter?.video}
          title="Video Player"
          style={{
            width: "100%",
            height: "400px",
            border: "none",
            objectFit: "fill",
          }}
          allowFullScreen
        />
      </Box>

      {/* Section Commentaires et Téléchargements */}
      <Box
        sx={{
          bgcolor: "#FFF",
          padding: "10px 0 10px 0",
          background: "#F5F7FA",
        }}
      >
        <Stack direction="row" spacing={3} alignItems="center" sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            {chapter?.title}
          </Typography>
          <Box display="flex" alignItems="center">
            <ForumTwoToneIcon sx={{ marginRight: "8px" }} />
            <Typography variant="body2">
              {commentsList.length} Comments
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <SensorOccupiedTwoToneIcon sx={{ marginRight: "8px" }} />
            <Typography variant="body2">{views} Vue(s)</Typography>
          </Box>
        </Stack>

        {/* TABS  */}
        <Box sx={{ width: "100%", bgColor: "transparent" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 0.5,
                borderColor: "divider",
                bgColor: "transparent",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <TabList onChange={handleChange}>
                <Tab
                  label="Infos"
                  value="1"
                  sx={{ textTransform: "initial" }}
                />
                <Tab
                  label="Commentaires"
                  value="2"
                  sx={{ textTransform: "initial" }}
                />
                {/* <Tab
                  label="Playlist"
                  value="3"
                  sx={{ textTransform: "initial" }}
                />
                <Tab
                  label="Auteur"
                  value="4"
                  sx={{ textTransform: "initial" }}
                /> */}
                <Tab label="Plus" value="5" sx={{ textTransform: "initial" }} />
              </TabList>

              <Box
                sx={{
                  marginLeft: "15px",
                  mr: "30px",
                  mb: "5px",
                  height: "auto",
                  display: "flex",
                }}
              >
                {/* Bouton Précédent */}
                {extObject && extObject.prev != "first" && (
                  <Button
                    onClick={moveBack}
                    sx={{
                      ...buttonStyles,
                      "&:hover .icon": {
                        transform: "translateX(-10px)", // Déplacement vers la gauche
                      },
                    }}
                  >
                    <ArrowBack
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease",
                        fontSize: "30px",
                      }}
                    />
                    <span>Précédent</span>
                  </Button>
                )}

                {/* Bouton Suivant */}
                {extObject && extObject.next != "last" && (
                  <Button
                    onClick={moveForward}
                    sx={{
                      ...buttonStyles,
                      "&:hover .icon": {
                        transform: "translateX(10px)", // Déplacement vers la droite
                      },
                    }}
                  >
                    <span>Suivant</span>
                    <ArrowForwardIcon
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease",
                        fontSize: "30px",
                      }}
                    />
                  </Button>
                )}

                {extObject && extObject.next === "last" && (
                  <Button
                    onClick={() => {
                      if (entity == "Student") {
                        handleProgress();
                      }
                      goExam();
                    }}
                    sx={buttonStyles2}
                  >
                    <span>Votre évaluation</span>
                    <QuizTwoToneIcon
                      className="icon"
                      sx={{
                        transition: "transform 0.3s ease",
                        fontSize: "30px",
                      }}
                    />
                  </Button>
                )}
              </Box>
            </Box>
            <TabPanel value="1">
              <Infos
                description={chapter?.content}
                niveau={training?.difficulty}
              />
            </TabPanel>
            <TabPanel
              value="2"
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                mb: "20px",
              }}
            >
              {/* Commentaires */}
              <Grid
                container
                spacing={2}
                sx={{ padding: "20px", position: "relative" }}
              >
                {/* Comment Section */}
                <Grid item xs={12} md={4}>
                  <Box
                    sx={{
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      textAlign: "start",
                      position: "sticky", // Utilisez sticky au lieu de fixed
                      top: "20px", // Ajustez cette valeur pour définir la position sticky
                    }}
                  >
                    <CommentChapter
                      setCommentsList={setCommentsList}
                      commentsList={commentsList}
                    />
                  </Box>
                </Grid>

                {/* Display Comments Section */}
                <Grid item xs={12} md={8}>
                  <Box>
                    {commentsList.length ? (
                      commentsList.map((review) => (
                        <DisplayComment key={review._id} comment={review} />
                      ))
                    ) : (
                      <Stack
                        direction={"column"}
                        justifyContent={"center"}
                        alignItems={"center"}
                        // bgcolor={"red"}
                        sx={{}}
                      >
                        <Lottie
                          options={defaultOptions}
                          width={"200px"}
                          height={"200px"}
                          // animationData={Empty}
                        />
                        <Typography variant="h6">
                          Aucun commentaire pour ce chapitre
                        </Typography>
                      </Stack>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            {/* <TabPanel value="3">Item Three</TabPanel>
            <TabPanel value="4">Item Four</TabPanel> */}
            <TabPanel
              value="5"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignContent: "center",
                // bgcolor: "blue",
                mr: "30px",
                width: "100%",
              }}
            >
              <Plus profTrainings={profOthersTrainings} />
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Box>
  );
};

export default MainPlay;
