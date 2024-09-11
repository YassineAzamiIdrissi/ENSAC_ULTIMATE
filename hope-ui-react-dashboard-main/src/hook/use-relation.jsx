import { useEffect, useState } from "react";
import { useCurrentUser } from "./use-user";
import axios from "axios";
import { toast } from "react-toastify";

export const useRealation = (type) => {
  const [userSocialMedia, setUserSocialMedia] = useState([]);

  const { fetchedUser, currentUser } = useCurrentUser();
  // const followingsIdsAndEntities = fetchedUser?.followings;

  const idsAndEntities =
    type === "followers" ? fetchedUser?.followers : fetchedUser?.followings;

  useEffect(() => {
    const fetchFollowings = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/generals/followingsOrfollowers`,
          {
            idsAndEntities,
          },
          {
            headers: {
              Authorization: `Bearer ${currentUser?.token}`,
            },
          }
        );
        setUserSocialMedia(response.data); // Enregistrer les données des followings
      } catch (err) {
        toast.error("Erreur lors de la sélection des followings");
        console.error("Erreur lors de la récupération des followings : ", err);
      }
    };

    if (fetchedUser) {
      fetchFollowings();
    }
  }, [fetchedUser]);

  const userSocialMediaInfos = userSocialMedia.filter(
    (user) => user && user._id && user.firstName && user.lastName && user.entity
    //   user.followings &&
    //   user.followers
  );

  return {
    userSocialMediaInfos,
    // setUserSocialMedia,
  };
};

//Follow
export const useFollow = (idOfUserToFollow, entity) => {
  const { currentUser } = useCurrentUser();

  const handleFollow = async () => {
    try {
      toast.loading("En cours de follow...");

      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/generals/follow/${idOfUserToFollow}`,
        { toBeFollowedEntity: entity },
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );

      toast.dismiss(); // Retirer le toast de chargement après la requête

      if (response.status === 200) {
        toast.success("Vous le suivez maintenant !");
      }
    } catch (err) {
      toast.dismiss(); // Retirer le toast de chargement
      if (err.response && err.response.status === 400) {
        toast.info(err.response.data);
      } else {
        toast.error("Erreur survenue pendant la procédure de follow.");
      }
      console.log("Erreur survenue pendant la procédure de follow", err);
    }
  };

  return { handleFollow };
};
