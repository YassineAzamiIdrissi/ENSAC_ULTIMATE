import React, { useEffect, useState } from "react";

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
import axios from "axios";

function CommentsAndRepliesDrawer({
  postId,
  userId,
  openDrawer,
  toggleDrawer,
  userName,
  caption,
  reactions,
  comments,
  userEntity,
  picture,
  updatedAt,
}) {

  //recuperer les commentaires de ce post
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/allposts`
        
      )
    }

    fetchComments();
  }, [postId]);
  const DrawerList = (
    <Stack
      direction={"column"}
      sx={{ maxWidth: "550px", padding: "50px" }}
      role="presentation"
    >
      <DispalyPostCard
        postId={postId}
        userId={userId}
        userName={userName}
        caption={caption}
        reactions={reactions}
        userEntity={userEntity}
        comments={comments}
        picture={picture}
        updatedAt={updatedAt}
        noButton={true}
      />

      <Box
        sx={{
          ml: "25px",
          pl: "10px",
          mt: "-20px",
          borderLeft: "3px solid #eef2f6",
        }}
      >
        <CommentAndReplyCard Noentity={true} Notootip={true} />
        <CommentAndReplyCard type={"reactions"} />
        <CommentAndReplyCard type={"reactions"} />
        <CommentAndReplyCard type={"reactions"} />

        <CommentAndReplyCard />
        <CommentAndReplyCard />
        <CommentAndReplyCard img />
        <CommentAndReplyCard />
        <CommentAndReplyCard />
      </Box>
    </Stack>
  );

  return (
    <Drawer anchor="left" open={openDrawer} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}

export default CommentsAndRepliesDrawer;
