import React, { useEffect, useState } from "react";
import { ItemChapter } from "../social-media/NewCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { ExpandMoreTwoTone, PlayArrowTwoTone } from "@mui/icons-material";
import { Link, useNavigate, useParams } from "react-router-dom";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useSideBar } from "../../hook/sidebarContext";
import KeyboardDoubleArrowLeftTwoToneIcon from "@mui/icons-material/KeyboardDoubleArrowLeftTwoTone";
import "./scroll-bar.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useReadTraining } from "../../hook/use-read-training";
const courses_ = [
  {
    id: 1,
    title: "Generalité des cartes réseaux",
    chapters: [
      { id: 1, title: "Comprendre les fondamentaux 1", duration: "15:56" },
      { id: 2, title: "Comprendre les fondamentaux 2", duration: "12:34" },
      { id: 3, title: "Comprendre les fondamentaux 3", duration: "18:45" },
    ],
  },
  {
    id: 2,
    title: "Fonctionnalité du reseau",
    chapters: [
      { id: 4, title: "Introduction aux fonctionnalités", duration: "10:22" },
      { id: 5, title: "Réseaux modernes", duration: "14:56" },
    ],
  },
  {
    id: 3,
    title: "Sécurité des réseaux",
    chapters: [
      { id: 6, title: "Principes de la sécurité", duration: "12:12" },
      { id: 7, title: "Menaces et vulnérabilités", duration: "16:45" },
    ],
  },
  {
    id: 4,
    title: "Protocoles de communication",
    chapters: [
      { id: 8, title: "TCP/IP", duration: "20:10" },
      { id: 9, title: "UDP et autres protocoles", duration: "14:30" },
    ],
  },
  {
    id: 5,
    title: "Conception des réseaux",
    chapters: [
      { id: 10, title: "Architecture des réseaux", duration: "17:50" },
      { id: 11, title: "Topologies", duration: "11:22" },
    ],
  },
  {
    id: 6,
    title: "Gestion des réseaux",
    chapters: [
      { id: 12, title: "Outils de gestion", duration: "13:40" },
      { id: 13, title: "Surveillance et dépannage", duration: "18:05" },
    ],
  },
  {
    id: 7,
    title: "Réseaux sans fil",
    chapters: [
      { id: 14, title: "Technologies sans fil", duration: "19:30" },
      { id: 15, title: "Sécurité des réseaux sans fil", duration: "16:00" },
    ],
  },
  {
    id: 8,
    title: "Virtualisation des réseaux",
    chapters: [
      { id: 16, title: "Introduction à la virtualisation", duration: "15:15" },
      { id: 17, title: "Solutions de virtualisation", duration: "14:45" },
    ],
  },
  {
    id: 9,
    title: "Réseaux et Cloud Computing",
    chapters: [
      { id: 18, title: "Concepts de cloud computing", duration: "21:30" },
      { id: 19, title: "Services cloud", duration: "18:25" },
    ],
  },
  {
    id: 10,
    title: "Administration des réseaux",
    chapters: [
      { id: 20, title: "Administration système", duration: "22:10" },
      { id: 21, title: "Gestion des utilisateurs", duration: "19:40" },
    ],
  },
];

