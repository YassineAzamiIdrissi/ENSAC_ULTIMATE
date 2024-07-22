import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const AddProfToAcademyModal = ({ show, handleClose, academy }) => {
  const [allProfessors, setAllProfessors] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const { id } = academy;
  const academyId = id;
//   console.log("academyId", academyId);
  useEffect(() => {
    const fetchAllProfessors = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/professors/getAllProfs`
        );
        setAllProfessors(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les professeurs"
        );
        console.log(err);
      }
    };
    fetchAllProfessors();
  }, []);

  const availableProfessors = allProfessors?.filter(
    (professor) => !academy?.professors.includes(professor._id)
  );

  const handleSelectProfessor = (event) => {
    setSelectedValue(event.target.value);
  };

//   console.log("selectedValue -> ", selectedValue);

  const handleAddProfToAcademy = async () => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/admins/profWorksFor/${selectedValue}`,
        { academyId }
      );
      toast.success("Le professeur a été ajouté avec succès à l'académie");
      handleClose();
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de l'ajout du professeur à l'académie"
      );
    //   console.log(err.response?.data || err.message || err);
    }
  };

  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header className="p-4 d-flex gap-2 border-0">
        <Chip
          variant="outlined"
          label={academy.name}
          avatar={<Avatar sizes="medium" src={academy.bg} />}
          size="medium"
          sx={{
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.05)",
              border: "none",
            },
            textTransform: "uppercase",
          }}
        />
        <Button
          className="p-0"
          onClick={handleClose}
          style={{ background: "white", border: "none", color: "red" }}
        >
          <FontAwesomeIcon icon={faXmark} className="fs-7" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0">
        <p className="text-body-tertiary fw-semibold fs-9">
          Ajouter un <strong className="fw-bolder">Professeur</strong> à{" "}
          <strong className="fw-bolder">{academy?.name}</strong> pour qu'il
          puisse partager des ressources sous la bannière de cette académie.
        </p>
        <Row className="g-2 mb-2">
          <Col xs="8" sm={3} className="flex-1">
            <Form.Select onChange={handleSelectProfessor}>
              <option value="">Sélectionner un professeur</option>
              {availableProfessors?.map((professor) => (
                <option key={professor._id} value={professor._id}>
                  {professor.firstName} {professor.lastName}
                </option>
              ))}
            </Form.Select>
          </Col>
          <Col xs="auto" sm={3}>
            <Button
              variant="phoenix-success"
              onClick={handleAddProfToAcademy}
              disabled={!selectedValue}
            >
              <span className="d-none d-sm-inline-block">Valider</span>
            </Button>
          </Col>
        </Row>
        <div className="py-2 border-bottom border-translucent border-dashed position-relative mb-4">
          <span className="bg-body-emphasis px-1 position-absolute top-50 start-50 translate-x-50 fs-9 fw-semibold"></span>
        </div>
        <Row className="g-2">
          <Col xs="auto" sm={9} className="flex-1">
            <Button
              variant="phoenix-secondary"
              startIcon={
                <FontAwesomeIcon icon={faLink} className="ms-2 fs-9" />
              }
              className="w-100"
            >
              <span className="d-none d-sm-inline">
                Sélectionner un professeur puis valider.
              </span>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default AddProfToAcademyModal;
