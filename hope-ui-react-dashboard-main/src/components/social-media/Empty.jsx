import React from "react";
import EmptySvg from "../../profile/empty-scg.gif";
import Lottie from "react-lottie";
import { Box, Typography } from "@mui/material";
import EmptySVG from "../../assets/empty-animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: EmptySVG,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Empty = ({ label }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "30px",
        width: "100%",
      }}
    >
      <Lottie
        options={defaultOptions}
        width={"200px"}
        height={"200px"}
        // animationData={Empty}
      />
      <Typography variant="h6">{label}</Typography>
    </Box>
  );
};

export default Empty;
