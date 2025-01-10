import { useState } from "react";
// import "./App.css";
import PriceChart from "./components/priceChart/PriceChart";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <PriceChart />
    </>
  );
}

export default App;
