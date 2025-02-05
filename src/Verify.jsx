import { useState, useEffect } from "react";

const Verify = () => {
  const [mobile, setMobile] = useState("010");
  const [verificationCode, setVerificationCode] = useState(null);
  const [code, setCode] = useState("");
  const [time, setTime] = useState(180);

  const onSend = () => {
    //mobile 길이가 11자리가 아니면 경고
    if (mobile.length !== 11) {
      return alert("연락처를 입력해주세요");
    }
    //코드보내면 verification Code를 생성한뒤 교체
    let number = 0;
    while (number.toString().length <= 5) {
      console.log("generating ... ");
      number = Math.floor(Math.random() * 1000000);
    }
    setVerificationCode(number.toString());
  };

  const onVerify = () => {
    console.log({ code, verificationCode }, "verifiying ...");

    if (time === 0) {
      setVerificationCode(null);
      setTime(180);
      return alert("인증시간이 종료되었습니다. 다시 한 번 발급해주세요");
    }
    if (code.length !== 6) {
      return alert("인증번호는 6자리입니다.");
    }
    if (verificationCode && verificationCode !== code) {
      return alert("인증번호가 틀립니다. 다시한번확인해주세요.");
    }
    alert("인증되었습니다.");

    //하고싶은 코드 짜기
    setVerificationCode(null);
    setCode("");
    setTime(180);
  };
  useEffect(() => {
    console.log("ready to go");
  }, []);

  useEffect(() => {
    console.log({ verificationCode });
    if (
      verificationCode &&
      verificationCode.length === 6 &&
      code.length === 6
    ) {
      onVerify();
      return () => {
        onVerify();
      };
    }
  }, [verificationCode, code]);

  useEffect(() => {
    if (verificationCode) {
      const countId = setInterval(() => {
        setTime((prev) => (prev === 0 ? 0 : prev - 1));
      }, 1000);
      return () => {
        clearInterval(countId);
      };
    }
  }, [verificationCode]);
  return (
    <div>
      <h1>본인인증</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          verificationCode ? onVerify() : onSend();
        }}
      >
        <input
          type="text"
          value={verificationCode ? code : mobile}
          onChange={(e) =>
            verificationCode
              ? setCode(e.target.value)
              : setMobile(e.target.value)
          }
          placeholder={verificationCode ? " 인증번호입력" : "01012341234"}
        />
        <button>{verificationCode ? "인증하기" : "인증번호발송"}</button>
      </form>
      {verificationCode && <h2>{getTime(time)}</h2>}
    </div>
  );
};

export default Verify;

const getTime = (time) => {
  const min = Math.floor(time / 60);
  const sec = time - min * 60;
  return `${min}:${sec.toString().length === 1 ? `0 ${sec}` : sec}`;
};
//조건 ? A : B
// 조건에 부합하면 ? 옆에 A코드를 실행해줘  부합하지않으면 : 옆의 B코드실행해줘

//조건 && A
//조건에 부합할때만  A코드를 실행

//! 조건 && B
//조건에 부합하지 않을 때에만 B코드를 실행해주세요

// 한줄짜리 코드만 실행가능
//   if ( 조건){
// A
//   } else {
// B
//   }
