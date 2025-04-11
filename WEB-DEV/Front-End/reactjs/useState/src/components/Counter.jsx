import React from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = React.useState(0); //useState hook syntax: const [state, setState] = React.useState(initialState);
  return (
    <div className="counter">
      <h1>Counter</h1>
      <p id="para">You have clicked {count} times</p>
      <div className="buttonsContainer">
        <button
          onClick={() => {
            setCount(count + 1);
          }}>
          Increment
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
