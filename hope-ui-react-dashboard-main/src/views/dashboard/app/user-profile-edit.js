import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Form, Image } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, useNavigate } from "react-router-dom";
// img
import imgsuccess from "../../../assets/images/pages/img-success.png";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";
import { upload } from "../../../utils/upload";
const UserAccountSetting = () => {
  const [show, AccountShow] = useState("A");
  // LOGIQUE BACKEND COMMENCE ICI :
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const token = currentUser?.token;
  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, []);
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [loadingPreview, setLoadingPreview] = useState(true);
  // l'entity :
  const entity = currentUser?.entity;
  // les data :
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  useEffect(() => {
    const fetchConcernedUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/${entity.toLowerCase()}s/get/${
            currentUser?.id
          }`
        );
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setEmail(response.data.email);
      } catch (err) {
        // un toast pour indiquer que des choses ne marchent pas...
        toast.error(
          "Ops! il semble que quelque chose ne marche pas, veillez actualiser cette page !"
        );
      }
    };
    if (token) {
      fetchConcernedUser();
    }
  }, []);
  const sendPic = async (file) => {
    setLoadingPreview(true);
    const urlOb = await upload(file);
    setUrl(urlOb);
    setLoadingPreview(false);
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const recups = {
        email,
        firstName,
        lastName,
        currentPassword,
        newPassword: password,
        confirmNewPassword: password2,
        newProfilePicture: url,
      };
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/${entity.toLowerCase()}s/edit`,
        recups,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      const id = currentUser?.id;
      const fullName = response.data.firstName + " " + response.data.lastName;
      const isResp = currentUser?.idResp;
      setCurrentUser({ entity, fullName, id, token, isResp });
      toast.success("Informations modifiées.");
    } catch (err) {
      toast.error(err.response.data);
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <Row>
          <Col sm="12" lg="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">Assistant Simple</h4>
                </div>
              </Card.Header>
              <Card.Body>
                <Form
                  id="form-wizard1"
                  className="text-center mt-3"
                  onSubmit={handleUpdate}
                >
                  <ul id="top-tab-list" className="p-0 row list-inline">
                    <li
                      className={` ${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Account" ? " active done" : ""} ${
                        show === "A" ? "active" : ""
                      } col-lg-3 col-md-6 text-start mb-2 active`}
                      id="account"
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                          </svg>
                        </div>
                        <span>Personnel</span>
                      </Link>
                    </li>
                    <li
                      id="personal"
                      className={`${
                        show === "Personal" ? " active done" : ""
                      } ${show === "Image" ? " active done" : ""} ${
                        show === "Account" ? "active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            className="svg-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <span>Sécurité</span>
                      </Link>
                    </li>
                    <li
                      id="payment"
                      className={`${show === "Image" ? " active done" : ""} ${
                        show === "Personal" ? "active" : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span>Image</span>
                      </Link>
                    </li>
                    <li
                      id="confirm"
                      className={`${
                        show === "Image" ? " active " : ""
                      } col-lg-3 col-md-6 mb-2 text-start`}
                    >
                      <Link to="#">
                        <div className="iq-icon me-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            width="20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span>Terminer</span>
                      </Link>
                    </li>
                  </ul>
                  <fieldset
                    className={`${show === "A" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Informations du compte : </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 1 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Email : *</label>
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Prenom : *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="firstName"
                              onChange={(e) => {
                                setFirstName(e.target.value);
                              }}
                              value={firstName}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">Nom : *</label>
                            <input
                              type="text"
                              className="form-control"
                              name="lastName"
                              onChange={(e) => {
                                setLastName(e.target.value);
                              }}
                              value={lastName}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Account")}
                    >
                      Suivant
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Account" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Informations personnelles :</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 2 - 4</h2>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Nouveau mot de passe :
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password"
                              onChange={(e) => {
                                setPassword(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="form-label">
                              Confirmer le mot de passe :
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              name="password2"
                              onChange={(e) => {
                                setPassword2(e.target.value);
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      value="Next"
                      onClick={() => AccountShow("Personal")}
                    >
                      Suivant
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("A")}
                    >
                      Précédent
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Personal" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card text-start">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4">Avatar </h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 3 - 4</h2>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">
                          Télécharger votre photo :
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          name="pic"
                          accept="image/*"
                          onChange={(e) => {
                            setImage(e.target.files[0]);
                            sendPic(e.target.files[0]);
                          }}
                        />
                      </div>
                      <hr />
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="form-label"
                            style={{
                              color: "red",
                              fontWeight: "bold",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Mot de passe actuel{" "}
                            {`(obligatoire pour valider les modifications)`}:
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            name="currentPassword"
                            onChange={(e) => {
                              setCurrentPassword(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      name="next"
                      className="btn btn-primary next action-button float-end"
                      onClick={() => AccountShow("Image")}
                    >
                      Soumettre
                    </button>
                    <button
                      type="button"
                      name="previous"
                      className="btn btn-dark previous action-button-previous float-end me-1"
                      value="Previous"
                      onClick={() => AccountShow("Account")}
                    >
                      Précédent
                    </button>
                  </fieldset>
                  <fieldset
                    className={`${show === "Image" ? "d-block" : "d-none"}`}
                  >
                    <div className="form-card">
                      <div className="row">
                        <div className="col-7">
                          <h3 className="mb-4 text-left">Terminer :</h3>
                        </div>
                        <div className="col-5">
                          <h2 className="steps">Étape 4 - 4</h2>
                        </div>
                      </div>
                      <br />
                      <br />
                      <h2 className="text-success text-center">
                        <strong>SUCCÈS !</strong>
                      </h2>
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-3">
                          {" "}
                          <Image
                            src={imgsuccess}
                            className="img-fluid"
                            alt="fit-image"
                          />{" "}
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-7 text-center">
                          <h5 className="purple-text text-center">
                            Votre profile a été mis à jour
                          </h5>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserAccountSetting;
