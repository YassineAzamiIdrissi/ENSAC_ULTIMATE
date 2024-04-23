import React, { useContext, useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import { toast } from "react-toastify";
import { upload, uploadVideo } from "../../../utils/upload";
import { useNavigate, useParams } from "react-router-dom";

const UpdateTraining = () => {
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
  // const addTraining = async (e) => {
  //   e.preventDefault();
  //   const video_ = await uploadVideo(rawVideo);
  //   const picture_ = await upload(rawPicture);
  //   const payload = {
  //     academyId,
  //     name,
  //     category,
  //     picture: picture_,
  //     video: video_,
  //     difficulty,
  //     subtitle,
  //     description,
  //   };
  //   try {
  //     const response = await axios.post(
  //       `${process.env.REACT_APP_BASE_URL}/trainings/addTraining`,
  //       payload,
  //       {
  //         withCredentials: true,
  //         headers: { Authorization: `Bearer ${token}` },
  //       }
  //     );
  //     console.log(response.data);
  //     setError("");
  //     toast.success("Formation Ajoutée avec succées ");
  //   } catch (err) {
  //     console.log("An error occured trying to define the training !!");
  //     console.log(err);
  //     setError("An error occured !!");
  //   }
  // };
  // LOGIQUE DE MODIFICATION :
  const { id } = useParams();
  const navigate = useNavigate();
  const [training, setTraining] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentAcademy, setCurrentAcademy] = useState("");
  useEffect(() => {
    const fetchThisTraining = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${id}`
        );
        setTraining(response.data);
        setName(response.data.name);
        setCurrentCategory(response.data.category);
        setDescription(response.data.description[0]);
        setSubtitle(response.data.subtitle[0]);
        setDifficulty(response.data.difficulty);
      } catch (err) {
        console.log(
          "An error occured trying to fetch this training (for update)"
        );
        console.log(err);
      }
    };
    fetchThisTraining();
  }, []);
  useEffect(() => {
    const fetchAcademyName = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/academyNameByOneTraining/${id}`
        );
        console.log(response.data);
        setCurrentAcademy(response.data);
        getCatsByAcademy(response.data);
      } catch (err) {
        console.log(
          "Error occured trying to fetch academy name by training id"
        );
        console.log(err);
      }
    };
    fetchAcademyName();
  }, []);
  const applyMods = async (e) => {
    e.preventDefault();
    try {
      const video_ = rawVideo ? await uploadVideo(rawVideo) : "";
      const picture_ = rawPicture ? await upload(rawPicture) : "";
      const payload = {
        name,
        category: currentCategory,
        picture: picture_,
        video: video_,
        difficulty,
        subtitle,
        description,
      };
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/trainings/updateSpecTraining/${id}`,
        payload
      );
      console.log(response.data);
      toast.success("Ressource est mise à jour avec soccés ");
      setTimeout(() => {
        navigate("/dashboard/app/list-training");
      }, [2000]);
    } catch (err) {
      console.log("An error occured trying to update this ressource ");
      toast.error("Oooowps something went wrong");
      console.log(err);
    }
  };
  return (
    <Form
      onSubmit={applyMods}
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
          <p className="mb-0 mt-3">Modifier la formation </p>
        </Col>{" "}
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
              disabled
            >
              <option>{training && currentAcademy}</option>
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
              <option>{training && currentCategory}</option>
              {categories?.map((cat, index) => {
                if (cat == currentCategory) {
                  return;
                }
                return (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                );
              })}
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
              checked={difficulty == "Facile"}
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
              checked={difficulty == "Moyen"}
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
              checked={difficulty == "Difficile"}
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
              checked={difficulty == "Expert"}
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
              value={description}
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
              value={subtitle}
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
        <Button type="submit" variant="primary" className="w-100 mb-3">
          Modifier La formation
        </Button>
      </Row>
    </Form>
  );
};

export default UpdateTraining;
