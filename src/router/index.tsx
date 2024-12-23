import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main-layout";
import { HomePage, ServicesPage, ResumePage, WorkPage, ContactPage, HireMePage} from "../pages";

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
        element: <HireMePage />,
      },
    ],
  },
];

export const AppRouter = createBrowserRouter(router);
