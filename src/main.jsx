import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import Cover from "./pages/Cover.jsx";
import MainPage from "./pages/MainPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Cover />,
  },
  {
    path: "/profile",
    element: <MainPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
