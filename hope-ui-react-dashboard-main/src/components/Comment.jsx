import classNames from "classnames";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
const Comment = ({ comment, className }) => {
  return (
    <Row
      className={classNames(
        className,
        "justify-contnet-between g-0 py-3 align-items-start"
      )}
    >
      <Col xs={12} sm>
        <p className={classNames("fs-9 text-body-secondary mb-0")}>
          <Link className={classNames("fw-semibold")}></Link> {comment.title}
        </p>
      </Col>
      <Col xs={{ span: 12, order: 1 }} sm={{ span: "auto", order: 0 }}>
        <p className="text-body-secondary fw-semibold fs-10 mb-0">
          <ReactTimeAgo date={new Date(comment.createdAt)} locale="en-US" />
        </p>
      </Col>
    </Row>
  );
};

export default Comment;