const iconStyle = {
  padding: "10px",
  height: "24px",
  width: "24px",
  border: ".1px solid #DCDCDC",
  borderRadius: "50%",
  bgcolor: "white",
  transition: "all 0.2s ease-in-out",
  "&:active": {
    backgroundColor: "#DCDCDC",
  },
  "&:hover": {
    border: ".5px solid black",
    scale: ".9",
  },
};
const iconStyle2 = {
  padding: "5px",
  height: "20px",
  width: "20px",
  border: ".1px solid gray",
  borderRadius: "5px",
  bgcolor: "transparent",
};
const DisplayChapterLefSide2 = () => {
  const { Expand, onExpand } = useSideBar();

  // const handleChapterClick = (chapterId) => {
  //   setClickedChapter(chapterId === clickedChapter ? null : chapterId);
  // };
  const {
    training,
    courses,
    chapters,
    groupedChapters,
    chapterID,
    trainingID,
  } = useReadTraining();

  const navigate = useNavigate();
  const handleNavigate = (chapterId) => {
    navigate(`chapter/${chapterId}`);
    // navigate(0);
  };

  // LOGIQUE BACKEND COMMENCE ICI :

  // console.log("training : ", training);
  // console.log("chapList : ", chapters);
  // console.log("Courses : ", courses);
  // console.log("Courses -> chap : ", groupedChapters);

  return (
    <div
      style={{
        height: "100%",
        width: Expand ? "310px" : "60px",
        position: "fixed",
        left: 0,
        borderRight: ".1px solid #DCDCDC",
        paddingLeft: "10px",
        transition: "width 0.3s ease-out",
        backgroundColor: "#F1F5F9",
      }}
    >
      {/* <h1>{training?.name}</h1> */}

      {Expand ? (
        <>
          <Box
            className="custom-scrollbar"
            sx={{
              color: "#63738A",
              height: "calc(100vh - 50px)",
              overflowY: "auto",
              marginTop: "5px",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              borderBottom: ".5ps solid gray",
            }}
          >
            {groupedChapters.map((course) => (
              <React.Fragment key={course._id}>
                <Box
                  sx={{
                    backgroundColor: "transparent",
                    zIndex: "1",
                    borderRadius: "0px",
                    transition: "all 0.2s ease-in-out",
                    opacity: Expand ? "1" : "0",
                  }}
                >
                  <Box
                    sx={{
                      bgcolor: "transparent",
                      zIndex: "1",
                      overflow: "hidden",
                    }}
                  >
                    <Accordion
                      sx={{ boxShadow: "none", backgroundColor: "#F1F5F9" }}
                    >
                      <AccordionSummary
                        expandIcon={
                          <ExpandMoreTwoTone sx={{ color: "#9E9E9E" }} />
                        }
                        aria-controls={`panel-${course._id}-content`}
                        id={`panel-${course._id}-header`}
                        sx={{
                          color: "#63738A",
                          bgcolor: "transparent",
                          height: "max-content",
                          borderRadius: "5px",
                          "&:hover": {
                            bgcolor: "#495057",
                            color: "white",
                          },
                        }}
                      >
                        <div>
                          <Typography fontSize={"15px"}>
                            {course.title}
                          </Typography>
                        </div>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Stack mt={"0px"} gap={"3px"}>
                          {course.chapters.map((chapter) => (
                            <Stack
                              direction={"row"}
                              justifyContent={"space-between"}
                              alignItems={"center"}
                              key={chapter._id}
                              onClick={() => handleNavigate(chapter._id)}
                              // component={Link}
                              // to={`chapter/${chapter._id}`}
                              sx={{
                                display: "flex",
                                position: "relative",
                                justifyContent: "space-between",
                                padding: "10px",
                                pl: "15px",
                                color: "#556377",
                                borderRadius: "5px",
                                background:
                                  chapterID === chapter._id ? "#495057" : "",
                                fontWeight: "bold",
                                textDecoration: "none",
                                cursor: "pointer",
                                "&:hover": {
                                  bgcolor: "#495057",
                                  color: "white",
                                },
                              }}
                            >
                              <div
                                // onClick={() => handleNavigate(chapter._id)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "10px",
                                  color:
                                    chapterID === chapter._id
                                      ? "white"
                                      : "inherit",
                                }}
                              >
                                {chapterID === chapter._id ? (
                                  <PauseTwoToneIcon
                                    sx={{
                                      borderRadius: "25%",
                                      fontSize: "17px",
                                      ml: "-10px",
                                      color: "#495057",
                                      bgcolor: "#FFFFFF",
                                      zIndex: "1",
                                    }}
                                  />
                                ) : (
                                  <PlayArrowTwoTone
                                    sx={{
                                      border: "1px solid #E0E0E0",
                                      zIndex: "1",
                                      borderRadius: "25%",
                                      fontSize: "17px",
                                      ml: "-10px",
                                      color: "#495057",

                                      bgcolor: "#FFFFFF",
                                    }}
                                  />
                                )}
                                <Typography fontSize={"13px"}>
                                  {chapter.title}
                                </Typography>
                              </div>
                              <Box
                                style={{
                                  color: "#9E9E9E",
                                  fontSize: "10px",
                                }}
                              >
                                {chapter.duration}
                              </Box>
                            </Stack>
                          ))}
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </Box>
                </Box>
                <Divider orientation="horizontal" sx={{ opacity: 0.5 }} />
              </React.Fragment>
            ))}
          </Box>
          <Box
            sx={{
              ml: "-10px",
              height: "50px",
              borderTop: ".5px solid #DEE5ED",
              boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.08) ",
              zIndex: "999",
            }}
          >
            <Button
              onClick={onExpand}
              startIcon={<KeyboardDoubleArrowLeftTwoToneIcon sx={iconStyle2} />}
              sx={{
                height: "100%",
                width: "100%",
                bgcolor: "#C9D4E1",
                p: "10px",
                pl: "30px",
                display: "flex",
                justifyContent: "start",
                padding: "10px",
                color: "#556377",
                textTransform: "initial",
                borderRadius: "0px",
                "&:hover": {
                  bgcolor: "#DEE5ED",
                },
              }}
            >
              Fermer la liste
            </Button>
          </Box>
        </>
      ) : (
        <Box
          onClick={onExpand}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            color: "#9E9E9E",
          }}
        >
          <KeyboardArrowRightTwoToneIcon sx={{ fontSize: "30px" }} />
        </Box>
      )}
    </div>
  );
};

export default DisplayChapterLefSide2;
