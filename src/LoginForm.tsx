import { useState, useMemo, useCallback, useRef, FormEvent } from "react";

interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  //initialState를 useMemo로 만들기
  //useState로 관리할 상태 만들기 초기값은 initialState
  //emailRef,passwordRef만들기
  //emailMessage를 useMemo로 만들기
  //메일길이,@포함여부,@뒤의 길이,@뒤의 접미사영역 .포함여부,접미사길이
  // passwordMessage를 useMemo로 만들기
  //길이,6자미만 18초과
  //onSubmit함수를 useCallback으로 만들기
  //emailMessage가있을때 경고메세지+이메일 포커스
  //passwordMessage가 있을때 경고메세지+비번포커스
  //환영메세지
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
      return "이메일을 입력해주세요";
    }
    if (!email.includes("@")) {
      return "@을 포함해주세요.";
    }
    const sp = email.split("@");
    if (sp[1].length === 0) {
      return "@뒤에를 입력해주세요";
    }
    if (!sp[1].includes(".")) {
      return ".이 없습니다.";
    }
    const sp2 = sp[1].split(".");
    if (sp2[sp2.length - 1]?.length === 0) {
      return "접미사를 확인해주세요.";
    }

    // return null;
  }, [LoginProps.email]);

  const passwordMessage = useMemo(() => {
    const password = LoginProps.password;
    if (password.length === 0) {
      return "비밀번호를 입력해주세요.";
    }
    if (password.length < 6) {
      return "비밀번호가 너무 짧아요.";
    }
    if (password.length > 18) {
      return "비밀번호가 너무 길어요.";
    }
    return null;
  }, [LoginProps.password]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const { email } = LoginProps;
      const focus = (target: keyof LoginProps) =>
        setTimeout(() => {
          if (target === "email") {
            console.log(target);
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
      alert(`${email}님 환영합니다.`);
      setLoginProps(initialState);
    },
    [emailMessage, passwordMessage, emailRef, passwordRef, initialState]
  );
  return (
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
  );
};

export default LoginForm;
