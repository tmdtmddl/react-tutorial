import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginForm from "./LoginForm";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <LoginForm />
  </StrictMode>
);
