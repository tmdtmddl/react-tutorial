// // 1. useState, useRef 불러오기

// import { useState, useRef, useEffect } from "react";
// import { fetchList, store, deleteItem } from "./database";

// // 2. initialState 빈배열로 하나 만들기
// const Todo = () => {
//   // 3. useState 를 사용해서 배열을 담을 변수 선언하기 초기값은 2번의 빈 배열
//   const [list, setList] = useState(fetchList() ?? []);
//   // 4. useState를 사용해서 문자열 을 담을 변수 선언하기 초기값은 문자열
//   const [food, setFood] = useState("");
//   // 5. useRef로 ref 선언하기 초기값은 null
//   const ref = useRef(null);

//   // 6-1. submit동작을 할 함수 만들기
//   const onSubmit = () => {
//     // 6-2. 아무것도 입력 안했을 때 예외처리 + 인풋창 포커스
//     if (food.length === 0) {
//       alert("아무것도 입력하지 않았습니다.");
//       return ref.current?.focus();
//     }
//     // 6-2. 2글자 미만일때 예외처리 + 인풋창 포커스
//     if (food.length < 2) {
//       alert("너무 짧습니다.");
//       return ref.current?.focus();
//     }
//     // 6-3. 모든 조건 만족하면 useState로 만들어둔 배열에 추가하기
//     const foundFood = list.find((item) => item === food);
//     if (foundFood) {
//       alert("이미담은 물건입니다.");
//       setFood("");
//       ref.current?.focus();
//       return;
//     }
//     store(food)
//       .catch((error) => alert(error))
//       .then((reponse) => {
//         console.log(reponse);
//       });
//     setList((prev) => [food, ...prev]);
//     // 6-4. useState로 만든 변수 초기화하기
//     setFood("");
//     // 6-5. 성공 메세지 + 인풋창 포커스
//     alert("추가되었습니다");
//     ref.current?.focus();
//   };

//   useEffect(() => {}, []);

//   return (
//     <div>
//       <h1>장보기목록</h1>
//       {/* 7. 아래의 tag 알아서 만들기 */}
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           onSubmit();
//         }}
//       >
//         <input
//           type="text"
//           value={food}
//           onChange={(e) => setFood(e.target.value)}
//           ref={ref}
//         />
//         <button>ADD</button>
//       </form>
//       {/* 8. useState로 만든 배열 map 사용해서 출력하기 */}
//       <ul>
//         {list.map((item, index) => {
//           const onDelete = () => {
//             // setList(prev => {
//             //   let copy = [...prev]
//             //   copy.splice(index,1)
//             //   return copy
//             // })

//             deleteItem(item)
//               .catch((error) => alert(error))
//               .then((respone) => {
//                 console.log(respone);
//                 setList((prev) => prev.filter((f) => item !== f));
//               });
//           };
//           return (
//             <li key={item}>
//               {index + 1}.{item}
//               <button onClick={onDelete}>삭제</button>
//             </li>
//           );
//         })}
//       </ul>

//     </div>
//   );
// };
// export default Todo;

// 1. useState, useRef 불러오기
import { useState, useRef, useEffect } from "react";
import { fetchList, store, deleteItem } from "./database";

// 2. initialState 빈배열로 하나 만들기

const Todo = () => {
  // 3. useState를 사용해서 배열을 담을 변수 선언하기 초기값은 2번의 빈 배열
  const [list, setList] = useState(fetchList() ?? []);

  // 4. useState를 사용해서 문자열을 담을 변수 선언하기 초기값은 문자열
  const [food, setFood] = useState("");

  // 5. useRef로 ref 선언하기 초기값은 null
  const foodRef = useRef(null);

  // 6-1. sumbit 동작을 할 함수 만들기
  const onAddFood = () => {
    // 6-2. 아무것도 입력 안했을 때 예외처리 + 인풋창 포커스
    if (food.length === 0) {
      alert("아무것도 입력하지 않았습니다.");
      foodRef.current.focus();
      return;
    }

    // 6-3. 모든 조건 만족하면 useState로 만들어둔 배열에 추가하기
    const foundFood = list.find((item) => item === food);
    if (foundFood) {
      alert("이미 담은 물건입니다.");
      setFood("");
      foodRef.current?.focus();
      return;
    }

    store(food)
      .catch((error) => alert(error))
      .then((response) => {
        console.log(response);
        setList((prev) => [food, ...prev]);

        // 6-4. useState로 만든 변수 초기화하기
        setFood("");

        // 6-5. 성공 메세지 + 인풋창 포커스
        alert("장보기 목록에 담았습니다.");
        foodRef.current?.focus();
      });
  };

  // 7. 아래의 tag 알아서 만들기

  useEffect(() => {}, []);

  return (
    <div>
      <h1>장보기 목록</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddFood();
        }}
      >
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          ref={foodRef}
        />
        <button>추가</button>
      </form>
      {/* 8. useState로 만든 배열 map 사용해서 출력하기 */}
      <ul>
        {list.map((item, index) => {
          const onDelete = () => {
            // setList(prev => {
            //   let copy = [...prev]
            //   copy.splice(index,1)
            //   return copy
            // })

            deleteItem(item)
              .catch((error) => alert(error))
              .then((respone) => {
                console.log(respone);
                setList((prev) => prev.filter((f) => item !== f));
              });
          };
          return (
            <li key={item}>
              {index + 1}.{item}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
