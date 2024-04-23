import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Form, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../../assets/images/auth/30.png";
//import "../../../css/theme.min.css";

import { UserContext } from "../../../context/userContext";
import { useContext, useState } from "react";
import axios from "axios";
import socket from "../../../Socket/socket";
const SignInFormProf = () => {
  const [error, setError] = useState("");
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/professors/login`,
        formData
      );
      setCurrentUser(response.data);
      if (response.data.isResp) {
        let room = "";
        for (let i = 0; i < response.data.academyResponsables.length; ++i) {
          room += response.data.academyResponsables[i];
        }
        socket.emit("join_room", room);
        console.log("Professor room : " + room);
      }
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response.data);
    }
  };
  return (
    <Row className="vh-100 g-0">
      <Col lg={6} className="position-relative d-none d-lg-block">
        <div
          className="bg-holder"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        />
      </Col>
      <Col lg={6}>
        <Row className="flex-center h-100 g-0 px-4 px-sm-0">
          <Col sm={6} lg={7} xl={6}>
            <>
              <div className="text-center mb-7">
                <h3 className="text-body-highlight">Se connecter</h3>
                <p className="text-body-tertiary">Acceder à mon compte ENSAC</p>
              </div>

              <div className="position-relative">
                <hr className="bg-body-secondary mt-5 mb-4" />
              </div>
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
              <div className="divider-content-center">
                Entrer mes informations{" "}
              </div>
              <Form onSubmit={handleSubmit}>
                {" "}
                <Form.Group className="mb-3 text-start">
                  <Form.Label htmlFor="email">Email address</Form.Label>
                  <div className="form-icon-container">
                    <Form.Control
                      id="email"
                      type="email"
                      name="email"
                      onChange={handleChange}
                      className="form-icon-input"
                    />
                    <FontAwesomeIcon
                      icon={faUser}
                      className="text-body fs-9 form-icon"
                    />
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 text-start">
                  <Form.Label htmlFor="password">Password</Form.Label>
                  <div className="form-icon-container">
                    <Form.Control
                      id="password"
                      name="password"
                      onChange={handleChange}
                      type="password"
                      className="form-icon-input"
                    />
                    <FontAwesomeIcon
                      icon={faKey}
                      className="text-body fs-9 form-icon"
                    />
                  </div>
                </Form.Group>
                <Row className="flex-between-center mb-7">
                  <Col xs="auto">
                    <Link to={`#`} className="fs-9 fw-semibold">
                      Mot de passe oublié ?
                    </Link>
                  </Col>
                </Row>
                <Button variant="primary" className="w-100 mb-3" type="submit">
                  Se connecter
                </Button>
                <div className="text-center">
                  <Link to={`#`} className="fs-9 fw-bold">
                    Créer un compte
                  </Link>
                </div>
              </Form>
            </>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default SignInFormProf;
