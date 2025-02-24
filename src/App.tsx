import { useEffect, useState } from "react";

type Person = {
  name: string;
  age: number;
};

type Pet = {
  name: string;
  age: number;
  weight: number;
  desexed: boolean;
};

const App = () => {
  const [a, setA] = useState<string>("");
  const [b, setB] = useState<number>(0);

  const [p1, setP1] = useState<Person>({ name: "fldk", age: 23 });
  const [pet1, setPet1] = useState<Pet>({
    name: "dlf",
    age: 23,
    weight: 13,
    desexed: false,
  });
  const [pets, setPets] = useState<Pet[]>([]); //pet을 담은 배열
  const [people, setPeople] = useState<Person[]>([]); //person을 담은 배열

  useEffect(() => {
    setPets([pet1]);
    setPeople([p1]);
  }, []);

  return <h1>App</h1>;
};

export default App;
