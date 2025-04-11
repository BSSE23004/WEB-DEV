import React from "react";

const Button = (props) => {
  return (
    <div>
      {props.children}
      <button onClick={props.handleClick}>Click me</button>
    </div>
  );
};

export default Button;
