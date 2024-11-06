import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cover from "./pages/Cover.jsx";
import MainPage from "./pages/MainPage.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: <Cover />,
    },
    {
      path: "profile",
      element: <MainPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
