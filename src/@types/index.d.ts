//! fileName.d.ts // d=>dev. 개발 할때만 쓰는 파일 전역관리가능

type StudentName = "허승이" | "강산" | "강찬희" | "유경환" | "김영화";

interface Student {
  name: StudentName | "";
  mobile: string;
}

//! d.ts 파일에서 상단에 뭔가를 불러오면 전역으로 사용할때  import해서 써야 함
