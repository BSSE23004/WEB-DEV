//https://react.dev/reference/react/useContext
import "./App.css";
import { createContext } from "react";
import { useState } from "react";
import ChildA from "./components/ChildA";
//Prop drilling is the process of passing data from one component to another by going through other components in between.
//its solution is useContext
//Step 1 - Create a context
const userContext = createContext();
const themeContext = createContext();
//Step 4 - Consume the context value
//Step 5 - Update the context value
function App() {
  const [theme, setTheme] = useState("Dark");
  const [user, setUser] = useState({ name: "John", age: 25 });
  return (
    <div
      style={{
        backgroundColor: theme === "Dark" ? "#242424" : "#ddd",
        color: theme === "Dark" ? "#ddd" : "#242424",
      }}>
      {/*Step 2 👇 - wrap all the child inside the provider */}
      <themeContext.Provider value={{ theme, setTheme }}>
        <userContext.Provider value={user}>
          {/*Step 3 - Pass the val👆ue */}
          <ChildA />
        </userContext.Provider>
      </themeContext.Provider>
    </div>
  );
}

export default App;
export { userContext, themeContext };
