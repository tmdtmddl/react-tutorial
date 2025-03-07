import { useState } from "react";
import CURDForm from "./CURDForm";
import CURDItem from "./CURDItem";

const CRUD = () => {
  const [curds, setCurds] = useState([]);
  return (
    <div className="mx-auto">
      <CURDForm curds={curds} setCurds={setCurds} />
      <ul>
        {curds.map((curd, index) => {
          return <CURDItem key={index} />;
        })}
      </ul>
    </div>
  );
};

export default CRUD;
