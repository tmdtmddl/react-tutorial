// 1. useState, useEffect 불러오기
import { useState, useEffect } from "react";

// 1-2. const로 verificationCode라는 변수 선언하고 '123123' 할당하기
const verificationCode = "123123";

const Code = () => {
  // 2. useState로 code라는 변수 선언한 뒤 초기값으로 ''
  const [code, setCode] = useState("");

  // 4. onCheck라는 이름으로 함수 만들기
  // 4-1.code 값이 6자리일 때 code와 verificationCode가 일치한지 검사하고 일치하면 인증되었습니다. 틀리면 같지 않습니다. 경고 처리하기
  const onCheck = () => {
    if (code.length === 6 && code === verificationCode) {
      return alert("인증되었습니다.");
    }
    alert("같지 않습니다.");
  };

  //5. useEffect 로 code를 감지해서 code길이가 6자리일 때에만 onCheck하도록 코드 짜기
  useEffect(() => {
    if (code.length === 6) {
      onCheck();

      return () => {
        onCheck();
      };
    }
  }, [code]);

  return (
    <div>
      <h1>Code</h1>
      {/* 3. input 만들고 value로 code연결하기, onChange속성으로 code값 변경하기 */}
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      {/* 5. button 만들어서 클릭햇을 때 */}
      <button onClick={onCheck}> 인증하기</button>
    </div>
  );
};

export default Code;
