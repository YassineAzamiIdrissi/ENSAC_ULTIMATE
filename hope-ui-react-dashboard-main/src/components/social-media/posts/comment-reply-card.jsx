import {
  Comment,
  PersonAdd,
  QuestionAnswer,
  TravelExplore,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Chip,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import { BadgeCheck,  ThumbsUp } from "lucide-react";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Item } from "../NewCard";
import AvatarPh from "../../../profile/profile-user.png";
import BgPh from "../../../profile/profile-bg.png";
import CommentPost from "./comment-post-card";
import "./animations.css"; // Fichier CSS pour gérer les animations
import CommentsAndRepliesDrawer from "./comments-replies-drawer";

const CommentAndReplyCard = ({ img }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(Boolean);
  const [comment, setComment] = useState(false);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack direction={"column"} mb={"20px"} >
      <Item variant="" sx={{background: '#eef2f6'}}>
        <Stack
          direction={"row"}
          sx={{ display: "flex", justifyContent: "space-between", mb: "15px" }}
        >
          <Stack
            direction={"row"}
            sx={{ display: "flex", alignItems: "center" }}
            gap={2}
          >
            <Avatar src={AvatarPh} />
            <Typography fontWeight={"bold"}>John Doe</Typography>
            <Chip
              size="medium"
              label="Professeur"
              variant="outlined"
              icon={<BadgeCheck color="#2196F3" />}
              sx={{
                fontSize: 12,
                ml: "4px",
                color: "#0F5C2E",
                borderColor: "#2196F3",
              }}
            />
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
                style={{ background: "#EDE7F6", color: "#5B31AF" }}
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

              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <TravelExplore fontSize="small" />
                </ListItemIcon>
                Visiter le profil
              </MenuItem>
            </Menu>
          </div>
        </Stack>

        <Typography textAlign={"justify"} mb={"15px"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia omnis
          cupiditate totam est, amet reiciendis molestiae assumenda at
          voluptate, animi dolorum maxime neque reprehenderit maiores. Illo enim
          deserunt molestiae laborum.
        </Typography>

        {img && (
          <CardMedia
            src={BgPh}
            component="img"
            height="194"
            alt="post image"
            sx={{ borderRadius: "10px", objectFit: "cover", mb: "10px" }}
          />
        )}

        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  color: "black",
                  mr: "10px",
                }}
                startIcon={
                  <ThumbsUp
                    style={{ color: liked ? "red" : "Black" }}
                    size={18}
                  />
                }
                onClick={() => setLiked((prev) => !prev)}
              >
                <span>12 J'aimes</span>
              </Button>

            </div>

            <div>
              <Button
                sx={{
                  alignItems: "center",
                  textTransform: "capitalize",
                  color: "black",
                }}
                startIcon={
                  <QuestionAnswer style={{ color: "#2196F3" }} size={18} />
                }
                onClick={() => setComment((prev) => !prev)}
              >
                <span>Commenter</span>
              </Button>
            </div>
          </Box>
        </Stack>

        <CSSTransition
          in={comment}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <CommentPost />
        </CSSTransition>
      </Item>
    </Stack>
  );
};

export default CommentAndReplyCard;
