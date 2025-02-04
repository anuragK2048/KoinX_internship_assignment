import Navbar from "./Navbar";
import GetStartedSection from "../components/GetStartedSection";
import Tabs from "../components/Tabs";
import Performance from "../components/Performance";
import Sentiment from "../components/sentiment/Sentiment";
import About from "../components/About";
import Tokenomics from "../components/Takenomics";
import Team from "../components/Team";
import TrendingCoinsSlider from "../components/TrendingCoinSlider";
import CryptoDetail from "../components/priceDetails/CryptoDetail";

function Home() {
  return (
    <div className="relative" style={{ width: "100%" }}>
      <Navbar />
      <div className="lg:w-[70%]">
        <CryptoDetail />
      </div>
      <div className="w-full lg:w-[70%]">
        <Tabs />
      </div>
      <div className="w-full lg:w-[70%]" id="overview">
        <Performance />
      </div>
      <div className="w-full lg:w-[70%]" id="sentiments">
        <Sentiment />
      </div>
      <div className="w-full lg:w-[70%]" id="news-insights">
        <About />
      </div>
      <div className="w-full lg:w-[70%]" id="tokenomics">
        <Tokenomics />
      </div>
      <div className="w-full lg:w-[70%]" id="team">
        <Team />
      </div>
      {/* Only for desktop view */}
      <div className="hidden bg-white pt-14 sm:block" id="technicals">
        <TrendingCoinsSlider title={"You May Also Like"} />
      </div>
      {/* Only for desktop view */}
      <div className="hidden bg-white pb-14 sm:block">
        <TrendingCoinsSlider title={"Trending Coins"} />
      </div>
      <div className="absolute w-full lg:right-0 lg:top-36 lg:w-[30%]">
        <GetStartedSection />
      </div>
    </div>
  );
}

export default Home;
