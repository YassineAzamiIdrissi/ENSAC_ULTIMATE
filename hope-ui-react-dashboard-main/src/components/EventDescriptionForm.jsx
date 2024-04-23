// import Dropzone from 'components/base/Dropzone';
// import ReactSelect from 'components/base/ReactSelect';
import { Col, FloatingLabel, Form } from 'react-bootstrap';

const EventDescriptionForm = ({ setEventDescription }) => {
    // Fonction pour mettre à jour la description de l'événement
    const handleDescriptionChange = (event) => {
      setEventDescription(event.target.value);
    };

  return (
    <>
      <Col xs={12} className="gy-6">
        <FloatingLabel controlId="eventDescription" label="Description">
          <Form.Control
            as="textarea"
            placeholder="Description"
            style={{ height: '128px' }}
            onChange={handleDescriptionChange}
          />
        </FloatingLabel>
      </Col>
      
  
    </>
  );
};

export default EventDescriptionForm;
