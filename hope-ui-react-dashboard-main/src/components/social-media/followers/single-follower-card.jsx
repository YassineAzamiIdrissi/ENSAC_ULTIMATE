import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Item } from "../NewCard";
import { PersonAdd, TravelExplore } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AvatarPh from "../../../profile/profile-user.png";
import GroupAddTwoToneIcon from "@mui/icons-material/GroupAddTwoTone";
import ReplyAllTwoToneIcon from "@mui/icons-material/ReplyAllTwoTone";
import { useNavigate } from "react-router-dom";
import { useFollow, useRealation } from "../../../hook/use-relation";

const SingleFollowerCard = ({ follower }) => {
  const { handleFollow } = useFollow(follower?._id, follower?.entity);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const router = useNavigate();
  const onNavigate = () => {
    router(`/social-profile/${follower?._id}/${follower?.entity}/Profile`);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Item
      variant="outlined"
      sx={{
        bgcolor: "#F8FAFC",
        border: "1.5px solid #EDF1F6",
        padding: "15px",
        "&:hover": {
          outline: "2px solid #1992F3",
        },
      }}
    >
      <Stack
        direction={"row"}
        sx={{ display: "flex", justifyContent: "space-between", mb: "15px" }}
      >
        <Stack
          direction={"row"}
          gap={2}
          onClick={onNavigate}
          sx={{
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": { color: "#1992F3", transform: "scale(1.1)" },
          }}
        >
          <Avatar src={follower?.profilePicture || AvatarPh} />
          <Stack
            direction={"column"}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <Typography fontWeight={"bold"} fontSize={12}>
              {follower?.firstName} {follower?.lastName}
            </Typography>
            <Typography fontSize={12}>{follower?.entity}</Typography>
          </Stack>
        </Stack>

        <div>
          <Tooltip title="Menu">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              style={{ background: "none", color: "#2196F3" }}
            >
              <MoreHorizIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                borderRadius: "5px",
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Suivre
            </MenuItem>

            <MenuItem onClick={onNavigate}>
              <ListItemIcon>
                <TravelExplore fontSize="small" />
              </ListItemIcon>
              Visiter le profil
            </MenuItem>
          </Menu>
        </div>
      </Stack>

      <Button
        variant=""
        sx={{
          color: "#1992F3",
          fontWeight: "bold",
          textTransform: "initial",
          textAlign: "center",
          width: "100%",
          border: "2px solid #9DC9ED ",
          background: "transparent",
          display: "flex",
          gap: "10px",
          "&:hover": {
            background: "#EFF6FC",
            border: "2px solid #1992F3",
          },
        }}
        onClick={handleFollow}
      >
        <GroupAddTwoToneIcon />
        <Typography>Suivre</Typography>
      </Button>
    </Item>
  );
};

export default SingleFollowerCard;
