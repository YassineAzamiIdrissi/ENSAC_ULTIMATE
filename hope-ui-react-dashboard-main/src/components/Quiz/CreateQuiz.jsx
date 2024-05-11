import React, { useState } from "react";
import { faDownload, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Form, Row } from "react-bootstrap";

const CreateQuiz = () => {
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
            border: "0.5px solid gray",
            borderRadius: "5px",
            padding: "20px",
            marginBottom: "10px",
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
                variant="primary"
                className="w-100  fs-9"
                size="md"
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

      <Button
        variant="secondary"
        startIcon={<FontAwesomeIcon icon={faPlus} />}
        className="w-100  fs-9"
        size="sm"
        onClick={handleAddNewQuestion}
      >
        Ajouter question
      </Button>

      <Button
        variant="success"
        className="w-100  fs-9 mt-2"
        size="lg"
        onClick={handleAddNewQuestion}
      >
        <FontAwesomeIcon
          size="24px"
          icon={faDownload}
          style={{ paddingRight: "20px" }}
        />
        Poster le quiz
      </Button>
    </div>
  );
};

export default CreateQuiz;
