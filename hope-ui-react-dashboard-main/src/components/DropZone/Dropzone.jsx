// Dropzone.js
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import classNames from "classnames";
import imageIcon from "./image-icon.png";
const Dropzone = ({ onDrop, setRawFile }) => {
  const dropzoneOptions = {
    onDrop,
    accept: "image/*,video/*",
    multiple: true,
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone(dropzoneOptions);

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input
        {...getInputProps()}
        onChange={(e) => {
          setRawFile(e.target.files[0]);
        }}
      />
      {isDragActive ? (
        <p>
          <code>Déposez la sélection</code>
        </p>
      ) : (
        <p>
          Glissez puis deposez votre media{" "}
          <code> Ou cliquez pour parcourir vos medias </code>
        </p>
      )}
      <img
        className="mt-3"
        src={imageIcon}
        width={classNames({ 40: 40 })}
        alt=""
      />
    </div>
  );
};

export default Dropzone;
