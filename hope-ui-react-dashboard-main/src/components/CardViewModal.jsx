import React, { useEffect, useState } from "react";
import { Badge, Button, Col, Modal, ProgressBar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { actionItems, addToCardItems, comments } from "../data";
import classNames from "classnames";

import CoverImage from "./CoverImage";
import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import AvatarDropdown from "./AvatarDropdown";
import CommentForm from "./CommentForm";
import Comment from "./Comment";
import useProjectProgress from "./useProjectProgress";
import axios from "axios";
import { toast } from "react-toastify";
const CardViewModal = ({ handleClose, show, project, prof, progress }) => {
  const { bgClassName, variant } = useProjectProgress(project);
  // logique backend commence ici :
  const [categories, setCategories] = useState([]);
  const [domain, setDomain] = useState("");
  const [academy, setAcademy] = useState("");
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/getCatsByAcademyId/${project.academyId}`
        );
        setCategories(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue lors de la tentative de lecture des catégories..."
        );
        console.log(err);
      }
    };
    getCategories();
  }, []);
  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/getDomainNameByAcademyId/${project.academyId}`
        );
        setDomain(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue lors de l'essaie de lecture du domaine"
        );
        console.log(err);
      }
    };
    fetchDomain();
  }, []);
  useEffect(() => {
    const fetchAcademy = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/academies/get/${project.academyId}`
      );
      setAcademy(response.data);
    };
    fetchAcademy();
  }, []);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/courses/getCoursesByTraining/${project._id}`
        );
        setCourses(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'issue de la tentative de lire les cours de cette formation"
        );
        console.log(err);
      }
    };
    getCourses();
  }, []);
  return (
    <Modal show={show} onHide={handleClose} size="lg" className="p-0">
      <Modal.Header className="position-relative p-0 overflow-hidden">
        <CoverImage handleClose={handleClose} cover={project.picture} />
      </Modal.Header>
      <Modal.Body className="p-5 px-md-6 pb-md-6">
        <Row className="g-5">
          <Col xs={12} xl={9}>
            <div className="mb-4">
              <h3 className="fw-bolder lh-sm">{project.name}</h3>
              <p className="text-body-highlight fw-semibold mb-0">
                Académie
                <h4 style={{ color: "#22A699" }}>{academy.name}</h4>
              </p>
            </div>

            <div className="d-flex align-items-center mb-4">
              <p className="text-body-highlight fw-700 mb-0 me-2">
                {progress}%
              </p>

              <ProgressBar
                now={progress}
                className={classNames("flex-1", bgClassName)}
                variant={variant}
              />
            </div>

            <div className="mb-3">
              <h6 className="text-body-secondary mb-2">Instructeur</h6>
              <h4 style={{ color: "#E72929" }}>
                {prof?.firstName + " " + prof?.lastName}
              </h4>
            </div>
            <div className="bg-body-highlight rounded-2 px-4 mb-3">
              <div className="mb-1">
                {courses.length ? (
                  courses.map((comment, index) => (
                    <Comment
                      comment={comment}
                      className={
                        index !== comments.length - 1
                          ? "border-bottom border-translucent"
                          : undefined
                      }
                      key={comment.id}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      marginLeft: "-2rem",
                      width: "115%",
                      backgroundColor: "white",
                      color: "#4E3636",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    Aucun chapitre pour le moment
                  </div>
                )}
              </div>
            </div>
          </Col>
          <Col xs={12} xl={3}>
            <h5 className="text-body-secondary mb-3">Mots Clés </h5>
            <div className="mb-6 d-flex flex-column gap-2">
              {categories.map((item, index) => (
                <Button
                  key={index}
                  variant="subtle-secondary"
                  className="w-100 text-start"
                  size="sm"
                >
                  {item}
                </Button>
              ))}
            </div>
            <h5 className="text-body-secondary mb-3">Domaine</h5>
            <div className="d-flex flex-column gap-2">
              <Button variant="warning" className="w-100 text-start" size="sm">
                {domain}
              </Button>
            </div>
          </Col>
          <div>
            <Link
              to="./composant des chapitres de ce cours...."
              className="btn btn-primary"
            >
              Commencer || Pouruivre
            </Link>
          </div>
        </Row>
      </Modal.Body>
    </Modal>
  );
};
export default CardViewModal;

/*
  {project.assigness.slice(0, 1).map((member) => (
                  <AvatarDropdown user={member} size="m" key={member.id} />
                ))}
                <Button
                  variant="phoenix-secondary"
                  className="btn-circle"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </Button>
*/
