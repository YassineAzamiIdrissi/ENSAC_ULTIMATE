import classNames from "classnames";

import { Col, Row, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

import team60 from "../../../assets/images/team/30.webp";
import Avatar from "../../Avatar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";

const Reviews = ({ review }) => {
  return (
    <div className="border-bottom border-translucent hover-actions-trigger py-3">
      <Row className="gx-2">
        <Col xs="auto"></Col>
        <Col className="col-auto">
          {review.picture ? (
            <Avatar src={review.picture} size="s" />
          ) : (
            <Avatar size="s" variant="name">
              {review.commentator.charAt(0)}
            </Avatar>
          )}
        </Col>
        <Col className="col-auto">
          <p
            className={classNames(
              "fs-9 inbox-link text-body fw-semibold m-0 p-0"
            )}
          >
            {review.commentator}
          </p>
        </Col>
        <Col className="col-auto ms-auto">
          <Rating initialValue={review.rating} readonly iconClass="fs-9" />
        </Col>
      </Row>
      <div className="ms-4 mt-n3 mt-sm-0 ms-sm-11">
        <p className="fs-9 ps-0 text-body-tertiary mb-0 line-clamp-2">
          {review.content}
        </p>
      </div>
    </div>
  );
};

export default Reviews;
