import { Form, Modal, Button } from "react-bootstrap";
import Rating from "../lecture/content/Rating";
import { useEffect, useState, useContext } from "react";

import { UserContext } from "../../context/userContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const ReviewModal = ({ show, handleClose, commentsList, setCommentsList }) => {
  //Recuperer le ID du chpitre pour faire l'enregistrement du commenatire dans la BD
  // LOGIQE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const entity = currentUser?.entity;
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const { chapterID } = useParams();
  // ajout du commentaire :
  const handleAddComment = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments/newComment`,
        {
          elementId: chapterID,
          content: comment,
          rating,
          entity,
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      handleClose();
      setCommentsList([...commentsList]);
    } catch (err) {
      toast.error("Echec d'ajout d'un commentaire");
      console.log(err);
    }
  };
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="p-4">
        <div className="d-flex flex-between-center mb-3">
          <h5 className="fs-8 mb-0">Votre note</h5>
          <button className="btn p-0 fs-10" onClick={handleClose}>
            <code>Quitter</code>
          </button>
        </div>
        <Rating
          iconClass="fs-5"
          className="mb-3"
          rating={rating}
          setRating={setRating}
        />
        <div className="mb-3">
          <h5 className="text-body-highlight mb-3">Votre commentaire</h5>
          <Form.Control as="textarea" rows={5} onChange={handleChange} />
        </div>
        <div className="d-flex flex-between-center">
          <button className="btn" onClick={handleClose}>
            <code>Fermer</code>
          </button>
          <Button className="rounded-pill" onClick={handleAddComment}>
            Envoyer
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
