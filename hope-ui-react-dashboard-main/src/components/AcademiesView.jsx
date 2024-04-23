import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { ColumnDef } from '@tanstack/react-table';

import useAdvanceTable from "../provider/hook/useAdvanceTable";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { projects } from "../data";
import AdvanceTableProvider from "../provider/AdvanceTableProvider";
import GridAndModalItem from "./GridAndModal";

//
import { Box } from "@mui/material";
import { Container } from "@mui/system";

import Pagebanner from "../components/Pagebanner";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { pageCss } from "../page/PageCss";
export const columns = [
  {
    id: "status",
    accessorFn: ({ status }) => status.label,
  },
  {
    accessorKey: "name",
  },
];

const AcademiesBoardView = () => {
  const table = useAdvanceTable({
    data: projects,
    columns,
    pageSize: 10,
    pagination: true,
    sortable: true,
  });

  const classes = pageCss();

  return (
    <>
      <Navbar />
      <Pagebanner title="Nos académies" />
      <Box className={classes.course_section}>
        <Container maxWidth="lg">
          <AdvanceTableProvider {...table}>
            <div className="d-flex flex-wrap mb-4 gap-3 gap-sm-6 align-items-center"></div>
            <Row className="g-3 mb-9">
              {table
                .getRowModel()
                .rows.map((row) => row.original)
                .map((project) => (
                  <Col xs={12} sm={6} md={4} xxl={3} key={project.id}>
                    <GridAndModalItem project={project} />
                  </Col>
                ))}
            </Row>
          </AdvanceTableProvider>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default AcademiesBoardView;
