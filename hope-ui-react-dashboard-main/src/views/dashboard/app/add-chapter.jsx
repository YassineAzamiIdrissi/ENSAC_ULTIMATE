import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { useParams } from "react-router-dom";
//import Editor from "../../../components/Editor/Editor";
import EditorDesc from "../../../components/Editor/EditorDesc";

const AddChapterToCourse = () => {
  //const [eventDescription, setEventDescription] = useState("");

  const { id } = useParams();
  const [files, setFiles] = useState([]);

  const handleDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };

  return (
    <Form className="m-9 " style={{ padding: "20px", marginTop: "50px" }}>
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <h4 className="mb-0 mt-3">
          AJOUTER UN COURS A : "formation correspondant à " {id}{" "}
        </h4>
        <Col sm={12}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Libellé du cours"
          >
            <Form.Control type="text" placeholder="" />
          </FloatingLabel>
        </Col>

        {/* <Col sm={6}>
          <FloatingLabel controlId="floatingSelectPrivacy" label="topic">
            <Form.Select>
              <option>Select topic</option>
              <option value="1">Data Privacy One</option>
              <option value="2">Data Privacy Two</option>
              <option value="3">Data Privacy Three</option>
            </Form.Select>
          </FloatingLabel>
        </Col> */}
        {/* <Col xs={12} className="mt-4">
          <Form.Check type="radio" id="online" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="option1"
              defaultChecked
            />
            <Form.Check.Label htmlFor="online">Online</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="offline" className="form-check-inline">
            <Form.Check.Input type="radio" name="statusRadio" value="option2" />
            <Form.Check.Label htmlFor="offline">Offline</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input type="radio" name="statusRadio" value="option3" />
            <Form.Check.Label htmlFor="both">Both</Form.Check.Label>
          </Form.Check>
        </Col> 
        <Col sm={6} md={12} className="gy-1">
          <FloatingLabel controlId="floatingVenueInput" label="Venue">
            <Form.Control type="text" placeholder="Venue" />
          </FloatingLabel>
        </Col> */}

        {/* <Col xs={12} className="gy-6">
          <FloatingLabel controlId="eventDescription" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "128px" }}
            />
          </FloatingLabel>
        </Col> */}

        <Col xs={12} className="gy-6">
          <div className="mb-3 flex-1">
            <EditorDesc
              options={{
                height: "100%",
              }}
            />
          </div>
        </Col>

        <Col xs={12} className="gy-6">
          <code>Charger la video du cours</code>
          <Dropzone onDrop={handleDrop} />
          {files.map((file) => (
            <div key={file.name}>
              <img
                src={file.preview}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="preview"
                className="mt-1 rounded"
              />
            </div>
          ))}
        </Col>
        <Button variant="primary" className="w-100 mb-3">
          Charger
        </Button>
      </Row>
    </Form>
  );
};

export default AddChapterToCourse;
