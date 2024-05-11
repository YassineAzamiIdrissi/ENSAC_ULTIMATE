import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Nav,
  Pagination,
  Row,
  Stack,
  Tab,
  Button,
  Container,
} from "react-bootstrap";
import Reviews, { reviews } from "./Reviews";
import Rating from "./Rating";
import ReviewModal from "../../ModalAction/ReviewModal";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const UnderVideo = ({ chapter }) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);
  // LOGIQUE BACKEND ::
  const [commentsList, setCommentsList] = useState([]);
  const { chapterID } = useParams();
  useEffect(() => {
    const fetchAllComments = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/comments/getAllCommentsOfChap/${chapterID}`
        );
        setCommentsList(response.data);
        console.log("THOSE ARE FETCHED COMMENTS FOR THIS CHAP :");
        console.log(response.data);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de récup. les commentaires d'un chapitre spec"
        );
        console.log(err);
      }
    };
    fetchAllComments();
  }, [commentsList]);
  return (
    <>
      <Container tabClassName defaultActiveKey="description">
        <Nav
          variant="underline"
          className="mb-4 mt-2 p-2"
          style={{ borderRadius: "50px", width: "650px" }}
        >
          <Nav.Item style={{ paddingLeft: "10px" }}>
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ paddingLeft: "10px" }}>
            <Nav.Link eventKey="reviews">Commentaires</Nav.Link>
          </Nav.Item>
          <Button
            variant="phoenix-primary"
            className="rounded-pill"
            onClick={() => setOpenReviewModal(true)}
            style={{ position: "absolute", right: "30px" }}
          >
            Commenter ce chapitre
          </Button>
        </Nav>
        <Row className="gx-3 gy-7 w-600 ">
          <Col xs={12} lg={7} xl={8}>
            <Tab.Content>
              <Tab.Pane
                eventKey="description"
                className="text-body-emphasis pe-lg-6 pe-xl-12 "
                style={{ width: "600px" }}
              >
                <p className="mb-5">{chapter.content}</p>
              </Tab.Pane>

              <Tab.Pane eventKey="reviews" style={{ width: "600px" }}>
                <Card>
                  <Card.Header className="pb-0 border-bottom-0">
                    <Stack
                      gap={3}
                      direction="horizontal"
                      className="flex-wrap justify-content-between"
                    >
                      <Button
                        variant="primary"
                        className="rounded-pill"
                        onClick={() => setOpenReviewModal(true)}
                      >
                        Commenter ce chapitre
                      </Button>
                    </Stack>
                  </Card.Header>
                  <Card.Body>
                    {commentsList.length
                      ? commentsList.map((review) => (
                          <Reviews key={review._id} review={review} />
                        ))
                      : "Aucun commentaire pour l'instant"}
                    <Pagination className="mb-0 justify-content-center m-1">
                      <Pagination.Prev>
                        <FontAwesomeIcon icon={faChevronLeft} />
                      </Pagination.Prev>
                      <Pagination.Item>1</Pagination.Item>
                      <Pagination.Item>2</Pagination.Item>
                      <Pagination.Item active>3</Pagination.Item>
                      <Pagination.Next>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </Pagination.Next>
                    </Pagination>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
      <ReviewModal
        setCommentsList={setCommentsList}
        commentsList={commentsList}
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
      />
    </>
  );
};

export default UnderVideo;
