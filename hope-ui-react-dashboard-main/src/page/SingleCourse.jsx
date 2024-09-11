import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CourseSidebar from "../components/courses/CourseSidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { comCss } from "../components/ComponentsCss";
import { useParams } from "react-router-dom";
import axios from "axios";
const itemtabs = [
  "Introduction",
  "Compréhension des Fondamentaux de React Native",
  "Ajout de la pile et du navigateur d'onglets inférieur à notre projet react native",
  "Aperçu des Hooks React",
  "Projet",
  "Conclusion",
];

const SingleCourse = () => {
  const classes = pageCss();
  const style = comCss();
  const [tabValue, setTabvalue] = useState(0);
  const handleChange = (event, newValue) => {
    setTabvalue(newValue);
  };

  //LOGIQUE BACK :
  const { id } = useParams();
  const [training, setTraining] = useState(null);
  const [chaptersByCourse, setChaptersByCourse] = useState(null);
  useEffect(() => {
    const fetchRequiredData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${id}`
        );
        const fetchedTraining = response.data;
        setTraining(fetchedTraining);
        const courses = fetchedTraining.courses;
        const coursesPromises = courses.map(async (course) => {
          const resp = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/courses/getCourse/${course}`
          );
          return resp.data;
        });
        const coursesList = await Promise.all(coursesPromises);
        const chapsByCoursePromises = coursesList.map(async (course) => {
          const courseName = course.title;
          const chapsPromises = course.chapters.map(async (chapter) => {
            const res = await axios.get(
              `${process.env.REACT_APP_BASE_URL}/chapters/getChapter/${chapter}`
            );
            return res.data;
          });
          const chaps = await Promise.all(chapsPromises);
          return { courseName, chaps };
        });
        const chapsByCourse = await Promise.all(chapsByCoursePromises);
        setChaptersByCourse(chapsByCourse);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRequiredData();
  }, []);
  return (
    <>
      <Navbar />
      {training && (
        <Pagebanner
          title={`${training?.name}`}
          subtitle={training?.subtitle}
          course_time={`${training?.subscribers.length + 11} minutes`}
          course_enroll={`${training?.subscribers.length}`}
          course_rating={`${training?.rating}`}
          course_expart={`${training?.difficulty}`}
          className={style.page_banner_singleCourse}
        />
      )}
      <Box className={classes.course_banner}></Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            },
          }}
        >
          <Grid item xs={12} sm={12} md={8}>
            <Box className={classes.single_course_tabs_section}>
              <Tabs value={tabValue} onChange={handleChange}>
                <Tab label="Programme" />
                <Tab label="Description" />
              </Tabs>
              <Box className={classes.single_course_tabs_box}>
                {tabValue === 0 && chaptersByCourse && (
                  <Box className={classes.single_course_tabs}>
                    {chaptersByCourse.map((item, index) => (
                      <Box
                        key={index}
                        className={classes.single_course_tabs_list}
                      >
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{item.courseName}</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            {item.chaps.map((chapter, index) => (
                              <Box
                                key={index}
                                className={classes.single_course_tabs_content}
                              >
                                <Link
                                  href={`/training/${training._id}/chapter/${chapter._id}`}
                                  sx={{
                                    textDecoration: "none",
                                    color: "inherit",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    width: "100%",
                                    p: "5px",
                                    "&:hover": {
                                      textDecoration: "none",
                                      background: "#F5F7FA",
                                      color: "inherit",
                                      borderRadius: "5px",
                                    },
                                  }}
                                >
                                  <Typography variant="h4">
                                    <LockOutlinedIcon
                                      className={
                                        classes.single_course_tabs_icon
                                      }
                                    />
                                    {chapter.title}
                                  </Typography>
                                  <Typography variant="h4">2m 24s</Typography>
                                </Link>
                                {/* Remplacer course par training */}
                              </Box>
                            ))}
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                    ))}
                  </Box>
                )}
                {tabValue === 1 && (
                  <Box className={classes.single_course_tabs_des}>
                    <Typography variant="h4" pb={3}>
                      {training.description}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <CourseSidebar />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SingleCourse;
