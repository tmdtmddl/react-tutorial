import { useEffect, useState } from "react";

const App = () => {
  //useState랑 ()사이에 <>안에 타입을 지정해줌
  const [a, setA] = useState<number>(0);

  const [s, setS] = useState<string>("0");

  const [b, setB] = useState<boolean>(true);

  useEffect(() => {
    setA(12);
  }, []);

  return <h1>App:{a}</h1>;
};

export default App;
