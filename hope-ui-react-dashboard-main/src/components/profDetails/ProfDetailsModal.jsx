import {
  faClose,
  faEdit,
  faPencil,
  faPhoneAlt,
  faPhoneVolume,
  faTrash,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Badge, Button, Col, Modal, Row } from "react-bootstrap";
import TrainingInfo from "./TrainingInfo";
import axios from "axios";
import { Avatar, Chip } from "@mui/material";

const ProfDetailsModal = ({ show, handleClose, profTrainings, profId }) => {
  const ProfActions = [
    {
      icon: faPencil,
      label: "Modifier",
      path: `/dashboard/app/admin-update-professor/${profId}`,
    },
    {
      icon: faTrash,
      label: "Supprimer",
      path: `#!`,
    },
  ];

  const [professor, setProfessor] = useState(null);
  const [professorTrainings, setProfTrainings] = useState([]);
  const [profWorksFor, setProfWorksFor] = useState([]);

  useEffect(() => {
    const fetchProfessor = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/professors/get/${profId}`
        );
        setProfessor(response.data);

        // Récupérer les trainings en fonction de la liste des trainings du professeur
        if (response.data.trainingsList.length > 0) {
          const trainingResponses = await Promise.all(
            response.data.trainingsList.map((trainingId) =>
              axios.get(
                `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${trainingId}`
              )
            )
          );
          setProfTrainings(trainingResponses.map((res) => res.data));
        }

        // Récupérer les trainings en fonction de la liste des workFor du professeur
        if (response.data.worksFor.length > 0) {
          const trainingResponses = await Promise.all(
            response.data.worksFor.map((itemId) =>
              axios.get(
                `${process.env.REACT_APP_BASE_URL}/academies/get/${itemId}`
              )
            )
          );
          setProfWorksFor(trainingResponses.map((res) => res.data));
        }
      } catch (err) {
        // toast.error("Une erreur est survenue à l'essaie de lire le professeur");
        // console.log(err);
      }
    };
    fetchProfessor();
  }, [profId]);

  //   console.log(professor);
  //   console.log(professorTrainings);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        fullscreen="md-down"
        centered
        className="modal-md p-0"
        contentClassName="rounded-top-md-4 rounded-bottom-md-4 overflow-hidden h-100"
        scrollable
      >
        <Modal.Header className="position-relative p-0" style={{ height: 200 }}>
          <img
            //src="https://via.placeholder.com/600x200"
            src={professor?.profilePicture}
            alt=""
            className="w-100 h-100 fit-cover"
          />
        </Modal.Header>
        <Modal.Body className="p-0 ">
          <Row className="gy-4 py-0 gx-0 h-100">
            <Col xs={12} lg={8} className="h-100 scrollbar">
              <Row className="mt-0 top-0 gy-4 pb-3 gx-0 px-3">
                <Col xs={12}>
                  <h6 className="d-flex text-body-tertiary fw-bolder lh-sm mt-1 gap-x-2">
                    <Chip
                      label={professor?.firstName + " " + professor?.lastName}
                      color="default"
                      size="medium"
                      avatar={<Avatar src={professor?.profilePicture} />}
                    />
                    <Chip
                      icon={<FontAwesomeIcon icon={faPhoneVolume} />}
                      label={professor?.phone}
                      variant="outlined"
                    />

                    {professor?.isResponsable && (
                      <Chip
                      icon={<FontAwesomeIcon icon={faUserCheck} />}
                      label="Professeur responsable"
                      variant="outlined"
                    />
                    )}
                  </h6>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    DESCRIPTION
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    {professor?.description}
                  </h6>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    ACADEMIES
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {profWorksFor.map((training) => (
                      <>
                        <Chip
                          variant="outlined"
                          size="small"
                          label={training.name}
                          color="info"
                        />
                      </>
                    ))}
                  </div>
                </Col>

                <Col xs={4} sm={3}>
                  <h6 className="text-body-tertiary fw-bolder lh-sm mt-1">
                    CONTRIBUTIONS
                  </h6>
                </Col>
                <Col xs={8} sm={9}>
                  <div className="d-flex flex-column gap-3 mb-2">
                    {professorTrainings.map((training) => (
                      <TrainingInfo training={training} key={training.name} />
                    ))}
                  </div>
                </Col>
              </Row>
            </Col>

            <Col
              xs={12}
              lg={4}
              className="border-start-lg border-translucent h-100 scrollbar"
            >
              <div>
                <div className="px-3">
                  <div>
                    <h5 className="mb-3 mt-4">Actions</h5>
                    <div className="d-flex flex-wrap flex-column gap-2 flex-sm-row flex-lg-column">
                      {ProfActions.map((action) => (
                        <Button
                          variant="subtle-secondary"
                          className="text-start text-nowrap"
                          size="sm"
                          key={action.label}
                          onClick={() => {
                            if (action?.path) {
                              window.location.replace(action.path);
                            }
                          }}
                        >
                          <FontAwesomeIcon
                            icon={action.icon}
                            className="me-2"
                          />
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="justify-content-between text-red">
          <Button
            variant="link"
            onClick={handleClose}
            style={{ color: "black", fontWeight: "bold" }}
          >
            <FontAwesomeIcon
              icon={faClose}
              transform="up-1"
              style={{ marginRight: "5px" }}
            />
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfDetailsModal;
