//https://react.dev/reference/react/useEffect
import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [third, setThird] = useState(0);
  const [total, setTotal] = useState(1);
  // useEffect(() => {
  //   first; // This effect function will run after every render known as side effect function

  //   return () => {
  //     second; // This cleanup function will run before the next effect function
  //   };
  // }, [third]); // This dependency array will run the effect function only when the value of third changes
  // useEffect(() => {
  //   alert("I am a side effect function and I will run after every render"); //this will run 2 times because of strict mode used in main.jsx. And strict mode runs the component twice to check for any side effects
  // });
  // useEffect(() => {
  //   alert("I will run on only first render");
  // }, []);
  // useEffect(() => {
  //   alert("I will run when count is updated not for every render"); //this will run only when the value of third changes.And third also changed when its value was set to 0 in the beginning
  // }, [third]);
  // useEffect(() => {
  //   alert("I will run when count/total is updated not for every render");
  // }, [third, total]); // This will run when the value of third or total changes
  // useEffect(() => {
  //   alert("Count is updated");
  //   return () => {
  //     alert(
  //       "Count is unmounted from UI and I will run before the next effect function"
  //     ); //this will run before the next effect function
  //   };
  // }, [third]);

  const handleClick = () => {
    setThird(third + 1);
  };

  const handleClickTotal = () => {
    setTotal(total + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>update third/count!</button>
      <br />
      <button onClick={handleClickTotal}>update total!</button>
      <br />
      Count is {third}
      <br />
      Total is {total}
    </div>
  );
}

export default App;
