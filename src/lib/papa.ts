import papa from "papaparse";

export type ReadFileProps<T = any> = papa.ParseResult<T>;
const usePapa = () => {
  //use어쩌고는 커스텀훅임
  const readFile = (file: File, extractFn: (result: ReadFileProps) => void) => {
    papa.parse(file, {
      encoding: "UTF-8",
      header: true,
      complete: extractFn,
    });
  };
  const downloadFile = (
    data: any[],
    filename: string,
    config?: papa.UnparseConfig
  ): { downlaod: () => void } => {
    const csv = papa.unparse(data, {
      header: true,
      quotes: true,
      newline: "\r\n",
      //   encoding: "UTE-8",
      ...config,
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    console.log(blob, typeof blob);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${filename}.csv`;
    return {
      downlaod: () => a.click(),
    };
  };

  //커스텀훅내보내기
  return {
    readFile,
    downloadFile,
  };
};
export default usePapa;

// const onPapa = () => {
//     const csv = papa.unparse(data, {
//       header: true,
//       quotes: true,
//       newline: "\r\n",
//       encoding: "UTE-8",
//     });
//     const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
//     console.log(blob, typeof blob);
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "유저들.csv";
//     a.click();
//   };

// const onChange = (e: ChangeEvent<HTMLInputElement>) => {
//   if (e.target.files) {
//     const uploadedFile = e.target.files[0];

//     setFile(uploadedFile);
//     papa.parse(uploadedFile, {
//       encoding: "UTF-8",
//       header: true,
//       complete: (results) => {
//         console.log(results.data);
//       },
//     });
//   }
// };
