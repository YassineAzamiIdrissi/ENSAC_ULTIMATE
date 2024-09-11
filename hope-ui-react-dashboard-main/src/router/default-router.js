import React from "react";
import Index from "../views/dashboard/index";
// import { Switch, Route } from 'react-router-dom'
// user
import UserProfile from "../views/dashboard/app/user-profile";
import UserAdd from "../views/dashboard/app/user-add";
import UserList from "../views/dashboard/app/user-list";
// import userProfileEdit from '../views/dashboard/app/user-privacy-setting';
// widget
import Widgetbasic from "../views/dashboard/widget/widgetbasic";
import Widgetcard from "../views/dashboard/widget/widgetcard";
import Widgetchart from "../views/dashboard/widget/widgetchart";
// icon
import Solid from "../views/dashboard/icons/solid";
import Outline from "../views/dashboard/icons/outline";
import DualTone from "../views/dashboard/icons/dual-tone";
// Form
import FormElement from "../views/dashboard/from/form-element";
import FormValidation from "../views/dashboard/from/form-validation";
import FormWizard from "../views/dashboard/from/form-wizard";
// table
import BootstrapTable from "../views/dashboard/table/bootstrap-table";
import TableData from "../views/dashboard/table/table-data";

// map
import Vector from "../views/dashboard/maps/vector";
import Google from "../views/dashboard/maps/google";

import Billing from "../views/dashboard/special-pages/billing";
import Kanban from "../views/dashboard/special-pages/kanban";
import Pricing from "../views/dashboard/special-pages/pricing";
import Timeline from "../views/dashboard/special-pages/timeline";
import Calender from "../views/dashboard/special-pages/calender";
import RtlSupport from "../views/dashboard/special-pages/RtlSupport";

//admin
import Admin from "../views/dashboard/admin/admin";
import Default from "../layouts/dashboard/default";
import UserAccountSetting from "../views/dashboard/app/user-profile-edit";
import FormationList from "../views/dashboard/app/formation-list";
import UserProvider from "../context/userContext";
import Logout from "../components/partials/dashboard/FunctionnalityComponent/Logout";
import AddAcademy from "../views/dashboard/app/add-academy";
import AddNewTraining from "../views/dashboard/app/add-new-training";
import AddNewProfessor from "../views/dashboard/app/add-new-professor";
import TrainingsList from "../views/dashboard/app/trainings-list";
import Progressions from "../components/listViews/Progressions";
import AdminAddAcademy from "../views/dashboard/app/admin-add-academy";
//import AddCourseToTraining from "../views/dashboard/app/add-chapter";
import TrainingCardView from "../components/TrainingCardView";
import ListView from "../components/listViews/ListView";
import ListCoursesByTraining from "../components/CoursesByTraining/ListCoursesByTraining";
import AddChapterToCourse from "../views/dashboard/app/add-chapter";
import Notifications from "../components/notifications/Notifications";
import Members from "../components/members/Members";
import UpdateTraining from "../views/dashboard/app/UpdateTraining";
// petite remarque : ouvre le composant Default, tu trouveras un Outlet dans lequel les "children" varient ainsi que tu trouveras l'élément Header qui est fixe...
import UpdateChapter from "../views/dashboard/app/update-chapter";
import SpecTrainingStudents from "../components/members/SpecTrainingStudents";
import AllProfessors from "../components/listViews/AllProfessors";
import ReadTrainingLayout from "../components/lecture/ReadTrainingLayout";
import ReadChapterVideo from "../components/lecture/readChapterVideo";
import CreateQuiz from "../components/Quiz/CreateQuiz";
import ViewQuiz from "../components/Quiz/ViewQuiz";
import Certifs from "../views/dashboard/table/Certifs";
import AdminAllProfessors from "../components/listViews/admin-all-the-profs";
import AdminAllAcademies from "../components/listViews/admin-all-the-academies";

// Social media section
import HomePage from "../page/social-media-pages/home";
import UserProfilePosts from "../page/social-media-pages/posts/PostsByUser";
import Followers from "../page/social-media-pages/followers/Followers";
import Followings from "../page/social-media-pages/followings/Followings";
import AllPosts from "../page/social-media-pages/posts/AllPosts";
import ChapterLayout from "../page/play-chapter-content/Display-chapter-content-layout";
import Play from "../page/play-chapter-content/play";

