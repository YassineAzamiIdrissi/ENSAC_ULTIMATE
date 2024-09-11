import React, { useEffect, useRef } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Chip,
  Divider,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import CompassCalibrationTwoToneIcon from "@mui/icons-material/CompassCalibrationTwoTone";
import MyLocationTwoToneIcon from "@mui/icons-material/MyLocationTwoTone";
import StarIcon from "@mui/icons-material/Star";
import Empty from "../social-media/Empty";
const formations = [
  {
    id: 1,
    name: "Introduction à JavaScript",
    category: "Développement Web",
    picture: "https://images.unsplash.com/photo-1581091870627-3a3c42ddf677",
    video:
      "https://media.istockphoto.com/id/1226413184/video/4k-programming-and-coding.mp4?s=mp4-640x640-is&k=20&c=Uu7sn3mivjmxgroqhndD678IyPV33OYT2jcaWFCSJH4=",
    rating: 4.8,
    difficulty: "Beginner",
  },
  {
    id: 2,
    name: "Conception UX/UI Avancée",
    category: "Design",
    picture: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
    video: "https://cdn.pixabay.com/video/2021/09/04/87560-601149847_tiny.mp4",
    rating: 4.6,
    difficulty: "Advanced",
  },
  {
    id: 3,
    name: "Les fondamentaux du réseau",
    category: "Informatique",
    picture: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    video:
      "https://media.istockphoto.com/id/1481135297/video/illustrative-3d-animation-of-neural-network-wide-view-concept-chatbot-artificial-intelligence.mp4?s=mp4-640x640-is&k=20&c=B4AcjfnxFzb4pkPjWV0M44dqXzG1toRXRkyfGXr-nTw=",
    rating: 5.0,
    difficulty: "Intermediate",
  },
  {
    id: 4,
    name: "Analyse de données avec Python",
    category: "Data Science",
    picture: "https://images.unsplash.com/photo-1559526324-593bc073d938",
    video:
      "https://media.istockphoto.com/id/1556253588/video/business-data-analytics-dashboard-animated-overlays.mp4?s=mp4-640x640-is&k=20&c=JLYgYhy-EtU0RmI0gyJds-QHbuW8zlmDgBIaVkhV7s4=",
    rating: 4.7,
    difficulty: "Advanced",
  },
  {
    id: 5,
    name: "Machine Learning pour débutants",
    category: "Intelligence Artificielle",
    picture: "https://images.unsplash.com/photo-1573496773546-3ba7aacc2047",
    video: "https://cdn.pixabay.com/video/2021/09/11/88223-606079076_tiny.mp4",
    rating: 4.9,
    difficulty: "Beginner",
  },
];

const Plus = ({ profTrainings }) => {
  if (!profTrainings) {
    return (
      <Box sx={{ ml: "-15px", mb: "20px", width: "100%" }}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          pl={0}
          // color={"gray"}
          mb={2}
        >
          <Empty label={"Ce professeur ne possède aucune autre formation."} />
        </Typography>
      </Box>
    );
  }

  const pluriel = profTrainings.length > 1 ? "s" : "";
  return (
    <Stack direction={"column"} width={"100%"}>
      <Box sx={{ ml: "-15px", mb: "20px", width: "100%" }}>
        <Typography
          fontWeight={"bold"}
          variant="h4"
          pl={0}
          // color={"gray"}
          mb={2}
        >
          {profTrainings.length} autre{pluriel} formation{pluriel} publiée
          {pluriel} par ce professeur
        </Typography>

        <Typography style={{ fontSize: "13px" }} variant="body2">
          Suivez encore plus de formations pour vous instruire
        </Typography>
        <Divider sx={{ mt: "8px" }} />
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "50px",
          position: "relative",
          left: "-25px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
        }}
      >
        {profTrainings.map((formation) => (
          <VideoCard key={formation.id} formation={formation} />
        ))}
      </Box>
    </Stack>
  );
};

const VideoCard = ({ formation }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // remettre à zéro
    }
  };

  return (
    <Link
      href={`/singleCourse/${formation._id}`}
      variant="body2"
      sx={{
        textDecoration: "none",
        color: "inherit",
        "&:hover": {
          textDecoration: "none",
          color: "inherit",
          "& .category": {
            display: "flex", // Affiche la catégorie en mode flex au survol
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          width: "250px",
          height: "380px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          overflow: "hidden",
          // margin: "12px",
          outline: ".5px solid #C9D4E1",
          pb: "10px",
          transition: "all .25s ease",
          p: 0,
          cursor: "pointer",
          backgroundColor: "white", // Ajout d'un fond blanc pour éviter les problèmes de transparence
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Vidéo */}
        <video
          ref={videoRef}
          src={formation.video}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            zIndex: 1, // Assure que la vidéo soit devant l'image
          }}
          muted
          controls={false}
          disablePictureInPicture
        />

        {/* Contenu */}
        <Chip
          size="small"
          variant="outlined"
          label={formation.category}
          icon={<MyLocationTwoToneIcon color="white" />}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "999",
            color: "white",
            bgcolor: "#3B3B3B",
            fontWeight: "bold",
            border: "none",
            display: "none",
          }}
          className="category"
        />
        <Box
          sx={{
            mt: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start", // Aligne les éléments au début
            width: "100%",
            gap: "15px",
            zIndex: 2, // Assure que le contenu soit devant l'image
            position: "relative",
            pl: "10px",
            pb: "10px",
          }}
        >
          <Box
            sx={{
              fontWeight: "bold",
              fontSize: "14px",
              textAlign: "start",
              pr: "10px",
              // whiteSpace: "nowrap", // Empêche le retour à la ligne
              // // overflow: "hidden", // Cache le texte qui dépasse
              // textOverflow: "ellipsis", // Ajoute "..." à la fin si le texte dépasse
            }}
          >
            {formation.name.length > 30
              ? formation.name.slice(0, 30) + "..."
              : formation.name}
          </Box>
          <Stack
            direction={"row"}
            gap={1}
            // pl={0.5}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
              pr: "10px",
            }}
          >
            <div>
              <Chip
                size="small"
                variant="outlined"
                label={formation.difficulty}
                icon={<CompassCalibrationTwoToneIcon />}
              />
            </div>
            <div>
              <Chip
                size="small"
                variant="outlined"
                label={formation.rating}
                icon={<StarIcon sx={{ color: "#FABE00" }} />}
              />
            </div>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default Plus;
