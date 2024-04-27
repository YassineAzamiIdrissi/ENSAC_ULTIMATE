import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { coursesData } from "./data";
import UnderVideo from "./content/UnderVideo";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Iframe } from "../CommonComponents";

//const FaqItem = ({ item, type }) => {
const ReadChapterVideo = () => {
  const style = {
    width: "650px",
    height: "350px",
    borderRadius: "5px",
    objectFit: "contain",
  };
  const { chapterID } = useParams();
  const [chapter, setChapter] = useState({});
  //Recupérer la position du chapter dans la liste correspondante
  const navigate = useNavigate();

  useEffect(() => {
    // Recherche du chapitre correspondant à chapterID dans les données du cours
    // Rechercher dans tous les cours
    // Rechercher dans tous les chapitres de tous les cours
    // Mettre à jour l'état du chapitre avec le chapitre trouvé
    const foundChapter = coursesData
      .flatMap((course) => course.chapters)
      .find((chapter) => chapter.id === parseInt(chapterID));

    if (foundChapter) {
      setChapter(foundChapter);
    }
  }, [chapterID]);

  console.log("Chapter selected : ", chapter);

  return (
    <li className="d-flex mt-6">
      <div>
        <div className="item">
          {/* <video style={style} src={chapter.video} controls /> */}
          <Iframe style={style} src={chapter.video} />
        </div>
        {/* <div className={'flex align-items-center justify-content-center'}></div> */}
        <Row className="gx-2 p-3 ">
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={6}
          >
            <Button variant="primary">
              <FontAwesomeIcon
                style={{ marginRight: "10px" }}
                icon={faArrowLeft}
              />
              Précédent
            </Button>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            xs={6}
          >
            <Button variant="primary">
              Suivant
              <FontAwesomeIcon
                style={{ marginLeft: "10px" }}
                icon={faArrowRight}
              />
            </Button>
          </Col>
        </Row>
        <UnderVideo chapter={chapter} />
      </div>
    </li>
  );
};

export default ReadChapterVideo;
