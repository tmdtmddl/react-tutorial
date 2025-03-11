import { useState, useEffect, useCallback } from "react";
import { dbService } from "../../../lib";
import { Button, Container } from "../../../components";
import PercentageBar from "./PercentageBar";
import Papa, { SurveyCSV } from "./Papa";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { Alert } from "../../../contexts";
import usePapa from "../../../lib/papa";

interface SurveyResponse {
  answers: string[][];
  id: string;
}

type AArray = number[][];

const AdminStatsPage = () => {
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [percentages, setPercentages] = useState<AArray>([]);

  const [data, setData] = useState<SurveyCSV[]>([]);

  useEffect(() => {
    const subRes = dbService.collection("surveys").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({
        id: doc.id,
        answers: JSON.parse(doc.data().data),
      }));

      console.log(data);
      setResponses(data as SurveyResponse[]);
    });

    subRes;
    return subRes;
  }, []);

  useEffect(() => {
    const subSurvey = dbService
      .collection("admin")
      .doc(import.meta.env.VITE_ADMIN_UID)
      .collection("survey")
      .onSnapshot((snap) => {
        const data = snap.docs.map(
          (doc) => ({ ...doc.data(), id: doc.id } as Survey)
        );

        setSurveys(data);
      });

    subSurvey;
    return subSurvey;
  }, []);

  useEffect(() => {
    const res = Array.from({ length: surveys.length }, (_, i) =>
      Array.from(
        {
          length: surveys[i].options.length,
        },
        () => 0
      )
    );

    const sendingData: SurveyCSV[] = [];

    surveys.map((survey, si) => {
      responses.map((response, ri) => {
        const item: SurveyCSV = {
          질문: ri === 0 ? survey.q : "",
          중복선택: survey.isMultiple ? "가능" : "",
          답변: response.answers[si],
          응답자아이디: response.id,
        };
        sendingData.push(item);
        survey.options.map((option, oi) => {
          response.answers[si]?.map((answer) => {
            if (answer === option) {
              res[si][oi] += 1;
            }
          });
        });
      });
    });
    setData(sendingData);

    const total = res.map((r) => {
      return r.reduce((a, b) => a + b, 0);
    });

    const totalPercentages = res.map((rs, ri) => {
      const t = total[ri];
      return rs.map((rs) => {
        const per = (rs / t) * 100;
        // console.log(
        //   `${ri + 1}번째 질문의 ${rsi + 1}번째 답변률은 ${per.toFixed(
        //     2
        //   )}%입니다.`
        // );

        return per;
      });
    });

    setPercentages(totalPercentages);
  }, [surveys, responses]);

  // return <Papa data={data} />;

  const { alert } = Alert.use();
  const { downloadFile } = usePapa();
  const onDownload = useCallback(() => {
    alert("설문응답 내역을 다운로드 하시겠습니까?", [
      { text: "취소" },
      {
        text: "다운로드",
        onClick: () => downloadFile(data, "설문지 응답 결과").downlaod(),
      },
    ]);
  }, [alert, data, downloadFile]);

  return (
    <div>
      <ul className="flex flex-col gap-y-5 max-w-100 mx-auto mt-5">
        <Container.Row className=" justify-end">
          <Button.Opacity
            onClick={onDownload}
            className="px-2.5 gap-x-1.5 bg-pink-400 text-white hover:shadow-md"
          >
            다운로드 <AiOutlineCloudDownload className="text-2xl" />
          </Button.Opacity>
        </Container.Row>

        {percentages.map((p, pi) => (
          <li key={pi} className="flex flex-col gap-y-2.5">
            <Container.Row className="flex-wrap items-center gap-x-2.5">
              <p className="text-xl font-bold">
                Q{pi + 1}. {surveys[pi].q}
              </p>
              <p className="text-xs text-gray-500">
                {surveys[pi].isMultiple && "(중복선택가능)"}
              </p>
            </Container.Row>

            <ul className="flex flex-col gap-y-1">
              {surveys[pi].options.map((option, oi) => {
                return (
                  <li key={oi}>
                    <PercentageBar per={p[oi]} answer={option} />
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminStatsPage;
