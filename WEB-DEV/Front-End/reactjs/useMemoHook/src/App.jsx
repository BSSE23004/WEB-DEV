import React, { useMemo, useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const [square, setSquare] = useState(0);
  function expensiveFunction(num) {
    for (let i = 0; i < 1000000000; i++) {
      // Simulate an expensive calculation
    }
    return num ** 2;
  }
  let squared = useMemo(() => expensiveFunction(square), [square]);
  function Increment() {
    setCount((prev) => prev + 1);
  }

  function handleCalculate(e) {
    setSquare(e.target.value);
  }

  return (
    <div>
      <p>
        The useMemo hook is used to memoize the result of a function. It is used
        to optimize performance by avoiding unnecessary expensive calculations.
      </p>
      <p>
        The result of count will be delayed (without useMemo) due to rerendering
        of the whole component because of state variable during each rerendering
        unnecessary expensiveFunction is called
      </p>
      <p>
        In this example, we are using the useMemo hook to memoize the result of
        the expensiveFunction. The function takes a number as an argument and
        returns the square of that number. So now Count updates will not trigger the expensive calculation unless the square input changes.
      </p>
      <button onClick={Increment}>Increment</button>
      <p>Count: {count}</p>
      <input type="number" onChange={handleCalculate} />
      <p>Square= {squared}</p>
    </div>
  );
};

export default App;
