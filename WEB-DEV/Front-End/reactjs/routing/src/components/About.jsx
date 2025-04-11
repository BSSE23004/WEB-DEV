import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    // navigate to dashboard page
    navigate("/dashboard");
  }
  return (
    <div>
      About Page
      <button onClick={handleClick}>Dashboard</button>
    </div>
  );
};

export default About;
