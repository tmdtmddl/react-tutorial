// import { email, mobile, name, intro } from "./database";
import Footer from "./Footer";
import Header from "./Header";

const App = () => {
  const name = "hse";

  const email = "tmddlqkqh@naver.com";

  const githubUrl = "https://www.github.com/tmdtmddl";

  const mobile = "010 1234 1234";

  const intro = "안녕하세요, 잘가세요.";

  return (
    <>
      <Header name={name} />
      <main>
        <h1>간단한 인삿말</h1>
        <p>
          안녕하세요, 저는 {name}입니다. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ipsam maiores error sed, provident facilis deserunt
          cumque molestias dolor nesciunt perferendis quod ducimus veritatis
          dignissimos consequuntur voluptas iusto tempore quia et!
        </p>
        <br />
        <p>연락처는 {mobile}입니다.</p>
        <br />
        <p>이메일은 {email}</p>
      </main>
      <Footer email={email} name={name} mobile={mobile} intro={intro} />
    </>
  );
};
export default App;
