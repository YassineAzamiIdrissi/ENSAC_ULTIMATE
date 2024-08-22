import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { Plus, SendIcon } from "lucide-react";
import { Box, Stack, TextField, Typography } from "@mui/material";
import { InsertPhoto } from "@mui/icons-material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
export default function CreatePostDrawer() {
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
      sx={{ minHeight: "250px", padding: "100px" }}
      role="presentation"
      //   onClick={toggleDrawer(false)}
    >
      <TextField
        id="outlined-multiline-flexible"
        label="Legende de la publication"
        multiline
        minRows={3}
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
        {
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
        }
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Uploaded"
            style={{
              Width: "80px",
              height: "80px",
              //   marginTop: "20px",
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
        startIcon={<SendIcon color="gray" />}
        variant="outlined"
        sx={{
          mt: "10px",
          textTransform: "initial",
          border: "1px solid gray",
          color: "Black",
        }}
      >
        Poster cette publication
      </Button>
    </Stack>
  );

  return (
    <div>
      <Button
        variant=""
        sx={{
          backgroundColor: "#EEF2F6",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          // height: "50px",
          justifyContent: "center",
          alignItems: "center",
          color: "primary",
          width: "100%",
          textTransform: "initial",
        }}
        startIcon={<Plus />}
        onClick={toggleDrawer(true)}
      >
        Faire un publication
      </Button>
      <Drawer anchor="bottom" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
