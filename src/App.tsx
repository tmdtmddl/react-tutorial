// import { useState, useMemo, useEffect } from "react";
// import ChilComponent from "./ChilComponent";
// import ParentComponent from "./ParentComponent";

// const App = () => {
//   const [count, setCount] = useState(1);
//   // const children = [11, 12, 14, 17, 20];
//   const [items] = useState(
//     Array.from({ length: count * 999999 }, (_, i) => i + 1)
//   );

//   // const selectItem = useMemo(() => {
//   //   const is10 = count === 10;
//   //   return items.find((item) => is10 && item === count);
//   // }, [count, items]);

//   const selectItem = items.find((item) => (count === 10 ? item : undefined));

//   useEffect(() => {
//     console.log("cheking item in useMemo....");
//   }, [selectItem]);
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <p>selecte Item : {selectItem}</p>
//       <button
//         onClick={() => setCount((prev) => prev + 1)}
//         className="bg-yellow-100 rounded p-1 border border-yellow-500"
//       >
//         click
//       </button>
//       {/* <ParentComponent /> */}
//       {/* {children.map((age, index) => (
//         <ChilComponent key={index} age={age} />
//       ))} */}
//     </div>
//   );
// };

// export default App;

import { useState, useEffect, useMemo, useCallback } from "react";
import ParentComponent from "./ParentComponent";
//! useMemo는 리액트 훅 그래서 ()를 쓰는 함수 호출법을 적용
//! []에 감지할것을 넣어두지 않으면 메모리에 저장해서 바뀌지 않도록 함

const App = () => {
  const [text, setText] = useState("hse");
  const memoedText = useMemo(() => {
    const length = text.length;

    //! useMemo안에 조건을 걸게  되면 해당 조건에 부합할 때 까지 아무런 동작안함
    //! 조건이 부합하지 않을 때 딱 한번만 더 동작함
    if (length % 10 === 0) {
      return text;
    }
    return "10의 배수 ㄴㄴ";
  }, [text]);

  const isTextMemoed = useCallback(() => {
    //! useCallback도 리액트 훅 함수 처럼()써서 호출
    //! ()안에는 ()=> 콜백함수를 써야됨
    //! []여기에 감지할 것들을 넣어서 함수가 동작할 때 감지할 것들만 보고 잇게끔 만듭니다.
    //? js에서 메모리를 할당하는 것은 object,function 입니다.
    //? 메모리가 쌓이면 느려짐
    //? object,function등 메모리를 할당하는 친구들은 usememo,usecallback으로 감싸줌

    const length = memoedText.length;

    if (length % 10 === 0) {
      return memoedText;
    }
    return "10의 배수 ㄴㄴ";
  }, [memoedText]);

  useEffect(() => {
    console.log("checking text", isTextMemoed());
  }, [isTextMemoed]);
  return (
    <div>
      {/* <h1>input checking</h1>
      <h1>Memoed Text : {memoedText}</h1>
      <input
        type="text"
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
      /> */}
      <ParentComponent />
    </div>
  );
};

export default App;
