import { useEffect, useRef, useState } from "react";
import "./App.css";
import StopWatch from "./components/StopWatch";
//Main point
//When we use useRef, it does not cause a rerendering of the component
//But when we use state variable, it causes a rerendering of the component
//Main usecase of useRef is that we can directly change any element in the DOM
//without causing a rerendering of the component
function App() {
  const [count, setCount] = useState(0);
  let val = 1;
  let xObject = useRef(1);
  const increment = () => {
    xObject.current += 1;
    val += 1;
    console.log("useReffed val=", xObject.current);
    console.log("val=", val); // this val will always be 2 because whenever we call the increment function, it will create a Rerendering of whole App component because state variable changed and Rerendering is needed and val will be initialized to 1 again
    //So it means val cannot persist its value between renders
    //To solve this problem, we can use useRef
    //useRef will persist the value between renders
    //But it will not cause a rerendering of the component
    //So we can use useRef to persist the value between renders
    setCount(count + 1);
  };
  let btnRef = useRef(null); //we used null because we are not using it in the first render
  const changeColor = () => {
    btnRef.current.style.backgroundColor = "red"; //this will change the color of the button without causing a rerendering of the component
    console.log(btnRef.current);
    //btnRef.current is the button element
  };

  useEffect(() => {
    console.log("Counter Incremented Rerendering done");
  });
  return (
    <div>
      <button ref={btnRef} onClick={increment}>
        Increment
      </button>
      <br />
      Count : {count}
      <br />
      <button onClick={changeColor}>Change Color of 1st button</button>
      <br />
      <StopWatch />
    </div>
  );
}

export default App;
