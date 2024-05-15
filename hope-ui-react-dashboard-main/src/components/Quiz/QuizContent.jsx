import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const QuizContent = ({ content }) => {
  return (
    <Row className="kanban-create-board">
      <Col xs={12} xl={12} xxl={12} style={{}}>
        {content.map((question, index) => (
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
        //onClick={handleSubmitQuiz}
        style={{ fontSize: "28px" }}
      >
        <FontAwesomeIcon
          size="lg"
          icon={faShare}
          style={{ paddingRight: "20px", fontSize: "22px" }}
        />
        Poster le quiz
      </Button>
    </Row>
  );
};

export default QuizContent;
