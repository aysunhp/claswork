import React from "react";
import Home from "../pages/home";
import AddBlog from "../pages/addBlog";
import Navbar from "../components/Navbar";
export const routes = [
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/home",

    element: <Home />,
  },
  {
    path: "/add",
    element: <AddBlog />,
  },
];
