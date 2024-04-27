import { Form, Modal, Button } from "react-bootstrap";
import Rating from "../lecture/content/Rating";

const ReviewModal = ({ show, handleClose, chapterID }) => {
  //Recuperer le ID du chpitre pour faire l'enregistrement du commenatire dans la BD
  const id = chapterID;
  return (
    <Modal show={show} onHide={handleClose} centered>
      <div className="p-4">
        <div className="d-flex flex-between-center mb-3">
          <h5 className="fs-8 mb-0">Votre note</h5>
          <button className="btn p-0 fs-10" onClick={handleClose}>
            <code>Quitter</code>
          </button>
        </div>
        <Rating iconClass="fs-5" className="mb-3" />
        <div className="mb-3">
          <h5 className="text-body-highlight mb-3">Votre commentaire</h5>
          <Form.Control as="textarea" rows={5} />
        </div>
        <div className="d-flex flex-between-center">
          <button className="btn" onClick={handleClose}>
            <code>Fermer</code>
          </button>
          <Button className="rounded-pill">Envoyer</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReviewModal;
