import React from "react";
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

const ReadTrainingLayout = () => {
  const classes = pageCss();
  return (
    <div>
      <>
        {/* <Pagebanner title="Nom de la Formation" /> */}
        <Navbar />
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
          <h1>NOM DE LA FORMATION</h1>
          <p className="my-3">Recherche par mots clés</p>
          <SearchBox className="w-100" placeholder="" />
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
                <ChaptersList />
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
