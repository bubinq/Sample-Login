import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Components from "../pages/Components";
import Forms from "../pages/Forms";
import App from "../App";
import Login from "../pages/Login";
import "../styles.css"

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "components",
        element: <Components />,
      },
      {
        path: "forms",
        element: <Forms />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
