import { memo, useMemo, useState } from "react";

const ChilComponent = ({ age }: { age: number }) => {
  //   const [count, setCount] = useState(age);
  //   const oldAge = useMemo(() => count, [count]);
  console.log("child redered");
  return (
    <div>
      {/* <h1>old age was {oldAge}</h1>
      <h2>ChilComponent Age is {age}</h2>
      <h3>ChilComponent Age is Now {count}</h3>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="bg-green-200 rounded"
      >
        1 year ++
      </button> */}
    </div>
  );
};

export default memo(ChilComponent);

// cahing 메모리어딘가에 저장

//! props-drilling으로 전달된 props-check 통해 변경사항이 있는지 검사
//! memery 부채가 발생
