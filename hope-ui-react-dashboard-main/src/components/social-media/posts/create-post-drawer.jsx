import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Plus, SendIcon } from "lucide-react";
import { Box, Divider, Stack, TextField, Typography } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import axios from "axios"; // Assure-toi d'avoir installé axios
import { upload } from "../../../utils/upload";
import { useCurrentUser } from "../../../hook/use-user";
import { toast } from "react-toastify";
import IosShareTwoToneIcon from "@mui/icons-material/IosShareTwoTone";
import LoadBackdrop from "../../../page/LoadBackdrop";

export default function CreatePostDrawer() {
  const [open, setOpen] = React.useState(false);
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const { fetchedUser, currentUser } = useCurrentUser();
  const [isLoading, setIsLoading] = useState(Boolean);

  // console.log("fetchedUser : ", fetchedUser);
  console.log("currentUser :", currentUser);
  // console.log(currentUser.id);
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setImageFile(file); // stocke le fichier pour l'envoi
    }
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handlePost = async () => {
    if (!caption.trim()) {
      toast.error("La légende du post ne peut pas être vide.");
      return;
    }
    setIsLoading(true); // Commencer à indiquer le chargement

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("userId", currentUser.id);
    formData.append("userName", currentUser.fullName);
    formData.append("entity", currentUser.entity);

    const imageUploaded = await upload(imageFile);
    // console.log(imageUploaded);
    formData.append("picture", imageUploaded);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/posts/newPost`,
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Important pour les fichiers
            Authorization: `Bearer ${currentUser.token}`,
          },
        }
      );

      if (response.status === 201) {
        toast.success("Post créé avec succès !");
        // Réinitialiser les champs après une soumission réussie
        setCaption("");
        setSelectedImage(null);
        setImageFile(null);
        setOpen(false); // Fermer le tiroir après la publication
        // onPostSuccess(); // Appeler une fonction pour rafraîchir les posts ou effectuer d'autres actions
      }
    } catch (error) {
      console.error(
        "Une erreur est survenue lors de la création du post.",
        error
      );
      toast.error("Erreur lors de la création du post.");
    } finally {
      setIsLoading(false); // Fin de l'état de chargement
    }
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Stack
      direction={"column"}
      sx={{
        minHeight: "250px",
        padding: "20px",
        pr: "220px",
        pl: "220px",
        pt: "50px",
      }}
      role="presentation"
    >
      <TextField
        id="caption"
        label="Légende de la publication"
        multiline
        minRows={3}
        value={caption}
        onChange={handleCaptionChange}
        sx={{ width: "100%" }}
      />

      <Box
        sx={{
          border: "2px dashed gray",
          borderRadius: "5px",
          marginTop: "20px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#F1F1F1",
          cursor: "pointer",
          position: "relative",
          "&:hover": {
            backgroundColor: "#E3F2FD",
          },
        }}
        component="label"
      >
        <>
          <AddToPhotosIcon sx={{ fontSize: "50px", color: "gray" }} />
          <Typography
            variant="h6"
            sx={{
              color: "#424242",
              marginTop: "10px",
              marginBottom: "5px",
              fontSize: "14px",
            }}
          >
            Choisissez une image
          </Typography>
          <Typography variant="caption" sx={{ color: "#757575" }}>
            JPG, JPEG, PNG
          </Typography>
        </>
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "cover",
              borderRadius: "20px",
              position: "absolute",
              top: "8px",
              right: "8px",
            }}
          />
        )}
        <input
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />
      </Box>
      <Button
        startIcon={<SendIcon color="transparent" />}
        variant="outlined"
        sx={{
          mt: "10px",
          fontSize: "16px",
          textTransform: "initial",
          border: "1px solid #D7E0E9",
          color: "Black",
          p: "8px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={handlePost}
      >
        <Typography>Publier</Typography>
        <IosShareTwoToneIcon
          sx={{
            color: "gray",
            fontSize: "32px",
            border: "1px solid #D7E0E9",
            p: "5px",
            borderRadius: "5px",
            width: "36px",
            height: "36px",
          }}
        />
      </Button>
    </Stack>
  );

  if (isLoading) return <LoadBackdrop open={isLoading} />;
  return (
    <Box>
      <Button
        variant=""
        sx={{
          backgroundColor: "#EEF2F6",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          justifyContent: "center",
          alignItems: "center",
          color: "primary",
          width: "100%",
          textTransform: "initial",
        }}
        startIcon={<Plus />}
        onClick={toggleDrawer(true)}
      >
        Faire une publication
      </Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
}
