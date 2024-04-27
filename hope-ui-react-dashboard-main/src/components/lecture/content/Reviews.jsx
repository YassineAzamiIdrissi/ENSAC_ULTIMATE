import classNames from "classnames";

import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import team60 from "../../../assets/images/team/30.webp";
import Avatar from "../../Avatar";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "./Rating";

export const reviews = [
  {
    id: 1,
    sender: {
      name: "Jessica Ball",
      avatar: team60,
    },
    rating: 2,
    content:
      "Greetings. I have purchased some socks under the bundle offer you availed this week. According to the offer I was thrilled to get a 25% off of any product I bought. Regardless, I had to pay the exact full price for them...",
  },
  {
    id: 2,
    sender: {
      name: "Danny Reid",
      avatar: team60,
    },
    rating: 4,

    content: `Hello! As I've mentioned before, we have this huge order deals to ship within this month. Also, the financial report is attached to this review. Hopefully, you'll find it useful for the company.`,
  },
];
const Reviews = ({ review }) => {
  return (
    <div className="border-bottom border-translucent hover-actions-trigger py-3">
      <Row className="gx-2">
        <Col xs="auto">

        </Col>
        <Col className="col-auto">
          {review.sender.avatar ? (
            <Avatar src={review.sender.avatar} size="s" />
          ) : (
            <Avatar size="s" variant="name">
              {review.sender.name.charAt(0)}
            </Avatar>
          )}
        </Col>
        <Col className="col-auto">
          <p
            className={classNames(
              "fs-9 inbox-link text-body fw-semibold m-0 p-0"
            )}
          >
            {review.sender.name}
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
