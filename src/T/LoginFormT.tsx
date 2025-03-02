import { useState, useMemo, useCallback, useRef, FormEvent } from "react";

interface LoginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialState: LoginProps = useMemo(
    () => ({ email: "", password: "" }),
    []
  );
  const [LoginProps, setLoginProps] = useState(initialState);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const emailRule = useMemo(() => {
    const email = LoginProps.email;

    if (email.length === 0) {
      return "이메일을 입력하세요.";
    }

    if (!email.includes("@")) {
      return "이메일에 @를 반드시 포함 시켜주세요.";
    }

    const split1 = email.split("@");

    if (split1[1]?.length === 0) {
      return "@ 뒷자리를 제대로 입력하세요. ";
    }

    if (!split1[1].includes(".")) {
      return ".뒤의 값을 정확히 입력하세요.";
    }

    const split2 = split1[1].split(".");

    if (split2[split2.length - 1]?.length === 0) {
      return ".뒤의 값을 정확히 입력하세요.";
    }

    return null;
  }, [LoginProps.email]);

  const passwordRule = useMemo(() => {
    const password = LoginProps.password;

    if (password.length === 0) {
      return "비밀번호를 입력하세요";
    }

    if (password.length < 8) {
      return "비밀번호가 너무 짧습니다. ";
    }

    if (password.length > 30) {
      return "비밀번호가 너무 깁니다.";
    }
  }, [LoginProps.password]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const focus = (target: keyof LoginProps) =>
        setTimeout(() => {
          if (target === "email") {
            return emailRef.current?.focus();
          }
          return passwordRef.current?.focus();
        }, 100);

      if (emailRule) {
        alert(emailRule);
        return focus("email");
      }

      if (passwordRule) {
        alert(passwordRule);
        return focus("password");
      }

      alert(`${LoginProps.email}님 반갑습니다.`);
      setLoginProps(initialState);
    },
    [
      LoginProps.email,
      emailRef,
      emailRule,
      passwordRef,
      passwordRule,
      initialState,
    ]
  );

  return (
    <form action="" className=" max-w-75 mx-auto" onSubmit={onSubmit}>
      <h1 className="text-2xl font-black">Login Form</h1>
      <div className=" flex flex-col gap-y-1 ">
        <label htmlFor="eamil">Email</label>
        <input
          type="email"
          id="email"
          //   value={LoginProps.email}
          onChange={(e) =>
            setLoginProps((prev) => ({ ...prev, email: e.target.value }))
          }
          ref={emailRef}
          className="bg-gray-50 h-10 px-2.5"
        />
      </div>

      <div className=" flex flex-col gap-y-1 ">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          //   value={LoginProps.password}
          onChange={(e) =>
            setLoginProps((prev) => ({ ...prev, password: e.target.value }))
          }
          ref={passwordRef}
          className="bg-gray-50 h-10 px-2.5"
        />
        <button className=" h-10 bg-blue-500 text-white">로그인</button>
      </div>
    </form>
  );
};
export default LoginForm;
