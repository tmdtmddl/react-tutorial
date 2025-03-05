import { useSearchParams, useNavigate } from "react-router-dom";
import { Form, Container, Button, Typo } from "../../components";
import { useCallback } from "react";

const Signup = () => {
  const content = useSearchParams()[0].get("content");
  const navi = useNavigate();
  const onSubmit = useCallback(() => {
    const next = (number: number) => navi(`/signup?content=${number}`);
    if (!content) {
      return next(0);
    }
    switch (Number(content)) {
      case 0:
        return console.log("case 0 logic");
    }
  }, [navi, content]);
  return (
    <Form.Container>
      <Typo.H1> 자신에 대해알려주세요.</Typo.H1>
      {content ? (
        {
          0: <>content is 0</>,
          1: <>content is 1</>,
          2: <>content is 2</>,
        }[content]
      ) : (
        <Container.Col>
          <Form.Label htmlFor="name">이름</Form.Label>
          <Form.Input id="name" />
        </Container.Col>
      )}
      <Button.Opacity className="bg-pink-400 text-white mt-2.5">
        다음
      </Button.Opacity>
    </Form.Container>
  );
};

export default Signup;
