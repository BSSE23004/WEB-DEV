import React from "react";

const Button = () => {
  const handleClick = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  };
  return <button onClick={handleClick}>Change Color</button>;
};

export default Button;
