import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Alert = (props) => {
  const { Alertcontent } = props;
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow((value) => !value);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleShow} centered>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>{Alertcontent}</Modal.Body>
        <Button variant="secondary" onClick={handleShow}>
          OK
        </Button>
        {/* <Modal.Footer>
          
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default Alert;
