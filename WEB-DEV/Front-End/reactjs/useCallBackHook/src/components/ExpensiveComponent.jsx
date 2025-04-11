import React, { use, useCallback, useEffect } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState("");
  const prevFunc = React.useRef(null);
  const expensiveCalculation = useCallback(() => {
    console.log("Expensive calculation performed");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      // Simulating an expensive calculation
      result += i;
    }
    return result;
  }, [count]); //function will be re-created only when the count state changes. If we leave the dependency array empty, it will create a new function reference every time the component re-renders, which defeats the purpose of using useCallback.
  // and we are verifying if the function is re-created or not by using useRef hook. The useRef hook is used to create a mutable object that persists for the full lifetime of the component. It can be used to store a reference to a DOM element or any other value that you want to persist across renders. In this case, we are using it to store the previous function reference and compare it with the current function reference.
  useEffect(() => {
    if (prevFunc.current) {
      if (prevFunc.current === expensiveCalculation) {
        console.log("Expensive calculation function not re-created");
      } else {
        console.log("Expensive calculation function re-created");
      }
    } else {
      prevFunc.current = expensiveCalculation;
    }
  }, [expensiveCalculation]); //This effect will run whenever the expensiveCalculation function changes. It will log whether the function was re-created or not.

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Expesive Result : {expensiveCalculation()}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Text: {text}</p>
    </div>
  );
};

export default ExpensiveComponent;
