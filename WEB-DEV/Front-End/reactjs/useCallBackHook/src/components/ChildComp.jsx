import React from "react";

//the drawback of React.memo is that if we send a function as a prop to the child component, it will re-render every time the parent component re-renders. This is because the function reference changes on every render. To avoid this, we can use the useCallback hook to memoize the function and prevent unnecessary re-renders of the child component.
const ChildComp = React.memo((props) => {
  //Child component rendered when parent component is rendered
  //But it will not re-render when the parent component is re-rendered
  //because of React.memo
  console.log("Child Component Rendered");
  return (
    <div>
      <button onClick={props.increment}>{props.buttonName}</button>
    </div>
  );
});
// React.memo is a higher-order component that allows you to optimize the rendering of functional components by memoizing them. It prevents unnecessary re-renders if the props have not changed. This is particularly useful for performance optimization in large applications or when dealing with expensive rendering operations.
export default ChildComp;
