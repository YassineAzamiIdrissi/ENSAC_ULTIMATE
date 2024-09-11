import {
  ExploreTwoTone,
  Facebook,
  GroupAddTwoTone,
  Instagram,
  Language,
  LinkedIn,
} from "@mui/icons-material";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import PersonPinTwoToneIcon from "@mui/icons-material/PersonPinTwoTone";
import PostAddTwoToneIcon from "@mui/icons-material/PostAddTwoTone";

export const menuSocialMediaItems = [
  // {
  //   label: "Profile",
  //   icon: <PersonPinTwoToneIcon />, // Remplace par l'icône souhaitée
  //   path: "1/Profile",
  //   sx: {
  //     color: "black",
  //     fontWeight: "semi-bold",
  //     textTransform: "none",
  //     borderBottom: "2px solid #1B96F3",
  //     borderRadius: "0px",
  //   },
  // },
  {
    label: "Followers",
    icon: <PeopleAltTwoToneIcon />, // Remplace par l'icône souhaitée
    path: "Followers",
    sx: {
      color: "black",
      fontWeight: "semi-bold",
      textTransform: "none",
    },
  },
  {
    label: "Suivi(e)s",
    icon: <GroupAddTwoTone />, // Remplace par l'icône souhaitée
    path: "Followings",
    sx: {
      color: "black",
      fontWeight: "semi-bold",
      textTransform: "none",
    },
  },

  {
    label: "Tous les posts",
    icon: <PostAddTwoToneIcon />, // Remplace par l'icône souhaitée
    path: "Posts",
    sx: {
      color: "black",
      fontWeight: "semi-bold",
      textTransform: "none",
    },
  },
];

export const socialMediaLinks = [
  {
    name: "Website",
    icon: <Language />,
    link: "https://own-site.com/",
  },
  {
    name: "Instagram",
    icon: <Instagram />,
    link: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    icon: <Facebook />,
    link: "https://www.facebook.com/",
  },
  {
    name: "LinkedIn",
    icon: <LinkedIn />,
    link: "https://in.linkedin.com/",
  },
];
