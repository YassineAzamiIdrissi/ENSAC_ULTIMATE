import React, { useContext, useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import { upload, uploadVideo } from "../../../utils/upload";
const AddNewTraining = () => {
  //const [eventDescription, setEventDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [video, setVideo] = useState([]);
  const [rawPicture, setRawPicture] = useState("");
  const [rawVideo, setRawVideo] = useState("");
  const trainingIsCreated = true;
  const handleDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  const handleDropVideo = (acceptedFiles) => {
    setVideo(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  // LOGIQUE BACKEND COMMENCE ICI :
  const [loading, setLoading] = useState(false);
  const [empNames, setEmpNames] = useState([]);
  const [categories, setCategories] = useState([]);
  const { currentUser } = useContext(UserContext);
  // form data one by 1 :
  const [name, setName] = useState("");
  const [academyId, setAcademyId] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const token = currentUser?.token;
  useEffect(() => {
    const fetchEmpNames = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/professors/getEmpAcademies`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setEmpNames(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchEmpNames();
  });
  const getCatsByAcademy = async (value) => {
    if (value == "Choisissez l'académie") {
      setCategories([]);
    }
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/domains/getCatsByAcademy/${value}`
      );
      setCategories(response.data);
    } catch (err) {
      console.log("ERROR TRYING TO FETCH ACADEMIES");
      console.log(err);
    }
  };
  const getAcademyIdByName = async (value) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/academies/getAcademyId/${value}`
      );
      setAcademyId(response.data);
    } catch (err) {
      console.log("An error occure trying to fetch academy Id by its name : ");
      console.log(err);
    }
  };
  const addTraining = async (e) => {
    e.preventDefault();
    setLoading(true);
    const video_ = await uploadVideo(rawVideo);
    const picture_ = await upload(rawPicture);
    const payload = {
      academyId,
      name,
      category,
      picture: picture_,
      video: video_,
      difficulty,
      subtitle,
      description,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/trainings/addTraining`,
        payload,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
      setError("");
      toast.success("Formation Ajoutée avec succées ");
    } catch (err) {
      toast.err("An error occured...");
      console.log("An error occured trying to define the training !!");
      console.log(err);
      setError("An error occured !!");
    }
    setLoading(false);
  };
  return (
    <Form
      onSubmit={addTraining}
      className="m-9 "
      style={{ padding: "20px", marginTop: "50px" }}
    >
      {error && (
        <p
          style={{
            background: "rgb(255, 63, 63)",
            color: "white",
            fontSize: "0.8rem",
            padding: "0.6rem 1rem",
            borderRadius: "0.3rem",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          Go out bro
          {error}
        </p>
      )}
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <Col sm={8}>
          {" "}
          <p className="mb-0 mt-3">CREER UNE NOUVELLE FORMATION</p>
        </Col>
        {trainingIsCreated && (
          <Col sm={4}>
            {" "}
            <Button
              variant="Outline"
              style={{ background: "#348C82", color: "white" }}
              className="w-100 mb-3"
            >
              <FontAwesomeIcon icon={faPlus} className="me-2" />
              Ajouter un cours à cette formation
            </Button>
          </Col>
        )}
        <Col sm={6}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Nom de la formation"
          >
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingSelectTask" label="Académies">
            <Form.Select
              onChange={(e) => {
                getCatsByAcademy(e.target.value);
                getAcademyIdByName(e.target.value);
              }}
            >
              <option>Choisissez l'académie</option>
              {empNames.map((name, index) => {
                return (
                  <option key={index} value={name}>
                    {name}
                  </option>
                );
              })}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingSelectTask" label="Categories">
            <Form.Select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option>Choisissez une catégorie</option>
              {categories?.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </Form.Select>
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
      </Form.Check>*/}
        <Col sm={6} md={12} className="gy-1">
          <code style={{ marginRight: "20px" }}>Niveau de difficulté</code>
          <Form.Check type="radio" id="offline" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="Facile"
              onChange={(e) => {
                if (e.target.checked) {
                  setDifficulty(e.target.value);
                }
              }}
            />
            <Form.Check.Label htmlFor="offline">Facile</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="Moyen"
              onChange={(e) => {
                if (e.target.checked) {
                  setDifficulty(e.target.value);
                }
              }}
            />
            <Form.Check.Label htmlFor="both">Moyen</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="Difficile"
              onChange={(e) => {
                if (e.target.checked) {
                  setDifficulty(e.target.value);
                }
              }}
            />
            <Form.Check.Label htmlFor="both">Difficile</Form.Check.Label>
          </Form.Check>
          <Form.Check type="radio" id="both" className="form-check-inline">
            <Form.Check.Input
              type="radio"
              name="statusRadio"
              value="Expert"
              onChange={(e) => {
                if (e.target.checked) {
                  setDifficulty(e.target.value);
                }
              }}
            />
            <Form.Check.Label htmlFor="both">Expert</Form.Check.Label>
          </Form.Check>
        </Col>
        {/* 
        <Col sm={6} md={12} className="gy-1">
          <FloatingLabel controlId="floatingVenueInput" label="Venue">
            <Form.Control type="text" placeholder="Venue" />
          </FloatingLabel>
        </Col> */}

        <Col xs={12} className="gy-6">
          <FloatingLabel
            controlId="eventDescription"
            label="Description Générale"
          >
            <Form.Control
              as="textarea"
              placeholder="Description"
              style={{ height: "128px" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={12} className="gy-6">
          <FloatingLabel
            controlId="eventDescription"
            label="Description spécifique du contenu"
          >
            <Form.Control
              as="textarea"
              placeholder="Description spécifique"
              style={{ height: "128px" }}
              onChange={(e) => {
                setSubtitle(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>

        <Col xs={6} className="gy-6">
          <code>Charger une image de couverture</code>
          <Dropzone onDrop={handleDrop} setRawFile={setRawPicture} />
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
        <Col xs={6} className="gy-6">
          <code>Charger une vidéo de couverture</code>
          <Dropzone onDrop={handleDropVideo} setRawFile={setRawVideo} />
          {video.map((file) => (
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
        <Button
          type="submit"
          variant="outline"
          style={{ background: "#348C82", color: "white" }}
          className="w-100 mb-3"
        >
          Ajouter La formation
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

export default AddNewTraining;
