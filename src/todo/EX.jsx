import { useState } from "react";

const initialState = {
  name: "hse ",
  age: 20,
  nationality: "Korea",
};

const EX = () => {
  const [person, setPerson] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
    console.log(name, value);
    console.log(person[name]);
  };
  return (
    <div>
      <h1>
        {person.name} , {person.age},{person.nationality}
      </h1>
      <input type="text" onChange={onChange} name="name" />
      <input
        type="text"
        onChange={(e) =>
          setPerson((prev) => ({ ...prev, age: e.target.value }))
        }
      />
      <input type="text" onChange={onChange} name="nationality" />
    </div>
  );
};

export default EX;
