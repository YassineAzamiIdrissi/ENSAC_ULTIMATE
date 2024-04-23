import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
//router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//store
import { Provider } from "react-redux";
//reducer
import { store } from "./store";
import { IndexRouters } from "./router";
import { LandingModulesRouter } from "./router/landing-modules-router";
import { SimpleRouter } from "./router/simple-router";
import { DefaultRouter } from "./router/default-router";
import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Mantor from "./page/Mantor";
import SingleCourse from "./page/SingleCourse";
import SingleBlog from "./page/SingleBlog";
import AdmissionForm from "./page/AdmissionForm";
import Faq from "./page/Faq";

import ScrollToTops from "./components/ScrollToTops";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./context/userContext";
import AcademiesBoardView from "./components/AcademiesView";
import FaqPage from "./components/faq/FaqTab";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <UserProvider>
          <Home />
        </UserProvider>
      ),
    },
    {
      path: "/main_about",
      element: (
        <UserProvider>
          <About />
        </UserProvider>
      ),
    },
    {
      path: "/courses",
      element: (
        <UserProvider>
          <Courses />
        </UserProvider>
      ),
    },
    {
      path: "/blog",
      element: (
        <UserProvider>
          <Blog />
        </UserProvider>
      ),
    },
    {
      path: "/blog/:id",
      element: (
        <UserProvider>
          <SingleBlog />
        </UserProvider>
      ),
    },
    {
      path: "/contact",
      element: (
        <UserProvider>
          <Contact />
        </UserProvider>
      ),
    },
    {
      path: "/Academies",
      element: (
        <UserProvider>
          <AcademiesBoardView />
        </UserProvider>
      ),
    },
    {
      path: "/mantor",
      element: (
        <UserProvider>
          <Mantor />
        </UserProvider>
      ),
    },
    {
      path: "/singleCourse/:id/",
      element: (
        <UserProvider>
          <SingleCourse />
        </UserProvider>
      ),
    },
    {
      path: "/faq",
      element: (
        <UserProvider>
          <Faq />
        </UserProvider>
      ),
    },
    {
      path: "/faqPage",
      element: <FaqPage />,
    },
    {
      path: "/admissionform",
      element: (
        <UserProvider>
          <AdmissionForm />
        </UserProvider>
      ),
    },
    ...DefaultRouter,
    ...IndexRouters,
    ...SimpleRouter,
    ...LandingModulesRouter,
  ],
  { basename: process.env.PUBLIC_URL }
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <App>
        <RouterProvider router={router}></RouterProvider>
        <ScrollToTops />
      </App>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
