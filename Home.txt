import React, { useContext } from "react";
import Hero from "../components/Hero";
import Extra1 from "../components/Extra1";
import { pageCss } from "./PageCss";
import { Box, Container, Grid, Typography } from "@mui/material";
import Slidercourse from "../components/Slidercourse";
import Mantor from "../components/Mantor";
import Blog from "../components/Blog";
import TextimonialCom from "../components/TextimonialCom";
import Slider from "react-slick";
import { settings, testimonial } from "./Common";
import { Link } from "react-router-dom";
import { home_count } from "../data";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { UserContext } from "../context/userContext";
const data = [1, 2, 3, 4, 5, 6, 7];
const Home = () => {
  const classes = pageCss();
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  return (
    <>
      <NavBar />
      <Hero />
      <Extra1 />
      <Box className={classes.home_course_section}>
        <Container maxWidth="lg">
          <Box className={classes.home_course}>
            <Typography
              variant="h3"
              component="h3"
              sx={{ textAlign: "center" }}
              className={`${classes.slider_title} ${classes.home_carosol_title_padding}`}
            >
              Nos recommandations
            </Typography>
            <Box className={classes.home_course_slider}>
              <Grid container>
                <Grid item md={4} sm={4} xs={12}>
                  <Slidercourse />
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                  <Slidercourse />
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                  <Slidercourse />
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box className={classes.home_course}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h3"
                className={`${classes.slider_title} ${classes.home_carosol_title_padding}`}
              >
                + Populaires
              </Typography>
              <Link to="/courses" className={classes.home_view_all_button}>
                Voir tout
              </Link>
            </Box>
            <Box className={classes.home_course_slider}>
              <Slider {...settings}>
                {data.map((item) => (
                  <Slidercourse key={item} />
                ))}
              </Slider>
            </Box>
          </Box>
          <Box className={classes.home_mantor}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h3"
                className={`${classes.slider_title} ${classes.home_carosol_title_padding}`}
              >
                Nos instructeurs
              </Typography>
              <Link to="/mantor" className={classes.home_view_all_button}>
                Voir tout
              </Link>
            </Box>
            <Grid container className={classes.home_mantor_box}>
              <Grid item md={3} sm={3} xs={12}>
                <Mantor />
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Mantor />
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Mantor />
              </Grid>
              <Grid item md={3} sm={3} xs={12}>
                <Mantor />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {!token && (
        <>
          <Box className={`${classes.home_count_section}`}>
            <Container maxWidth="lg">
              <Typography
                variant="h3"
                component="h3"
                className={`${classes.home_count_title} ${classes.home_carosol_title_padding}`}
              >
                Nos réalisations
              </Typography>
              <Box className={classes.home_count_box}>
                <Grid container spacing={2}>
                  {home_count.map((item, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Box className={classes.count_icon_box}>
                        <Box className={classes.count_icon}>{item.icon}</Box>
                        <Box className={classes.count_content}>
                          <Typography
                            variant="h4"
                            component="h4"
                            className={classes.count_title}
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="h4"
                            component="p"
                            className={classes.count_des}
                          >
                            {item.des}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box className={classes.home_testimonial_section}>
            <Container maxWidth="lg">
              <Box className={classes.home_testimonial}>
                <Typography
                  variant="h3"
                  component="h3"
                  sx={{ textAlign: "center" }}
                  className={`${classes.slider_title} ${classes.home_carosol_title_padding}`}
                >
                  Témoignages des abonnés
                </Typography>
                <Box className={classes.home_testimonial_box}>
                  <Slider {...testimonial}>
                    {data.map((item) => (
                      <TextimonialCom key={item} />
                    ))}
                  </Slider>
                </Box>
              </Box>
            </Container>
          </Box>
        </>
      )}
      <Box className={classes.home_blog_section}>
        <Container maxWidth="lg">
          <Box className={classes.home_blog}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h3"
                className={`${classes.slider_title} ${classes.home_carosol_title_padding}`}
              >
                Blog
              </Typography>
              <Link to="/blog" className={classes.home_view_all_button}>
                Voir tout
              </Link>
            </Box>
            <Box className={classes.home_blog_box}>
              <Grid container spacing={3}>
                <Grid item md={4} sm={4} xs={12}>
                  <Blog />
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                  <Blog />
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                  <Blog />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Home;
