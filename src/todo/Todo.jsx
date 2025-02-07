// 1. useState, useRef 불러오기

import { useState, useRef, useEffect } from "react";
import { fetchList, store } from "./database";

const database = localStorage;

const store = (item) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item.length === 0) {
        return reject("아무것도 입력하지않았습니다.");
      }
      let list = [];
      const data = database.getItem("list");
      if (!data || data.length === 0) {
        list = [];
      } else {
        list = JSON.parse(data);
        list.unshift(item);
        database.setItem("lst", JSON.stringify(list));
      }
      resolve("성공");
    }, 500);
  });
// 2. initialState 빈배열로 하나 만들기
const Todo = () => {
  // 3. useState 를 사용해서 배열을 담을 변수 선언하기 초기값은 2번의 빈 배열
  const [list, setList] = useState(fetchList() ?? []);
  // 4. useState를 사용해서 문자열 을 담을 변수 선언하기 초기값은 문자열
  const [food, setFood] = useState("");
  // 5. useRef로 ref 선언하기 초기값은 null
  const ref = useRef(null);

  // 6-1. submit동작을 할 함수 만들기
  const onSubmit = () => {
    // 6-2. 아무것도 입력 안했을 때 예외처리 + 인풋창 포커스
    if (food.length === 0) {
      alert("아무것도 입력하지 않았습니다.");
      return ref.current?.focus();
    }
    // 6-2. 2글자 미만일때 예외처리 + 인풋창 포커스
    if (food.length < 2) {
      alert("너무 짧습니다.");
      return ref.current?.focus();
    }
    // 6-3. 모든 조건 만족하면 useState로 만들어둔 배열에 추가하기
    const foundFood = list.find((item) => item === food);
    if (foundFood) {
      alert("이미담은 물건입니다.");
      setFood("");
      ref.current?.focus();
      return;
    }
    store(food)
      .catch((error) => alert(error))
      .then((reponse) => {
        console.log(reponse);
      });
    setList((prev) => [food, ...prev]);
    // 6-4. useState로 만든 변수 초기화하기
    setFood("");
    // 6-5. 성공 메세지 + 인풋창 포커스
    alert("추가되었습니다");
    ref.current?.focus();
  };

  useEffect(() => {
    const fetchList = () => {
      const data = database.getItem("list");
      if (!data || data.length === 0) {
        return;
      }
      const realData = JSON.parse(data);
      console.log(realData);
      setList(realData);
    };
    fetchList();
    return () => {
      fetchList();
    };
  }, []);

  return (
    <div>
      <h1>장보기목록</h1>
      {/* 7. 아래의 tag 알아서 만들기 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          ref={ref}
        />
        <button>ADD</button>
      </form>
      {/* 8. useState로 만든 배열 map 사용해서 출력하기 */}
      <ul>
        {list.map((food, index) => {
          // 9-1. 삭제 기능의 함수 만들기
          // 9-2. set배열 함수로 이전값 다뤄서 filter 함수 써서 '아이템' 하나만 삭제하기
          const onDelete = () => {
            setList((prev) => prev.filter((item) => item !== food));
          };
          return (
            <li key={food}>
              {food}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Todo;
