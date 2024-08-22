import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import Profile from "../../..//profile/profile-bg.png";
import ProfileUser from "../../..//profile/profile-user.png";
import { InfoRounded, VerifiedUserRounded } from "@mui/icons-material";
import { menuSocialMediaItems } from "../../../constantes";
import { useNavigate } from "react-router-dom";

const UserInfoCard = ({ page, goTo }) => {
  const router = useNavigate();
  if (page === "Posts") page = "Tous les posts";
  if (page === "Followings") page = "Suivi(e)s";
  return (
    // <Container>
    <Card
      variant=""
      sx={{
        maxWidth: "1160px",
        display: "flex",
        padding: "10px",
        paddingBottom: "0px",
        flexDirection: "column",
        borderRadius: "10px",
        // fontWeight: "bold",
        color: "black",
      }}
    >
      <CardMedia
        component="img"
        height="194"
        src={Profile}
        alt="profile-bg"
        sx={{ borderRadius: "10px" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 16px",
          marginTop: "-40px",
        }}
      >
        {/* Infos user */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            variant="square"
            src={ProfileUser} // Remplace par le chemin de l'avatar
            sx={{
              height: "140px",
              width: "140px",
              marginRight: "16px",
              marginLeft: "60px",
            }}
          />
          <Box sx={{ marginTop: "13px" }}>
            <Typography variant="h6">John Doe</Typography>
            <Chip
              size="small"
              variant="outlined"
              icon={<InfoRounded />}
              label="Etudiant"
              sx={(theme) => ({
                ".MuiChip-icon": {
                  fontSize: 16,
                  ml: "4px",
                  color: "success.500",
                },
                bgcolor: "success.50",
                borderColor: "success.100",
                color: "success.900",
              })}
            />
          </Box>
        </Box>

        {/* Boutons */}
        <Box sx={{ display: "flex", alignItems: "center", mt: "10px" }}>
          <Button
            variant="contained"
            color="info"
            sx={{ marginRight: 1, background: "#1B96F3" }}
          >
            Message
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ border: "1px solid #1B96F3" }}
          >
            <VerifiedUserRounded sx={{ height: "20px", width: "20px" }} />
            Suivre
          </Button>
        </Box>
      </Box>

      {/* Infos supplémentaires */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "5px",
          padding: 0,
        }}
      >
        {menuSocialMediaItems.map((item, index) => (
          <Button
            key={index}
            // variant={item.label === "Profile" ? "contained" : "text"}
            // sx={item.sx}
            sx={{
              color: item.label === page ? "#1B96F3" : "black",
              fontWeight: "semi-bold",
              textTransform: "none",
              borderBottom: item.label === page ? "2px solid #1B96F3" : "none",
              borderRadius: "0px",
            }}
            startIcon={item.icon}
            onClick={() => router(`/social-profile/${item.path}`)}
          >
            {item.label}
          </Button>
        ))}
      </Box>
    </Card>
    // </Container>
  );
};

export default UserInfoCard;
