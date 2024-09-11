import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import axios from "axios";
import { toast } from "react-toastify";

export const useCurrentUser = () => {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const entity = currentUser?.entity;
  const [fetchedUser, setFetchedUser] = useState(null);
  useEffect(() => {
    const fetchConcernedUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/${entity.toLowerCase()}s/get/${
            currentUser?.id
          }`
        );
        setFetchedUser(response.data);
      } catch (err) {
        // un toast pour indiquer que des choses ne marchent pas...
        toast.error(
          "Ops! il semble que quelque chose ne marche pas, veuillez actualiser cette page !"
        );
      }
    };
    if (token) {
      fetchConcernedUser();
    }
  }, []);

  return {
    fetchedUser,
    token,
    entity,
    currentUser,
  };
};

export const useGetPostOnwerInfo = (entity, userId) => {
  const [postUser, setPostUser] = useState(null);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/${entity}s/get/${userId}`
        );

        setPostUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [userId]);

  return { postUser };
};
