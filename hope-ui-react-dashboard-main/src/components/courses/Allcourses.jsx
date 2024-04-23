import { Box, Grid, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slidercourse from "../Slidercourse";
import { comCss } from "../ComponentsCss";
import loader from "../../../src/image/loader.gif";
const Allcourses = ({
  fetchedTrainings,
  fetchedAcademies,
  setFetchedTrainings,
  loading,
}) => {
  const classes = comCss();
  useEffect(() => {
    if (fetchedTrainings[0]?.status) {
      const table = fetchedTrainings.map((item) => item.data);
      setFetchedTrainings(table);
    }
  }, [fetchedTrainings]);
  if (loading) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          aligItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={loader} />
      </div>
    );
  }
  return (
    <>
      <Grid container>
        {fetchedTrainings &&
          fetchedAcademies &&
          fetchedTrainings.map((training, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Slidercourse
                key={index}
                trainingId={training._id}
                title={training.name}
                difficulty={training.difficulty}
                academy={fetchedAcademies[index].name}
                picture={training.picture}
                academyPicture={fetchedAcademies[index].picture}
              />
            </Grid>
          ))}
        <Box className={classes.pagination}>
          <Stack spacing={2}>
            <Pagination count={6} variant="outlined" shape="rounded" />
          </Stack>
        </Box>
      </Grid>
    </>
  );
};

export default Allcourses;
