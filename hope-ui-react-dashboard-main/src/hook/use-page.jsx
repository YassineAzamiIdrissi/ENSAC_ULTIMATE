import { useLocation } from "react-router-dom";

export const usePage = () => {
  const { pathname } = useLocation();

  let page = pathname.split("/").pop();

  // if (page === "posts") page = "Profile";
  // if (page === "followers") page = "Mes Followers";
  // if (page === "followings") page = "Suivi(e)s";
  // if (page === "explore") page = "Explorer";
  // if (page === "posts") page = "Profile";
  if (page === "Posts") page = "Tous les posts";
  if (page === "Followings") page = "Mes suivis";
  if (page === "Followers") page = "Mes abonnés";

  return {
    page,
  };
};
