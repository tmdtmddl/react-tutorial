// import { useState, useEffect } from "react";

// const App = () => {
//   const [last, setLast] = useState("");
//   const [name, setName] = useState("");
//   const [msec, setMsec] = useState(0);
//   const [sec, setSec] = useState(0);
//   const [counting, setCounting] = useState(false);

//   useEffect(() => {
//     console.log(last, name);
//   }, []);
//   // 해당컴포렌더링 되는 최초 1회만 실행

//   useEffect(() => {
//     // //1.성이 1글자이상 2글자이하일때
//     // //2.이름이 2글자 이상일때
//     // //3. 좋은 이름이네요라고 하는 경고창을 띄워주는 함수를 작성해봅시다
//     // const makeGoodName = () => {
//     //   if (last.length >= 1 && last.length <= 2 && name.length >= 2) {
//     //     return alert("좋은 이름이네요");
//     //   }
//     // };
//     // makeGoodName();

//     // return () => {
//     //   makeGoodName();
//     // };

//     console.log(last, name);
//   }, [last, name]);

//   useEffect(() => {
//     console.log({ counting });
//     if (counting) {
//       const count = setInterval(() => {
//         setMsec((prev) => prev + 1);
//       }, 1);

//       return () => {
//         clearInterval(count);
//       };
//     } else {
//       console.log("counting has stopped");
//     }
//   }, [counting]);

//   return (
//     <div>
//       <h1> React Tutorial</h1>
//       <input
//         type="text"
//         value={last}
//         onChange={(e) => setLast(e.target.value)}
//       />
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <div>
//         <h2>{msec / 1000}초</h2>
//         <button
//           onClick={() => {
//             setCounting((prev) => !prev);
//           }}
//         >
//           {counting ? "STOP" : "START"}
//         </button>
//       </div>
//     </div>
//   );
// };
// export default App;

import { useState, useEffect } from "react";

const App = () => {
  const [sec, setSec] = useState(0);
  const [counting, setCounting] = useState(false);

  const onPlus = () => {
    setSec((prev) => prev + 1000);
  };
  const onMinus = () => {
    setSec((prev) => prev - 1000);
  };
  const onReset = () => {
    setSec(0);
  };
  useEffect(() => {
    console.log(sec);
  }, [sec]);
  //빈배열은 최초1회만 실행 해당 컴포넌트가 렌더링되는 시점

  useEffect(() => {
    if (counting) {
      const count = setInterval(() => {
        setSec((prev) => prev + 10);
      }, 10);

      return () => {
        clearInterval(count);
      };
    }
  }, [counting]);

  //빈배열 뜻 => 최초1회 실행
  useEffect(() => {
    console.log("app has mounted!");
  }, []);

  //배열을 사용하지 않으면 눈치개코가됨
  //모든 것들에 반응하는 흉악한 코드가 될 수있음
  // useEffect(() => {
  //   console.log("app has rendered");
  // });

  //배열에 우리가 주시하고 싶은 변수/함수 를 넣어두면 해당 변수/함수가 업데이트 될때에만 작동하는 코드를 짤 수있음
  useEffect(() => {}, []);
  return (
    <div>
      <h1>App</h1>
      <h3>{sec / 1000}초</h3>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
      <button onClick={onReset}>reset</button>
      <button
        onClick={() => {
          setCounting((prev) => !prev);
        }}
      >
        {counting ? "stop" : "start"}
      </button>
    </div>
  );
};

export default App;
