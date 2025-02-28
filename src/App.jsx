import { Suspense } from "react";
//! App이 최초로 렌더링 되는 0.00001초라는 찰나의 순간을 포착해서 처리할 때

import { useState, useEffect } from "react";

const App = () => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setInit(true);
      console.log("first screen rendering...");
    }, 2000);
  }, []);
  if (!init) {
    return null;
  }
  return (
    <Suspense fallback={<>App is initialixing...</>}>
      {init ? (
        <div>
          <h1> App</h1>
        </div>
      ) : null}
    </Suspense>
  );
};
export default App;
