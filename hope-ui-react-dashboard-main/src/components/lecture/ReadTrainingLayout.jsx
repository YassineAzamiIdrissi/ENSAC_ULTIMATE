import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import bg from "../../assets/images/dashboard/top-header2.png";
import bgDark from "../../assets/images/dashboard/top-header2.png";
import SearchBox from "../SearchBox";
import { Col, Row, Tab, Nav } from "react-bootstrap";
import { pageCss } from "../../page/PageCss";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import Pagebanner from "../Pagebanner";

import ChaptersList from "./ChaptersList";
import Navbar from "../Navbar";
import Footer from "../Footer";

import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
const ReadTrainingLayout = () => {
  const classes = pageCss();
  return (
    <div>
      <>
        <Box className={classes.course_section}>
          <Container maxWidth="lg">
            <Index />
          </Container>
        </Box>
        <Footer />
      </>
    </div>
  );
};

const Index = () => {
  // LOGIQUE BACKEND COMMENCE ICI :
  const paramsObj = useParams();
  const [chapsList, setChapsList] = useState([]);
  const [training, setTraining] = useState(null);
  useEffect(() => {
    const getAllChaps = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/chapsFromTraining/${paramsObj.courseID}`
        );
        setChapsList(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à la tentative de lire les chapitres des formations"
        );
        console.log(err);
      }
    };
    getAllChaps();
  }, []);
  useEffect(() => {
    const fetchTraining = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${paramsObj.courseID}`
        );
        setTraining(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire la fomt concernédx.."
        );
        console.log(err);
      }
    };
    fetchTraining();
  }, []);
  return (
    <div className="mb-9">
      <div
        className="mx-n4 mx-lg-n6 mt-n5 position-relative mb-md-9"
        style={{ height: "208px" }}
      >
        <div
          className="bg-holder d-dark-none"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
          }}
        />
        <div
          className="bg-holder d-light-none"
          style={{
            backgroundImage: `url(${bgDark})`,
            backgroundSize: "cover",
          }}
        />
        <div className="faq-title-box position-relative bg-body-emphasis border border-translucent p-6 rounded-3 text-center mx-auto">
          <h1>{training?.name}</h1>
        </div>
      </div>
      <Tab.Container>
        <Row className="gx-xl-8 gx-xxl-11">
          <Col md={6} xl={5} xxl={4} className="mb-1 mt-1">
            <h2>Chapitres de cette formation</h2>
          </Col>
          <Col xs={12} className="mb-0">
            <Tab.Container id="sub-category">
              <Row className="gx-xl-8 gx-xxl-11 gy-6">
                <ChaptersList
                  list={chapsList}
                  trainingId={paramsObj.courseID}
                />
                <Col md={6} xl={7} xxl={8} className="mt-0">
                  <Outlet />
                </Col>
              </Row>
            </Tab.Container>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default ReadTrainingLayout;
