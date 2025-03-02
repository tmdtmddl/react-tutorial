import { memo, useMemo, useState } from "react";

//! props-drilling 으로 전달된 props-check를 통해 변경사항이 있는지 검사
const Childcomponents = ({ age }: { age: number }) => {
  return (
    <div>
      <h2>ChildComponent Age is {age}</h2>
    </div>
  );
};

export default memo(Childcomponents);
//cashing 메모리 어딘가에 저장
//! memory 부채가 발생
