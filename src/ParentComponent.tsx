import {
  useState,
  useRef,
  FormEvent,
  useEffect,
  useMemo,
  useCallback,
} from "react";

interface LoginProps {
  email: string;
  password: string;
}

const ParentComponent = () => {
  const initialState: LoginProps = useMemo(
    () => ({ email: "", password: "" }),
    []
  );

  const [LoginProps, setLoginProps] = useState(initialState);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailMessage = useMemo(() => {
    const email = LoginProps.email;

    if (email.length === 0) {
      return "이메일 입력해주세요";
    }
    if (!email.includes("@")) {
      return "'@'을 포함해주세요.";
    }
    const split1 = email.split("@");
    if (split1[1]?.length === 0) {
      return "이메일 뒷자리를 입력해주세요.";
    }
    if (!split1[1].includes(".")) {
      return "이메일 뒷자리를 확인해 주세요";
    }
    const splilt2 = split1[1].split(".");
    if (splilt2[splilt2.length - 1]?.length === 0) {
      return "접미사를 확인해주세요.";
    }
    return null;
  }, [LoginProps.email]);

  const passwordMessage = useMemo(() => {
    const password = LoginProps.password;
    const pl = password.length;
    if (pl === 0) {
      return "비밀번호를 입력해주세요.";
    }
    if (pl < 6) {
      return "비밀번호가짧아요.";
    }
    if (pl > 18) {
      return "비밀번호가길어요.";
    }
    return null;
  }, [LoginProps.password]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email, password } = LoginProps;
      //! keyof interface 안의 값을 문자열로 뽑아옴
      const focus = (target: keyof LoginProps) =>
        setTimeout(() => {
          if (target === "email") {
            return emailRef.current?.focus();
          }
          return passwordRef.current?.focus();
        }, 100);

      if (emailMessage) {
        alert(emailMessage);
        return focus("email");
      }
      if (passwordMessage) {
        alert(passwordMessage);
        return focus("password");
      }

      alert(`${email}님 반갑습니다!`);
      setLoginProps(initialState);
    },
    [
      LoginProps.email,
      passwordMessage,
      emailMessage,
      emailRef,
      passwordRef,
      initialState,
    ]
    //! useCallback으로 감싼 함수안에서 모든변수,함수는 []디펜더시어레이에들어가야함.
  );
  useEffect(() => {
    console.log("onsubmit ...");
  }, [onSubmit]);
  return (
    <div>
      <form action="" className=" max-w-75 mx-auto" onSubmit={onSubmit}>
        <h1 className="text-2xl font-black">Login From</h1>
        <div className=" flex flex-col gap-y-1">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={LoginProps.email}
            onChange={(e) =>
              setLoginProps((prev) => ({ ...prev, email: e.target.value }))
            }
            ref={emailRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>
        <div className=" flex flex-col gap-y-1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={LoginProps.password}
            onChange={(e) =>
              setLoginProps((prev) => ({ ...prev, password: e.target.value }))
            }
            ref={passwordRef}
            className="bg-gray-50 h-10 px-2.5"
          />
        </div>
        <button className="bg-sky-500 text-white rounded h-10 w-full mt-5">
          Login
        </button>
      </form>
    </div>
  );
};

export default ParentComponent;
