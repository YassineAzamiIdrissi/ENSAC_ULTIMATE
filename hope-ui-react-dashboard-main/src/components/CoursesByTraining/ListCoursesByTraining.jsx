import { faFilter, faPlus, faSort } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

// import SearchBox from 'components/common/SearchBox';
// import TodoItemDetailsOffcanvas from 'components/modules/project-management/todo-list/TodoItemDetailsOffcanvas';
import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ChaptersListItem from "./ChaptersByCoursesItem";
import { CoursesList } from "../../dataChapter";
import CourseList from "./CourseList";
import CreateCourseModal from "../ModalAction/createModal";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from "axios";
const ListCoursesByTraining = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openInviteModal, setOpenInviteModal] = useState(false);
  const { id } = useParams();
  const TrainingID = id;

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedItem]);
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const [courses, setCourses] = useState([]);
  const [training, setTraining] = useState("");
  useEffect(() => {
    const getConcerendTraining = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${id}`
        );
        setTraining(response.data);
      } catch (err) {
        console.log("Error trying to fetch concerned Training : ");
        console.log(err);
      }
    };
    getConcerendTraining();
  }, []);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/courses/getCoursesByTraining/${id}`
        );
        setCourses(response.data);
      } catch (err) {
        console.log("Error fetching courses : ");
        console.log(err);
      }
    };
    fetchCourses();
  }, []);
  /*  
      training={project.name}
      trainingId={project._id}
      token={token}
  */
  const behave = (value) => {
    setSelectedItem(value);
    console.log("Selected item is now : ");
    console.log(selectedItem);
  };
  return (
    <div style={{ marginTop: "30px" }} className="mb-9">
      <h2 className="mb-4">
        Cours de la formation : {training?.name}
        <span className="text-body-tertiary fw-normal">
          ({courses?.length})
        </span>
      </h2>
      <div className="d-flex align-items-center flex-wrap gap-x-5 gap-y-3 mb-3">
        {/* <SearchBox placeholder="Search tasks" style={{ maxWidth: '30rem' }} /> */}
        <Button
          variant="phoenix-primary"
          onClick={() => setOpenInviteModal(!openInviteModal)}
        >
          <FontAwesomeIcon icon={faPlus} className="me-1" />
          Ajouter un cours à cette formation
        </Button>
        <div>
          <Button
            variant="link"
            className="p-0 fs-9 text-body-tertiary text-decoration-none me-3"
            startIcon={
              <FontAwesomeIcon icon={faFilter} className="fs-10 me-1" />
            }
          >
            {!courses?.length && "Aucun cours enregistré pour l'instant"}
            {courses?.length == 1 && "Un seul cours enregistré"}
            {courses?.length > 1 && `${courses?.length} cours enregistrés `}
          </Button>
        </div>
      </div>
      <div className="todolist-container ms-n1 ps-1 scrollbar">
        {courses.length != 0 &&
          courses.map((item, index) => (
            <>
              <ChaptersListItem
                key={index}
                courseTitle={item.title}
                content={item}
                courseId={item._id}
                className={classNames({
                  "border-top": index === 0,
                })}
                fullLayoutBreakpoints={["md"]}
                onClick={() => {
                  console.log("Selected item is now : ");
                  setSelectedItem(item._id);
                }}
              />
            </>
          ))}
        <CourseList
          handleClose={() => setSelectedItem(null)}
          selectedItem={selectedItem}
          training={training}
        />
      </div>
      <CreateCourseModal
        show={openInviteModal}
        training={training?.name}
        trainingId={training?._id}
        token={token}
        handleClose={() => setOpenInviteModal(false)}
        type={"create"}
      />
    </div>
  );
};

export default ListCoursesByTraining;
