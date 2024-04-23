import React, { useState } from "react";
import { pageCss } from "./PageCss";
import Pagebanner from "../components/Pagebanner";
import { RenderInputText } from "../components/RenderInputText";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { toast } from "react-toastify";

const Contact = () => {
  const classes = pageCss();
  const [contactinfo, setContactInfo] = useState({
    data: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    errors: {},
  });

  const handleSubject = (e) => {
    e.preventDefault();
    toast.success(`Msg de : ${contactinfo.data.name}`);
  };

  const handleOnChange = ({ target }) => {
    const { data, errors } = contactinfo;

    //setting errors
    target.value.length <= 3
      ? (errors[target.name] = `${target.name} Au moins trois lettres`)
      : (errors[target.name] = "");

    data[target.name] = target.value;
    setContactInfo({ data, errors });
  };


  return (
    <>
      <Navbar />
      <Pagebanner title="Contact" />
      <Box className={classes.contact} id="contact">
        <Container maxWidth="lg">
          <Box className={classes.contact_info_section}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} sm={5}>
                <Box className={classes.contact_information}>
                  <Box className={classes.contact_info_left}>
                    <span
                      className={classes.contact_info_icon}
                      style={{ color: "#f75023", backgroundColor: "#fedfd7" }}
                      aria-label="Address"
                    >
                      <i class="fas fa-map-marker-alt" aria-hidden="true"></i>
                    </span>
                  </Box>
                  <Box className={classes.contact_ingo_right}>
                    <Typography
                      variant="h2"
                      component="h2"
                      className={classes.contact_ingo_right_title}
                    >
                      Address
                    </Typography>
                    <Typography
                      variant="h5"
                      component="p"
                      className={classes.contact_ingo_right_description}
                    >
                      20, Somewhere in world
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.contact_information}>
                  <Box className={classes.contact_info_left}>
                    <span
                      className={classes.contact_info_icon}
                      style={{ color: "#1cbe59", backgroundColor: "#ddf5e6" }}
                      aria-label="Address"
                    >
                      <i class="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                  </Box>
                  <Box className={classes.contact_ingo_right}>
                    <Typography
                      variant="h2"
                      component="h2"
                      className={classes.contact_ingo_right_title}
                    >
                      Email
                    </Typography>
                    <Typography
                      variant="h5"
                      component="a"
                      href="#"
                      className={classes.contact_ingo_right_description}
                    >
                      hello@dizme.com
                    </Typography>
                  </Box>
                </Box>
                <Box className={classes.contact_information}>
                  <Box className={classes.contact_info_left}>
                    <span
                      className={classes.contact_info_icon}
                      style={{ color: "#8067f0", backgroundColor: "#ece8fd" }}
                      aria-label="Address"
                    >
                      <i class="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                  </Box>
                  <Box className={classes.contact_ingo_right}>
                    <Typography
                      variant="h2"
                      component="h2"
                      className={classes.contact_ingo_right_title}
                    >
                      Phone
                    </Typography>
                    <Typography
                      variant="h5"
                      component="a"
                      href="#"
                      className={classes.contact_ingo_right_description}
                    >
                      +8801924691725
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6} sm={7}>
                <Box className={classes.contact_form}>
                  <form onSubmit={handleSubject}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6} sm={6}>
                        {RenderInputText({
                          lablel: "Nom",
                          name: "name",
                          contactinfo: contactinfo,
                          onChange: handleOnChange,
                        })}
                      </Grid>
                      <Grid item xs={12} md={6} sm={6}>
                        {RenderInputText({
                          lablel: "Email",
                          name: "email",
                          contactinfo: contactinfo,
                          onChange: handleOnChange,
                        })}
                      </Grid>
                      <Grid item xs={12} md={6} sm={6}>
                        {RenderInputText({
                          lablel: "Téléphone",
                          name: "phone",
                          contactinfo: contactinfo,
                          onChange: handleOnChange,
                        })}
                      </Grid>
                      <Grid item xs={12} md={6} sm={6}>
                        {RenderInputText({
                          lablel: "Objet du messag",
                          name: "subject",
                          contactinfo: contactinfo,
                          onChange: handleOnChange,
                        })}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        {RenderInputText({
                          lablel: "Message",
                          name: "message",
                          contactinfo: contactinfo,
                          onChange: handleOnChange,
                          multiline: true,
                          rows: 5,
                        })}
                      </Grid>
                      <Grid item xs={12} md={12}>
                        <Button
                          type="submit"
                          className={`${classes.button} ${classes.button_2}`}
                        >
                          Envoyer
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default Contact;
