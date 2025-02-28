import { Children, useCallback, useState } from "react";
import { 족보 } from "./족보시스템";
const 족보Provider = ({ Children }) => {
  const [조상들, set조상들] = useState(["김조상", "조상", "조상조상"]);
  const 조상추가 = useCallback(
    (조상이름) => set조상들((prev) => [...prev, 조상이름]),
    []
  );
  const 성씨 = "김씨";
  const 세대 = 6;
  const 본가 = "김해";
  return (
    <족보.Provider value={{ 조상들, 성씨, 세대, 본가 }}>
      {Children}
    </족보.Provider>
  );
};

export default 족보Provider;
