import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { comCss } from "../ComponentsCss";
import axios from "axios";
const Filter = ({ fetchedDomains, fetchTrainingsByDomain }) => {
  const classes = comCss();
  return (
    <Box className={classes.course_filter}>
      <Typography variant="h3" component="h3" className={classes.filter_title}>
        Filter
      </Typography>
      <Box className={classes.divider}></Box>
      <Box className={classes.filter_category}>
        <Typography
          variant="h3"
          component="h3"
          className={classes.filter_catagory_title}
        >
          DOMAINE
        </Typography>
        <Box className={classes.filter_category_box}>
          <Link
            onClick={() => {
              fetchTrainingsByDomain(`tout`);
            }}
            className={classes.filter_category_link}
          >
            Tout
          </Link>
          {fetchedDomains &&
            fetchedDomains.map((domain, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => {
                    fetchTrainingsByDomain(`${domain.name}`);
                  }}
                  className={classes.filter_category_link}
                >
                  {domain.name}
                </Link>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
