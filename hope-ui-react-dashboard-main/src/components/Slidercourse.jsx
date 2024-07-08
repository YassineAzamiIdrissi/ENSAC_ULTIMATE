import { Avatar, Box, IconButton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { comCss } from "./ComponentsCss";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SignalCellularAltOutlinedIcon from "@mui/icons-material/SignalCellularAltOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import StarHalfOutlinedIcon from "@mui/icons-material/StarHalfOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import img from "../image/course-react.jpg";
import avaterimg from "../image/avatar-1-100x100.jpg";
import axios from "axios";

const Slidercourse = ({
  trainingId,
  title,
  difficulty,
  academy,
  picture,
  academyPicture,
}) => {
  const classes = comCss();
  // LOGIQUE BACK END :
  // const createLink = () => {
  //   let comp;
  //   academyResps.forEach((id) => {
  //     comp += id;
  //   });
  //   return comp;
  // };
  // useEffect(() => {
  //   console.log("THE LINK COMPLETION IS : ");
  //   console.log(createLink());
  // }, []);
  const [training, setTraining] = useState(null);
  const [range, setRange] = useState(null);
  useEffect(() => {
    const fetchTraining = async () => {
      const resp = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/trainings/getTraining/${trainingId}`
      );
      setTraining(resp.data);
    };
    fetchTraining();
  }, []);
  useEffect(() => {
    const defineRange = () => {
      const table = [];
      for (let i = 0; i < training?.rating; ++i) {
        table.push(i);
      }
      setRange(table);
    };
    defineRange();
  }, [training]);
  return (
    <Box className={classes.Slidercourse}>
      <Link>
        <img
          src={picture}
          alt={`${trainingId}`}
          className={classes.img_responsive}
          style={{ height: "12rem" }}
        />
      </Link>
      <Typography variant="h4" component="h4" className={classes.slider_title}>
        <Link to={`/singleCourse/${trainingId}`}>{title?.slice(0, 30)}...</Link>
      </Typography>
      <Typography variant="h5" component="p" className={classes.slider_time}>
        <AccessTimeOutlinedIcon /> {training?.subscribers.length + 12} minutes
      </Typography>
      <Typography variant="h5" component="p" className={classes.slider_label}>
        <SignalCellularAltOutlinedIcon /> {difficulty}
      </Typography>
      <Box className={classes.slider_Rating}>
        {range?.map((item) => (
          <StarOutlinedIcon />
        ))}
        {/* <span style={{ color: "#FFAA46", marginLeft: "5px" }}>
          {training?.rating}
        </span> */}
        <span style={{ color: "#FFAA46", marginLeft: "5px" }}>
          {training?.subscribers.length
            ? training?.rating
            : "Aucune évalation pour le moment"}{" "}
        </span>
      </Box>
      <Box className={classes.divider}></Box>
      <Box className={classes.slider_bottom_section}>
        <Box className={classes.slider_avater}>
          <img
            alt="Remy Sharp"
            src={academyPicture}
            className={classes.img_avater}
          />
          <span>{academy}</span>
        </Box>
        <Box className={classes.slider_bookmark}>
          <IconButton>
            <BookmarkBorderIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Slidercourse;
