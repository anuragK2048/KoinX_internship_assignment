import { useState } from "react";
// import "./App.css";
import PriceChart from "./components/PriceChart";
import Navbar from "./components/Navbar";
import TrendingCoins from "./components/TrendingCoins";
import GetStartedSection from "./components/GetStartedSection";
import CoinPrice from "./components/CoinPrice";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="relative" style={{ width: "100%" }}>
      <Navbar />
      <div className="lg:w-4/6">
        <CoinPrice coinId={"bitcoin"} />
      </div>
      <div className="absolute w-full lg:right-0 lg:top-36 lg:w-2/6">
        <GetStartedSection />
      </div>
    </div>
  );
}

export default App;
