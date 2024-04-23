import React, { useContext } from "react";
import { UserContext } from "../../../../context/userContext";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  setCurrentUser(null);
  navigate("/auth/sign-in");
  return <></>;
};

export default Logout;
