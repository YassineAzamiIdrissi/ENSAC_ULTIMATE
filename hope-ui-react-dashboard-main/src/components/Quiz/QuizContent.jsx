import {
  faEnvelope,
  faPaperPlane,
  faPlane,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePagination from "@mui/material/usePagination/usePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const QuizContent = ({ content }) => {
  // LOGIQUE BACKEND COMMENCE ICI :::
  const { trainingID } = useParams();
  const [questions, setQuestions] = useState(null);
  const [studentAnswers, setStudentAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  useEffect(() => {
    console.log(trainingID);
    const fetchQuizQuestions = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/quiz/returnQuestions/${trainingID}`
        );
        setQuestions(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie les constitutifs d'un QUIZ...."
        );
        console.log(err);
      }
    };
    fetchQuizQuestions();
  }, []);
  useEffect(() => {
    const getCorrectAnswers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/quiz/getQuizCorrectAnswers/${trainingID}`
        );
        setCorrectAnswers(response.data);
      } catch (err) {
        return next(new HttpError(err));
      }
    };
    getCorrectAnswers();
  }, []);
  const handleAnswer = (answer, index) => {
    console.log("Fam");
    let answered = false;
    let indice = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
      if (studentAnswers[i].index == index) {
        answered = true;
        indice = i;
        break;
      }
    }
    if (!answered) {
      setStudentAnswers([...studentAnswers, { answer, index }]);
    } else {
      setStudentAnswers((prevList) => {
        const newList = [...prevList];
        newList[indice] = { answer, index: indice };
        return newList;
      });
    }
  };
  // RESTE A IMPLEMENTER LA LOGIQUE OBTENTION DE LA NOTE. 
  // STOCKAGE EN BD.
  // DONE, 13/05/2024......
  return (
    <Row className="kanban-create-board">
      <Col xs={12} xl={12} xxl={12} style={{}}>
        {questions?.map((question, index) => (
          <div key={index} className="mb-5">
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Question {index + 1}
            </p>
            <hr />
            <p style={{ fontWeight: "bold", fontSize: "18px" }}>
              {question.question}
            </p>
            <Form>
              {question.answers.map((answer, answerIndex) => (
                <Form.Check
                  key={answerIndex}
                  type="radio"
                  name={`question${index}`} // Utilisez un nom unique pour chaque groupe de boutons radio
                  label={answer}
                  onChange={(e) => {
                    handleAnswer(e.target.nextSibling.textContent, index);
                  }}
                />
              ))}
            </Form>
          </div>
        ))}
      </Col>
      <Button
        variant="success"
        className="w-100  fs-9 mt-2"
        size="lg"
        type="submit"
        //onClick={handleSubmitQuiz}
        style={{ fontSize: "28px" }}
      >
        <FontAwesomeIcon
          size="lg"
          icon={faShare}
          style={{ paddingRight: "20px", fontSize: "22px" }}
        />
        Soumettre mes réponses
      </Button>
    </Row>
  );
};

export default QuizContent;
