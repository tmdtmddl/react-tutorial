import { useState } from "react";
import SignupForm from "./SignupForm";

const Object = () => {
  const [signinProps, setSigninProps] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    console.log(signinProps[name]);

    setSigninProps((prev) => ({ ...prev, [name]: value }));
  };

  const [array, setArray] = useState(["이형진", "유요환", "서준성", "양영탁"]);

  const onSubmit = () => {
    if (signinProps.name.length === 0) {
      return alert("이름을 입력해주세요.");
    }
    setArray((prev) => {
      let copy = [...prev, signinProps.name];

      console.log(copy);
      return copy;
    });

    // setArray(prev => [ ...prev, signinProps.name ])
  };

  const onDelete = () => {
    // const name = signinProps.name
    const { name } = signinProps;
    if (name.length === 0) {
      return alert("이름 입력 ㄱㄱ");
    }

    const index = array.findIndex((person) => person === name);
    if (index < 0) {
      return alert("존재ㄴㄴ");
    }
    console.log(array[index]);

    // setArray((prev) => {
    //   let copy = [...prev]
    //   copy.splice(index, 1)

    //   console.log(copy)

    //   return copy
    // })

    setArray((prev) => {
      let copy = prev.filter((person) => person !== name);

      console.log(copy);
      return copy;
    });

    // setArray(prev => prev.filter(person =>person !== name))
  };

  const [users, setUsers] = useState([
    {
      name: "서준성",
      address: "대전 중구",
      mobile: "01012341234",
      password: "123123",
      email: "sjs@dw.com",
    },
    {
      name: "양영탁",
      address: "울산",
      mobile: "01012341233",
      password: "123123",
      email: "yyt@dw.com",
    },
  ]);

  const addUser = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        setUsers((prev) => [...prev, user]);

        resolve("회원가입 되었습니다.");
      }, 1000);
    });

  return (
    <div>
      <h1>Object</h1>
      <input
        type="text"
        value={signinProps.email}
        onChange={onChange}
        name="email"
      />
      <input
        type="password"
        value={signinProps.password}
        onChange={onChange}
        name="password"
      />
      <input
        type="text"
        value={signinProps.name}
        onChange={onChange}
        name="name"
      />
      <button onClick={onSubmit}>ADD</button>
      <button onClick={onDelete}>DELETE</button>

      <SignupForm users={users} setUsers={setUsers} addUser={addUser} />
    </div>
  );
};

export default Object;
