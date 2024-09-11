import {
  Avatar,
  Box,
  Divider,
  Grid,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { Item } from "../../NewCard";
import ProfileUser from "../../../../profile/profile-user.png";
import InfoTwoToneIcon from "@mui/icons-material/InfoTwoTone";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useCurrentUser } from "../../../../hook/use-user";
import { ConvertDate } from "../../../../constantes/convertDate";
import { useNavigate } from "react-router-dom";

const SocialMediaLinks = [
  {
    title: "Facebook",
    Icon: FacebookIcon,
    hoverColor: "#43609C",
  },
  {
    title: "LinkedIn",
    Icon: LinkedInIcon,
    hoverColor: "#0072b1",
  },
  {
    title: "Instagram",
    Icon: InstagramIcon,
    hoverColor: "#DE2E4B",
  },
  { title: "Twitter/X", Icon: XIcon, hoverColor: "black" },
];

export const LeftSideAllPost = () => {
  const router = useNavigate();
  const { fetchedUser, currentUser } = useCurrentUser();
  const dateInscription = ConvertDate(fetchedUser?.createdAt);
  // console.log(fetchedUser)

  const goTo = () => {
    router(
      `/social-profile/${currentUser?.id}/${currentUser?.entity}/Profile`,
      0
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item variant="" sx={{ padding: "18px" }}>
            {/* Grid container for layout based on breakpoints */}
            <Grid container spacing={2}>
              {/* TOP */}
              <Grid item xs={4} md={12}>
                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  pb={"0px"}
                  mr={"10px"}
                >
                  <Avatar
                    variant="square"
                    src={fetchedUser?.profilePicture}
                    sx={{
                      height: "70px",
                      width: "70px",
                      mr: "10px",
                      overflow: "hidden",
                      borderRadius: "15px",
                    }}
                  />
                  <Stack direction={"column"} justifyContent={"space-between"}>
                    <Box
                      sx={{
                        transition: "all 150ms ease-in",
                        "&:hover": {
                          cursor: "pointer",
                          transform: "scale(1.1)",
                          color: "black",
                        },
                      }}
                      onClick={goTo}
                    >
                      <Typography
                        fontWeight={"bold"}
                        marginTop={"0px"}
                        padding={"0px"}
                      >
                        {currentUser.fullName}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "3px",
                          color: "gray",
                          fontSize: "12px",
                        }}
                      >
                        <InfoTwoToneIcon fontSize="24px" />
                        <span>{currentUser.entity}</span>
                      </Box>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        mb: "-5px",
                        padding: "0px",
                        gap: "10px",
                        color: "gray",
                      }}
                    >
                      {SocialMediaLinks.map(({ title, Icon, hoverColor }) => (
                        <Tooltip title={title} key={title}>
                          <Icon
                            sx={{
                              cursor: "pointer",
                              height: "22px",
                              width: "22px",
                              transition: "all 150ms ease-in",
                              "&:hover": {
                                color: hoverColor,
                                transform: "scale(1.2)",
                              },
                            }}
                          />
                        </Tooltip>
                      ))}
                    </Box>
                  </Stack>
                </Stack>
              </Grid>

              {/* MIDDLE */}
              <Grid item xs={8} md={12}>
                <Box
                  sx={{
                    textAlign: "justify",
                    fontSize: "12px",
                    bgcolor: "#F9FAF8",
                    outline: "1px solid #EFF0EC",
                    padding: "10px",
                    borderRadius: "15px",
                    height: "100%", // To ensure the height matches in row layout
                  }}
                >
                  <Typography fontSize={"14px"}>
                    Vous êtes devenu membre de la plateforme depuis le{" "}
                    {dateInscription}
                  </Typography>
                </Box>
              </Grid>

              {/* BOTTOM */}
              <Grid item xs={12}>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      color: "gray",
                      textAlign: "center",
                      width: "100%",
                      padding: "10px",
                    }}
                  >
                    <div>
                      <Typography fontWeight={"bold"} color={"black"}>
                        {fetchedUser?.followers.length}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>Abonnés</Typography>
                    </div>
                    <Divider orientation="vertical" />
                    <div>
                      <Typography fontWeight={"bold"} color={"black"}>
                        {fetchedUser?.followings.length}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>Suivies</Typography>
                    </div>
                    <Divider orientation="vertical" />
                    <div>
                      <Typography fontWeight={"bold"} color={"black"}>
                        5
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>Posts</Typography>
                    </div>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
