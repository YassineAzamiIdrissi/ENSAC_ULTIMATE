import { Container } from "@mui/material";
import React from "react";
import LayoutSocial from "../../components/social-media/home/layout";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <Container sx={{ marginTop: "20px" }}>
      <LayoutSocial />
      <>
        <Outlet />
      </>
    </Container>
  );
};

export default HomePage;
