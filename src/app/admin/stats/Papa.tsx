import { useState, useEffect, ChangeEvent } from "react";
import { Button } from "../../../components";
import usePapa, { ReadFileProps } from "../../../lib/papa";

const Papa = ({ data }: { data: SurveyCSV[] }) => {
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    console.log(file);
  }, [file]);

  const { downloadFile, readFile } = usePapa();

  const onPapa = () => {
    console.log(data);
    downloadFile(data, "설문지응답결과").downlaod();
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);
      readFile(
        uploadedFile,
        (
          results: ReadFileProps<{ 이름: string; 나이: string; 지역: string }>
        ) => {
          const newData = results.data.map((item) => ({
            name: item.이름,
            age: item.나이,
            city: item.지역,
          }));
          console.log(newData);
        }
      );
    }
  };

  return (
    <div>
      <h1>{file ? file.name : "파일을 업로드하세요."}</h1>
      <div>
        <label htmlFor="file">csv 파일업로드</label>
        <input type="file" id="file" onChange={onChange} />
      </div>
      <Button.Opacity onClick={onPapa}>papa로 확인하기</Button.Opacity>
    </div>
  );
};

export default Papa;

export interface SurveyCSV {
  질문: string;
  중복선택: "가능" | ""; //isMultiple ? "가능":""
  응답자아이디: string;
  답변: string[]; //응답한 사람이 가지고 있는 답변을 그대로
}
