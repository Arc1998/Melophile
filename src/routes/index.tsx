import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/Home";
import LoginPage from "../pages/Login";
// import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound/NotFound";
const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />
  },
  {
    path: "/home",
    element: <HomePage /> ,
  },
  { path: "*", element: <NotFound /> },
]);

export default router;