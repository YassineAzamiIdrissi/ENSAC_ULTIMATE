import React from "react";
import { Breadcrumbs, Card, Link, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const NewBreadcrumbs = ({ page }) => {
  return (
    <Card
      variant=""
      sx={{
        p: 2,
        maxWidth: "1160px",
        // width: "100%",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontWeight: "bold",
        color: "black",
        mb: 3,
      }}
    >
      <Typography
        variant="button"
        color="black"
        fontWeight="Bold"
        textTransform="capitalize"
      >
        {page}
      </Typography>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="" />}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "gray",
            width: "max-content",
          }}
        >
          Ensa Media
        </Link>
        <Link to="/profile" style={{ textDecoration: "none", color: "gray" }}>
          user
        </Link>
        <Typography
          style={{
            color: "gray",
            textTransform: "capitalize",
          }}
        >
          {page}
        </Typography>
      </Breadcrumbs>
    </Card>
  );
};

export default NewBreadcrumbs;
