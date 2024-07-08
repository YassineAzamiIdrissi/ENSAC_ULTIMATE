import React, { useContext, useState } from "react";
import { Row, Col, Image, Form, Button, ListGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";
// img
import auth1 from "../../../assets/images/auth/laern_5.jpeg";
import { toast } from "react-toastify";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/students/login`,
        form
      );
      const user = await result.data;
      setCurrentUser(user);
      navigate("/dashboard/app/list-training");
    } catch (err) {
      toast.error("Echec de connexion ");
      console.log(err.response.data);
      setError(err.response.data);
    }
  };
  return (
    <>
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    <h2 className="mb-2 text-center">Se connecter</h2>
                    <p className="text-center">
                      Connecter vous à vtre plateforme d'apprentissage
                    </p>
                    <Form onSubmit={loginUser}>
                      {" "}
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
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="email" className="">
                              Email
                            </Form.Label>
                            <Form.Control
                              type="email"
                              className=""
                              name="email"
                              aria-describedby="email"
                              placeholder=" "
                              onChange={handleChange}
                              value={form.email}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">
                              Mot de passe
                            </Form.Label>
                            <Form.Control
                              type="password"
                              className=""
                              name="password"
                              aria-describedby="password"
                              placeholder=" "
                              onChange={handleChange}
                              value={form.password}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-between">
                          <Link to="/auth/recoverpw">Mot de passe oublié?</Link>
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button type="submit" variant="btn btn-primary">
                          Se connecter
                        </Button>
                      </div>
                      <p className="mt-3 text-center">
                        Je n'ai pas de compte ?{" "}
                        <Link to="/auth/sign-up" className="text-underline">
                          Je m'inscris
                        </Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <div className="sign-bg">
              <svg
                width="280"
                height="230"
                viewBox="0 0 431 398"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.05">
                  <rect
                    x="-157.085"
                    y="193.773"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 -157.085 193.773)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="7.46875"
                    y="358.327"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(-45 7.46875 358.327)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="61.9355"
                    y="138.545"
                    width="310.286"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 61.9355 138.545)"
                    fill="#3B8AFF"
                  />
                  <rect
                    x="62.3154"
                    y="-190.173"
                    width="543"
                    height="77.5714"
                    rx="38.7857"
                    transform="rotate(45 62.3154 -190.173)"
                    fill="#3B8AFF"
                  />
                </g>
              </svg>
            </div>
          </Col>
          <Col
            md="6"
            className="d-md-block d-none bg-primary p-0 mt-n1 vh-100 overflow-hidden"
          >
            <Image
              src={auth1}
              className="Image-fluid gradient-main "
              alt="images"
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SignIn;
