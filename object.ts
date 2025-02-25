import { statSync } from "./node_modules/@types/node/fs.d";

interface Basic {
  name: string;
  age: number;
}

interface Person extends Basic {
  isMale: boolean;
}

type ID = {
  id: string;
};

//! extends 문법으로 다른 인터페이스를 받아왔을 때 해당 인터페이스 값과 타입이 겹치는 것은 가능 타입이 다르게는 지정할 수 없음.
//! 인터페이스 에서 타입을 사용하려면 객체의 형태로 담은 타입만 사용가능(단순히 타입만지정한것은 ㄴㄴ)
//! 타입에 인터페이스 를 가져올때는 타입이 객제의 형태여야만 함

interface StudentInfo {
  name: string;
  dob: string;
}
type StudentId = {
  id: number;
};
//! & type에서 그리고 라는 뜻
type Student = StudentInfo &
  StudentId & {
    level: string;
  };

//! string,number,null,boolean,[]등의 직접적인 값을 주지 않고 옵션을  주고 싶을 때는 타입부분에 직접적인 값을 이력하면됨
//!여러개의 값은 | 으로 구분 빈문자열 또는 0 등을 추가하여 아무런 값이 없을 때까지 지정가능
//!주의사항 : 옵션을 지정해줄때는  string,number같은 직접적인 타입을 함께주지 않음
interface ClassStudent {
  name: "김영화" | "유경환" | "강찬희" | "강산" | "허승이" | "" | string;
  mobile: string;
}
//! 옵션을 따로 타입으로 지정한뒤 이곳저곳 에서 쓰면 유리함
type ClassId = {
  id: 0 | 1 | 2 | 3 | 4 | 5;
};

const s1: ClassStudent = {
  name: "",
  mobile: "",
};

interface Pet extends Basic, ID {
  desexed: boolean;
  weight: number;
}

const dog: Pet = {
  age: 12,
  desexed: false,
  name: "",
  weight: 12,
};

const person0: { name: string; age: number; isMale: boolean } = {
  name: "Mario",
  age: 30,
  isMale: true,
};
//{}안에 각각의 값의 타입을 지정

// type 타입명의 타입을 저장하고 변수처럼 반복적으로 쓰는 타입 선언 키워드
type S = string; //? Tip:타입들은 대문자로 시작 2단어 이상일 때는 캐멀케이스
const a1: S = "a";
const a2: S = "a";
const a3: S = "a";
const a4: S = "a";
const a5: S = "a";
const a6: S = "a";

type B = boolean;

const b1: B = false;
const b2: B = false;
const b3: B = false;
const b4: B = false;
const b5: B = false;
const b6: B = false;

type N = number;

const n1: N = 1;
const n2: N = 1;
const n3: N = 1;
const n4: N = 1;
const n5: N = 1;
const n6: N = 1;

type Person = {
  name: string;
  age: number;
  isMale: boolean;
};

const p1: Person = { age: 20, isMale: false, name: "말자" };

const me: Person = {
  name: "hse",
  age: 26,
  isMale: false,
};

type Dog = {
  name: string;
  desexed: boolean;
  weight: number;
  age: number;
};

const dog1: Dog = {
  name: "dlf",
  desexed: false,
  weight: 10,
  age: 2,
};
const dog2: Dog = {
  name: "dfsddf",
  desexed: true,
  weight: 8,
  age: 3,
};

const people: Person[] = [p1, me, { age: 35, isMale: false, name: "gijd" }];
const dogs: Dog[] = [dog1, dog2];
