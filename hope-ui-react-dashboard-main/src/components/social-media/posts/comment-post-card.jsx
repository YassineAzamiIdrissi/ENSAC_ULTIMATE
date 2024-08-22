import { Avatar, Button, Stack, TextField } from "@mui/material";
import React from "react";
import AvatarPh from "../../../profile/profile-user.png";

const CommentPost = () => {
  return (
    <>
      <Stack
        mt={"20px"}
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "15px",
        }}
      >
        <Stack
          direction={"row"}
          sx={{ display: "flex", alignItems: "center", width: "100%" }}
          gap={2}
        >
          <Avatar
            variant=""
            src={AvatarPh}
            sx={{ height: "40px", width: "40px", border: "1px solid #1d1d1d" }}
          />
          <TextField multiline sx={{ width: "85%", borderRadius: "10px" }} />
        </Stack>

        <Button
          variant="outlined"
          sx={{ textTransform: "initial", height: "50px" }}
        >
          {/* POUR LE MENU DE L'USER PAR POST */}
          Commenter
        </Button>
      </Stack>
    </>
  );
};

export default CommentPost;
