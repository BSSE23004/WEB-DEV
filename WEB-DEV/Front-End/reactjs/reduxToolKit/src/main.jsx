import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      {/*We wrapped the  whole <App/> in the provider to make our store accessible for whole app*/}
      {/*We can use the store in any component by using the useSelector and useDispatch hooks*/}
      {/*this made our store a centeralized entity*/}
      <App />
    </Provider>
  </StrictMode>
);
