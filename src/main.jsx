import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import Todo from "./todo/Todo";
// import Todo2 from "./todo/todo2";
// import EX from "./todo/EX";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Todo /> */}
    {/* <Todo2 /> */}
    {/* <EX /> */}
  </StrictMode>
);
