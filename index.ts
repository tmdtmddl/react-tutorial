const n: null = null;
// console.log(n);
const array = ["a", "b", "c", "d"];
// console.log(array);

const array2: number[] = [1, 2, 3, 4];

const array3: Array<number> = [1, 2, 3, 4];
//type[]
// Array<type>
//<>Generic 제네릭(타입을 전달하는 것) =>복잡한 타입을 줄때
const array4: string[] = [...array];

//a1~a6 각각  문자열배열 2개 , 숫자배열2개,불리언배열2개 만들기

const a1: string[] = ["df", "dfs"];
const a2: Array<string> = ["df", "dfs"];
const a3: number[] = [1, 2];
const a4: Array<number> = [1, 2];
const a5: boolean[] = [true, false];
const a6: Array<boolean> = [true, false];
console.log("compiled");
