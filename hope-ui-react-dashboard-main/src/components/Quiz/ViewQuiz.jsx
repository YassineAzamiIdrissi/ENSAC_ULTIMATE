import { Col, Row } from "react-bootstrap";
import boardIcon from "../../assets/board.png";
import boardIllustration from "../../assets/board-light.png";
import boardIllustrationDark from "../../assets/board-dark.png";
//import CreateBoardWizardForm from "components/modules/kanban/create-board/CreateBoardWizardForm";

const Index = () => {
  return (
    <div className="mb-9">
      <div className="mb-xl-8">
        <div className="d-flex align-items-center mb-3">
          <img src={boardIcon} alt="" className="me-3" />
          <h1 className="mb-0 text-body-emphasis fw-semibold">ENSA ACADEMY</h1>
        </div>
        <p className="mb-0">Poser un Quiz</p>
      </div>
      <Row className="kanban-create-board">
        <Col
          xs={12}
          xl={6}
          xxl={7}
          className="text-center kanban-board-bg order-xl-1"
        >
          <img
            src={boardIllustration}
            alt=""
            className="d-dark-none mt-5 mb-6 mb-xl-0 position-sticky"
          />
          <img
            src={boardIllustrationDark}
            alt=""
            className="d-light-none mt-5 mb-6 mb-xl-0 position-sticky"
          />
        </Col>
        <Col xs={12} xl={6} xxl={5}>
          TEST QUIZ
          {/* <CreateBoardWizardForm /> */}
        </Col>
      </Row>
    </div>
  );
};

const ViewQuiz = () => {
  return <Index />;
};

export default ViewQuiz;
