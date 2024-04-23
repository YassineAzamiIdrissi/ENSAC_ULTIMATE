import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { comCss } from './ComponentsCss'
import { Link } from 'react-router-dom'
import logo from '../image/logo.svg'
import playstore from '../image/playstore.webp'
import appstore from '../image/appstore.webp'
import facebook from '../image/facebook.svg'
import linkedin from '../image/linkedin.svg'
import youtube from '../image/youtube.svg'
import instagram from '../image/instagram.svg'

const Footer = () => {
  const classes = comCss();
  return (
    <Box className={classes.footer}>
      <Container maxWidth="lg">
        <Box className={classes.footer_content}>
          <Grid container spacing={{md:2,lg:4}}>
            <Grid item md={4} sm={6} xs={12}>
              <Box className={classes.footer_1}>
                <Link to="/">
                  <img src={logo} alt="logo" className={classes.footer_logo} />
                </Link>
                <Typography variant="h5" component="h5">
                  Téléchargez notre application mobile
                </Typography>
                <Box className={classes.footer_1_app_stor}>
                  <Link to="/">
                    <img src={playstore} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                    <img src={appstore} alt="logo" className={classes.img_responsive} />
                  </Link>
                </Box>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={12}>
              <Box className={classes.footer_2}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Entreprise
                </Typography>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Carrière</Link>
                <Link to="/privacypolicy" className={`${classes.nav_link} ${classes.footer_link}`}>Politique de confidentialité</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Devenir affilié</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Politique de remboursement</Link>
              </Box>
            </Grid>
            <Grid item md={2.5} sm={6} xs={12}>
              <Box className={classes.footer_3}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Autres
                </Typography>
                <Link to="/faq" className={`${classes.nav_link} ${classes.footer_link}`}>FAQ</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Notes et guides</Link>
                <Link to="/blog" className={`${classes.nav_link} ${classes.footer_link}`}>Blog</Link>
                <Link to="/" className={`${classes.nav_link} ${classes.footer_link}`}>Cours intensifs</Link>
              </Box>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <Box className={classes.footer_4}>
                <Typography variant="h3" component="h3" className={classes.footer_title}>
                  Restez en contact avec nous sur
                </Typography>
                <List className={classes.footer_4_list}>
                  <ListItem>
                    <strong>Appel: &nbsp;</strong>
                    <Link to="/"> 16910</Link>&nbsp;
                    (8h - 23h)
                  </ListItem>
                  <ListItem>
                    <strong>SMS: &nbsp;</strong>
                    <strong>10MSHelp</strong> &nbsp;
                    au 26969
                  </ListItem>
                  <ListItem>
                    <strong>Email:</strong> &nbsp;
                    <Link to="/">support@gmail.com</Link>
                  </ListItem>
                </List>
                <Box className={classes.footer_4_sosial_media}>
                  <Link to="/">
                  <img src={facebook} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={instagram} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={youtube} alt="logo" className={classes.img_responsive} />
                  </Link>
                  <Link to="/">
                  <img src={linkedin} alt="logo" className={classes.img_responsive} />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="h5" component="p" >
          © 2024 ENSAC. BAH IBRAHIM & YASSINE EL AZAMI EL IDRISSI
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
