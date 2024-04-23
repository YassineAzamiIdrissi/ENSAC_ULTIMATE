import React from "react";
import Pagebanner from "../components/Pagebanner";
import { pageCss } from "./PageCss";
import blogimg from "../image/blog.jpg";
import { Box, Container, Typography } from "@mui/material";
import Navbar from "../components/Navbar";

const SingleBlog = () => {
  const classes = pageCss();
  return (
    <>
      <Navbar />
      <Pagebanner title="Single blog page" />
      <Container maxWidth="lg">
        <Box className={classes.blog_post_img_box}>
          <img src={blogimg} alt="blog img" className={classes.blog_post_img} />
        </Box>
        <Box className={classes.single_blog_text}>
          <Typography variant="h5" component="p">
            Condimentum leo utipsum euismod feugiatn elntum sapiennonser
            variusmi elementum necunc elementum velitnon tortor convallis
            variusa placerat nequhse. Mauris varius ullamcorper tincidsellus
            egestas innisivel sollicituullam feugiate facilisis ones Suspendisse
            blandit sedtincinean. Mauris varius ullamcorper tincidsellus egestas
            innisivel sollicituullam feugiate facilisis ones velleo finibus
            maximus nequsese sedmattis auspendisse duimetus ullamcorper
            faucibuse blandit sedtincinean.
          </Typography>
          <Typography variant="h5" component="p">
            Condimentum leo utipsum euismod feugiatn elntum sapiennonser
            variusmi elementum necunc elementum velitnon tortor convallis
            variusa placerat nequhse. Mauris varius ullamcorper tincidsellus
            egestas innisivel sollicituullam feugiate facilisis ones Suspendisse
            blandit sedtincinean. Mauris varius ullamcorper tincidsellus egestas
            innisivel sollicituullam feugiate facilisis ones velleo finibus
            maximus nequsese sedmattis auspendisse duimetus ullamcorper
            faucibuse blandit sedtincinean.
          </Typography>
          <Typography variant="h5" component="p">
            Condimentum leo utipsum euismod feugiatn elntum sapiennonser
            variusmi elementum necunc elementum velitnon tortor convallis
            variusa placerat nequhse. Mauris varius ullamcorper tincidsellus
            egestas innisivel sollicituullam feugiate facilisis ones Suspendisse
            blandit sedtincinean. Mauris varius ullamcorper tincidsellus egestas
            innisivel sollicituullam feugiate facilisis ones velleo finibus
            maximus nequsese sedmattis auspendisse duimetus ullamcorper
            faucibuse blandit sedtincinean.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SingleBlog;
