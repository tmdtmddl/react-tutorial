import React, {
  FormEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Item, Alert } from "./store";
import { useLocation, useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";

const RequirementForm = () => {
  const { pathname } = useLocation();
  const { payload, create, update } = Item.use();
  const { alert } = Alert.use();
  const navi = useNavigate();

  const isUpdating = useMemo<boolean>(() => {
    if (pathname === "/requirement/create") {
      return false;
    }
    if (!payload) {
      return false;
    }
    return true;
  }, [pathname, payload]);

  const initialState = useMemo<Item.Item>(() => {
    if (pathname === "/requirement/create") {
      return { descs: [], id: v4(), manager: "", status: "", title: "" };
    }
    return payload!;
    //! !는 무저건있다. 의심하지마라
  }, [pathname, payload]);

  const [r, setR] = useState(initialState);

  const onChangeR = useCallback((target: keyof Item.Item, value: any) => {
    //! keyof=>interface/type의 값들을 문자열로추출
    console.log(target);

    //! any타입은 모든 타입을 허용(너무범벅으로 쓰면 타입스크립트를 쓰는의미가 사라짐)

    setR((prev) => ({ ...prev, [target]: value }));
  }, []);

  const [desc, setDesc] = useState("");
  const [isInsertingDesc, setisInsertingDesc] = useState<boolean>(false);

  const tRef = useRef<HTMLInputElement>(null);
  const sRef = useRef<HTMLSelectElement>(null);
  const mRef = useRef<HTMLSelectElement>(null);
  const dRef = useRef<HTMLInputElement>(null);

  const focus = useCallback(
    (target: keyof Item.Item) => {
      setTimeout(() => {
        switch (target) {
          case "descs":
            return dRef.current?.focus();
          case "manager":
            return mRef.current?.showPicker();
          case "status":
            return sRef.current?.showPicker();
          case "title":
            return tRef.current?.focus();
        }
      }, 100);
    },
    [tRef, sRef, mRef, dRef]
  );

  const sMessage = useMemo(() => {
    const status = r.status;
    if (status.length === 0) {
      return "진행자를 선택해주세요";
    }
    return null;
  }, [r.status]);
  const mMessage = useMemo(() => {
    const manager = r.manager;
    if (manager.length === 0) {
      return "담당자를 선택해주세요";
    }
    return null;
  }, [r.manager]);
  const tMessage = useMemo(() => {
    const title = r.title;
    if (title.length === 0) {
      return "기능/페이지 이름을 입력해주세요";
    }
    return null;
  }, [r.title]);
  const dMessage = useMemo(() => {
    if (!isInsertingDesc) {
      return null;
    }

    if (desc.length === 0) {
      return "상태기능을 입력해주세요";
    }
    return null;
  }, [desc, isInsertingDesc]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isInsertingDesc) {
        return;
      }
      if (sMessage) {
        return alert(sMessage, [{ onClick: () => focus("status") }]);
      }
      if (mMessage) {
        return alert(mMessage, [{ onClick: () => focus("manager") }]);
      }
      if (tMessage) {
        return alert(tMessage, [{ onClick: () => focus("title") }]);
      }
      if (isUpdating) {
        update(r);
      } else {
        create(r);
      }
      alert(isUpdating ? "수정되었습니다." : "추가되었습니다.");
      navi("/requirement");
    },
    [
      isInsertingDesc,
      sMessage,
      mMessage,
      tMessage,
      r,
      isUpdating,
      focus,
      alert,
      create,
      update,
      navi,
    ]
  );
  useEffect(() => {
    if (!isUpdating) {
      focus("status");
    }
  }, []);
  return (
    <form
      className="flex flex-col gap-y-2.5 w-full max-w-125 mx-auto"
      onSubmit={onSubmit}
    >
      <div className="flex gap-x-2.5">
        <InputWrapper id="status" title="진행상태" className="flex-1">
          <select
            name=""
            id="status"
            className={input}
            value={r.status}
            onChange={(e) => {
              onChangeR("status", e.target.value);
              focus("manager");
            }}
            ref={sRef}
          >
            <option>선택</option>
            {statuses.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
        </InputWrapper>
        <InputWrapper id="manager" title="담당자" className="flex-1">
          <select
            name=""
            id="manager"
            className={input}
            value={r.manager}
            onChange={(e) => {
              onChangeR("manager", e.target.value);
              focus("title");
            }}
            ref={mRef}
          >
            <option>선택</option>
            {managers.map((m) => (
              <option value={m} key={m}>
                {m}
              </option>
            ))}
          </select>
        </InputWrapper>
      </div>
      <InputWrapper id="title" title="기능/페이지 이름">
        <input
          type="text"
          id="title"
          className={twMerge(input, "px-2.5")}
          value={r.title}
          onChange={(e) => onChangeR("title", e.target.value)}
          ref={tRef}
        />
      </InputWrapper>
      <InputWrapper id="desc" title="상세기능">
        <ul className="flex flex-col gap-y-1">
          {/* <li className="flex">
            <div className="px-1 rounded bg-gray-50">
              fkdjfldj
              <button type="button" className="ml-2.5 cursor-pointer">
                X
              </button>
            </div>
          </li>
          <li>
            <p>fkdjfldj</p>
          </li> */}
          {r.descs.map((d, di) => (
            <li className="flex" key={di}>
              <div className="px-1 rounded bg-gray-50">
                {di + 1}.{d}
                <button
                  type="button"
                  className="ml-2.5 cursor-pointer"
                  onClick={() => {
                    setR((prev) => ({
                      ...prev,
                      descs: prev.descs.filter((item) => item !== d),
                    }));
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ul>
        <input
          type="text"
          id="desc"
          className={twMerge(input, "px-2.5")}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          ref={dRef}
          onFocus={() => setisInsertingDesc(true)}
          onBlur={() => setisInsertingDesc(false)}
          onKeyDown={(e) => {
            const { key } = e;
            console.log(key);
            if (key === "Enter" || key === "Tab") {
              if (!e.nativeEvent.isComposing) {
                if (dMessage) {
                  return alert(dMessage, [{ onClick: () => focus("descs") }]);
                }
                setR((prev) => ({ ...prev, descs: [desc, ...prev.descs] }));
                setDesc("");
                focus("descs");
              }
            }
          }}
        />
      </InputWrapper>
      <div className="flex gap-x-2.5 mt-2.5 ">
        <button
          type="button"
          className={twMerge(button, "flex-1 bg-gray-100")}
          onClick={() =>
            alert("취소하게씁니까?", [
              { text: "돌아가기" },
              { onClick: () => navi("/requirement") },
            ])
          }
        >
          취소
        </button>
        <button className={twMerge(button, "flex-2 bg-green-600 text-white ")}>
          {isUpdating ? "수정" : "추가"}
        </button>
      </div>
    </form>
  );
};

export default RequirementForm;

const button = "h-10 rounded cursor-pointer ";
const input = "h-10 rounded bg-gray-50 outline-none focus:border";

interface InputWrapperProps extends PropsWithChildren {
  id: string;
  title: string;
  className?: string;
}

const InputWrapper = ({
  children,
  id,
  title,
  className,
}: InputWrapperProps) => {
  return (
    <div className={twMerge("flex flex-col gap-y-1", className)}>
      <label htmlFor={id} className="text-gray-500 text-xs">
        {title}
      </label>
      {children}
    </div>
  );
};

const managers: Item.Manager[] = [
  "강산",
  "강찬희",
  "김영화",
  "유경환",
  "허승이",
];
const statuses: Item.Status[] = ["계획중", "완료", "진행중"];
