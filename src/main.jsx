import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Timer from "./Timer";
import Code from "./Code";
// import App from "./App.jsx";
// import Verify from "./Verify.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Verify /> */}
    <>
      <Timer />
      <Code />
    </>
  </StrictMode>
);
