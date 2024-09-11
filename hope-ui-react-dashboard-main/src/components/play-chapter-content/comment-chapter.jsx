import {
  Box,
  Button,
  // Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import OutboxTwoToneIcon from "@mui/icons-material/OutboxTwoTone";
import Rating from "../lecture/content/Rating";
import { useCurrentUser } from "../../hook/use-user";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

const CommentChapter = ({ commentsList, setCommentsList }) => {
  const { token, entity, currentUser } = useCurrentUser();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const { chapterID } = useParams();

  console.log(
    "elementId: " + chapterID,
    "content :" + comment,
    "rating : " + rating,
    entity
  );
  const [open, setOpen] = useState(false);
  // ajout du commentaire :
  const handleAddComment = async () => {
    try {
      setOpen(true);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/comments/newComment`,
        {
          elementId: chapterID,
          content: comment,
          rating,
          entity,
        },
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setOpen(false);
      setCommentsList([...commentsList]);
      toast.success("Chapitre commenté ");
    } catch (err) {
      toast.error("Echec du commentaire");
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        textAlign: "start",
        gap: "10px",
        // bgcolor: "red",
      }}
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Commentaire"
        multiline
        minRows={4}
        sx={{ width: "90%", mb: "10px" }}
        onChange={handleChange}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={3}
        width={"90%"}
      >
        <Typography component="legend"> Note </Typography>
        {/* <Rating
          name="simple-controlled"
          value={2}
          readOnly
          sx={{ textAlign: "end" }}
        /> */}
        <Rating
          iconClass="fs-5"
          // className="mb-3"
          style={{ mb: 3 }}
          rating={rating}
          setRating={setRating}
        />
      </Stack>
      <Button
        onClick={handleAddComment}
        variant=""
        sx={{
          color: "#C9D4E1",
          fontWeight: "bold",
          textTransform: "initial",
          textAlign: "center",
          width: "90%",
          border: "1px solid #F1F5F9 ",
          background: "transparent",
          display: "flex",
          mb: "30px",
          gap: "10px",
          "&:hover": {
            background: "transparent",
            border: "1px solid gray",
            color: "gray",
          },
        }}
      >
        <OutboxTwoToneIcon />
        <Typography>Commenter</Typography>
      </Button>

      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Box>
  );
};

export default CommentChapter;
