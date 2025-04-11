import React from "react";
import { userContext, themeContext } from "../App";

const ChildC = () => {
  const theme = React.useContext(themeContext);
  const user = React.useContext(userContext);
  const handleClick = () => {
    if (theme.theme === "Dark") {
      theme.setTheme("Light");
    } else {
      theme.setTheme("Dark");
    }
  };
  return (
    <div>
      I am ChildC and got the context from the great grand parent (App)
      <br />
      Name: {user.name}
      <br />
      Age: {user.age}
      <br />
      Theme: {theme.theme}
      <br />
      <button onClick={handleClick}>Change Theme</button>
    </div>
  );
};

export default ChildC;
