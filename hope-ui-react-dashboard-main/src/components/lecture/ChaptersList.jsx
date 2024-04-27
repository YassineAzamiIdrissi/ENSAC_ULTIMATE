import { useEffect, useState } from "react";
import { Col, Nav } from "react-bootstrap";
import { coursesData } from "./data";
import ListItemCard from "./ListItemCard";

const ChaptersList = () => {
  const [course, setCourse] = useState([]);
  //Je recupère le ID DU cours et je charge l'nesemble de ses chapitres

  useEffect(() => {
    setCourse(coursesData);
  }, [course]);

  console.log("course: ", course);
  // console.log("CHAPTERS: ", course.chapters);

  return (
    <Col md={6} xl={5} xxl={4}>
      <Nav
        className="faq-subcategory-tab scrollbar align-content-start w-sm-75 w-md-100 mx-auto mb-4 gap-3"
        style={{ width: "90%", maxHeight: "200px !important " }}
      >
        {course?.map((ChaptersOfTheCourse) => (
          <Nav.Item key={ChaptersOfTheCourse.id} className="w-100 h-500">
            <ListItemCard courses={ChaptersOfTheCourse} />
          </Nav.Item>
        ))}
      </Nav>
    </Col>
  );
};

export default ChaptersList;
