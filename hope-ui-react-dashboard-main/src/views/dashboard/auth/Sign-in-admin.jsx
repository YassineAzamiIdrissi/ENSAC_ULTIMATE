import { faKey, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Form, Row, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../../assets/images/auth/Adminbanner.jpg";
import { UserContext } from "../../../context/userContext";
import { useContext, useState } from "react";
import axios from "axios";
const SignInFormAdmin = () => {
  // local session :
  const { setCurrentUser } = useContext(UserContext);
  // navigator :
  const navigate = useNavigate();
  // error :
  const [error, setError] = useState("");
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
        `${process.env.REACT_APP_BASE_URL}/admins/loginAdmin`,
        formData
      );
      setCurrentUser(response.data);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response.data);
      console.log(err);
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

              <div className="position-relative text-center">
                <p className="text-body-tertiary">Entrer vos informations</p>

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
                      type="password"
                      onChange={handleChange}
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

export default SignInFormAdmin;
