import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();
  function handleClick() {
    // navigate to ParamComp page
    navigate("/students/123");
  }
  return (
    <div>
      Dashboard Page
      <button onClick={handleClick}>ParamComp</button>
      <button onClick={() => navigate("./Courses")}>Courses</button>
      <button onClick={() => navigate("./Students")}>Students</button>
      <button onClick={() => navigate("./Teachers")}>teacher</button>
      <Outlet />
      {/*This is the outlet component that renders the child routes of the
      current route. */}
    </div>
  );
};

export default DashBoard;
