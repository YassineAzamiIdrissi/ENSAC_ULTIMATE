import React, { useContext, useEffect, useState } from "react";
// allo
// allo
import RevealDropdown, { RevealDropdownTrigger } from "./base/RevealDropdown";

import BoardViewModal from "./BoardViewModal";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { Badge, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CreateCourseModal from "./ModalAction/createModal";
import { UserContext } from "../context/userContext";
import axios from "axios";
import socket from "../Socket/socket";
import { toast } from "react-toastify";
import ModalBtn from "./popup";
import { Button } from "@mui/material";
import { comCss } from "./ComponentsCss";
import { NavLink } from "react-router-dom";
import { MoveRight } from "lucide-react";
const GridAndModalItem = ({ project, token }) => {
  const classes = comCss();

  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const shouldDisplay = window.location.pathname.includes("dashboard");
  const [openInviteModal, setOpenInviteModal] = useState(false);
  // LOGIQUE BACKEND :
  const { currentUser } = useContext(UserContext);
  const entity = currentUser?.entity;
  const [quiz, setQuiz] = useState(false);
  const [academy, setAcademy] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchAcademyName = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/academyNameByOneTraining/${project._id}`
        );
        setAcademy(response.data);
      } catch (err) {
        console.log("An error occured trying to fetch academy name");
        console.log(err);
      }
    };
    fetchAcademyName();
  }, []);
  const addNewDemand = async (id) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/students/enrollTraining/${id}`,
        { studentId: currentUser?.id }, 
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/dashboard/app/card-list-training"); 
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de la tentaitve de définir une nvl demande..."
      );
      console.log(err);
    }
  };
  const handleEnroll = async (id) => {
    addNewDemand(id);
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/trainings/getRoom/${id}`
    );
    const room = response.data;
    socket.emit("join_room", room);
    socket.emit("send_message", { message: "Nouvelle demande", room });
  };
  const deleteTraining = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/trainings/deleteTraining/${project._id}`
      );
      toast.success(response.data);
      setTimeout(() => {
        navigate(0);
      }, [2000]);
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de la tentative de suppression !!"
      );
      console.log(err);
    }
  };
  const addQuiz = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/quiz/createQuiz/${project._id}`
      );
      toast.info("Definissez vos questions à mettre dans ce quiz");
    } catch (err) {
      toast.error(
        "une erreur est survenue à l'essaie de définir un nouveau quiz "
      );
      console.log(err);
    }
  };
  useEffect(() => {
    const verifyQuiz = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/quiz/trainingQuizCreated/${project._id}`
        );
        setQuiz(response.data);
      } catch (err) {
        toast.error("Very spec error happened !!");
        console.log(err);
      }
    };
    verifyQuiz();
  }, []);
  return (
    <>
      <RevealDropdownTrigger
        className="position-relative rounded-2 overflow-hidden p-4 cursor-pointer"
        style={{ height: 236 }}
        onClick={() => setOpenDetailsModal(true)}
      >
        <div
          className="bg-holder"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 39.41%, rgba(0, 0, 0, 0.4) 100%), url(${project.picture})`,
          }}
        />
        <div className="position-relative h-100 d-flex flex-column justify-content-between">
          <div className="d-flex justify-content-between align-items-center">
            <Badge
              variant="phoenix"
              bg="primary"
              className="fs-10"
              data-bs-theme="light"
            >
              {academy}
            </Badge>
            {shouldDisplay && (
              <div className="z-2">
                <RevealDropdown btnClassName="btn-icon" icon={faEllipsisV}>
                  {entity == "professor" && (
                    <>
                      {quiz == "non" && (
                        <Dropdown.Item eventKey="1">
                          <Link
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={addQuiz}
                            to={`/add-quiz/${project._id}`}
                          >
                            Ajouter un quiz
                          </Link>
                        </Dropdown.Item>
                      )}
                      <Dropdown.Item eventKey="1">
                        <Link
                          style={{ textDecoration: "none", color: "inherit" }}
                          to={`/dashboard/app/courses/${project._id}`}
                        >
                          Voir les cours
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item
                        eventKey="2"
                        onClick={() => setOpenInviteModal(!openInviteModal)}
                      >
                        Ajouter un cours
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item
                        eventKey="4"
                        className="text-danger"
                        onClick={deleteTraining}
                      >
                        Supprimer
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="5" className="text-primary">
                        <Link
                          to={`/dashboard/app/update-training/${project._id}`}
                        >
                          Mettre à jour
                        </Link>
                      </Dropdown.Item>
                    </>
                  )}
                  {entity == "Student" && (
                    <Dropdown.Item eventKey="1">
                      <ModalBtn
                        sx={{ marginBottom: "10px !important" }}
                        className={`${classes.button} ${classes.course_sidebar_button_1}`}
                        label="S'enroller"
                        title="Enrollement pour ce cours"
                        description="Si vous continez, votre demande sera notifée à l'instructeur pour validation "
                      >
                        <Button
                          onClick={() => {
                            handleEnroll(project._id);
                          }}
                          component={NavLink}
                          className={`Button_hover ${classes.button} ${classes.course_sidebar_button_green}`}
                        >
                          J'accepte
                          <MoveRight id="icon" />
                        </Button>
                      </ModalBtn>
                    </Dropdown.Item>
                  )}
                </RevealDropdown>
              </div>
            )}
          </div>
          <h3 className="text-white fw-bold line-clamp-2">{project.name}</h3>
        </div>
      </RevealDropdownTrigger>
      <CreateCourseModal
        training={project.name}
        trainingId={project._id}
        token={token}
        show={openInviteModal}
        handleClose={() => setOpenInviteModal(false)}
        type={"create"}
      />
    </>
  );
};

export default GridAndModalItem;
