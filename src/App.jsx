import { Suspense } from "react";
//! App이 최초로 렌더링 되는 0.00001초라는 찰나의 순간을 포착해서 처리할 때

import { useState, useEffect } from "react";
import ChildItem from "./ChildItem";
import 족보Provier from "./족보Provider";
import Man from "./Man";
import 조상추가폼 from "./조상추가폼";
import Shop from "./Shop";

const App = () => {
  const as = ["김조상", "조상", "조상조상"];
  const families = [
    {
      name: "김아빠",
      families: [
        {
          name: "김무지개",
          families: [{ name: "김땡땡" }, { name: "김뿅뿅" }],
        },
      ],
    },
  ];

  const names = {
    증조할아버지: as[0],
    고조할아버지: as[1],
    더조상: as[2],
  };
  return (
    <div>
      <Shop />
      <족보Provier>
        <조상추가폼 />

        {/* <ul>
        {families.map((f, fi) => (
          <li key={fi}>
            <ChildItem name={f.name}  />
            <ul>
              {
                f.families.map((s,si)=>(
                <li key={si}>
                  
                  <ChildItem name={s.name} />
                  <ul>
                    {

                    }
                  </ul>
                 
                  </li>)
              }
            </ul>
          </li>
        ))}
      </ul> */}
        <Man />
      </족보Provier>
    </div>
  );
};
export default App;
