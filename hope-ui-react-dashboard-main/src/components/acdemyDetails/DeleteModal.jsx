import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Avatar, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteModal = ({ show, handleClose, academy }) => {
  return (
    <Modal
      show={show}
      centered
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header className="p-4 d-flex gap-2 border-0">
        <Chip
          variant="outlined"
          label={academy.name}
          avatar={<Avatar sizes="medium" src={academy.bg} />}
          size="medium"
          sx={{
            color: "black",
            fontWeight: "bold",
            "&:hover": {
              background: "rgba(0, 0, 0, 0.05)",
              border: "none",
            },
            textTransform: "uppercase",
          }}
        />
        <Button
          className="p-0"
          onClick={handleClose}
          style={{ background: "white", border: "none", color: "red" }}
        >
          <FontAwesomeIcon icon={faXmark} className="fs-7" />
        </Button>
      </Modal.Header>
      <Modal.Body className="p-4 pt-0">
        <p className="text-body-tertiary fw-semibold fs-9 text-center">
          Souhaitez-vous continuer la{" "}
          <strong className="fw-bolder " style={{ color: "red" }}>
            suppression
          </strong>{" "}
          de <strong className="fw-bolder">{academy?.name}</strong> ?
          <p>Cette action effacera toutes les ressources de cette acdémie.</p>
        </p>

        <Row className="g-2">
          <Col xs="auto" sm={9} className="flex-1">
            <Button variant="danger" className="w-100">
              <FontAwesomeIcon
                icon={faTrash}
                style={{ marginRight: "10px" }}
                className="ms-2 fs-9"
              />

              <span className="d-none d-sm-inline ml-3">
                Continuer la suppression
              </span>
            </Button>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
