import React from "react";
import Horizontal from "../layouts/dashboard/horizontal";
import Boxed from "../layouts/dashboard/boxed";
import DualHorizontal from "../layouts/dashboard/dual-horizontal";
import DualCompact from "../layouts/dashboard/dual-compact";
import BoxedFancy from "../layouts/dashboard/boxed-fancy";
import UserProvider from "../context/userContext";
export const IndexRouters = [
  {
    path: "horizontal",
    element: (
      <UserProvider>
        <Horizontal />
      </UserProvider>
    ),
  },
  {
    path: "dual-horizontal",
    element: (
      <UserProvider>
        <DualHorizontal />
      </UserProvider>
    ),
  },
  {
    path: "dual-compact",
    element: (
      <UserProvider>
        <DualCompact />
      </UserProvider>
    ),
  },
  {
    path: "boxedFancy",
    element: (
      <UserProvider>
        <BoxedFancy />
      </UserProvider>
    ),
  },
  {
    path: "boxed",
    element: (
      <UserProvider>
        <Boxed />
      </UserProvider>
    ),
  },
];
