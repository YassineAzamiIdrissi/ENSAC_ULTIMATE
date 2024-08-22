import React from "react";
import NewBreadcrumbs from "./Breadcrumbs-mine";
import UserInfoCard from "./user-infos-card";
import { usePage } from "../../../hook/use-page";

const LayoutSocial = () => {
  const { page } = usePage();

  return (
    <>
      <NewBreadcrumbs page={page} />
      {/* user info card component */}
      <UserInfoCard page={page} />
      {/* <UserProfile /> */}
    </>
  );
};

export default LayoutSocial;
