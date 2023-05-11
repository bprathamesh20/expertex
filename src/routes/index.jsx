import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
// import RegisterComponent from "../components/RegisterComponent";
import LoginComponent from "../components/LoginComponent";
export const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    // {
    //   path: "/register",
    //   element: <RegisterComponent/>,
    // },
  ]);