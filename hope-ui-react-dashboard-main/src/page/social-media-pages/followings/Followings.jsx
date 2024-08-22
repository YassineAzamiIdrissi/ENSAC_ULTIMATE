import React from "react";
import { Item } from "../../../components/social-media/NewCard";
import { Box, Chip, Divider, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Search } from "lucide-react";
import SingleFollowerCard from "../../../components/social-media/followers/single-follower-card";
import SingleFollowingCard from "../../../components/social-media/followings";
import PersonSearchTwoToneIcon from "@mui/icons-material/PersonSearchTwoTone";
import { usePage } from "../../../hook/use-page";

const Followings = () => {
  const { page } = usePage();
  return (
    <Item variant="" sx={{ marginBottom: "20px" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        mb={"10px"}
        alignItems={"center"}
      >
        <Stack direction={"column"}>
          <Typography
            variant="text"
            sx={{ fontSize: "22px", fontWeight: "bold", color: "black" }}
          >
            {page}
            <span> (200) </span>
            {/* <Chip
              label={200}
              variant="outlined"
              sx={{ ml: "10px", padding: "0px", }}
            /> */}
          </Typography>
          <span>
            Cette section vous présente les personnes que vous suivez.
          </span>
        </Stack>

        <TextField
          variant="outlined"
          placeholder="Recherche un following"
          label={<PersonSearchTwoToneIcon />}
          sx={{
            width: "25%",
            height: "50px",
            padding: "2px 2px 2px 2px",
            borderRadius: "10px",
          }}
        />
      </Stack>
      <Divider sx={{ mr: "-40px", ml: "-40px", mt: "20px", mb: "20px" }} />

      <Box sx={{ flexGrow: 1, mt: "25px" }}>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>{" "}
          <Grid item lg={3} md={4} xs={12}>
            <SingleFollowingCard />
          </Grid>
        </Grid>
      </Box>
    </Item>
  );
};

export default Followings;
