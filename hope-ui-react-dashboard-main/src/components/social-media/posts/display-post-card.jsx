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
  Dialog,
  DialogContent,
  DialogActions,
  Tooltip,
  Typography,
  // Slide,
} from "@mui/material";
import { Stack } from "@mui/system";
import { BadgeCheck, ThumbsUp } from "lucide-react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { Item } from "../NewCard";
import AvatarPh from "../../../profile/profile-user.png";
import BgPh from "../../../profile/profile-bg.png";
import CommentPost from "./comment-post-card";
import "./animations.css"; // Fichier CSS pour gérer les animations
import CommentsAndRepliesDrawer from "./comments-replies-drawer";
import { ConvertDate } from "../../../constantes/convertDate";
import axios from "axios";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useNavigate } from "react-router-dom";
import { usePage } from "../../../hook/use-page";
import { useFollow } from "../../../hook/use-relation";
import { useGetPostOnwerInfo } from "../../../hook/use-user";

const DispalyPostCard = ({
  noButton,
  postId,
  userId,
  userName,
  caption,
  reactions,
  comments,
  userEntity,
  picture,
  updatedAt,
}) => {
  console.log("noButton : ", noButton);
  if (noButton === undefined) {
    noButton = false;
  }

  // console.log(reactions);
  const [anchorEl, setAnchorEl] = useState(null);
  const [liked, setLiked] = useState(Boolean);
  const [comment, setComment] = useState(false);
  const open = Boolean(anchorEl);
  const [localComments, setLocalReactions] = useState(comments?.length);
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const router = useNavigate();
  const { page } = usePage();
  const handleUpdateReactions = () => {
    setLocalReactions((prev) => prev + 1);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openCommentsDrawer, setOpenCommentsDrawer] = React.useState(false);
  const toggleDrawer = (isOpen) => () => {
    setOpenCommentsDrawer(isOpen);
  };

  //Convertir la date de publication
  const dateDePublication = ConvertDate(updatedAt);
  const entity = userEntity?.toLowerCase();

  //Follow hook
  const { handleFollow } = useFollow(userId, entity);

  //recuperer les information du proprio de ce post
  // console.log("userEntity : ", userEntity);
  // console.log("entity : ", entity);
  // console.log("userEntity : ", userEntity.toLowerCase());


  const { postUser } = useGetPostOnwerInfo(entity, userId);

  console.log("postUser : ", postUser);
  console.log("userId : ", userId);
  console.log("userEntity : ", userEntity);

  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />;
  // });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100; // Position X relative en pourcentage
    const y = ((e.clientY - top) / height) * 100; // Position Y relative en pourcentage
    setMousePosition({ x, y });
  };
  return (
    <Stack direction={"column"} mb={"20px"}>
      <Item variant="">
        <Stack
          direction={"row"}
          sx={{ display: "flex", justifyContent: "space-between", mb: "15px" }}
        >
          <Stack
            direction={"row"}
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            gap={2}
            onClick={() =>
              router(`/social-profile/${userId}/${userEntity}/Profile`)
            }
          >
            {postUser?.profilePicture ? (
              <Avatar src={postUser.profilePicture} />
            ) : (
              <Avatar src={AvatarPh} />
            )}
            <Stack direction={"column"}>
              <Typography fontWeight={"bold"}>{userName}</Typography>
              <Typography variant={"body2"} fontSize={"11px"}>
                {dateDePublication}
              </Typography>
            </Stack>
            {userEntity && (
              <Chip
                size="medium"
                label={userEntity}
                variant="outlined"
                icon={<BadgeCheck color="#2196F3" />}
                sx={{
                  fontSize: 12,
                  ml: "4px",
                  color: "#0F5C2E",
                  borderColor: "#2196F3",
                }}
              />
            )}
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
              <MenuItem onClick={handleFollow}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Suivre
              </MenuItem>
              {page !== "Profile" && (
                <MenuItem
                  onClick={() =>
                    router(`/social-profile/${userId}/${userEntity}/Profile`)
                  }
                >
                  <ListItemIcon>
                    <TravelExplore fontSize="small" />
                  </ListItemIcon>
                  Visiter le profil
                </MenuItem>
              )}
            </Menu>
          </div>
        </Stack>

        <Typography textAlign={"justify"} mb={"15px"}>
          {caption}
        </Typography>

        {picture && (
          <>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                borderRadius: "10px",
                m: "0",
                p: "0",
                mb: "10px",
              }}
            >
              <CardMedia
                src={picture}
                component="img"
                height="194"
                alt="post image"
                sx={{
                  borderRadius: "10px",
                  objectFit: "cover",

                  width: "100%",
                  height: "auto",
                  transition: "all .4s ease-in-out",
                  cursor: "pointer",
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                  "&:hover": {
                    transform: "scale(1.5)",
                  },
                }}
                onMouseMove={handleMouseMove}
                onClick={() => setOpenImageDialog(true)} // Ouvrir le modal au clic
              />
            </Box>
            <Dialog
              open={openImageDialog}
              // TransitionComponent={Transition}
              // keepMounted
              onClose={() => setOpenImageDialog(false)}
              fullWidth
              maxWidth="md"
              sx={{ bgColor: "transparent" }}
            >
              <DialogContent sx={{ position: "relative", padding: "0px" }}>
                <img
                  src={picture}
                  alt="Full screen"
                  style={{ width: "100%" }}
                />
                <HighlightOffIcon
                  onClick={() => setOpenImageDialog(false)}
                  sx={{
                    color: "red",
                    fontSize: "30px",
                    cursor: "pointer",
                    position: "absolute",
                    top: "2px",
                    right: "2px",
                    opacity: 0.2,
                    "&:hover": {
                      opacity: 0.8,
                    },
                  }}
                />
              </DialogContent>
            </Dialog>
          </>
        )}

        {/* Bouttons du bas  */}

        <Stack direction={"row"}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {/* {!reactions && ( */}
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
              {/* )} */}
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textTransform: "capitalize",
                  color: "black",
                }}
                startIcon={<Comment style={{ color: "#5B31AF" }} size={18} />}
                onClick={toggleDrawer(true)}
              >
                <span>{localComments | 0} réactions</span>
              </Button>
            </div>

            {/* {!reactions && ( */}
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
            {/* )} */}
          </Box>
        </Stack>

        <CSSTransition
          in={comment}
          timeout={500}
          classNames="slide"
          unmountOnExit
        >
          <CommentPost
            postId={postId}
            onCommentSuccess={handleUpdateReactions}
          />
        </CSSTransition>

        <CommentsAndRepliesDrawer
          show={reactions}
          openDrawer={openCommentsDrawer}
          toggleDrawer={toggleDrawer}
          postId={postId}
          userId={userId}
          userName={userName}
          caption={caption}
          reactions={reactions}
          comments={comments}
          picture={picture}
          updatedAt={updatedAt}
        />
      </Item>
    </Stack>
  );
};

export default DispalyPostCard;
