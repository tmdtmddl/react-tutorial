// import { useState, useEffect, useRef } from "react";

// const App = () => {
//   const [value, setValue] = useState("");

//   const ref = useRef(null);

//   const vlaueRef = useRef(0);
//   //ref는 안보이는곳에서 열일하는 친구 // 한발느린 친구 //과제제출할때 까지 아무것도 안한척하다가 과제제출 칼같이 지키는 타입

//   const valueCheck = () => {
//     //1.value값이 입력되지않았을때
//     if (value.length === 0) {
//       alert("입력하지않아습니다.");

//       //이렇게 까지했는데 유저가 아무것도 적지않고 계속버튼만 누를 때
//       // ref.current?.focus();
//       const input = document.querySelector("input#myInput");
//       input.focus();
//       return;
//     }
//     if (ref.current?.value.length == 0) {
//       alert("아무것도 선택ㄴㄴ");
//       ref.current?.showPicker();

//       return;
//     }
//     alert(`you just typed: ${value}`);
//     const length = value.length;
//     vlaueRef.current = length;
//   };
//   useEffect(() => {
//     console.log({ value });
//   }, [value]);
//   return (
//     <div>
//       <h1> React Tutorial: {vlaueRef.current}</h1>
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         id="myInput"
//       />
//       <select name="" id="">
//         <option value=""></option>
//         <option value=""></option>
//       </select>
//       <button onClick={valueCheck}>value check</button>
//     </div>
//   );
// };
// export default App;

//1.useState,useEffect,useRef 꺼내오기
import { useState, useEffect, useRef } from "react";

//2.initialState라는 이름으로 빈배열만들기
const initialState = [];

const App = () => {
  //3.useState를 사용해서 todos선언하고 초기값으로 intialState넣기
  const [todos, setTodos] = useState(initialState);
  //4.useState로 todo선언하고 초기값은 빈 문자열
  const [todo, setTodo] = useState("");

  const ref = useRef(null);
  //6.onSubmit이라는 이름의 함수를 만드세요
  const onSubmit = () => {
    console.log(todo);

    //6-2 todo 값입력되지 않았을때 예외처리
    //예외처리 경고 + (인풋창 포커스)
    if (todo.length === 0) {
      alert("아무것도 입력되지않았습니다.");
      return ref.current?.focus();
    }
    //6-3.todo값이 1글자 이하일때에도 예외처리
    if (todo.length <= 1) {
      alert("할일이 너무짧습니다.");
      return ref.current?.focus();
    }

    //6-4. setTodos함수를 사용해서 todo값을 todos에추가하기
    setTodos((prev) => [todo, ...prev]);
    //set함수는 무조건 원래의 값과 같은 타입을 return해줘야함.
    //한줄짜리라면 return 없이 작성가능
    setTodo(""); //=>문자열을 초기화함
    ref.current?.focus();
  };
  useEffect(() => {
    console.log({ todo });
  }, [todo]);
  return (
    <div>
      <h1>App</h1>
      {/* 5.form 만들고 안에 input,btton넣기
      5-1. input에 todo연결하기 value,onChange
      5-2.form 태그에서  onSubmit 속성에서  e를 가져와 e.preventDefault()라는 새로고침방지하기
       */}
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          ref={ref}
        />
        <button>ADD</button>
      </form>
      <ul>
        {todos.map((todo) => {
          const onDelete = () =>
            // setTodos((prev) => {
            //   let copy = [...prev];
            //   copy.splice(index, 1);
            //   return copy;
            // });

            setTodos((prev) => prev.filter((item) => item !== todo));

          return (
            <li key={todo}>
              {todo}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
