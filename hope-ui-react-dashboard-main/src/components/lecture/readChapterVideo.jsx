import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { coursesData } from "./data";
import UnderVideo from "./content/UnderVideo";
import { Button, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Iframe } from "../CommonComponents";
import { FaPen } from "react-icons/fa";

import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "../../context/userContext";
//const FaqItem = ({ item, type }) => {
const ReadChapterVideo = () => {
  const style = {
    width: "650px",
    height: "350px",
    borderRadius: "5px",
    objectFit: "contain",
  };
  // LOGIQUE BACKEND COMMENCE ICI :::
  const { courseID, chapterID } = useParams();
  const { currentUser } = useContext(UserContext);
  const studentId = currentUser?.id;
  const [chapter, setChapter] = useState({});
  const [extObject, setExtObject] = useState(null);
  const [compChaps, setCompChaps] = useState(null);
  //Recupérer la position du chapter dans la liste correspondante
  const navigate = useNavigate();
  useEffect(() => {
    console.log("THIS IS THE CHAPTER IDDDD FROM VIDDDD ::");
    console.log(chapterID);
    // lecture de ce chapitre :
    const fetchChapter = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getChapter/${chapterID}`
        );
        setChapter(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les chapitres specc..!.."
        );
        console.log(err);
      }
    };
    fetchChapter();
  }, [chapterID]);
  useEffect(() => {
    const fetchPrevNext = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/chapters/getPrevNext/${chapterID}`
        );
        console.log(response.data);
        setExtObject(response.data);
      } catch (err) {
        toast.error("AHEYA L'ERREUR HENAA");
        console.log(err);
      }
    };
    fetchPrevNext();
  }, []);
  useEffect(() => {
    const fetchCompletedChaps = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/progressions/getComChaps/${studentId}/${courseID}`
        );
        setCompChaps(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire les chapitres completés"
        );
        console.log(err);
      }
    };
    fetchCompletedChaps();
  }, []);
  const handleProgress = async () => {
    try {
      const count = extObject.length;
      const step = (1 / count) * 100;
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/progressions/updateProgression/${studentId}/${courseID}/${step}/${extObject.next}/${chapterID}`
      );
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'essaie de mettre à jour la progression dans cette formation"
      );
      console.log(err);
    }
  };
  const moveBack = () => {
    navigate(`/course/${courseID}/chapter/${extObject.prev}`);
    navigate(0);
  };
  const moveForward = () => {
    navigate(`/course/${courseID}/chapter/${extObject.next}`);
    console.log("THIS IS THE LIST  !!!");
    console.log(compChaps);

    //if (!compChaps.some(chap => chap === chapterID))
    //if (!compChaps.includes(chapterID)) {
    //  handleProgress();
    //  toast.success("Bravo un chapitre terminé 👏");
    //}
    handleProgress();
    toast.success("Bravo un chapitre terminé 👏");
    //navigate(0);
    //Attendre 600 ms avant de naviguer vers next chap
    setTimeout(() => {
      navigate(0);
    }, 2000);
  };
  return (
    <li className="d-flex mt-6">
      <div>
        <div className="item">
          <Iframe style={style} src={chapter.video} />
        </div>
        {extObject?.next != "last" ? (
          <Row className="gx-2 p-3 ">
            {extObject && extObject.prev != "first" && (
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={6}
              >
                <Link
                  className="btn btn-primary"
                  variant="primary"
                  onClick={moveBack}
                >
                  <FontAwesomeIcon
                    style={{ marginRight: "10px" }}
                    icon={faArrowLeft}
                  />
                  Précédent
                </Link>
              </Col>
            )}
            {extObject && extObject.next != "last" && (
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={6}
              >
                <Link className="btn btn-primary" onClick={moveForward}>
                  Suivant
                  <FontAwesomeIcon
                    style={{ marginLeft: "10px" }}
                    icon={faArrowRight}
                  />
                </Link>
              </Col>
            )}
          </Row>
        ) : (
          <Row className="gx-2 p-3 ">
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              xs={6}
            >
              <Button variant="danger" onClick={handleProgress}>
                <FontAwesomeIcon
                  style={{ marginRight: "10px" }}
                  icon={<FaPen />}
                />
                Passer au Quiz..
              </Button>
            </Col>
          </Row>
        )}
        <UnderVideo chapter={chapter} />
      </div>
    </li>
  );
};

export default ReadChapterVideo;
