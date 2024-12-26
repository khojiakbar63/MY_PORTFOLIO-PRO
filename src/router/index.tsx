import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import {
  HomePage,
  ServicesPage,
  ResumePage,
  WorkPage,
  ContactPage,
  HireMePage,
} from "../pages";
import { ResumeAboutMe, ResumeEducation, ResumeExperience, ResumeSkills } from "../components/inner-views/resume";

const router = [
  {
    path: "/", // Parent route
    element: <MainLayout />, // Renders <MainLayout />
    children: [
      {
        index: true, // Default child route (renders at "/")
        element: <HomePage />,
      },
      {
        path: "services", // Relative path ("/services")
        element: <ServicesPage />,
      },
      {
        path: "resume", // Relative path ("/resume")
        element: <ResumePage />,
        children: [
          {
            path: "experience", // Relative path ("/resume/education")
            element: <ResumeExperience/>,
          },
          {
            path: "education", // Relative path ("/resume/experience")
            element: <ResumeEducation/>,
          },
          {
            path: "skills", // Relative path ("/resume/experience
            element: <ResumeSkills/>,
          },
          {
            path: "about-me", // Relative path ("/resume/experience")
            element: <ResumeAboutMe/>,
          }
        ],
      },
      {
        path: "work", // Relative path ("/work")
        element: <WorkPage />,
      },
      {
        path: "contact", // Relative path ("/contact")
        element: <ContactPage />,
      },
      {
        path: "hire-me", // Relative path ("/hire-me")
        element: <ContactPage />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(router);
