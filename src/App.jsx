import { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const ref = useRef(null);

  const vlaueRef = useRef(0);
  //ref는 안보이는곳에서 열일하는 친구 // 한발느린 친구 //과제제출할때 까지 아무것도 안한척하다가 과제제출 칼같이 지키는 타입

  const valueCheck = () => {
    //1.value값이 입력되지않았을때
    if (value.length === 0) {
      alert("입력하지않아습니다.");

      //이렇게 까지했는데 유저가 아무것도 적지않고 계속버튼만 누를 때
      // ref.current?.focus();
      const input = document.querySelector("input#myInput");
      input.focus();
      return;
    }
    if (ref.current?.value.length == 0) {
      alert("아무것도 선택ㄴㄴ");
      ref.current?.showPicker();

      return;
    }
    alert(`you just typed: ${value}`);
    const length = value.length;
    vlaueRef.current = length;
  };
  useEffect(() => {
    console.log({ value });
  }, [value]);
  return (
    <div>
      <h1> React Tutorial: {vlaueRef.current}</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        ref={ref}
        id="myInput"
      />
      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
      </select>
      <button onClick={valueCheck}>value check</button>
    </div>
  );
};
export default App;
