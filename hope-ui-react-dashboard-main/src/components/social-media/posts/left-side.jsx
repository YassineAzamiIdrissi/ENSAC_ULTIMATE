import { Box, Grid, IconButton, Link, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import React from "react";

import GroupIcon from "@mui/icons-material/Group";
import { ArrowForwardIos, TravelExplore } from "@mui/icons-material";
import { Item } from "../NewCard";
import Diversity1TwoToneIcon from "@mui/icons-material/Diversity1TwoTone";
import GroupsTwoToneIcon from "@mui/icons-material/GroupsTwoTone";
import { socialMediaLinks } from "../../../constantes";

const ProfileLeftSide = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item variant="" sx={{ padding: "18px" }}>
            <Stack
              direction="row"
              alignItems="start"
              spacing={1}
              useFlexGap
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <Diversity1TwoToneIcon
                    sx={{
                      padding: "12px",
                      color: "#2196F3",
                      fontWeight: "bold",
                      background: "#E8F3FC",
                      borderRadius: "9px",
                      width: "55px",
                      height: "55px",
                      fontSize: "66px",
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="#2196F3"
                    fontWeight="medium"
                    fontSize="16px"
                    textAlign="center"
                    sx={{ width: "100%" }}
                    component={"div"}
                  >
                    Followers
                    <div style={{ color: "black", textAlign: "center" }}>
                      240K
                    </div>
                  </Typography>
                </div>
              </Box>
              <Box sx={{}}>
                <IconButton>
                  <ArrowForwardIos />
                </IconButton>
              </Box>
            </Stack>
            <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />

            <Stack
              direction="row"
              alignItems="start"
              spacing={1}
              useFlexGap
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <GroupsTwoToneIcon
                    style={{
                      padding: "12px",
                      color: "#5B31AF",
                      fontWeight: "bold",
                      background: "#EFEAF7",
                      borderRadius: "9px",
                      width: "55px",
                      height: "55px",
                      fontSize: "66px",
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="#5B31AF"
                    fontWeight="medium"
                    fontSize="16px"
                    textAlign="center"
                    sx={{ width: "100%" }}
                    component={"div"}
                  >
                    Suivi(e)s
                    <div style={{ color: "black" }}>20M</div>
                  </Typography>
                  <Divider />
                </div>
              </Box>
              <Box sx={{}}>
                <IconButton>
                  <ArrowForwardIos />
                </IconButton>
              </Box>
            </Stack>
          </Item>
        </Grid>

        {/*SOCIAL MEDIA LINKS*/}

        <Grid item xs={12} md={12}>
          <Item variant="" sx={{ padding: "18px" }}>
            <Stack
              direction="column"
              alignItems="start"
              spacing={1}
              useFlexGap
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <Typography fontWeight="bold">A propos</Typography>
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
                inventore commodi quod a itaque doloribus asperiores? Esse non
                ipsum corporis deleniti maxime dolorem eos error blanditiis,
                obcaecati dolore eum. Earum?
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "15px", marginBottom: "15px" }} />

            <Stack
              direction="column"
              alignItems="start"
              spacing={1}
              useFlexGap
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              {socialMediaLinks.map((item) => (
                <Typography
                  draggable
                  display={"flex"}
                  gap={"15px"}
                  sx={{
                    textDecoration: "none",
                    color: "black",
                    "&:hover": {
                      color: "#2196F3",
                      cursor: "pointer",
                    },
                  }}
                >
                  {item.icon}
                  <Link
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      "&:hover": {
                        color: "#2196F3",
                        cursor: "pointer",
                      },
                    }}
                    key={item.name}
                    href={item.link}
                  >
                    <span>{item.link}</span>
                  </Link>
                </Typography>
              ))}
            </Stack>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileLeftSide;
