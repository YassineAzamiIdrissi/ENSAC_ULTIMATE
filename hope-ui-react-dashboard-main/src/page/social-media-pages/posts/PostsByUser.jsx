import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card } from "@mui/material";
import ProfileRightSide from "../../../components/social-media/posts/rigth-side";
import ProfileLeftSide from "../../../components/social-media/posts/left-side";

// const Item = styled(Card)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const UserProfilePosts = () => {
  return (
    <Box sx={{ flexGrow: 1, mt: "25px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <ProfileLeftSide />
        </Grid>
        <Grid item xs={12} md={8}>
          <ProfileRightSide />
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserProfilePosts;
