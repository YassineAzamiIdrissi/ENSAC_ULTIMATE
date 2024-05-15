import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../../components/Card";

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

// img
import shap1 from "../../../assets/images/shapes/01.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap3 from "../../../assets/images/shapes/03.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap5 from "../../../assets/images/shapes/05.png";
import shap6 from "../../../assets/images/shapes/06.png";
import { UserContext } from "../../../context/userContext";
import axios from "axios";
import defaultPic from "./defaultStudent.png";
import { toast } from "react-toastify";
import socket from "../../../Socket/socket";
const FormationList = () => {
  // LOGIQUE BACKEND  ::
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const id = currentUser?.id;
  const token = currentUser?.token;
  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, []);
  // lecture des demandes non répondues :
  const [naDemands, setNaDemands] = useState([]);
  const [naDisp, setNaDisp] = useState([]);
  const [receiver, setReceiver] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    const getNaDemands = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/enrollments/demandsToAnswer`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const sortedData = response.data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setNaDemands(sortedData);
      } catch (err) {
        toast.error(
          "Une erreur est survenue en essaie de lire les notification non répondues !!"
        );
        console.log(err);
      }
    };
    getNaDemands();
  }, []);
  // getting suitable details (image////) :
  useEffect(() => {
    const getDemandsObjects = async () => {
      let objsTable = [];
      try {
        for (let i = 0; i < naDemands.length; ++i) {
          const studentResp = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/students/get/${naDemands[i].studentId}`
          );
          const trainingResp = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${naDemands[i].trainingId}`
          );
          const studentName =
            studentResp.data.firstName + " " + studentResp.data.lastName;
          const enrollId = naDemands[i]._id;
          const studentPic = studentResp.data.profilePicture;
          const trainingName = trainingResp.data.name;
          const dispObj = {
            studentPic,
            studentName,
            trainingName,
            enrollId,
            studentId: naDemands[i].studentId,
          };
          objsTable.push(dispObj);
        }
        setNaDisp(objsTable);
      } catch (err) {
        toast.error(
          "Erreur survenue dans la tentative de lire les objets de demandes "
        );
        console.log(err);
      }
    };
    getDemandsObjects();
  }, [naDemands]);
  // donner l'accés à l'étudiant :
  const acceptDemand = async (id, toNotified, content) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/professors/acceptEnroll/${id}`
      );
      toast.success(response.data);
      const newList = naDisp.filter((item) => item.enrollId != id);
      setNaDisp(newList);
      // Envoie de la notif à l'etudiant....
      const response_2 = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/notifications/newNotification`,
        {
          toNotified,
          title: "demande d'inscption accéptée",
          picture: "https://cdn-icons-png.flaticon.com/512/2550/2550322.png",
          content,
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'issue de l'essaie d'accepter cette demande"
      );
      console.log(err);
    }
  };
  const refuseDemand = async (idP) => {
    try {
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/professors/refuseEnroll/${idP}`,
        { idResp: idP }
      );
      const newList = naDisp.filter((item) => item.enrollId != idP);
      setNaDisp(newList);
      toast.success("Demande refusée avec succés");
    } catch (err) {
      toast.error(
        "Une erreur est survenue à l'essaie de refuser cette demande"
      );
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header className="d-flex justify-content-between">
                <div className="header-title">
                  <h4 className="card-title">La liste de mes académies</h4>
                </div>
              </Card.Header>
              <Card.Body className="px-0">
                <div className="table-responsive">
                  <table
                    id="user-list-table"
                    className="table table-striped"
                    role="grid"
                    data-toggle="data-table"
                  >
                    <thead>
                      <tr className="ligth">
                        <th>Profile</th>
                        <th>Nom complet</th>
                        <th>Formation</th>

                        <th min-width="100px">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {naDisp.map((item, idx) => (
                        <tr key={idx}>
                          <td className="text-center">
                            <Image
                              className="bg-soft-primary rounded img-fluid avatar-40 me-3"
                              src={item.studentPic || defaultPic}
                              alt="profile"
                            />
                          </td>
                          <td>{item.studentName}</td>
                          <td>
                            <h5>{item.trainingName}</h5>
                          </td>
                          <td>
                            <div style={{ display: "flex", gap: "1rem" }}>
                              <Link
                                onClick={() => {
                                  acceptDemand(
                                    item.enrollId,
                                    item.studentId,
                                    item.trainingName
                                  );
                                }}
                                style={{
                                  height: "40px",
                                  width: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  background: "green",
                                  borderRadius: "50%",
                                  color: "white",
                                  fontSize: "20px",
                                  fontWeight: "bold",
                                }}
                              >
                                <IoMdCheckmarkCircleOutline />
                              </Link>
                              <Link
                                onClick={() => {
                                  refuseDemand(item.enrollId);
                                }}
                                style={{
                                  height: "40px",
                                  width: "40px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  background: "red",
                                  borderRadius: "50%",
                                  color: "white",
                                  fontSize: "20px",
                                  fontWeight: "bold",
                                }}
                              >
                                <FaXmark />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default FormationList;
