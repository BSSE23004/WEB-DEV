import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoard from "./components/DashBoard";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ParamComp from "./components/ParamComp";
import NotFound from "./components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <div>
        <Navbar />
        <DashBoard />
      </div>
    ),
    children: [
      {
        path: "Courses",
        element: <div>Course Page (ChildrenPage)</div>,
      },
      {
        path: "Students",
        element: <div>Student Page (ChildrenPage)</div>,
      },
      {
        path: "Teachers",
        element: <div>Teacher Page (ChildrenPage)</div>,
      },
    ],
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/students/:id",
    element: (
      <div>
        <Navbar />
        <ParamComp />
      </div>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
