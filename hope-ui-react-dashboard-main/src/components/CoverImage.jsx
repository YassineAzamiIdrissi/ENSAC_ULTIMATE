import React, { useState } from "react";
import { Button } from "react-bootstrap";
import generic43 from "../assets/images/team/33.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTimes } from "@fortawesome/free-solid-svg-icons";

const CoverImage = ({ handleClose, cover }) => {
  return (
    <>
      <img
        src={cover}
        alt="cover"
        className="w-100"
        style={{ minHeight: 150, maxHeight: 280 }}
      />
    </>
  );
};

export default CoverImage;
