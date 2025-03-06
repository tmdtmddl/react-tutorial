import { Button, Container, Typo } from "../components";
import { TiHeart } from "react-icons/ti";

const Home = () => {
  return (
    <Container.Row className="w-full h-screen justify-center items-center">
      <Container.Col className="gap-y-5 max-w-90 p-5">
        <Typo.H1 className="text-center relative">
          나만의 사랑을 찾고 커플이 되어 지옥같은 현실에서 탈출하세요.
          <TiHeart className="absolute bottom-25 left-75 rotate-30 text-pink-500 " />
        </Typo.H1>

        <Button.Link href={"signup"} className="bg-pink-400 text-white">
          탈출하기
        </Button.Link>
      </Container.Col>
    </Container.Row>
  );
};

export default Home;
