import React from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  //Create state
  //Manage state    do all these things here
  //Change state
  //Sync state with every child
  const [name, setName] = React.useState("");

  return (
    <div className="App">
      <Card title="Card1" name={name} setName={setName} />
      <Card title="Card2" name={name} setName={setName} />
      <h1>You are giving this data to parent(App) : {name} </h1>
    </div>
  );
}

export default App;
