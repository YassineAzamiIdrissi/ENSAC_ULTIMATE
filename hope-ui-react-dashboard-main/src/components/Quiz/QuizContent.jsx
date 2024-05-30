import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import usePagination from "@mui/material/usePagination/usePagination";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
import CertificateGenerator from "../Certification/CertificateGenerator";
const QuizContent = ({ content }) => {
  // LOGIQUE BACKEND COMMENCE ICI :::
  // user data :
  const { currentUser } = useContext(UserContext);
  const studentId = currentUser?.id;
  const entity = currentUser?.entity;
  const { trainingID } = useParams();
  const [quizId, setQuizId] = useState(null);
  const [questions, setQuestions] = useState(null);
  const [mark, setMark] = useState(null);
  const [studentAnswers, setStudentAnswers] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [wrongIndexes, setWrongIndexes] = useState(null);
  // certifs info :
  const [studentName, setStudentName] = useState(null);
  const [trainingName, setTrainingName] = useState(null);
  const [academyId, setAcademyId] = useState(null);
  const [academyName, setAcademyName] = useState(null);
  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/students/get/${studentId}`
        );
        const f_name = resp.data.firstName + " " + resp.data.lastName;
        setStudentName(f_name);
      } catch (err) {
        toast.error("=) 99");
        console.log(err);
      }
    };
    if (entity == "Student") {
      fetchStudentName();
    }
  }, []);
  useEffect(() => {
    const fetchTrainingName = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${trainingID}`
        );
        setAcademyId(resp.data.academyId);
        setTrainingName(resp.data.name);
        console.log("Academy ID :: ");
        console.log(resp.data.academyId);
      } catch (err) {
        toast.error("=) 98...");
        console.log(err);
      }
    };
    if (entity == "Student") {
      fetchTrainingName();
    }
  }, []);
  useEffect(() => {
    const fetchAcName = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/get/${academyId}`
        );
        setAcademyName(resp.data.name);
      } catch (err) {
        toast.error("=) 97...");
        console.log(err);
      }
    };
    if (trainingName && entity == "Student") {
      fetchAcName();
    }
  }, [trainingName]);
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
        toast.error("Une erreur est survenue à l'essaie de je sais pas....");
        console.log(err);
      }
    };
    getCorrectAnswers();
  }, []);
  const handleAnswer = (answer, index) => {
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
  useEffect(() => {
    const getQuizId = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/quiz/getQuizFromTrainingId/${trainingID}`
        );
        setQuizId(response.data);
      } catch (err) {
        toast.error("9EEELEEEB");
        console.log(err);
      }
    };
    getQuizId();
  }, []);
  const handleMark = async () => {
    try {
      let mark = 0;
      let wrongs = [];
      for (let i = 0; i < studentAnswers.length; ++i) {
        if (studentAnswers[i].answer == correctAnswers[i]) {
          mark++;
        } else {
          wrongs.push(i);
        }
      }
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/marks/defineMark`,
        { studentId, mark, quizId }
      );
      const response_ = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/certifs/newCertification`,
        { studentId, trainingId: trainingID }
      );
      setMark(mark);
      setWrongIndexes(wrongs);
    } catch (err) {
      toast.error("Error brk");
    }
  };

  return (
    <Row className="kanban-create-board">
      <Col xs={12} xl={12} xxl={12} style={{}}>
        {questions?.map((question, index) => (
          <div key={index} className="mb-5">
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Question {index + 1}
            </p>
            <hr />
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                color: !wrongIndexes
                  ? "black"
                  : wrongIndexes?.includes(index)
                  ? "red"
                  : "green",
              }}
            >
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
                  style={{ color: "red" }}
                />
              ))}
            </Form>
          </div>
        ))}
      </Col>
      {entity == "Student" && !mark && (
        <Button
          variant="success"
          className="w-100  fs-9 mt-2"
          size="lg"
          type="submit"
          //onClick={handleSubmitQuiz}
          style={{ fontSize: "28px" }}
          onClick={handleMark}
        >
          <FontAwesomeIcon
            size="lg"
            icon={faShare}
            style={{ paddingRight: "20px", fontSize: "22px" }}
          />
          Soumettre mes réponses
        </Button>
      )}
      {entity == "Student" && mark && (
        <>
          <h4 style={{ color: mark >= 5 ? "green" : "red" }}>
            {mark >= 5 &&
              `Bravo vous avez réussi ce Quiz.. votre note est : ${mark} vous pouvez obtenir votre certification de formation : `}
            {mark < 5 &&
              `Ooops, il semble que vous n'avez pas bien saisi quelque notions dans le cours.. vous pouvez reprendre par la suite, votre note : ${mark}/10`}
          </h4>
          <div>
            {mark >= 5 && academyName && trainingName && studentName && (
              <CertificateGenerator
                studentName={studentName}
                trainingName={trainingName}
                academyName={academyName}
              />
            )}
          </div>
        </>
      )}
    </Row>
  );
};

export default QuizContent;
