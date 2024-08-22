import React from "react";
import { Avatar, Box, Button, Card, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Profile from "../../..//profile/profile-bg.png";

const StyledCard = styled(Card)(({ theme }) => ({
  // maxWidth: 850,
  // margin: 'auto',
  borderRadius: 12,
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const CoverImage = styled(Box)({
  height: 180,
  backgroundImage: "url(../../..//profile/profile-bg.png)", // Remplace par le chemin de l'image
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderTopLeftRadius: 12,
  borderTopRightRadius: 12,
});

const UserProfile = () => {
  return (
    <StyledCard>
      {/* Image de couverture */}
      <CoverImage />

      {/* Contenu du profil */}
      <Grid container spacing={2} sx={{ p: 2 }}>
        <Grid item xs={12} sm={4} md={3} sx={{ textAlign: "center" }}>
          {/* Avatar */}
          <Avatar
            src="/path/to/avatar.jpg" // Remplace par le chemin de l'avatar
            sx={{
              width: 100,
              height: 100,
              marginTop: "-50px",
              border: `4px solid white`,
            }}
          />
        </Grid>

        {/* Informations de l'utilisateur */}
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          sx={{ textAlign: { xs: "center", sm: "left" } }}
        >
          <Typography variant="h6">JWT User</Typography>
          <Typography variant="body2" color="text.secondary">
            Android Developer
          </Typography>
        </Grid>

        {/* Boutons */}
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          sx={{ textAlign: "center", alignSelf: "center" }}
        >
          <Button variant="contained" color="primary" sx={{ marginRight: 1 }}>
            Message
          </Button>
          <Button variant="outlined" color="primary">
            Send Request
          </Button>
        </Grid>
      </Grid>

      {/* Infos supplémentaires */}
      <Box sx={{ display: "flex", justifyContent: "space-around", padding: 1 }}>
        <Button variant="text" color="primary">
          Profile
        </Button>
        <Button variant="text" color="primary">
          Followers
        </Button>
        <Button variant="text" color="primary">
          Friends <span style={{ color: "purple", marginLeft: 4 }}>100</span>
        </Button>
        <Button variant="text" color="primary">
          Gallery
        </Button>
        <Button variant="text" color="primary">
          Friend Request
        </Button>
      </Box>
    </StyledCard>
  );
};

export default UserProfile;
