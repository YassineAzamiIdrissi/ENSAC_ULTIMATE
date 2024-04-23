import React, { useContext, useEffect, useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { ColumnDef } from '@tanstack/react-table';

import { Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

//
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import useAdvanceTable from "../../../provider/hook/useAdvanceTable";
import { projects } from "../../../data";
import { pageCss } from "../../../page/PageCss";
import Pagebanner from "../../../components/Pagebanner";
import AdvanceTableProvider from "../../../provider/AdvanceTableProvider";
import GridAndModalItem from "../../../components/GridAndModal";
import axios from "axios";
import { UserContext } from "../../../context/userContext";
import { current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
export const columns = [
  {
    id: "status",
    accessorFn: ({ status }) => status.label,
  },
  {
    accessorKey: "name",
  },
];
const TrainingsList = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
  });

  const classes = pageCss();
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const token = currentUser?.token;
  const entity = currentUser?.entity;
  const [writtenTrainings, setWrittenTrainings] = useState([]);
  useEffect(() => {
    if (!token) {
      navigate("/logout");
    }
  }, []);
  useEffect(() => {
    const fetchAllTrainings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getTrainingsForStudent`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setWrittenTrainings(response.data);
      } catch (err) {
        toast.error("Une erreur est survenue dans l'action d'étudiant !!");
        console.log(err);
      }
    };
    const fetchWrittenTrainings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/trainings/getWrittenTrainings`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setWrittenTrainings(response.data);
      } catch (err) {
        console.log("An error occured trying to fetch written trainings !");
        console.log(err);
      }
    };
    if (entity == "professor") {
      fetchWrittenTrainings();
    } else {
      fetchAllTrainings();
    }
    console.log("Je suis un " + entity);
  }, []);
  return (
    <>
      <Box className={classes.uni_section}>
        <Container maxWidth="lg">
          <AdvanceTableProvider {...table}>
            <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center">
              <h2 className="mb-0">
                <span className="me-3">
                  {entity == "Student"
                    ? "Toutes Les formations disponibles : "
                    : "Vos formations : "}
                </span>{" "}
                <span className="fw-normal text-body-tertiary">
                  ({writtenTrainings.length})
                </span>
              </h2>
              {entity == "professor" && (
                <Link
                  className="btn btn-primary px-5"
                  to="/dashboard/app/add-new-training"
                >
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Ajouter une formation
                </Link>
              )}
            </div>
            <Row className="g-3 mb-9">
              {writtenTrainings.map((project, index) => (
                <Col xs={12} sm={6} md={4} xxl={3} key={index}>
                  <GridAndModalItem project={project} token={token} />
                </Col>
              ))}
            </Row>
          </AdvanceTableProvider>
        </Container>
      </Box>
    </>
  );
};

export default TrainingsList;
