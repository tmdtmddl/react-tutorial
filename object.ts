import { statSync } from "./node_modules/@types/node/fs.d";
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
