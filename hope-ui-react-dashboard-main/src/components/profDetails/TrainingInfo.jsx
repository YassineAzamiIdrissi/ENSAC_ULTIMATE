import {
  faComment,
  faPencil,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";

const TrainingInfo = ({ training }) => {
  return (
    <div className="border-bottom border-translucent d-flex flex-row pb-3">
      <img
        src={training.picture}
        alt=""
        className="rounded-3"
        height={64}
        width={64}
      />

      <div
        className="flex-1 ms-3 d-flex flex-column"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <h6 className="lh-sm">{training?.name}</h6>
        <p className="lh-1 fs-9 text-body-tertiary fw-medium mb-0">
          {training.category}
        </p>
        <p className="lh-1 fs-9 text-body-tertiary fw-medium mb-0">
          {training.createdAt.substring(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default TrainingInfo;
