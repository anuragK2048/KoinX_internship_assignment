import { useState } from "react";
// import "./App.css";
import PriceChart from "./components/priceChart/PriceChart";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PriceChart />
    </>
  );
}

export default App;
