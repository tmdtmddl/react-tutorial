import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./app/index";
import Signup from "./app/signup/index";
import { AlertComponent } from "./components";

const AppRouter = () => {
  return (
    <>
      <AlertComponent />
      <BrowserRouter>
        <Routes>
          {/* 경로는 /이며 Home이라는 컴포넌트로 이동 */}
          <Route path="/" Component={Home} />
          {/*  경로는 signup이며 Singnup이라는 컴포넌트로 이동*/}
          <Route path="signup" Component={Signup} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
