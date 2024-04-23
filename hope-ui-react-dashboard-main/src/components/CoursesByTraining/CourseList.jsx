import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useEffect, useState } from "react";
import classNames from "classnames";

import { faPen, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import ModalLeft from "./ModalLeft";
import ChaptersList from "./Chapters";
import { Chapters } from "../../dataChapter";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
const CourseList = ({ handleClose, selectedItem, training }) => {
  const [chapters, setChapters] = useState([]);
  useEffect(() => {
    const fetchChapters = async () => {
      console.log("Fetch chapters Called !!!");
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getChapsByCourse/${selectedItem}`
        );
        setChapters(response.data);
      } catch (err) {
        console.log(
          "An error occured trying to fetch the chapters of this Course : "
        );
        console.log(err);
      }
    };
    if (selectedItem) {
      fetchChapters();
    }
  }, [selectedItem]);
  return (
    <ModalLeft
      open={!!selectedItem}
      onHide={handleClose}
      className="todolist-offcanvas"
      placement="end"
      fixed
      backdropClassName="opacity-0"
    >
      {selectedItem && (
        <>
          <div className="p-5 p-md-6">
            <div className="d-flex flex-between-center mb-4 gap-3">
              <h2 className="fw-bold fs-6 mb-0 text-body-highlight line-clamp-1">
                Liste des chapitres :
              </h2>
              <Button
                variant="phoenix-secondary"
                onClick={handleClose}
                className="btn-icon flex-shrink-0"
              >
                <FontAwesomeIcon icon={faXmark} />
              </Button>
            </div>
            <div className="mb-6">
              <div className="d-flex align-items-center mb-3">
                <h4 className="text-body me-3">Description</h4>
                <Button variant="link" className="text-decoration-none p-0">
                  <FontAwesomeIcon icon={faPen} />
                </Button>
              </div>
              <p className="text-body-highlight mb-0">{training.description}</p>
            </div>
            <div className="mb-6">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className="mb-3">Chapitres du cours</h4>
                <Button variant="phoenix-primary">
                  <FontAwesomeIcon icon={faPlus} className="me-1" />
                  <Link to={`/dashboard/app/addChapter/${selectedItem}`}>
                    Ajouter un chapitre à ce cours
                  </Link>
                </Button>
              </div>
              <div className="mb-3">
                {chapters.map((item, index) => (
                  <ChaptersList
                    key={index}
                    task={item}
                    chapterId={item._id}
                    className={classNames({
                      "border-top border-translucent": index === 0,
                    })}
                  />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </ModalLeft>
  );
};

export default CourseList;
