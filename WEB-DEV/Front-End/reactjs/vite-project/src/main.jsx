import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./assets/components/navbar.jsx";

createRoot(document.getElementById("root")).render(<Navbar />);