export const DefaultRouter = [
  {
    path: "/",
    element: (
      <UserProvider>
        <Default />
      </UserProvider>
    ),
    children: [
      {
        path: "dashboard",
        element: <Index />,
      },
      {
        path: "dashboard/special-pages/billing",
        element: <Billing />,
      },
      {
        path: "dashboard/special-pages/calender",
        element: <Calender />,
      },
      {
        path: "dashboard/special-pages/kanban",
        element: <Kanban />,
      },
      {
        path: "dashboard/special-pages/pricing",
        element: <Pricing />,
      },
      {
        path: "dashboard/special-pages/timeline",
        element: <Timeline />,
      },
      {
        path: "dashboard/special-pages/rtl-support",
        element: <RtlSupport />,
      },
      {
        path: "dashboard/app/user-profile/:id",
        element: <UserProfile />,
      },
      {
        path: "dashboard/app/user-profile-edit",
        element: <UserAccountSetting />,
      },
      {
        path: "dashboard/app/user-add",
        element: <UserAdd />,
      },
      {
        path: "dashboard/app/user-list",
        element: <UserList />,
      },
      {
        path: "dashboard/app/notifications-list",
        element: <FormationList />,
      },
      {
        path: "/dashboard/app/addChapter/:id",
        element: <AddAcademy />,
      },

      {
        path: "/dashboard/app/updateChapter/:id",
        element: <UpdateChapter />,
      },
      {
        path: "/dashboard/app/add-new-training",
        element: <AddNewTraining />,
      },
      {
        path: "/dashboard/app/add-new-professor",
        element: <AddNewProfessor />,
      },
      {
        path: "/dashboard/app/admin-all-academies",
        element: <AdminAllAcademies />,
      },
      {
        path: "/dashboard/app/admin-update-professor/:id",
        element: <AddNewProfessor />,
      },
      {
        path: "/dashboard/app/update-training/:id",
        element: <UpdateTraining />,
      },
      {
        path: "/dashboard/app/list-training",
        element: <TrainingsList />,
      },
      {
        path: "/dashboard/app/list-progressions-trainings",
        element: <Progressions />,
      },
      {
        path: "/dashboard/app/card-list-training",
        element: <TrainingCardView />,
      },
      {
        path: "/dashboard/app/courses/:id",
        element: <ListCoursesByTraining />,
      },
      {
        path: "/dashboard/app/list-table-training",
        element: <ListView />,
      },
      {
        path: "/dashboard/app/add-new-chapter-to/:id",
        element: <AddChapterToCourse />,
      },
      {
        path: "/dashboard/app/trainings-spec-students",
        element: <SpecTrainingStudents />,
      },
      {
        path: "/dashboard/app/academy-all-professors",
        element: <AllProfessors />,
      },
      {
        path: "/dashboard/app/admin-all-profs",
        element: <AdminAllProfessors />,
      },
      {
        path: "/dashboard/app/academy-all-students",
        element: <Members />,
      },
      {
        path: "/dashboard/notifications",
        element: <Notifications />,
      },
      {
        path: "dashboard/admin/admin",
        element: <Admin />,
      },
      // Widget
      {
        path: "dashboard/widget/widgetbasic",
        element: <Widgetbasic />,
      },
      {
        path: "dashboard/widget/widgetchart",
        element: <Widgetchart />,
      },
      {
        path: "dashboard/widget/widgetcard",
        element: <Widgetcard />,
      },
      // Map
      {
        path: "dashboard/map/google",
        element: <Google />,
      },
      {
        path: "dashboard/map/vector",
        element: <Vector />,
      },
      // Form
      {
        path: "dashboard/form/form-element",
        element: <FormElement />,
      },
      {
        path: "dashboard/form/form-wizard",
        element: <FormWizard />,
      },
      {
        path: "dashboard/form/form-validation",
        element: <FormValidation />,
      },
      // Table
      {
        path: "dashboard/table/bootstrap-table",
        element: <BootstrapTable />,
      },
      {
        path: "dashboard/app/mycertifications",
        element: <Certifs />,
      },
      {
        path: "dashboard/table/table-data",
        element: <TableData />,
      },
      // Icon
      {
        path: "dashboard/icon/solid",
        element: <Solid />,
      },
      {
        path: "dashboard/icon/outline",
        element: <Outline />,
      },
      {
        path: "dashboard/icon/dual-tone",
        element: <DualTone />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "/add-quiz/:trainingId",
        element: <CreateQuiz />,
      },
      {
        path: "/visualize-quiz/:trainingId",
        element: <ViewQuiz />,
      },
      {
        path: "/dashboard/app/add-to-academies",
        element: <AdminAddAcademy />,
      },
      {
        path: "/dashboard/app/update-academy/:id",
        element: <AdminAddAcademy />,
      },
      {
        path: "/dashboard/app/admin-update-academy/:id",
        element: <AdminAddAcademy />,
      },
      //social media part
      // {
      //   path: "dashboard/social-media",
      //   element: (
      //     <UserProvider>
      //       <SocialMediaLayout />
      //     </UserProvider>
      //   ),
      //   children: [
      //     {
      //       path: "all",
      //       element: <ShowAllPosts />,
      //     },
      //   ],
      // },
      // {
      //   path: "dashboard/social-media",
      //   element: <ShowAllPosts />,
      // },
    ],
  },
];

export const EnsafSocialMedia = [
  {
    path: "/social-profile",

    element: (
      <UserProvider>
        <HomePage />
      </UserProvider>
    ),
    // loader: rootLoader,
    children: [
      {
        path: "/social-profile/:userID/:userEntity/Profile",
        element: <UserProfilePosts />,
      },
      {
        path: "/social-profile/Followers",
        element: <Followers />,
      },
      {
        path: "/social-profile/Followings",
        element: <Followings />,
      },
      {
        path: "/social-profile/posts",
        element: <AllPosts />,
      },
    ],
  },
];
export const ViewChaptersRouter = [
  {
    path: "/course/:courseID",
    element: (
      <UserProvider>
        <ReadTrainingLayout />
      </UserProvider>
    ),
    children: [
      {
        path: "chapter/:chapterID",
        element: <ReadChapterVideo />,
      },
    ],
  },
];

export const DisplayTraining = [
  {
    // Display training content
    path: "/training/:trainingID",

    element: (
      <UserProvider>
        <ChapterLayout />
      </UserProvider>
    ),
    children: [
      {
        path: "chapter/:chapterID",
        element: <Play />,
      },
    ],
  },
];

// export default DefaultRouter
