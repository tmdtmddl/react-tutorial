import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Requirement from "./Requirement";
import RequirementForm from "./RequirementForm";
import RequirementDetail from "./RequirementDetail";
import CustomAlert from "./comoinents/CustomAlert";

export default function AppRouter() {
  return (
    <>
      <CustomAlert />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/requirement">
            <Route index element={<Requirement />} />
            <Route path="create" element={<RequirementForm />} />

            <Route path=":id">
              <Route index element={<RequirementDetail />} />
              <Route path="edit" element={<RequirementForm />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
