import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import axios from "axios";
import { toast } from "react-toastify";
import { upload } from "../../../utils/upload";
import { useNavigate, useParams } from "react-router-dom";
const AddNewProfessor = () => {
  const [files, setFiles] = useState([]);
  const [rawPicture, setRawPicture] = useState(null);
  const handleDrop = (acceptedFiles) => {
    setFiles(
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  };
  // LOGIQUE BACKEND COMMENCE ICI :
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [description, setDescription] = useState("");
  const [wait, setWait] = useState(false);
  const addNewProf = async (e) => {
    e.preventDefault();
    setError("");
    const profilePicture = await upload(rawPicture);
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
      password2: confirmPassword,
      profilePicture: profilePicture,
      phone,
      description,
    };
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/admins/newProfessor`,
        payload
      );
      toast.success("Professeur ajouté");
      console.log(resp.data);
      // navigate("/page affichante de la liste de tous les professeurs...")
    } catch (err) {
      setError(err.response.data);
      toast.error("Ajout du professeur a echoué..");
      console.log(err);
    }
  };
  // test sur la mise à jour :
  useEffect(() => {
    const getConcernedProfessor = async (id) => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/professors/get/${id}`
        );
        setFirstName(resp.data.firstName);
        setLastName(resp.data.lastName);
        setDescription(resp.data.description);
        setPhone(resp.data.phone);
        setEmail(resp.data.email);
      } catch (err) {
        toast.error("Professeur non trouvé !!");
        toast.info("Refirection réussite");
        navigate("/dashboard/app/admin-all-profs");
      }
    };
    if (params.id) {
      getConcernedProfessor(params.id);
    }
  }, []);
  const updateProfessor = async (e) => {
    e.preventDefault();
    let profilePicture;
    let payload;
    if (files.length) {
      profilePicture = await upload(rawPicture);
      payload = {
        firstName,
        lastName,
        newPassword: password,
        confirmNewPassword: confirmPassword,
        profilePicture,
        description,
        email,
        phone,
      };
    } else {
      payload = {
        firstName,
        lastName,
        newPassword: password,
        confirmNewPassword: confirmPassword,
        description,
        email,
        phone,
      };
    }

    try {
      toast.info("Veuillez attendre un petit peu...");
      const resp = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/admins/editProf/${params.id}`,
        payload
      );
      toast.success("Informations modifiées...✅");
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'essaie d'invoquer cette action.. "
      );
      console.log(err);
    }
  };
  return (
    <Form
      onSubmit={params.id ? updateProfessor : addNewProf}
      className="m-9 "
      style={{ padding: "20px", marginTop: "50px" }}
    >
      <h1>Définissez un professeur : </h1>
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
          {error}
        </p>
      )}
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <Col sm={8}>
          {" "}
          <p className="mb-0 mt-3">
            Renseignez les informations du professeur :
          </p>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingEventInput" label="Prénom">
            <Form.Control
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingEventInput" label="Nom">
            <Form.Control
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingEventInput" label="Mot de passe">
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingEventInput" label="Mot de passe">
            <Form.Control
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Num° du telephone"
          >
            <Form.Control
              type="text"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col sm={6}>
          <FloatingLabel controlId="floatingEventInput" label="Email">
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        {/*DYNAMIC DROPDOWN......*/}
        {/* <Col sm={6}>
          <FloatingLabel controlId="floatingSelectTask" label="Académies">
            <Form.Select onChange={(e) => {}}>
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
        </Col> */}
        {/* <Col sm={6}>
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
        </Col> */}
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
        {/* <Col sm={6} md={12} className="gy-1">
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
        </Col> */}
        {/* 
        <Col sm={6} md={12} className="gy-1">
          <FloatingLabel controlId="floatingVenueInput" label="Venue">
            <Form.Control type="text" placeholder="Venue" />
          </FloatingLabel>
        </Col> */}

        <Col xs={12} className="gy-6">
          <FloatingLabel controlId="eventDescription" label="Description">
            <Form.Control
              as="textarea"
              placeholder="Statut du professeur"
              style={{ height: "128px" }}
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </FloatingLabel>
        </Col>
        <Col xs={6} className="gy-6">
          <code>Charger une image</code>
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
        <Button
          disabled={wait}
          type="submit"
          variant="outline"
          style={{ background: "#348C82", color: "white" }}
          className="w-100 mb-3"
        >
          {params.id ? "Modifier" : "Ajouter professeur"}
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

export default AddNewProfessor;
