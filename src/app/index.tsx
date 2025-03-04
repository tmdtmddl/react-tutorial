import { 유저, 족보 } from "../AppProvider/시스템";
import { FormEncType, Link } from "react-router-dom";
import { 박씨족보 } from "../store";
import { FormEvent, useState } from "react";

//! context를 사용하려면 무조건 상위 태그에 Provider가 감싸져 있어야 함

//Todo: React - rrd AppRouter를 Provider로 감싸서 작업하는 방법
//Todo: React - main.tsx에서 App 또는 AppRouter를 Provider로 감싸서 작업하는 방법

const HomePage = () => {
  const { user, logout } = 유저.use();
  const { 성씨, 조상들 } = 족보.use();
  const 박씨네 = 박씨족보.use();
  const 김씨네 = 족보.use();

  const [name, setName] = useState("");

  const onSubmitPark = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length <= 1) {
      return alert("조상이름을 확인해주세요");
    }
    박씨네.조상추가(name);
  };

  return !user ? (
    <Link to="/signin" className={button}>
      로그인하세요
    </Link>
  ) : (
    <div>
      <h1 className="text-xl font-bold">{user.email}</h1>
      <p>{user.uid}</p>

      <div>
        <h2>{김씨네.성씨} 조상</h2>
        <ul>
          {김씨네.조상들.map((조상, index) => (
            <li key={index}>{조상}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>{박씨네.성씨} 조상</h2>
        <ul>
          {박씨네.조상들.map((조상, index) => (
            <li key={index}>{조상}</li>
          ))}
        </ul>
      </div>
      <form action="" onSubmit={onSubmitPark}>
        <div>
          <label htmlFor="name">새로운 조상</label>
          <input type="text " id="name" value={name} />
        </div>
      </form>

      <button className={button} onClick={logout}>
        로그아웃
      </button>
    </div>
  );
};

export default HomePage;

const button =
  "h-10 bg-teal-500 text-white px-2.5 flex justify-center items-center rounded cursor-pointer";

const div = "flex flex-col gap-y-1";
const label = "text-gray-500 text-xs";
const input =
  "bg-gray-100 focus:bg-gray-50 border-none outline-none h-10 rounded px-2.5";
