import { Link, useNavigate } from "react-router-dom";
import { Alert, Item } from "./store";
import { useCallback } from "react";

const Requirement = () => {
  const { items, remove, setPayload } = Item.use();
  const { alert } = Alert.use();
  const navi = useNavigate();

  // 리액트 컴포넌트 안에서 또 다른 리액트 컴포넌트를 만들어서 쓰지 마세요!
  //useCallback에 감싸서 만들면 허용해줌
  //리액트 컴포넌트에서 불러온함수를 손 쉽게 프롭스드릴링없이 고유할 수 있음
  //멀리 안나가도 맵으로 뿌릴 컴포넌트 확인이 빠름
  const RItem = useCallback(
    ({
      descs,
      id,
      index,
      manager,
      status,
      title,
    }: Item.Item & { index: number }) => {
      return (
        <div className="border  p-5 border-gray-200 bg-gray-50  hover:bg-teal-50 rounded-xl">
          <div className="flex justify-between">
            <div className=" flex gap-x-2.5 items-center">
              <p className="font-bold">
                {index + 1}.{title}
              </p>
              <p className="text-xs text-gray-500">{manager}</p>
            </div>
            <p
              className={
                status === "완료"
                  ? "text-green-700"
                  : status === "계획중"
                  ? "text-amber-500"
                  : "text-green-950"
              }
            >
              {status}
            </p>
          </div>
          <ul className="flex flex-col  mt-2.5 gap-y-1">
            {descs.map((descs, di) => (
              <li key={descs} className="flex">
                <p className=" bg-white rounded text-gray-500 p-1 py-0 text-xs">
                  {di + 1}.{descs}
                </p>
              </li>
            ))}
          </ul>
          <div className=" flex justify-end gap-x-2.5">
            <button
              className="cursor-pointer"
              onClick={() => {
                setPayload({
                  descs,
                  id,
                  manager,
                  status,
                  title,
                });
                navi(id);
              }}
            >
              수정
            </button>
            <button
              className="cursor-pointer hover:text-red-500 active:opacity-50"
              onClick={() => {
                remove(id);
                alert("삭제되었습니다.");
              }}
            >
              삭제
            </button>
          </div>
        </div>
      );
    },
    [remove, alert, navi, setPayload]
  );
  return (
    <ul className="flex flex-col gap-y-2.5">
      {/*<div>
      {/*   요구사항 명세 내용 출력
        <ul>
          {items.map((item, index) => (
            <li key={item.id}>
              <Link to={item.id} onClick={() => setPayload(item)}>
                {index + 1}. {item.title} {item.status} {item.manager}
                <button
                  onClick={() => {
                    remove(item.id);
                    alert("삭제되었습니다.");
                  }}
                >
                  삭제
                </button>
              </Link>
            </li>
          ))}
        </ul> 
      {/*</div>*/}
      {items.map((item, index) => (
        <li key={item.id}>
          <RItem {...item} index={index} />
        </li>
      ))}
    </ul>
  );
};

export default Requirement;

// const RItem = ({
//   descs,
//   id,
//   index,
//   manager,
//   status,
//   title,
// }: Item.Item & { index: number }) => {
//   return (
//     <div>
//       {index + 1}.{title} by {manager}-상태: {status}
//     </div>
//   );
// };
