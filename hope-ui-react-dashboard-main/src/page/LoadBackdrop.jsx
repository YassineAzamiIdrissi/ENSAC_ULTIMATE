import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { metronome } from "ldrs";

metronome.register();

// Default values shown

const LoadBackdrop = ({ open }) => {
  return (
    <Backdrop
      sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
      open={open}
    >
      {/* <CircularProgress color="inherit" />
       */}
      <l-metronome size="94" speed="1.6" color="white"></l-metronome>
    </Backdrop>
  );
};

export default LoadBackdrop;
