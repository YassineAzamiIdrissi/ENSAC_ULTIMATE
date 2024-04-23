import React from 'react';

import {  Modal,  } from 'react-bootstrap';
import CoverImage from './CoverImage';


const BoardViewModal = ({
  handleClose,
  show,
  project
}) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="xl"
      contentClassName="overflow-hidden"
    >
      <Modal.Header className="position-relative p-0">
        <CoverImage handleClose={handleClose} />
      </Modal.Header>
      
    </Modal>
  );
};

export default BoardViewModal;

