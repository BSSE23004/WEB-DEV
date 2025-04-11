import "./App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./features/counter/CounterSlice";
import { useState } from "react";
//H/W is to research about asyncThunk and how to use it in redux toolkit
//H/W is to research about redux saga and how to use it in redux toolkit
//Steps to setup redux toolkit
//1. Install redux toolkit and react-redux // npm install @reduxjs/toolkit react-redux
//2. Create a redux store
//3. Wrap the app with the provider
//4. Create a slice
//5. Create a reducer
//6. Create actions
//7. Register the reducer in the store
//8. Use the useSelector and useDispatch hooks to access the store and dispatch actions
//9. Use the useSelector hook to access the store and dispatch actions
//10. Use the useDispatch hook to dispatch actions

function App() {
  const [amount, setAmount] = useState(0); //this is the amount we want to increment or decrement by
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleIncrementClick() {
    // Dispatch the increment action
    dispatch(increment()); //dispatch means to send the action to the reducer
  }
  function handleDecrementClick() {
    // Dispatch the decrement action
    dispatch(decrement());
  }
  function handleIncrementByAmountClick() {
    // Dispatch the incrementByAmount action
    dispatch(incrementByAmount(amount)); //this amount is the payload
  }
  function hadleResetClick() {
    // Dispatch the incrementByAmount action
    dispatch(reset());
  }
  return (
    <div className="App">
      <h1>Redux Toolkit Counter</h1>
      <button onClick={handleIncrementClick}>+</button>
      <span>Count: {count}</span>
      <button onClick={handleDecrementClick}>-</button>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount"
      />
      <button onClick={handleIncrementByAmountClick} id="incrementByAmount">
        Increment By Amount
      </button>
      <button onClick={hadleResetClick}>Reset</button>
    </div>
  );
}

export default App;
