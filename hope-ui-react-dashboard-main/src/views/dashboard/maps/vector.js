import React, { useContext, useEffect } from "react";
import Card from "../../../components/Card";
import { Row, Col } from "react-bootstrap";

//leaflet
import Leaflet from "../../../components/leaflet";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/userContext";
const Vector = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  useEffect(() => {
    if (!token) {
      navigate("/auth/sign-in");
    }
  }, []);
  return (
    <>
      <Row>
        <Col lg="12">
          <Card>
            <Card.Header className="d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Vector</h4>
              </div>
            </Card.Header>
            <Card.Body>
              <Leaflet id="chart-map-column-04" className="custom-chart" />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Vector;
