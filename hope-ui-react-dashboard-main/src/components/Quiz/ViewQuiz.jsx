import { Col, Row } from "react-bootstrap";
import boardIcon from "../../assets/board.png";
import boardIllustration from "../../assets/board-light.png";
import boardIllustrationDark from "../../assets/board-dark.png";
import Pagebanner from "../Pagebanner";
import Footer from "../Footer";
import Navbar from "../Navbar";
import { Box, Container } from "@mui/material";
import { pageCss } from "../../page/PageCss";
import QuizContent from "./QuizContent";
import { useEffect, useState } from "react";
import quizData from "./data";
import { comCss } from "../ComponentsCss";

const Index = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    // Charger les données du quiz dans la variable content
    setContent(quizData);
  }, []);

  console.log("content :", content);

  return (
    <div className="mb-3" style={{}}>
      <div className="mb-xl-3">
        <p
          className="mb-0"
          style={{ fontWeight: "bold", fontSize: "32px", textAlign: "center" }}
        >
          Evaluation de compétences.
        </p>
      </div>
      <Row className="kanban-create-board">
        <Col xs={12} xl={12} xxl={12} style={{}}>
          <QuizContent content={content} />
        </Col>
      </Row>
    </div>
  );
};

const ViewQuiz = ({ trainingId }) => {
  const classes = pageCss();
  const style = comCss();

  const trainingID = { trainingId };
  return (
    <>
      {/* <Pagebanner title={`Evaluation de : nom de  ${trainingId} `} /> */}
      <Box className={classes.course_section}>
        <Container
          maxWidth="lg"
          style={{ marginRight: "auto", marginLeft: "auto" }}
        >
          <Index />
        </Container>
      </Box>
    </>
  );
};

export default ViewQuiz;
