import {
  faEdit,
  faEye,
  faPencil,
  faTrash,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const ChaptersList = ({ training, task, className, chapterId }) => {
  // LOGIQUE BACKEND :
  const navigate = useNavigate();
  const deleteChapter = async () => {
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/chapters/deleteSpecChapter/${chapterId}`
      );
      toast.success("Chapitre supprimée avec succés !");
      setTimeout(() => {
        navigate(0);
      }, [2000]);
    } catch (err) {
      toast.error(
        "Une erreur est survenue lors de la tentativde de supprression de ce chapitre !"
      );
      console.log(err);
    }
  };
  const redirectToEdit = async () => {
    navigate(`/dashboard/app/updateChapter/${chapterId}`);
  };

  const handleReadChapter = (chapterId) => {
    navigate(`/course/${training?._id}/chapter/${chapterId}`);
  };
  return (
    <div
      className={classNames(
        className,
        "d-flex flex-between-center hover-actions-trigger py-3 border-bottom"
      )}
    >
      <div className="mb-0 fs-8">{task?.title}</div>
      <div className="hover-actions end-0">
        <Button variant="phoenix-secondary" className="btn-icon fs-10 me-1">
          <FontAwesomeIcon
            icon={faEye}
            onClick={() => handleReadChapter(chapterId)}
          />
        </Button>
        <Button
          variant="phoenix-secondary"
          className="btn-icon fs-10 me-1"
          onClick={redirectToEdit}
        >
          <FontAwesomeIcon icon={faEdit} />
        </Button>
        <Button
          variant="phoenix-secondary"
          className="btn-icon fs-10"
          onClick={deleteChapter}
        >
          <FontAwesomeIcon icon={faTrash} className="text-danger" />
        </Button>
      </div>
    </div>
  );
};

export default ChaptersList;
