import React, { useEffect, useState } from "react";
import { Nav, Badge } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
const ListItemCard = ({ courses, trainingId }) => {
  const navigate = useNavigate();
  // LOGIQUE BACKEND COMMENCE ICI ::
  const [course_, setCourse_] = useState(null);
  const { chapterID } = useParams();
  useEffect(() => {
    const readCourseFromChap = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getCourseFromChapId/${chapterID}`
        );
        setCourse_(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les cours par chapitres"
        );
        console.log(err);
      }
    };
    readCourseFromChap();
  }, []);
  return (
    <>
      {courses.map((ch, i) => (
        <Nav.Link
          onClick={() => {
            navigate(`/course/${trainingId}/chapter/${ch._id}`);
            navigate(0);
          }}
          key={ch._id}
          eventKey={ch._id}
          className={`btn bg-body-emphasis w-100 px-3 pt-4 pb-3 fs-8 mt-1 mb-1 ${
            chapterID == ch._id ? "active" : ""
          }`}
          style={{
            border: chapterID == ch.id ? "5px solid blue" : "",
          }}
        >
          <Badge
            variant="black"
            className="fs-10"
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              background: "#000",
            }}
          >
            {course_?.title}
          </Badge>
          {/* {ch.content} */}
          {ch.title}
          <span className="d-block text-body fw-normal mb-0 fs-9">
            {courses.content}
          </span>
        </Nav.Link>
      ))}
    </>
  );
};

export default ListItemCard;
