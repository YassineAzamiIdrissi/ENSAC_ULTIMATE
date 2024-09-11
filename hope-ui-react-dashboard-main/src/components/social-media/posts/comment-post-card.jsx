import { Avatar, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import AvatarPh from "../../../profile/profile-user.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useCurrentUser } from "../../../hook/use-user";

import { lineSpinner } from "ldrs";

lineSpinner.register();

// Default values shown

const CommentPost = ({ postId, onCommentSuccess }) => {
  const [commentContent, setCommentContent] = useState("");
  const [isLoading, setIsLoading] = useState(Boolean);

  const { fetchedUser, currentUser } = useCurrentUser();
//   console.log("fetchedUser : ", fetchedUser);
//   console.log("currentUser :", currentUser);
// console.log('postId : ', postId);
  const handleCommentSubmit = async () => {
    if (!commentContent.trim()) {
      toast.error("Le commentaire ne peut pas être vide.");
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/postComments/create`,
        {
          postId,
          content: commentContent,
          userId: fetchedUser?._id,
          userName: currentUser?.fullName,
          picture: fetchedUser?.profilePicture,
        },
        {
          headers: {
            Authorization: `Bearer ${currentUser.token}`, // Assure que l'utilisateur est autorisé
          },
        }
      );

      if (response.status === 201) {
        toast.success("Post commenté !");
        setCommentContent(""); // Réinitialiser le champ après soumission
        onCommentSuccess(); // Appelez la fonction de rappel pour rafraichir les commentaires
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors du commentaire.");
    } finally {
      setIsLoading(false);
    }
  };

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
            src={fetchedUser?.profilePicture}
            sx={{ height: "40px", width: "40px" }}
          />
          <TextField
            multiline
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            sx={{ width: "85%", borderRadius: "10px" }}
            placeholder="Écrire un commentaire..."
          />
        </Stack>

        <Button
          variant="outlined"
          sx={{ textTransform: "initial", height: "50px" }}
          onClick={handleCommentSubmit}
        >
          {!isLoading ? (
            "Commenter"
          ) : (
            <l-line-spinner
              size="25"
              stroke="3"
              speed="0.8"
              color="black"
            ></l-line-spinner>
          )}
        </Button>
      </Stack>
    </>
  );
};

export default CommentPost;
