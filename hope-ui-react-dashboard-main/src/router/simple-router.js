import React from "react";
// import { Switch, Route } from 'react-router-dom'

// auth
import ConfirmMail from "../views/dashboard/auth/confirm-mail";
import LockScreen from "../views/dashboard/auth/lock-screen";
import Recoverpw from "../views/dashboard/auth/recoverpw";
import SignIn from "../views/dashboard/auth/sign-in";
import SignUp from "../views/dashboard/auth/sign-up";
// errors
import Error404 from "../views/dashboard/errors/error404";
import Error500 from "../views/dashboard/errors/error500";
import Maintenance from "../views/dashboard/errors/maintenance";
import About from "../page/About";
import UserProvider from "../context/userContext";
import SignInFormProf from "../views/dashboard/auth/sign-in-prof";
import SignInFormAdmin from "../views/dashboard/auth/Sign-in-admin"; 


export const SimpleRouter = [
  {
    path: "/auth/sign-in",
    element: (
      <UserProvider>
        <SignIn />
      </UserProvider>
    ),
  },
  {
    path: "/auth/sign-in-prof",
    element: (
      <UserProvider>
        <SignInFormProf />
      </UserProvider>
    ),
  },
  {
    path: "/auth/sign-in-admin",
    element: (
      <UserProvider>
        <SignInFormAdmin />
      </UserProvider>
    ),
  },
  {
    path: "auth/sign-up",
    element: (
      <UserProvider>
        <SignUp />
      </UserProvider>
    ),
  },
  {
    path: "auth/confirm-mail",
    element: (
      <UserProvider>
        <ConfirmMail />
      </UserProvider>
    ),
  },
  {
    path: "auth/lock-screen",
    element: (
      <UserProvider>
        <LockScreen />
      </UserProvider>
    ),
  },
  {
    path: "auth/recoverpw",
    element: (
      <UserProvider>
        <Recoverpw />
      </UserProvider>
    ),
  },
  {
    path: "errors/error404",
    element: (
      <UserProvider>
        <Error404 />
      </UserProvider>
    ),
  },
  {
    path: "errors/error500",
    element: (
      <UserProvider>
        <Error500 />
      </UserProvider>
    ),
  },
  {
    path: "errors/maintenance",
    element: (
      <UserProvider>
        <Maintenance />
      </UserProvider>
    ),
  },
];
