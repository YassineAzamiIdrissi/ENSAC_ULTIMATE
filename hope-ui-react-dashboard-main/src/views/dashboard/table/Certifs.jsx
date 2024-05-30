import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Image, Table, Button } from "react-bootstrap";
import Card from "../../../components/Card";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//progressbar
import Progress from "../../../components/progress.js";

// img
import shap1 from "../../../assets/images/shapes/01.png";
import shap2 from "../../../assets/images/shapes/02.png";
import shap3 from "../../../assets/images/shapes/03.png";
import shap4 from "../../../assets/images/shapes/04.png";
import shap5 from "../../../assets/images/shapes/05.png";
import shap6 from "../../../assets/images/shapes/06.png";
import { UserContext } from "../../../context/userContext.js";
import CertificateGenerator from "../../../components/Certification/CertificateGenerator.jsx";
const Certifs = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, []);
  // LOGIQUE BACKEND COMMENCE ICI :::
  const [certifications, setCertifications] = useState(null);
  useEffect(() => {
    const fetchCertifs = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/certifs/getMyCertifs`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      setCertifications(response.data);
      console.log(response.data);
    };
    fetchCertifs();
  }, []);
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Certifications obtenues</h4>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-responsive mt-4">
                <Table striped id="basic-table" className=" mb-0" role="grid">
                  <thead>
                    <tr>
                      <th>Formation</th>
                      <th>Académie</th>
                      <th>Note</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certifications?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="d-flex align-items-center">
                            <Image
                              className="rounded img-fluid avatar-90 me-3 bg-soft-primary"
                              src={item.trainingPicture}
                              alt="profile"
                            />
                            <h6>{item.trainingName}</h6>
                          </div>
                        </td>
                        <td>
                          <div className="iq-media-group iq-media-group-1">
                            {item.academyName}
                          </div>
                        </td>
                        <td>
                          <div className="text-info">{item.mark}</div>
                        </td>
                        <td>
                          <CertificateGenerator
                            studentName={item.studentName}
                            trainingName={item.trainingName}
                            academyName={item.academyName}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Certifs;
