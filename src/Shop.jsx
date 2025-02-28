import { candyStore } from "./candyStore";
import { useEffect } from "react";

const Shop = () => {
  const { candies, addCandy } = candyStore();
  useEffect(() => {
    console.log(candies);
  }, [candies]);
  return (
    <div>
      <h1>Shop</h1>
      <button onClick={()=>}>새로운 캔디추가</button>
    </div>
  );
};

export default Shop;
