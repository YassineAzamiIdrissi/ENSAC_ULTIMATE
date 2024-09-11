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
import { GroupAdd, PersonAdd, TravelExplore } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AvatarPh from "../../../profile/profile-user.png";
import ReplyAllTwoToneIcon from "@mui/icons-material/ReplyAllTwoTone";
import { useNavigate } from "react-router-dom";
import DeleteModal from "../delete-modal";
const SingleFollowingCard = ({ following }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useNavigate();

  const onNavigate = () => {
    router(`/social-profile/${following?._id}/${following?.entity}/Profile`);
  };
  /** background: "#E8F3FC",
color="#2196F3" */
  console.log(following._id);

  return (
    <Item
      variant="outlined"
      sx={{
        bgcolor: "#F8FAFC",
        border: "1.5px solid #EDF1F6",
        padding: "15px",
        "&:hover": {
          // border: "1px solid #1992F3",
          outline: "2px solid #DE2E4B",
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
            "&:hover": { color: "#DE2E4B", transform: "scale(1.1)" },
          }}
        >
          <Avatar src={following?.profilePicture || AvatarPh} />
          <Stack
            direction={"column"}
            sx={{ display: "flex", justifyContent: "start" }}
          >
            <Typography fontWeight={"bold"} fontSize={12}>
              {following?.firstName} {following?.lastName}
            </Typography>
            <Typography fontSize={12}>{following?.entity}</Typography>
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
              style={{ background: "none", color: "gray" }}
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
            <MenuItem onClick={handleClickOpen}>
              <ListItemIcon>
                <ReplyAllTwoToneIcon fontSize="small" />
              </ListItemIcon>
              Ne plus suivre
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
          color: "gray",
          fontWeight: "bold",
          textTransform: "initial",
          textAlign: "center",
          width: "100%",
          border: "2px solid transparent ",
          background: "transparent",
          display: "flex",
          gap: "10px",
          "&:hover": {
            background: "#DCDED6",
            color: "black",
            // border: "2px solid #1992F3",
          },
        }}
        onClick={handleClickOpen}
      >
        <ReplyAllTwoToneIcon />
        <Typography>Se désabonner</Typography>
      </Button>
      <DeleteModal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        user={following}
      />
    </Item>
  );
};

export default SingleFollowingCard;
