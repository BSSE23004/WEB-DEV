import React from "react";
import "./App.css";
import LoginBtn from "./components/LoginBtn";
import LogoutBtn from "./components/LogoutBtn";
// /https://react.dev/learn/conditional-rendering
function App() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);




  // return (
  //   <div className="App">
  //     <h1>Welcome {isLoggedIn ? "User" : "Guest"}</h1>
  //     <div>{!isLoggedIn && <LoginBtn />}</div>
  //   </div>
  // );

  // return (
  //   <div className="App">
  //     <h1>Welcome {isLoggedIn ? "User" : "Guest"}</h1>
  //     {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
  //   </div>
  // );
  if (isLoggedIn) {
    return (
      <div className="App">
        <h1>Welcome User</h1>
        <LogoutBtn />
      </div>
    );
  }
  return (
    <div className="App">
      <h1>Welcome Guest</h1>
      <LoginBtn />
    </div>
  );
}

export default App;
