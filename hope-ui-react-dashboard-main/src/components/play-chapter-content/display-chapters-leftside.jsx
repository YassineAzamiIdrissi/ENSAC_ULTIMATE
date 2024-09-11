import React, { useState } from "react";
import { ItemChapter } from "../social-media/NewCard";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { ExpandMoreTwoTone, PlayArrowTwoTone } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PauseTwoToneIcon from "@mui/icons-material/PauseTwoTone";
import KeyboardArrowRightTwoToneIcon from "@mui/icons-material/KeyboardArrowRightTwoTone";
import CloseTwoToneIcon from "@mui/icons-material/CloseTwoTone";
import { useSideBar } from "../../hook/sidebarContext";

import "./scroll-bar.css";
const courses = [
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

const DisplayChapterLefSide = () => {
  const [clickedChapter, setClickedChapter] = useState(null);
  const { Expand, onExpand } = useSideBar();

  const handleChapterClick = (chapterId) => {
    setClickedChapter(chapterId === clickedChapter ? null : chapterId);
  };

  return (
    <div
      style={{
        height: "100%",
        width: Expand ? "310px" : "60px", // Width transition based on Expand state
        position: "fixed",
        left: 0,
        borderRight: ".1px solid #DCDCDC",
        paddingLeft: "10px",
        transition: "width 0.3s ease-out", // Transition effect for opening/closing
        fillMode: "forwards", // Similar to fill-mode-forwards in Tailwind
        backgroundColor: "#FFF", // Assuming a white background; adjust as needed
      }}
    >
      <button
        onClick={onExpand}
        style={{
          position: "absolute",
          top: "10%",
          left: "100%",
          color: "gray",
          borderRadius: "50%",
          border: "none",

          cursor: "pointer",
          textAlign: "center",
          background: "transparent",

          padding: "0",
          "&:hover": {
            background: "transparent",
          },
          "&:active": {
            backgroundColor: "transparent",
          },
          transform: "translateX(-50%)",
          zIndex: 1000,
        }}
      >
        {Expand ? (
          <Tooltip title="Fermer la liste">
            <CloseTwoToneIcon sx={iconStyle} />
          </Tooltip>
        ) : (
          <Tooltip title="Ouvrir la liste">
            <KeyboardArrowRightTwoToneIcon sx={iconStyle} />
          </Tooltip>
        )}
      </button>

      {Expand ? (
        <Box
          className="custom-scrollbar"
          sx={{
            height: "calc(100% - 10px)", // Adjust height to account for the button
            overflowY: "auto", // Enable vertical scrolling
            marginTop: "5px", // Add padding to ensure content is visible below the button
          }}
        >
          {courses.map((course) => (
            <ItemChapter
              key={course.id}
              sx={{
                maxWidth: "280px",
                bgcolor: "transparent",
                mb: 2,
                borderRadius: "0px",
                boxShadow: "none",
                transition: "all 0.2s ease-in-out",
                opacity: Expand ? "1" : "0",
              }}
            >
              <Box
                sx={{
                  bgcolor: "transparent",
                  border: ".5px solid #DCDCDC",
                  zIndex: "1",
                  borderRadius: "0px",
                  overflow: "hidden",
                }}
              >
                <Accordion sx={{ boxShadow: "none" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreTwoTone sx={{ color: "#9E9E9E" }} />}
                    aria-controls={`panel-${course.id}-content`}
                    id={`panel-${course.id}-header`}
                    sx={{ bgcolor: "#F5F5F5" }}
                  >
                    <div>
                      <Typography fontSize={"10px"} color="#9E9E9E">
                        Cours {course.id}
                      </Typography>
                      <Typography
                        fontSize={"13px"}
                        fontWeight={"bold"}
                        color="#333333"
                      >
                        {course.title}
                      </Typography>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Stack borderLeft={"1px solid #E0E0E0"} gap={"5px"}>
                      {course.chapters.map((chapter) => (
                        <Box
                          key={chapter.id}
                          onClick={() => handleChapterClick(chapter.id)}
                          component={Link}
                          to={"#"}
                          sx={{
                            display: "flex",
                            position: "relative",
                            alignItems: "center",
                            gap: "10px",
                            padding: "5px 5px 5px 0px",
                            color:
                              clickedChapter === chapter.id
                                ? "#FF613F"
                                : "#333333",
                            fontWeight: "bold",
                            textDecoration: "none",
                            cursor: "pointer",
                            borderRight:
                              clickedChapter === chapter.id
                                ? "3px solid #FF613F"
                                : "none",

                            "&:hover": {
                              bgcolor: "#F0F4F8",
                            },
                            ...(clickedChapter === chapter.id && {
                              "&:after": {
                                content: "''",
                                position: "absolute",
                                top: "0px",
                                left: "-1px",
                                right: "-10px",
                                width: "20px",
                                height: "28px",
                                background: "transparent",
                                borderLeft: "1px solid #FF613F",
                              },
                            }),
                          }}
                        >
                          {clickedChapter === chapter.id ? (
                            <PauseTwoToneIcon
                              sx={{
                                borderRadius: "50%",
                                fontSize: "17px",
                                ml: "-10px",
                                bgcolor: "#FF613F",
                                color: "#FFFFFF",
                                zIndex: "1",
                              }}
                            />
                          ) : (
                            <PlayArrowTwoTone
                              sx={{
                                border: "1px solid #E0E0E0",
                                zIndex: "1",
                                borderRadius: "50%",
                                fontSize: "17px",
                                ml: "-10px",
                                bgcolor: "#FFFFFF",
                              }}
                            />
                          )}
                          <Typography fontSize={"12px"}>
                            {chapter.title}
                          </Typography>
                          <span style={{ color: "#9E9E9E", fontSize: "10px" }}>
                            {chapter.duration}
                          </span>
                        </Box>
                      ))}
                    </Stack>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </ItemChapter>
          ))}
        </Box>
      ) : (
        // If the sidebar is collapsed, show the "CHAPITRES" text vertically
        <Box
          onClick={onExpand}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              writingMode: "vertical-rl", // Makes the text vertical
              transform: "rotate(180deg)", // Rotates the text 180 degrees
              fontSize: "46px",
              fontWeight: "bold",
              color: "#DCDCDC",
              fontFamily: "Nunito",
              height: "100%",
              letterSpacing: "5px", // Adds a slight horizontal spacing
              lineHeight: 1,
              // bgcolor: "red",
              "&:hover": {
                color: "gray",
                cursor: "pointer",
                scale: "1.1",
                transition: "all 0.2s ease-out",
              },
            }}
          >
            CHAPITRES
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default DisplayChapterLefSide;
