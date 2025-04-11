// import React, { useCallback } from "react";
import "./App.css";
import ChildComp from "./components/ChildComp";
import ExpensiveComponent from "./components/ExpensiveComponent";
//Diifference between useMemo and useCallback
// 1. useMemo is used to memoize values, while useCallback is used to memoize functions.
// 2. useMemo returns a memoized value, while useCallback returns a memoized function.
// 3. useMemo is useful for optimizing expensive calculations, while useCallback is useful for optimizing function references.
// 4. useMemo is called during rendering, while useCallback is called during the creation of a function.
// 5. useMemo can be used to cache the result of a function, while useCallback can be used to cache the function itself.
// 6. useMemo prevents unnecessary re-computation of a value, while useCallback prevents unnecessary re-creation of a function.
//Main usecases of useCallback Hook
// 1. Performance optimization
// 2. Preventing unnecessary re-renders of child components
// 3. Memoizing functions
// 4. Passing functions as props to child components
// 5. Avoiding function re-creation on every render
// 6. Handling event handlers
// 7. Creating stable function references
// 8. Improving performance in functional components

const App = () => {
  // console.log("Parent Component Rendered");
  // const [count, setCount] = React.useState(0);
  // const increment = useCallback(() => {
  //   setCount(count + 1);
  // }, [count]); //If we leave dependency array empty, it will freeze the function and it will not update the count state. So, we need to pass the count state as a dependency to the useCallback hook. This way, the increment function will always have the latest value of count when it is called. If we pass an empty array, it will create a new function reference every time the component re-renders, which defeats the purpose of using useCallback.
  // // The useCallback hook is used to memoize the increment function. It will only create a new function reference(On Rerendering) if the count state changes. This prevents unnecessary re-renders of the ChildComp component when the parent component re-renders for other reasons.
  // return (
  //   <div>
  //     <div>Count : {count}</div>
  //     <div>
  //       <button onClick={increment}>Increment</button>
  //     </div>
  //     <ChildComp buttonName="Child Button" handleClick={increment} />
  //   </div>
  // );
  return (
    <div>
      <h1>Expensive Calculation</h1>
      <ExpensiveComponent />
    </div>
  );
};

export default App;
