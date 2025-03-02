import { useState, useMemo, useEffect, useCallback } from "react";
import ParentComponent from "./ParentComponent";

const App = () => {
  const [text, setText] = useState("KS");

  const [checkKnow, setCheckKnow] = useState(false);

  // ! useMemo는 리액트 훅 그래서 ()를 쓰는 함수 호출법을 쓴다
  // ! []에 감지할 것을 넣어두지 않으면 메모리에 저장해서 바뀌지 않도록 함
  const memoedText = useMemo(() => {
    //! useMemo 안에 조건을 걸게 되면 해당 조건에 부합할 때까지 아무런 동작 안함
    //! 조건이 부합하지 않을때 딱 한번만 더 동작함

    if (length % 10 === 0) {
      return text;
    }
    return "10의 배수가 아닙니다.";
  }, [text]); //! 감지할 것을 넣으면 됨

  const isTextMemoed = useCallback(() => {
    const length = memoedText.length;
    if (length % 10 === 0) {
      return memoedText;
    }
    return "10의 배수가 아닙니다.";
  }, [memoedText]);

  // ![] 이곳에 감지할 것들을 넣어서 함수가 동작할때 감지할 것들만 보고 있게끔 만듭니다.

  //? 자바스크립트에서 메모리를 할당하는 것은 object입니다.

  const a = "a";
  const b = 5;
  const c = null;
  const d = ["a", "as"];
  const e = { name: "asd" };
  const f = console.log("f");

  console.log(typeof a, typeof b, typeof c);
  console.log(typeof d, typeof e, typeof f);

  //? object , function 등 메모리를 할당하는 친구들은 useMemo, useCallback 으로 감싸줌

  useEffect(() => {
    console.log("checking text", isTextMemoed);
  }, [isTextMemoed]);

  return (
    <div>
      {/* <h1>Input Checking</h1>
      <h1>Memoed Text : {memoedText}</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setCheckKnow((prev) => !prev)}>
        {checkKnow ? "check now" : "Do not check"}
      </button> */}
      <ParentComponent />
    </div>
  );
};

export default App;
