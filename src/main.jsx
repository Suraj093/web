import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Index from "./assets/component/Index/Index";
import About from "./assets/component/About/About";
import Login from "./assets/component/Login/Login";
import Contact from "./assets/component/Contact/Contact";
const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },

  {
    path: "/",
    element: <Layout />,
    message: "Liferay Bucket",
    children: [
      {
        path: "/",
        element: <Index />,
        message: "Liferay Bucket",
      },
      {
        path: "index",
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
