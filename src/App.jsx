import { useState } from "react";
// import "./App.css";
import PriceChart from "./components/PriceChart";
import Navbar from "./components/Navbar";

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
