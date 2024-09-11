import { Box, Grid } from "@mui/material";
import React from "react";
import CreatePostDrawer from "./create-post-drawer";
import DispalyPostCard from "./display-post-card";
import { Item } from "../NewCard";
import { useCurrentUser } from "../../../hook/use-user";
import axios from "axios";
import { toast } from "react-toastify";
import LoadBackdrop from "../../../page/LoadBackdrop";
import { useParams } from "react-router-dom";

const ProfileRightSide = () => {
  const [myPosts, setMyPosts] = React.useState([]);
  // isloading
  const [isLoading, setIsLoading] = React.useState(true);
  const { currentUser } = useCurrentUser();

  const { userID } = useParams();
  const idOfPostOwner = userID;
  console.log(idOfPostOwner);
  console.log(currentUser.id);

  React.useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        if (idOfPostOwner === currentUser.id) {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/posts/myPosts`,
            {
              headers: {
                Authorization: `Bearer ${currentUser.token}`,
              },
            }
          );
          setMyPosts(response.data);
        } else {
          const response = await axios.get(
            `${process.env.REACT_APP_BASE_URL}/posts/posts/${idOfPostOwner}`
          );

          setMyPosts(response.data);
        }
      } catch (error) {
        toast.error("Erreur lors de la recuperation des posts");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [currentUser.id || idOfPostOwner]);

  console.log("My posts : ", myPosts);
  //render backdrop when isLoading
  if (isLoading) {
    return <LoadBackdrop open={isLoading} />;
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Item variant="" sx={{ padding: "5px" }}>
            <CreatePostDrawer />
          </Item>
        </Grid>
        <Grid item xs={12} md={12} gap={"50px"}>
          {myPosts.map((singlePost) => (
            <DispalyPostCard
              key={singlePost?._id}
              postId={singlePost?._id}
              userId={singlePost?.userId}
              userEntity={singlePost?.userType}
              userName={singlePost?.userName}
              caption={singlePost?.caption}
              reactions={singlePost?.reactions}
              comments={singlePost?.comments}
              picture={singlePost?.picture}
              updatedAt={singlePost?.updatedAt}
            />
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileRightSide;
