import React, { useState } from "react";
import { Row, Col, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import Card from "../../../components/Card";

// img

import auth5 from "../../../assets/images/auth/laern_6.jpeg";
//import auth5 from "../../../assets/images/auth/learning.avif";
import { ImageIcon, MoveLeftIcon, Upload } from "lucide-react";
//import toast from "react-hot-toast";
import { toast } from "react-toastify";
import { upload } from "../../../utils/upload";

import axios from "axios";
import Alert from "../../../components/popupAlert";

import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const SignUp = () => {
  const [loadingPreview, setLoadingPreview] = useState(true);
  const [url, setUrl] = useState("");
  const [avatarChanged, setAvatarChanged] = useState(false);
  const [dispPic, setDispPic] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const [error, setError] = useState("");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendPic = async (file) => {
    setLoadingPreview(true);
    console.log(file);
    const urlOb = await upload(file);
    setUrl(urlOb);
    setForm({ ...form, profilePicture: urlOb });
    setLoadingPreview(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/students/register`,
        form
      );
      toast.success("Registered Successfully");
      setForm({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
      });

      setAvatarChanged(false);
      setDispPic(false);
      setError("");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };
  //console.log(form);

  //if (form.role) toast.info(`Vous êtes ${form.role}`);

  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <div className="col-md-6 d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden">
            <Image
              src={auth5}
              className="Image-fluid gradient-main "
              alt="images"
            />
          </div>
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent auth-card shadow-none d-flex justify-content-center mb-0">
                  <Card.Body>
                    <Link
                      to="/dashboard"
                      className="navbar-brand d-flex align-items-center justify-items-center mb-3 TextCenter"
                    >
                      <MoveLeftIcon color="#000" className="icon" />
                      <h4 className="logo-title ms-3  "> ENSAF</h4>
                    </Link>
                    <p className="text-center">Créer votre compte</p>
                    <Form onSubmit={handleSubmit}>
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
                          <Alert Alertcontent={error} />
                          {error}
                        </p>
                      )}
                      <Row>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="lastname" className="">
                              Nom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              name="lastname"
                              onChange={handleChange}
                              value={form.lastname}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="6">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="firsName" className="">
                              Prenom
                            </Form.Label>
                            <Form.Control
                              type="text"
                              className=""
                              name="firstname"
                              onChange={handleChange}
                              value={form.firstname}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              name="email"
                              onChange={handleChange}
                              value={form.email}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Mot de passe
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              name="password"
                              onChange={handleChange}
                              value={form.password}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="confirm-password" className="">
                              Confirmer le mot de passe
                            </Form.Label>
                            <Form.Control
                              type="password"
                              name="password2"
                              onChange={handleChange}
                              value={form.password2}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <div
                        style={{
                          marginBottom: "10px",
                        }}
                      >
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                          >
                            Photo de profil (Optionnelle)
                          </AccordionSummary>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              position: "relative",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                flex: 1,
                                height: "10rem",
                                borderRadius: "5px",

                                alignItems: "center",
                                justifyContent: "center",
                                position: "relative",
                                cursor: "pointer",
                                border: " 0.5px dashed gray",
                                margin: "5px",
                              }}
                            >
                              <input
                                style={{
                                  opacity: 0,
                                  position: "absolute",
                                  top: "0",
                                  left: "0",
                                  bottom: "0",
                                  right: "0",
                                  width: "100%",
                                  height: "100%",
                                  cursor: "pointer",
                                }}
                                name="picture"
                                id="picture"
                                type="file"
                                onChange={(e) => {
                                  sendPic(e.target.files[0]);
                                }}
                              />
                              <Upload size={34} />
                            </div>
                            <div
                              id="profile-preview"
                              style={{
                                width: "10rem",
                                height: "10rem",
                                borderRadius: "5px",
                                display: "flex",
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "5px",
                                overflow: "hidden",
                              }}
                            >
                              {loadingPreview ? (
                                <CircularProgress />
                              ) : (
                                <img
                                  style={{ width: "100%", objectFit: "cover" }}
                                  src={url}
                                  alt=""
                                />
                              )}
                            </div>
                          </div>
                        </Accordion>
                      </div>

                      {/* {dispPic &&
                        (!loadingPreview ? (
                          <div
                            id="profile-preview"
                            style={{
                              width: "10rem",
                              height: "10rem",
                              position: "relative",
                            }}
                          >
                            <img
                              style={{ width: "100%", objectFit: "cover" }}
                              src={url}
                            />
                            <AiFillCloseCircle
                              onClick={() => {
                                setDispPic(false);
                                setAvatarChanged(false);
                              }}
                              style={{
                                position: "absolute",
                                top: "0",
                                right: "0",
                                color: "white",
                                cursor: "pointer",
                              }}
                            />
                          </div>
                        ) : (
                          <CircularProgress />
                          // <h5 style={{ fontWeight: "bold" }}>
                          //   Loading preview....
                          // </h5>
                        ))}
                      <input
                        style={{ visibility: "hidden" }}
                        name="picture"
                        id="picture"
                        type="file"
                        onChange={(e) => {
                          setProfilePicture(e.target.files[0]);
                        }}
                      /> */}
                      <div className="d-grid justify-content-center">
                        <Button
                          className="btn btn-primary"
                          type="submit"
                          variant="primary"
                        >
                          S'inscrire
                        </Button>
                      </div>

                      <p className="mt-3 text-center">
                        J'ai déjà un compte {" ? "}
                        <Link to="/auth/sign-in" className="text-underline">
                          Se connecter
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignUp;

/*
  avatarChanged && (
                          <button
                            style={{
                              fontSize: "1.3rem",
                              width: "3rem",
                              height: "3rem",
                              display: "grid",
                              placeItems: "center",
                              borderRadius: "50%",
                              cursor: "pointer",
                              background: "#5356FF",
                              color: "white",
                            }}
                          >
                            <FaCheck />
                          </button>
                        )
*/
