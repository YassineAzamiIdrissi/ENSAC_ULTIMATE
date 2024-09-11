import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  InputBase,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { comCss } from "./ComponentsCss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { UserContext } from "../context/userContext";
import { Dropdown, Nav } from "react-bootstrap";
import CustomToggle from "./dropdowns";
import defaultProfilePic from "../../src/assets/images/avatars/default-profile-picture1.jpg";
import axios from "axios";
import "../../src/assets/scss/maker.css";
import { toast } from "react-toastify";
import Avatar from "./Avatar";
import ItemsDropdownMenu from "./ItemsDropdown";
import A_Nav_Bar_Search from "./A_Nav_Bar_Search";
import B_Search_Results_List from "./B_Search_Results_List";
import logo from "../assets/logoEnsac.png";
import RevealDropdown from "./base/RevealDropdown";
import { faEllipsisV, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCurrentUser } from "../hook/use-user";
const Navbar = () => {
  const classes = comCss();
  const [openMenu, setOpenMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  const [scrollNavbar, setScrollNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setScrollNavbar(true);
    } else {
      setScrollNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  // LOGIQUE BACKEND COMMENCE ICI :
  const { currentUser, fetchedUser, token } = useCurrentUser();
  return (
    <Box
      className={
        scrollNavbar
          ? `${classes.navbar_section_active}`
          : `${classes.navbar_section}`
      }
    >
      <Container maxWidth="lg">
        <Box className={classes.navbar_box}>
          <Box className={classes.navbar_laft}>
            <Box className={classes.navbar_laft_logo}>
              <Link to="/" style={{ width: "5rem", height: "3rem" }}>
                <img
                  src={logo}
                  alt="logo"
                  className={classes.img_responsive}
                  style={{ width: "8rem", height: "auto", objectFit: "cover" }}
                />
              </Link>
            </Box>
            <Box className={classes.navbar_laft_menu}>
              <Box className={classes.navbar_link_computer}>
                <Link to="/" className={`${classes.nav_link}`}>
                  Acceuil
                </Link>
                <Link to="/main_about" className={`${classes.nav_link}`}>
                  A propos
                </Link>
                <Link to="/courses" className={`${classes.nav_link}`}>
                  Nos formations
                </Link>
                <Link
                  to={`/social-profile/Posts`}
                  className={`${classes.nav_link}`}
                >
                  Réseau ENSAF
                </Link>

                {/* <Link to="/blog" className={`${classes.nav_link}`}>
                  Blog
                </Link>
                <Link to="/Academies" className={`${classes.nav_link}`}>
                  Academies
                </Link>
                <Link to="/faqPage" className={`${classes.nav_link}`}>
                  FAQ
                </Link> */}
              </Box>
              <Box className={classes.navbar_link_mobail}>
                <IconButton onClick={() => setOpenMenu(!openMenu)}>
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={"right"}
                  open={openMenu}
                  onClose={() => setOpenMenu(!openMenu)}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <IconButton
                    onClick={() => setOpenMenu(!openMenu)}
                    className={classes.clossessideNav}
                  >
                    <CloseIcon />
                  </IconButton>
                  <Link
                    to="/"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Acceuil
                  </Link>
                  <Link
                    to="/main_about"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    A propos
                  </Link>
                  <Link
                    to="/courses"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Nos formations
                  </Link>
                  {/* <Link
                    to="/blog"
                    className={`${classes.nav_link} ${classes.nav_link_mobail}`}
                  >
                    Blog
                  </Link> */}
                </Drawer>
              </Box>
            </Box>
            <div style={{ position: "relative" }}>
              <A_Nav_Bar_Search />
            </div>
            {/* searchbar nav bar */}
          </Box>
          {/* button left nav bar */}
          {!token ? (
            <Box className={classes.navbar_right}>
              <Button
                variant="outlined"
                href="/auth/sign-up"
                sx={{ marginRight: "12px", marginTop: "9px" }}
                className={`${classes.button} ${classes.button_1}`}
              >
                S'inscrire
              </Button>
              <RevealDropdown icon={faUser} placeholder="Connexion">
                <Dropdown.Item eventKey="1">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    // onClick={addQuiz}
                    to="/auth/sign-in-prof"
                  >
                    Professeur
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    // onClick={addQuiz}
                    to="/auth/sign-in"
                  >
                    Etudiant
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    // onClick={addQuiz}
                    to="/auth/sign-in-admin"
                  >
                    Administrateur
                  </Link>
                </Dropdown.Item>
              </RevealDropdown>
              {/* <Button
                href="/auth/sign-in"
                className={`${classes.button} ${classes.button_2}`}
                onClick={handleClick}
              >
                Se connecter
              </Button> */}
            </Box>
          ) : (
            <Nav.Item>
              <Dropdown autoClose="outside" className="h-100">
                <Dropdown.Toggle
                  as={Link}
                  to="#!"
                  className="dropdown-caret-none nav-link pe-0 py-0 lh-1 h-100 d-flex align-items-center"
                  variant=""
                >
                  <Avatar src={fetchedUser?.profilePicture} size="l" />
                </Dropdown.Toggle>
                <ItemsDropdownMenu
                  user={fetchedUser}
                  currentUser={currentUser}
                />
              </Dropdown>
            </Nav.Item>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
