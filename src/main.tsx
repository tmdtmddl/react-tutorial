import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import StudentApp from "./StudentApp";
import "./index.css";
import RConainer from "./r/Rconainer";
import App from "./App";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <StudentApp /> */}
    <RConainer />
    {/* <App /> */}
  </StrictMode>
);
