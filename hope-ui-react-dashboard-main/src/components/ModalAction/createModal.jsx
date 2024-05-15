import { Col, Form, Modal, Row, Button } from "react-bootstrap";
import boardIcon from "../../assets/board.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateCourseModal = ({
  courseId,
  show,
  handleClose,
  type,
  trainingId,
  course,
  courseTitle,
  training,
  token,
}) => {
  //LOGIQUE BACKEND COMMENCE ICI /
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const addCourseToTraining = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/courses/newCourse/${trainingId}`,
        { title },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success("Cours ajouté avec succés");
      setTimeout(() => {
        navigate(0);
      }, [2000]);
    } catch (err) {
      console.log(
        "An error occured trying to add this course to its specific training "
      );
      console.log(err);
      toast.error(err.response.data);
    }
  };
  const updateCourse = async () => {
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/courses/updateCourse/${courseId}`,
        { title }
      );
      toast.success("Cours Mis à jour avec succés ");
      setTimeout(() => {
        navigate(0);
      }, [2000]);
    } catch (err) {
      console.log(err);
      toast.error(
        "Une erreur imprévu est arrivée !veuillez réssayer le plus proche possible"
      );
    }
  };
  useEffect(() => {
    if (type == "edit") {
      setTitle(courseTitle);
    }
  }, []);
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header className="p-4 d-flex gap-2 border-0">
        <img src={boardIcon} height={24} width={18} />
        <h3 className="mb-0 text-body-emphasis fw-semibold flex-1">
          ENSA ACADEMY
        </h3>
        <Button className="p-0" onClick={handleClose}>
          <FontAwesomeIcon icon={faXmark} className="fs-7" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0">
        <p className="text-body-tertiary fw-semibold fs-9">
          {type === "create"
            ? `Saisissez le titre du cours à ajouter dans la formation : "${training}"`
            : "Modifier le cours"}
        </p>
        <Row className="g-2 mb-2">
          <Col xs={12}>
            <Form.Control
              type="text"
              placeholder="Nom du cours"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              //dans notre cas c'est sera course.title.
              // J'ai mis tag pour respecter les noms de mes data static
            />
          </Col>
          <Col xs="auto" sm={9} className="flex-1">
            <Button
              variant="primary"
              className="w-100"
              onClick={type == "create" ? addCourseToTraining : updateCourse}
            >
              <FontAwesomeIcon icon={faEnvelope} className="fs-10 me-sm-2" />
              <span className="d-none d-sm-inline-block">
                {type === "create" ? "Ajouter" : "Modifier le cours"}
              </span>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default CreateCourseModal;
