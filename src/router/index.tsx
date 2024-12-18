import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import Home from "../pages/home";
import Services from "../pages/services";
import Resume from "../pages/resume";
import Work from "../pages/work";
import Contact from "../pages/contact";
import HireMe from "../pages/hire-me";

const router = [
  {
    path: "/", // Parent route
    element: <MainLayout />, // Renders <MainLayout />
    children: [
      {
        index: true, // Default child route (renders at "/")
        element: <Home />,
      },
      {
        path: "services", // Relative path ("/services")
        element: <Services />,
      },
      {
        path: "resume", // Relative path ("/resume")
        element: <Resume />,
      },
      {
        path: "work", // Relative path ("/work")
        element: <Work />,
      },
      {
        path: "contact", // Relative path ("/contact")
        element: <Contact />,
      },
      {
        path: "hire-me", // Relative path ("/hire-me")
        element: <HireMe />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(router);
