import React from "react";
import { Nav, Badge } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ListItemCard = ({ courses }) => {
  const navigate = useNavigate();

  const { chapterID } = useParams();
  console.log(chapterID);

  return (
    <>
      {courses.chapters.map((ch, i) => (
        <Nav.Link
          onClick={() => {
            navigate(`/course/1/chapter/${ch.id}`);
            navigate(0);
          }}
          key={ch.id}
          eventKey={ch.id}
          className={`btn bg-body-emphasis w-100 px-3 pt-4 pb-3 fs-8 mt-1 mb-1 ${
            chapterID == ch.id ? "active" : ""
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
            {courses.title}
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
