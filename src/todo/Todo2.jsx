import { useState, useRef } from "react";

const todosState = [];
const Todo2 = () => {
  const [todos, setTodos] = useState(todosState);
  const [string, setString] = useState("");
  const todoRef = useRef(null);

  const onTodo = () => {
    if (string.length === 0) {
      alert("아무것도 입력하지않음");
      return todoRef.current?.focus();
    }
    const found = todos.find((item) => item === string);
    if (found) {
      alert("이미적은 할일입임");
      setString("");
      todoRef.current?.focus();
      return;
    }
    setTodos((prev) => [string, ...prev]);
    setString("");
    alert("할일추가완료 ");
    todoRef.current?.focus();
  };
  return (
    <div>
      <h1>할일 목록</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onTodo();
        }}
      >
        <input
          type="text"
          value={string}
          onChange={(e) => setString(e.target.value)}
          ref={todoRef}
        />
        <button>추가하기</button>
      </form>
      <ul>
        {todos.map((string, index) => {
          const onDelete = () => {
            setTodos((prev) => prev.filter((item) => item !== string));
          };
          return (
            <li key={string}>
              {string}
              <button onClick={onDelete}>삭제</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo2;
