import { useState, useRef, useCallback, useMemo, FormEvent } from "react";
import { Button, Form } from "../../components";
import { v4 } from "uuid";

interface NameProps {
  id: string | null;
  name: string;
}

const CURDForm = ({ curds, setCurds }) => {
  const initialState: NameProps = useMemo(
    () => ({
      id: v4(),
      name: "",
    }),
    []
  );
  const [curd, setCurd] = useState(initialState);

  const ref = useRef<HTMLInputElement>(null);

  const curdMessage = useMemo(() => {
    const name = curd.name;
    if (name.length === 0) {
      return "이름을 입력해주세요";
    }
    return null;
  }, [curd.name]);

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const focus = (target: keyof NameProps) => {
        setTimeout(() => {
          if (target === "name") {
            return ref.current?.focus();
          }
        }, 100);
      };
      if (curdMessage) {
        alert(curdMessage);
        return focus("name");
      }

      alert(`${curd.name}님 반가워요!`);
      setCurds(initialState);
    },
    [curdMessage, curd.name, ref, initialState, setCurds]
  );

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-2.5">
      <Form.Label>이름을 입력하세요.</Form.Label>
      <Form.Input ref={ref} className="border border-amber-300 " />
      <Button.Opacity type="submit" className="bg-teal-600 text-white">
        선택
      </Button.Opacity>
    </form>
  );
};

export default CURDForm;
