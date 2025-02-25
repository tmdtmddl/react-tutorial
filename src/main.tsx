import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StudentApp from "./StudentApp";
import "./index.css";
// import App from './App.tsx'

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StudentApp />
  </StrictMode>
);
