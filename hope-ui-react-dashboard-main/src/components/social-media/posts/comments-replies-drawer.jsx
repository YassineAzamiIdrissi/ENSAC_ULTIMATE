import React, { useState } from "react";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Plus, SendIcon } from "lucide-react";
import {
  Box,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import { Comment } from "@mui/icons-material";
import CommentAndReplyCard from "./comment-reply-card";
import DispalyPostCard from "./display-post-card";

function CommentsAndRepliesDrawer() {
  const [open, setOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Stack
      direction={"column"}
      sx={{ maxWidth: "550px", padding: "50px" }}
      role="presentation"
    >
      {/* <CardHeader title="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum alias rerum porro" /> */}

      <DispalyPostCard type={"reactions"} />

      {/* <Divider sx={{ mb: "10px" }} /> */}
      <Box
        sx={{
          ml: "25px",
          pl: "10px",
          mt: "-20px",
          borderLeft: "3px solid #eef2f6",
        }}
      >
        {/* <Empty /> */}
        <CommentAndReplyCard />
        <CommentAndReplyCard />
        <CommentAndReplyCard />
        <CommentAndReplyCard />

        <CommentAndReplyCard />
        <CommentAndReplyCard />
        <CommentAndReplyCard img />
        <CommentAndReplyCard />
        <CommentAndReplyCard />
      </Box>
    </Stack>
  );

  return (
    <>
      <Button
        sx={{
          display: "flex",
          alignItems: "center",
          textTransform: "capitalize",
          color: "black",
        }}
        startIcon={<Comment style={{ color: "#5B31AF" }} size={18} />}
        onClick={toggleDrawer(true)}
      >
        <span>12 réactions</span>
      </Button>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
}

export default CommentsAndRepliesDrawer;
