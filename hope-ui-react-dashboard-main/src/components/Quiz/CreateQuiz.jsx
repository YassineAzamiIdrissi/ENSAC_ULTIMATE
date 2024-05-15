import React, { useState } from "react";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Row } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const CreateQuiz = () => {
  //Toutes les questions sont dans la variable d'état "questions"
  const [questions, setQuestions] = useState([
    { question: "", answers: [], correctAnswer: "" },
  ]);
  const [questionCount, setQuestionCount] = useState(1);
  const [answer, setAnswer] = useState("");

  const handleAddNewQuestion = () => {
    setQuestions([
      ...questions,
      { question: "", answers: [], correctAnswer: "" },
    ]);
    setQuestionCount((prevCount) => prevCount + 1);
  };

  const handleAddNewAnswer = (index) => {
    const newQuestions = [...questions];
    newQuestions[index].answers.push(answer);
    setQuestions(newQuestions);
    setAnswer("");
  };

  const handleChangeQuestion = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].question = value;
    setQuestions(newQuestions);
  };

  const handleChangeCorrectAnswer = (index, value) => {
    const newQuestions = [...questions];
    newQuestions[index].correctAnswer = value;
    setQuestions(newQuestions);
  };

  console.log("NOTRE QUIZZ : ", questions);
  // LOGIQUE BACKEND COMMENCE ICI :::
  const { trainingId } = useParams();
  const handleAddQuestion = async () => {
    try {
      const question = questions[questions.length - 1].question;
      const answers = questions[questions.length - 1].answers;
      const correct = questions[questions.length - 1].correctAnswer;
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/questions/newQuestion/${trainingId}`,
        { question, answers, correct }
      );
    } catch (err) {
      toast.error(
        "Une erreur est arrivée à l'essaie d'ajouter une nouvelle question "
      );
      console.log(err);
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        marginRight: "50px",
        marginLeft: "50px",
        marginTop: "50px",
      }}
    >
      <p
        className="mb-4"
        style={{ fontSize: "30px", fontWeight: "bold", textAlign: "center" }}
      >
        Ajouter des questions pour créer votre évaluation.
      </p>

      {questions.map((question, index) => (
        <div
          key={index}
          style={{
            // border: "0.5px solid gray",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",
            background: "#E3E9F1",
          }}
        >
          <Form.Control
            type="text"
            value={question.question}
            placeholder={` Question ${index + 1}`}
            onChange={(e) => handleChangeQuestion(index, e.target.value)}
            className="flex-1 mt-3 mb-3"
          />

          {question.answers.map((answer, answerIndex) => (
            <Form.Check
              key={answerIndex}
              type="radio"
              name={`question${index}`}
              label={answer}
            />
          ))}

          <Row className="g-3 mb-4">
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder={` Ajouter une réponse à cette question`}
                onChange={(e) => setAnswer(e.target.value)}
                className="flex-1"
              />
            </Col>
            <Col sx={4}>
              <Button
                variant=""
                className="w-100  fs-9"
                size="md"
                style={{ border: "1px solid #1C1C1C" }}
                onClick={() => handleAddNewAnswer(index)}
              >
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{ marginRight: "10px" }}
                  className="pr-3"
                />
                Ajouter réponse à cette question
              </Button>
            </Col>
          </Row>
          <Form.Select
            value={question.correctAnswer}
            onChange={(e) => handleChangeCorrectAnswer(index, e.target.value)}
            name="type"
          >
            <option>Choisissez la reponse correcte</option>
            {question.answers.map((answer, answerIndex) => (
              <option key={answerIndex} value={answer}>
                {answer}
              </option>
            ))}
          </Form.Select>
        </div>
      ))}
      <hr />

      <Button
        variant=""
        className="w-100  fs-9"
        size="sm"
        style={{ background: "#E3E9F1" }}
        onClick={() => {
          handleAddNewQuestion();
          handleAddQuestion();
        }}
      >
        <FontAwesomeIcon icon={faAdd} style={{ marginRight: "10px" }} />
        Ajouter question
      </Button>

      <Button
        variant="secondary"
        className="w-100  fs-9 mt-2"
        size="lg"
        onClick={handleAddNewQuestion}
      >
        <FontAwesomeIcon
          size="24px"
          icon={faPaperPlane}
          style={{ paddingRight: "20px" }}
        />
        Poster le quiz
      </Button>
    </div>
  );
};

export default CreateQuiz;
