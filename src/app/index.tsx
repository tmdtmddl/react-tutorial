import { useNavigate } from "react-router-dom";
import { Button, Container, Typo } from "../components";
import { Alert } from "../contexts";
import { authService, auth, dbService } from "../lib";

const Home = () => {
  const { alert } = Alert.use();
  const navi = useNavigate();

  return (
    <Container.Row className="w-full h-screen justify-center items-center">
      <Container.Col className="gap-y-5 max-w-90 p-5">
        <Typo.H1 className="text-center">
          나만의 사랑을 찾고 커플이 되어 지옥같은 현실에서 탈출하세요.
        </Typo.H1>
        <Button.Opacity
          onClick={() =>
            alert("로그인 하시겠습니까?", [
              {
                text: "회원가입",
                onClick: () => {
                  navi("signup");
                },
              },
              {
                text: "로그인",
                onClick: () => {
                  navi("signin");
                },
              },
              {
                text: "구글",
                onClick: async () => {
                  console.log("구글로 로그인 해보셈");
                  const provider = new auth.GoogleAuthProvider();

                  try {
                    const res = await authService.signInWithPopup(provider); //! provider
                    if (res.user) {
                      const ref = dbService.collection("users");
                      const userSnap = await ref
                        .where("email", "==", res.user.email)
                        .get();
                      const userData = userSnap.docs;
                      if (userData.length === 0) {
                        //Todo: Add user to users colloection
                        const newUser: User = {
                          address: "",
                          appearance: {
                            bodyType: "",
                            height: {
                              isCM: true,
                              value: 0,
                            },
                            weight: {
                              value: 0,
                              isKG: true,
                            },
                          },
                          createdAt: 0,
                          distance: 0,
                          dob: "",
                          drinks: "",
                          workouts: "",
                          smokes: "",
                          email: res.user.email!,
                          gender: "",
                          id: res.user.uid,
                          interests: [],
                          isVegetarian: false,
                          mobile: "010",
                          name: res.user.displayName!,
                          points: [],
                          purposes: [],
                        };
                        await ref.doc(res.user.uid).set(newUser);
                      }
                      alert("환영합니다");
                    }
                  } catch (error: any) {
                    alert(error.message);
                  }
                },
              },
            ])
          }
          className="bg-pink-400 text-white"
        >
          탈출하기
        </Button.Opacity>
      </Container.Col>
    </Container.Row>
  );
};

export default Home;
