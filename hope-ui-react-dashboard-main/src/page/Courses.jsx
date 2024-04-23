import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";
import Fliter from "../components/courses/Filter";
import Allcourses from "../components/courses/Allcourses";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";
const Courses = () => {
  const classes = pageCss();
  // LOGIQUE BACKEND COMMENCE ICI :
  const [loading, setLoading] = useState(true);
  const [fetchedTrainings, setFetchedTrainings] = useState(null);
  const [fetchedAcademies, setFetchedAcademies] = useState(null);
  useEffect(() => {
    const fetchTrainingsAndAcademies = async () => {
      try {
        const trainingsResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getAllTrainings`
        );
        const fetchedTrainings = trainingsResponse.data;
        const academiesPromises = fetchedTrainings.map(async (training) => {
          const academyResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/academies/get/${training.academyId}`
          );
          return academyResponse.data;
        });
        const fetchedAcademies = await Promise.all(academiesPromises);
        setFetchedTrainings(fetchedTrainings);
        setFetchedAcademies(fetchedAcademies);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTrainingsAndAcademies();
    setLoading(false);
  }, []);
  const [fetchedDomains, setFetchedDomains] = useState([]);
  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/domains/getAllDomains`
        );
        setFetchedDomains(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDomains();
  }, []);
  const fetchTrainingsByDomain = async (domain) => {
    setLoading(true);
    try {
      let trainingObjects;
      if (domain !== "tout") {
        const response1 = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/domains/getTrainingsByDomain/${domain}`
        );
        trainingObjects = response1.data.map(async (id) => {
          const trainingObj = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${id}`
          );
          return trainingObj;
        });
        const trainingObjectsReal = await Promise.all(trainingObjects);
        trainingObjects = trainingObjectsReal;
        const finalyTrainings = trainingObjects.map((item) => {
          return item.data;
        });
        const subAcs = finalyTrainings.map(async (training) => {
          const concernedAcademy = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/academies/get/${training.academyId}`
          );
          return concernedAcademy.data;
        });
        const realAcs = await Promise.all(subAcs);
        setFetchedTrainings(finalyTrainings);
        setFetchedAcademies(realAcs);
      } else {
        const trainingsResponse = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getAllTrainings`
        );
        const fetchedTrainings = trainingsResponse.data;
        const academiesPromises = fetchedTrainings.map(async (training) => {
          const academyResponse = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/academies/get/${training.academyId}`
          );
          return academyResponse.data;
        });
        const fetchedAcademies = await Promise.all(academiesPromises);
        setFetchedTrainings(fetchedTrainings);
        setFetchedAcademies(fetchedAcademies);
      }
    } catch (err) {
      console.log("CATCH EXECUTED :::");
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <>
      <Navbar />
      <Pagebanner title="Cours" />
      <Box className={classes.course_section}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h3"
            className={classes.course_count_title}
          >
            Visualiser 1–9 des 32 cours
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Fliter
                fetchTrainingsByDomain={fetchTrainingsByDomain}
                fetchedDomains={fetchedDomains}
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              {fetchedTrainings && (
                <Allcourses
                  loading={loading}
                  fetchedTrainings={fetchedTrainings}
                  fetchedAcademies={fetchedAcademies}
                  setFetchedTrainings={setFetchedTrainings}
                />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
};
export default Courses;