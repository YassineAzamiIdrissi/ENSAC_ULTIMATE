import React from "react";
import { useSideBar } from "../../hook/sidebarContext";
import { Box, Grid } from "@mui/material";
import MainPlay from "../../components/play-chapter-content/main-play";

const Play = () => {
  const { Expand } = useSideBar();
  console.log(Expand);
  return (
    <div
      style={{
        flex: 1,
        textAlign: "start",
        marginLeft: Expand ? "320px" : "70px",
        transition: "all 0.3s ease-out",
        width: "100%",
        overflow: "auto",
        bgColor: "transparent",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          width: Expand ? "82.5%" : "98%",
          height: "auto",
          mr: "20px",
          bgColor: "transparent",
        }}
      >
        <Box
          sx={{
            transition: "all 0.2s ease-out",
            width: Expand ? "96%" : "106%",
            p: "10px",
          }}
        >
          <MainPlay />
        </Box>
      </Box>
    </div>
  );
};

export default Play;
