import { Star } from "@mui/icons-material";
import { Box, Divider, Rating, Stack, Typography } from "@mui/material";
import React from "react";
import AvatarPh from "../../profile/profile-user.png";

const DisplayComment = ({ comment }) => {
  
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "10px",
          width: "100%",
          pt: "10px",
        }}
      >
        <img
          src={comment?.picture || AvatarPh}
          alt="User Avatar"
          style={{
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            marginRight: "10px",
          }}
        />
        <Box>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            minWidth={"610px"}
          >
            <Typography variant="body2" fontWeight="bold">
              {comment?.commentator}
            </Typography>
            <Typography>
              <Rating
                name="read-only"
                value={comment?.rating || 1}
                max={4}
                readOnly
                sx={{ textAlign: "end" }}
              />
              {/* <Rating
                initialValue={comment?.rating || 1}
                readonly
                iconClass="fs-9"
              /> */}
            </Typography>
          </Stack>
          <Typography
            variant="body2"
            color="textSecondary"
            textAlign={"justify"}
          >
            {comment?.content}
          </Typography>
          {/* <Typography variant="caption" color="textSecondary">
            {comment?.commentator.charAt(0)}
          </Typography> */}
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

export default DisplayComment;
