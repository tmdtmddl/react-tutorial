import { useSearchParams, useNavigate } from "react-router-dom";
import { Form, Button, Typo } from "../../components";
import { useCallback, useState, useMemo, useRef } from "react";
import Content_n from "./Content_n";
import Content_0 from "./Content_0";
import Content_1 from "./Content_1";
import Content_2 from "./Content_2";
import Content_3 from "./Content_3";
import Content_4 from "./Content_4";
import {
  arrayLengthValidator,
  dobValidator,
  emailValidator,
  heightWeightValidator,
  mobileValidator,
  stringValidator,
} from "../../lib";
import { Alert } from "../../contexts";

const Signup = () => {
  const content = useSearchParams()[0].get("content"); // ?
  const navi = useNavigate(); //useNavigate를 사용하기 위해서 navi라는 변수에다가 담기

  // User의 타입을 useMemo를 이용해서 initialState라는 변수에 담아놈놈
  const initialState = useMemo<User>(
    () => ({
      address: "",
      appearance: {
        bodyType: "",
        height: {
          isCM: true,
          value: 0,
        },
        weight: {
          value: 0,
          isKG: true,
        },
      },
      createdAt: 0,
      distance: 0,
      dob: "",
      drinks: "",
      workouts: "",
      smokes: "",
      email: "",
      gender: "",
      id: "",
      interests: [],
      isVegetarian: false,
      mobile: "010",
      name: "",
      points: [],
      purposes: [],
    }),
    []
  );

  // useState를 이용해서 초기값으로 User를 담아놓은 initialState변수를 설정
  const [props, setProps] = useState(initialState);

  //props라는 변수에서 필요한 값들을 변수로 쓸수있게 뽑아옴
  const {
    address,
    appearance,
    distance,
    dob,
    drinks,
    email,
    gender,
    interests,
    isVegetarian,
    mobile,
    name,
    points,
    purposes,
    smokes,
    workouts,
  } = props;

  //onChange라는 함수를 만들어서 onChange속성에 넣을 수 있게 만듬
  const onChange = useCallback(
    (target: keyof User, value: any) =>
      setProps((prev) => ({ ...prev, [target]: value })),
    []
  );

  // useState를 이용해서 pws라는 변수 선언
  const [pws, setPws] = useState({
    pw: "",
    con: "",
  });

  //onChangePW라는 함수를 만들어서 타겟은 "pw"or"con"이고 vlaue는 문자열로 타입을 지정해서 onChange속성에 넣을로직을 만들기
  const onChangePw = useCallback((target: "pw" | "con", value: string) => {
    setPws((prev) => ({ ...prev, [target]: value }));
    console.log("con");
  }, []);

  // useRef를 이용해서 input을 건들이기 위해 초기값은 null로주고 타입을 HTMLInputElement을 줌
  //! content = X
  const nameRef = useRef<HTMLInputElement>(null);
  const dobRef = useRef<HTMLInputElement>(null);
  const mobileRef = useRef<HTMLInputElement>(null);

  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_n = useMemo(
    () => ({
      nameRef,
      dobRef,
      mobileRef,
      name,
      dob,
      mobile,
      onChange,
    }),
    [nameRef, dobRef, mobileRef, name, dob, mobile, onChange]
  );

  // useRef를 이용해서 input과 select를 건들이기 위해 초기값은 null로주고 타입을 HTMLInputElement과HTMLSelectElement을 줌
  //! content = 0
  const genderRef = useRef<HTMLSelectElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const pwRef = useRef<HTMLInputElement>(null);
  const conRef = useRef<HTMLInputElement>(null);
  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_0 = useMemo(
    () => ({
      gender,
      email,
      ...pws,
      onChange,
      genderRef,
      emailRef,
      pwRef,
      conRef,
      onChangePw,
    }),
    [
      gender,
      email,
      pws,
      onChange,
      genderRef,
      emailRef,
      pwRef,
      conRef,
      onChangePw,
    ]
  );
  // useRef를 이용해서 input과 select를 건들이기 위해 초기값은 null로주고 타입을 HTMLInputElement과HTMLSelectElement을 줌
  //! content = 1
  const addressRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLSelectElement>(null);
  const purposeRef = useRef<HTMLSelectElement>(null);
  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_1 = useMemo(
    () => ({
      address,
      distance,
      purposes,
      onChange,
      addressRef,
      distanceRef,
      purposeRef,
    }),
    [address, distance, purposes, onChange, addressRef, distanceRef, purposeRef]
  );
  // useRef를 이용해서 input과 select를 건들이기 위해 초기값은 null로주고 타입을 HTMLInputElement과HTMLSelectElement을 줌
  //! content = 2
  const heightRef = useRef<HTMLInputElement>(null);
  const weightRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLSelectElement>(null);
  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_2 = useMemo(
    () => ({
      isVegetarian,
      appearance,
      onChange,
      heightRef,
      weightRef,
      bodyRef,
    }),
    [isVegetarian, appearance, onChange, heightRef, weightRef, bodyRef]
  );
  // useRef를 이용해서 select를 건들이기 위해 초기값은 null로주고 타입을 HTMLSelectElement을 줌
  //! content = 3
  const workoutRef = useRef<HTMLSelectElement>(null);
  const drinkRef = useRef<HTMLSelectElement>(null);
  const smokeRef = useRef<HTMLSelectElement>(null);
  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_3 = useMemo(
    () => ({
      workouts,
      drinks,
      smokes,
      onChange,
      workoutRef,
      drinkRef,
      smokeRef,
    }),
    [workouts, drinks, smokes, onChange, workoutRef, drinkRef, smokeRef]
  );
  // useRef를 이용해서 select를 건들이기 위해 초기값은 null로주고 타입을 HTMLSelectElement을 줌
  //! content = 4
  const interestRef = useRef<HTMLSelectElement>(null);
  const pointRef = useRef<HTMLSelectElement>(null);
  //속성을 한번에 다 전달 하기 위해 useMemo를 이용해서 다담기
  const payload_4 = useMemo(
    () => ({ interests, points, onChange, interestRef, pointRef }),
    [interests, points, onChange, interestRef, pointRef]
  );

  //focus를 할 곳을 스위치문을 이용해서 focus,showpick작업(setTimeout함수를 사용해서 1초뒤에 집중되게함)
  const focus = useCallback(
    (target: keyof User | "pw" | "con" | keyof UserAppearance) => {
      setTimeout(() => {
        switch (target) {
          //target이 "address"일 때 addressRef로 포커스 해줘
          case "address":
            return addressRef.current?.focus();
          case "con":
            return conRef.current?.focus();
          case "pw":
            return pwRef.current?.focus();
          case "distance":
            return distanceRef.current?.showPicker();
          case "dob":
            return dobRef.current?.focus();
          case "drinks":
            return drinkRef.current?.showPicker();
          case "smokes":
            return smokeRef.current?.showPicker();
          case "workouts":
            return workoutRef.current?.showPicker();
          case "gender":
            return genderRef.current?.showPicker();
          case "email":
            return emailRef.current?.focus();
          case "mobile":
            return mobileRef.current?.focus();
          case "name":
            return nameRef.current?.focus();
          case "points":
            return pointRef.current?.showPicker();
          case "purposes":
            return purposeRef.current?.showPicker();
          case "interests":
            return interestRef.current?.showPicker();
          case "weight":
            return weightRef.current?.focus();
          case "height":
            return heightRef.current?.focus();
          case "bodyType":
            return bodyRef.current?.showPicker();
        }
      }, 100);
    },
    [
      interestRef,
      pointRef,
      workoutRef,
      drinkRef,
      smokeRef,
      heightRef,
      weightRef,
      bodyRef,
      nameRef,
      dobRef,
      mobileRef,
      genderRef,
      emailRef,
      pwRef,
      conRef,
      addressRef,
      distanceRef,
      purposeRef,
    ]
  );

  //useMemo를 이용해서 이름이 입력이 안됬을 때 경고할 메세지 담기
  const nameMessage = useMemo(
    () => stringValidator(name, "이름을 입력해주세요."),
    [name]
  );

  //useMemo를 이용해서 생년월일이 입력이 안됬을 때 경고할 메세지 담기
  const dobMessage = useMemo(() => {
    if (stringValidator(dob)) {
      return "생년월일을 입력해주세요.";
    }

    let split: string[] = [];
    if (dob.includes(".") || dob.includes("-") || dob.includes("/")) {
      if (dob.includes(".")) {
        split = dob.split(".");
      } else if (dob.includes("-")) {
        split = dob.split("-");
      } else if (dob.includes("/")) {
        split = dob.split("/");
      }
    } else {
      if (dob.length !== 8) {
        return "생년월일을 확인해주세요.";
      }
      const year = `${dob[0]}${dob[1]}${dob[2]}${dob[3]}`;
      const month = `${dob[4]}${dob[5]}`;
      const date = `${dob[6]}${dob[7]}`;

      split = [year, month, date];
    }

    if (dobValidator(split)) {
      return dobValidator(split);
    }
    return null;
  }, [dob]);

  const mobileMessage = useMemo(() => mobileValidator(mobile), [mobile]);

  const genderMessage = useMemo(
    () => stringValidator(gender, "성별을 선택해주세요."),
    [gender]
  );

  const emailMessage = useMemo(() => emailValidator(email), [email]);

  const pwMessage = useMemo(
    () => stringValidator(pws.pw, "비밀번호를 확인해주세요."),
    [pws.pw]
  );

  const conMessage = useMemo(() => {
    if (stringValidator(pws.con)) {
      return stringValidator(pws.con, "비밀번호를 한 번 더 확인해주세요.");
    }
    if (pwMessage) {
      return pwMessage;
    }
    if (pws.pw !== pws.con) {
      return "비밀번호가 일치하지 않습니다. 다시 한 번 확인해주세요.";
    }
  }, [pws, pwMessage]);

  const addressMessage = useMemo(
    () => stringValidator(address, "주소를 입력해주세요."),
    [address]
  );
  const distanceMessage = useMemo(() => {
    if (distance === 0) {
      return "연애 가능 거리를 입력해주세요.";
    }
    return null;
  }, [distance]);
  const purposeMessage = useMemo(
    () =>
      arrayLengthValidator(
        purposes,
        "목표를 선택해주세요. 다중 선택 가능합니다."
      ),
    [purposes]
  );

  const heightMessage = useMemo(
    () => heightWeightValidator(appearance.height.value, "키를 확인해주세요."),
    [appearance.height.value]
  );
  const weightMessage = useMemo(
    () =>
      heightWeightValidator(appearance.weight.value, "몸무게를 확인해주세요."),
    [appearance.weight.value]
  );
  const bodyTypeMessage = useMemo(
    () => stringValidator(appearance.bodyType, "체형을 선택해주세요."),
    [appearance.bodyType]
  );

  const workoutMessage = useMemo(
    () => stringValidator(workouts, "1주일에 몇 번 운동하시나요?"),
    [workouts]
  );
  const drinkMessage = useMemo(
    () => stringValidator(drinks, "1주일에 몇 번 술자리를 가지시나요?"),
    [drinks]
  );
  const smokeMessage = useMemo(
    () => stringValidator(smokes, "1주일에 몇 번 흡연하시나요?"),
    [smokes]
  );

  const interestMessage = useMemo(
    () =>
      arrayLengthValidator(
        interests,
        "관심사를 선택해주세요. 중복 선택 가능합니다."
      ),
    [interests]
  );
  const pointMessage = useMemo(
    () =>
      arrayLengthValidator(
        points,
        "호감 포인트를 선택해주세요. 중복 선택 가능합니다."
      ),
    [points]
  );

  const { alert } = Alert.use();
  const onSubmit = useCallback(() => {
    const next = () => navi(`/signup?content=${Number(content) + 1}`);

    if (!content) {
      if (nameMessage) {
        return alert(nameMessage, [{ onClick: () => focus("name") }]);
      }
      if (dobMessage) {
        return alert(dobMessage, [{ onClick: () => focus("dob") }]);
      }
      if (mobileMessage) {
        return alert(mobileMessage, [{ onClick: () => focus("mobile") }]);
      }
      return navi(`/signup?content=0`);
    }
    switch (content) {
      case "0":
        if (genderMessage) {
          return alert(genderMessage, [{ onClick: () => focus("gender") }]);
        }
        if (emailMessage) {
          return alert(emailMessage, [{ onClick: () => focus("email") }]);
        }

        if (pwMessage) {
          return alert(pwMessage, [{ onClick: () => focus("pw") }]);
        }
        if (conMessage) {
          return alert(conMessage, [{ onClick: () => focus("con") }]);
        }
        return next();

      case "1":
        if (addressMessage) {
          return alert(addressMessage, [{ onClick: () => focus("address") }]);
        }
        if (distanceMessage) {
          return alert(distanceMessage, [{ onClick: () => focus("distance") }]);
        }
        if (purposeMessage) {
          return alert(purposeMessage, [{ onClick: () => focus("purposes") }]);
        }
        return next();

      case "2":
        if (heightMessage) {
          return alert(heightMessage, [{ onClick: () => focus("height") }]);
        }
        if (weightMessage) {
          return alert(weightMessage, [{ onClick: () => focus("weight") }]);
        }
        if (bodyTypeMessage) {
          return alert(bodyTypeMessage, [{ onClick: () => focus("bodyType") }]);
        }
        return next();
      case "3":
        if (workoutMessage) {
          return alert(workoutMessage, [{ onClick: () => focus("workouts") }]);
        }
        if (drinkMessage) {
          return alert(drinkMessage, [{ onClick: () => focus("drinks") }]);
        }
        if (smokeMessage) {
          return alert(smokeMessage, [{ onClick: () => focus("smokes") }]);
        }
        return next();

      case "4":
        if (interestMessage) {
          return alert(interestMessage, [
            { onClick: () => focus("interests") },
          ]);
        }
        if (pointMessage) {
          return alert(pointMessage, [{ onClick: () => focus("points") }]);
        }

        return console.log(props);
    }
  }, [
    navi,
    content,
    focus,
    nameMessage,
    alert,
    dobMessage,
    mobileMessage,
    genderMessage,
    emailMessage,
    pwMessage,
    conMessage,
    addressMessage,
    distanceMessage,
    purposeMessage,
    heightMessage,
    weightMessage,
    bodyTypeMessage,
    workoutMessage,
    drinkMessage,
    smokeMessage,
    interestMessage,
    pointMessage,
    props,
  ]);

  return (
    <Form.Container className="m-5 max-w-100 mx-auto" onSubmit={onSubmit}>
      <Typo.H1>자신에 대해 알려주세요.</Typo.H1>
      {content ? (
        {
          0: <Content_0 {...payload_0} />,
          1: <Content_1 {...payload_1} />,
          2: <Content_2 {...payload_2} />,
          3: <Content_3 {...payload_3} />,
          4: <Content_4 {...payload_4} />,
        }[content]
      ) : (
        <Content_n {...payload_n} />
      )}
      <Button.Opacity type="submit" className="bg-pink-400 text-white mt-2.5">
        다음
      </Button.Opacity>
    </Form.Container>
  );
};

export default Signup;
