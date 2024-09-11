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
import { useNavigate, useParams } from "react-router-dom";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import { useCurrentUser, useGetPostOnwerInfo } from "../../../hook/use-user";
import { useFollow } from "../../../hook/use-relation";

const UserInfoCard = ({ page, goTo }) => {
  const router = useNavigate();
  
  const { currentUser, fetchedUser } = useCurrentUser();
  const { userID, userEntity } = useParams();
  const entity = userEntity?.toLowerCase();
  // console.log(entity);

  const { postUser } = useGetPostOnwerInfo(entity, userID);
  console.log("postUser : ", postUser);
  const { handleFollow } = useFollow(postUser?._id, entity);
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
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
          color: "transparent", // Le texte est transparent
          position: "absolute",
          top: "70px",
          left: "85px",
          fontSize: "56px",
          zIndex: "100",
          fontFamily: "sans-serif !important",
          textTransform: "uppercase",
          "-webkit-text-stroke": ".5px #EEF2F6", // Contour blanc
          textStroke: "5px #EEF2F6", // Supporte les autres navigateurs
        }}
      >
        {page}
      </Typography>
      {currentUser.id === userID && (
        <>
          <CardMedia
            component="img"
            height="194px"
            src={fetchedUser?.profilePicture || Profile}
            alt="profile-bg"
            sx={{ borderRadius: "10px", filter: "brightness(0.25)" }}
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
                src={fetchedUser?.profilePicture || ProfileUser} // Remplace par le chemin de l'avatar
                sx={{
                  height: "140px",
                  width: "140px",
                  marginRight: "16px",
                  marginLeft: "60px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ marginTop: "13px" }}>
                <Typography variant="h6">
                  {fetchedUser?.lastName} {fetchedUser?.firstName}
                </Typography>
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<InfoRounded />}
                  label={currentUser?.entity}
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
            {currentUser.id !== userID && (
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
                  onClick={handleFollow}
                >
                  <VerifiedUserRounded sx={{ height: "20px", width: "20px" }} />
                  Suivre
                </Button>
              </Box>
            )}
          </Box>
        </>
      )}

      {currentUser.id !== userID && userEntity !== "undefined" && (
        <>
          <CardMedia
            component="img"
            height="194px"
            src={postUser?.profilePicture || Profile}
            alt="profile-bg"
            sx={{ borderRadius: "10px", filter: "brightness(0.25)" }}
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
                src={postUser?.profilePicture || ProfileUser} // Remplace par le chemin de l'avatar
                sx={{
                  height: "140px",
                  width: "140px",
                  marginRight: "16px",
                  marginLeft: "60px",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ marginTop: "13px" }}>
                <Typography variant="h6">
                  {postUser?.lastName} {postUser?.firstName}
                </Typography>
                <Chip
                  size="small"
                  variant="outlined"
                  icon={<InfoRounded />}
                  label={userEntity}
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
            {currentUser.id !== userID && (
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
            )}
          </Box>
        </>
      )}

      {/* Infos supplémentaires */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "5px",
          padding: 0,
        }}
      >
        <Button
          // variant={item.label === "Profile" ? "contained" : "text"}
          // sx={item.sx}
          sx={{
            color: page === "Profile" ? "#1B96F3" : "black",
            fontWeight: "semi-bold",
            textTransform: "none",
            borderBottom: page === "Profile" ? "2px solid #1B96F3" : "none",
            borderRadius: "0px",
          }}
          startIcon={<PersonPinTwoToneIcon />}
          onClick={() => {
            router(
              `/social-profile/${currentUser.id}/${currentUser.entity}/Profile`
            );
            router(0);
          }}
        >
          Profile
        </Button>
        {userID !== currentUser.id && page === "Profile" && (
          <Button
            // variant={item.label === "Profile" ? "contained" : "text"}
            // sx={item.sx}
            sx={{
              color: "black",
              fontWeight: "semi-bold",
              textTransform: "none",
              // borderBottom: page === "Profile" ? "2px solid #1B96F3" : "none",
              borderRadius: "0px",
            }}
            startIcon={<PersonPinTwoToneIcon />}
            onClick={() => {
              router(
                `/social-profile/${currentUser.id}/${currentUser.entity}/Profile`
              );
              router(0);
            }}
          >
            Mon Profile
          </Button>
        )}
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
            onClick={() => {
              router(`/social-profile/${item.path}`);
              // router(0);
            }}
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
