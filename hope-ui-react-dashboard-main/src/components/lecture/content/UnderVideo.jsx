import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
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

const UnderVideo = ({ chapter }) => {
  const [openReviewModal, setOpenReviewModal] = useState(false);

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
                    {reviews.map((review) => (
                      <Reviews key={review.id} review={review} />
                    ))}
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
        show={openReviewModal}
        handleClose={() => setOpenReviewModal(false)}
        chapterID={chapter.id}
      />
    </>
  );
};

export default UnderVideo;
