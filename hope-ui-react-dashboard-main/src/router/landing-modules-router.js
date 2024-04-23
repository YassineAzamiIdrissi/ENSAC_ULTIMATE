// layout
import DefaultLayout from "../layouts/landing-modules/default-layout";

// pages
import Home from "../views/landing-modules/home";
import Faq from "../views/landing-modules/faq";
import About from "../views/landing-modules/about";
import Features from "../views/landing-modules/features";
import Pricing from "../views/landing-modules/pricing";
import Blog from "../views/landing-modules/blog";
import ContactUs from "../views/landing-modules/contact-us";
import SoftwareLandingPage from "../views/landing-modules/software-landing-page";
import BlogDetail from "../views/landing-modules/blog-detail";
import UserProvider from "../context/userContext";
export const LandingModulesRouter = [
  {
    path: "/landing-modules",
    element: (
      <UserProvider>
        <DefaultLayout header2="true" />
      </UserProvider>
    ),
    children: [
      {
        path: "home",
        element: (
          <UserProvider>
            <Home />
          </UserProvider>
        ),
      },
    ],
  },
  {
    path: "/landing-modules",
    element: (
      <UserProvider>
        <DefaultLayout header1="true" />
      </UserProvider>
    ),
    children: [
      {
        path: "faq",
        element: (
          <UserProvider>
            <Faq />
          </UserProvider>
        ),
      },
      {
        path: "about",
        element: (
          <UserProvider>
            <About />
          </UserProvider>
        ),
      },
      {
        path: "features",
        element: (
          <UserProvider>
            <Features />
          </UserProvider>
        ),
      },
      {
        path: "pricing",
        element: (
          <UserProvider>
            <Pricing />
          </UserProvider>
        ),
      },
      {
        path: "blog",
        element: (
          <UserProvider>
            <Blog />
          </UserProvider>
        ),
      },
      {
        path: "contact-us",
        element: (
          <UserProvider>
            <ContactUs />
          </UserProvider>
        ),
      },
      {
        path: "software-landing-page",
        element: (
          <UserProvider>
            <SoftwareLandingPage />
          </UserProvider>
        ),
      },
      {
        path: "blog-detail",
        element: (
          <UserProvider>
            <BlogDetail />
          </UserProvider>
        ),
      },
    ],
  },
];
