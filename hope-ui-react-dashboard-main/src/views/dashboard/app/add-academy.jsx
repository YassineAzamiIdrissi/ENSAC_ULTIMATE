import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { uploadVideo } from "../../../utils/upload";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const AddAcademy = () => {
  const [files, setFiles] = useState([]);
  const handleDrop = (acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  // LOGIQUE BACKEND COMMENCE ICI :
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [trainingId, setTrainingId] = useState("");
  useEffect(() => {
    const getConcernedCourse = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/courses/getCourse/${id}`
        );
        setTrainingId(response.data.trainingId);
      } catch (err) {
        console.log("An error occured truing to fetch the spec training Id");
        console.log(err);
        toast.error("Loading of the training id failed !");
      }
    };
    getConcernedCourse();
  }, []);
  const addNewChapter = async (e) => {
    e.preventDefault();
    console.log("Adding chap....");
    setLoading(true);
    try {
      const video_ = await uploadVideo(files);
      const payload = { title, content, video: video_ };
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/chapters/addChapterToCourse/${id}`,
        payload
      );
      toast.success("Chapitre ajouté avec succés");
      setTimeout(() => {
        navigate(`/dashboard/app/courses/${trainingId}`);
      }, []);
    } catch (err) {
      toast.error("Qlq chose qui n'a pas bien marché...");
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <Form
      className="m-9 "
      style={{ padding: "20px", marginTop: "50px" }}
      onSubmit={addNewChapter}
    >
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <h4 className="mb-0 mt-3">CREER UNE NOUVELLE ACADEMIE</h4>
        <Col sm={12}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Titre du chapitre"
          >
            <Form.Control
              type="text"
              placeholder=""
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
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

        <Col xs={12} className="gy-6">
          <FloatingLabel controlId="eventDescription" label="Contenu">
            <Form.Control
              as="textarea"
              placeholder="Contenu"
              style={{ height: "128px" }}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>

        <Col xs={12} className="gy-6">
          <code>Charger la vidéo démonstrative</code>
          <Dropzone onDrop={handleDrop} setRawFile={setFiles} />
          {/* {files.map((file) => (
            <div key={file.name}>
              <img
                src={file.preview}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                alt="preview"
                className="mt-1 rounded"
              />
            </div>
          ))} */}
        </Col>
        <Button type="submit" variant="primary" className="w-100 mb-3">
          Ajouter Chapitre
        </Button>
      </Row>
      {loading && (
        <Col sm={12}>
          <p
            style={{
              background: "#FFD23F",
              color: "white",
              fontWeight: "bold",
              fontSize: "1rem",
              padding: "0.6rem 1rem",
              borderRadius: "0.3rem",
              display: "block",
              marginBottom: "1rem",
            }}
          >
            Veuillez patienter un peu...
          </p>
        </Col>
      )}
    </Form>
  );
};

export default AddAcademy;
