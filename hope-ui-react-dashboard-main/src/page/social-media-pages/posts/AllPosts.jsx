import React, { useEffect, useState } from "react";
import DispalyPostCard from "../../../components/social-media/posts/display-post-card";
import { Box, Grid } from "@mui/material";
import { LeftSideAllPost } from "../../../components/social-media/posts/all-posts";
import { toast } from "react-toastify";
import axios from "axios";
import LoadBackdrop from "../../LoadBackdrop";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(Boolean);
  useEffect(() => {
    setIsLoading(true); // Début du chargement
    const fetchAllPosts = async () => {
      try {
        const allPosts = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/allposts`
        );
        setPosts(allPosts.data);
      } catch (err) {
        toast.error("Une erreur est survenue lors du chargement des posts.");
      } finally {
        setIsLoading(false); // Fin du chargement
      }
    };
    fetchAllPosts();
  }, []);

  console.log('my posts : ',posts);
  if (isLoading) {
    return <LoadBackdrop open={isLoading} />;
  }

  return (
    <>
      <Box sx={{ flexGrow: 1, mt: "25px", position: "relative" }}>
        <Grid container spacing={2} sx={{ position: "relative" }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              position: "sticky",
              top: "0px",
              alignSelf: "flex-start",
              bgcolor: "#F5F7FA",
              pb: "30px",
              zIndex: "99",
            }}
          >
            <LeftSideAllPost />
          </Grid>
          <Grid item xs={12} md={8}>
            {posts.map((singlePost) => (
              <DispalyPostCard
                key={singlePost?._id}
                postId={singlePost?._id}
                userId={singlePost?.userId}
                userName={singlePost?.userName}
                userEntity={singlePost?.userType}
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
    </>
  );
};

export default AllPosts;
