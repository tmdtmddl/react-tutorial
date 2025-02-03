import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import Like from "./Like";

const App = () => {
  const [name, setName] = useState("hse");
  const [count, setCount] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div>
      <Header name={name} />
      <h1> React Tutorial</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)}
      />
      <Footer name={name} />
      <Counter count={count} setCount={setCount} />
      <Like liked={liked} setLiked={setLiked} />
    </div>
  );
};
export default App;
