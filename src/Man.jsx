import { useEffect } from "react";
import { 족보사용 } from "./족보시스템";
import { useSelector } from "react-redux";
import { candyStore } from "./candyStore";

const Man = () => {
  const { 본가, 성씨 } = 족보사용();
  const students = useSelector((state) => state.studentsSlice);
  useEffect(() => {
    console.log(students);
  }, [students]);
  return (
    <div>
      <h1>옆집아저씨: {students?.lenght}명의 학생이 있습니다.</h1>
      <p>{candyStore}</p>
      <button
        onClick={() => {
          alert(`당연하죠. 옆집 사람은 ${본가}${성씨}입니다.`);
        }}
      >
        옆집사람들어디 성씨임?
      </button>
    </div>
  );
};

export default Man;
