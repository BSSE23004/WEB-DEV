import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <Card name="Brawl">
        <h1>Ibrahim Sattar</h1>
        <img src="/vite.svg" alt="Vite" />
      </Card>
      <Card>I am a child</Card>
      <Button handleClick={incrementCount}>
        <h1>{count}</h1>
      </Button>
    </div>
  );
}

export default App;
