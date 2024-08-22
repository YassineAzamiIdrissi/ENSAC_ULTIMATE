import { Box, Grid } from "@mui/material";
import React from "react";
import CreatePostDrawer from "./create-post-drawer";
import DispalyPostCard from "./display-post-card";
import { Item } from "../NewCard";

const ProfileRightSide = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item variant="" sx={{ padding: "5px" }}>
            <CreatePostDrawer />
          </Item>
        </Grid>
        <Grid item xs={12} md={12} gap={"50px"}>
          <DispalyPostCard img />
          <DispalyPostCard />
          <DispalyPostCard />
          <DispalyPostCard img />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileRightSide;
