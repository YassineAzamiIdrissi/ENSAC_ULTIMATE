import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import Dropzone from "../../../components/DropZone/Dropzone";
import { uploadVideo, upload } from "../../../utils/upload";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
const AdminAddAcademy = () => {
  const [files, setFiles] = useState(null);
  const [rawFile, setRawFile] = useState(null);
  const params = useParams();
  const navigate = useNavigate();
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
  const [domains, setDomains] = useState(null);
  // form data :
  const [name, setName] = useState(null);
  const [description, setDescription] = useState(null);
  const [id, setId] = useState(null);
  // reading domains from the db..
  useEffect(() => {
    const fetchDomains = async () => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/domains/getAllDomains`
        );
        setDomains(resp.data);
        console.log(resp.data);
      } catch (err) {
        toast.error("An error trying to fetch domains for the dropdown!");
      }
    };
    fetchDomains();
  }, []);
  // handle sumbmitting :
  const handleSubmit = async (e) => {
    e.preventDefault();
    const picture = await upload(files);
    const payload = {
      name,
      description,
      picture,
      domain: id,
    };
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/academies/addAcademy`,
        payload
      );
      toast.success("académie définie avec succés");
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'essaie de définir cette académie"
      );
    }
    // const picture = await upload();
    // const payload = {
    //   name,
    //   description,
    // };
    // try {
    //   const response = await axios.post(
    //     `${process.env.REACT_APP_BASE_URL}/...`
    //   );
    // } catch (err) {
    //   toast.error("Une erreur est survenue, vérifiez les logs");
    //   console.log(err);
    // }
  };
  // update :
  useEffect(() => {
    const fetchAcademy = async (id) => {
      try {
        const resp = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/academies/get/${id}`
        );
        setDescription(resp.data.description);
        setName(resp.data.name);
        setId(resp.data.domain);
      } catch (err) {
        toast.error(
          "Une erreur est survenue à l'essaie de lire l'académie concernée.."
        );
        toast.info("Redirection...");
        navigate("/dashboard/app/admin-all-academies");
      }
    };
    if (params.id) {
      fetchAcademy(params.id);
    }
  }, []);
  const updateAcademy = async (e) => {
    e.preventDefault();
    let picture;
    let payload;
    if (rawFile) {
      console.log("1");
      picture = await upload(rawFile);
      payload = { name, picture, domain: id, description };
    } else {
      console.log("2");
      payload = { name, domain: id, description };
    }

    try {
      const resp = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/admins/updateAcademy/${params.id}`,
        payload
      );
      toast.success("Informations modifiées...");
    } catch (err) {
      toast.error("Check your logs.. ");
      console.log(err);
    }
  };
  return (
    <Form
      className="m-9 "
      style={{ padding: "20px", marginTop: "50px" }}
      onSubmit={params.id ? updateAcademy : handleSubmit}
    >
      <Row className="justify-content-between align-items-end g-3 mb-5 mt-9">
        <h4 className="mb-0 mt-3">CREER UNE NOUVELLE ACADEMIE</h4>
        <Col sm={6}>
          <FloatingLabel
            controlId="floatingEventInput"
            label="Nom de l'académie"
          >
            <Form.Control
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
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
        <Col sm={6}>
          <FloatingLabel controlId="floatingSelectTask" label="Domaine">
            <Form.Select
              onChange={(e) => {
                setId(e.target.value);
              }}
            >
              <option selected={!params.id}>Selectionner un domaine</option>
              {domains?.map((dmn, index) => (
                <option
                  selected={params.id && dmn._id == id}
                  value={dmn._id}
                  key={index}
                >
                  {dmn.name}
                </option>
              ))}
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col xs={12} className="gy-6">
          <FloatingLabel
            controlId="eventDescription"
            label="Description de l'académie"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          >
            <Form.Control
              as="textarea"
              placeholder="Contenu"
              style={{ height: "128px" }}
              value={description}
            />
          </FloatingLabel>
        </Col>
        <Col xs={12} className="gy-6">
          <code>Charger l'image représentative de l'académie..</code>
          <Dropzone onDrop={handleDrop} setRawFile={setRawFile} />
        </Col>
        <Button type="submit" variant="primary" className="w-100 mb-3">
          {params.id ? "Modifier" : "Ajouter Académie"}
        </Button>
      </Row>
      {false && (
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

export default AdminAddAcademy;
