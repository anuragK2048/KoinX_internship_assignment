import { useEffect, useState } from "react";
import PriceChart from "../chart/PriceChart";
import axios from "axios";

function CoinPrice({ coinId }) {
  const [coinData, setCoinData] = useState(null);
  const [priceData, setPriceData] = useState(null);

  //fetching coin data
  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const coinResponse = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}`,
        );
        setCoinData(coinResponse.data);

        const priceResponse = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr,usd&include_24hr_change=true`,
        );
        setPriceData(priceResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCoinData();
  }, [coinId]);

  return (
    <>
      {/* render only when data is available */}
      {coinData && priceData ? (
        <div className="mx-2 md:mx-4 lg:mx-9">
          <div className="mb-2 flex flex-row gap-2 pb-14 pt-5 text-base md:py-3">
            <span className="font-light text-slate-800">Cryptopcurrencies</span>
            <span className="scale-90 text-slate-800"> {">>"}</span>
            {coinData && <span className="">{coinData.name}</span>}
          </div>
          <div className="relative rounded-md border border-gray-200 bg-white pt-6 shadow-md lg:px-5 lg:pb-7">
            <div className="flex flex-col items-start gap-2">
              <div className="ml-3 flex flex-col gap-6">
                {/* displaying title */}
                <div className="absolute inset-x-0 bottom-full flex flex-row items-center gap-6 pb-4 md:relative md:bottom-auto md:flex-nowrap md:gap-8">
                  <div className="flex flex-row items-center gap-2">
                    <img
                      src={coinData?.image.small}
                      alt={coinData?.name}
                      width={30}
                      height={30}
                    />

                    <h1
                      className="text-2xl font-semibold md:text-3xl"
                      style={{ color: "#0B1426" }}
                    >
                      {coinData?.name}
                    </h1>
                    <p
                      className="text-sm font-semibold md:text-xl"
                      style={{ color: "#5D667B" }}
                    >
                      {coinData?.symbol?.toUpperCase()}
                    </p>
                  </div>

                  <div>
                    <p
                      className="text-md rounded-lg px-3 py-1 text-white sm:rounded-md sm:px-2 sm:py-1.5 sm:text-lg"
                      style={{ backgroundColor: "#808A9D" }}
                    >
                      Rank #{coinData.market_cap_rank}
                    </p>
                  </div>
                </div>

                {/* displaying price data */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-center gap-3">
                    <div className="flex flex-row items-center gap-6">
                      <span className="text-3xl font-medium text-deepMidnightBlue md:text-4xl">
                        &#x24;
                        {/* converting price to international system */}
                        {priceData[coinId]?.usd?.toLocaleString("en-US")}
                      </span>
                      <span
                        className={`flex h-8 w-[88px] items-center justify-around rounded-lg px-2 py-0.5 text-sm font-light sm:text-lg ${
                          parseFloat(priceData[coinId]?.usd_24h_change) >= 0
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {parseFloat(priceData[coinId]?.usd_24h_change) >= 0 ? (
                          <span className="text-xs sm:text-sm">&#9650; </span>
                        ) : (
                          <span className="text-xs sm:text-sm">&#9660; </span>
                        )}
                        {Math.abs(
                          parseFloat(priceData[coinId]?.usd_24h_change),
                        ).toFixed(2)}
                        %
                      </span>
                    </div>

                    <span
                      className="text-sm sm:text-base"
                      style={{ color: "#768396" }}
                    >
                      (24H)
                    </span>
                  </div>
                  {/* converting price to indian system */}
                  <p className="text-lg text-deepMidnightBlue sm:text-xl">
                    &#8377; {priceData[coinId]?.inr?.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              {/* displaying price chart */}
              <div className="-mb-1 ml-1 mt-2 text-base font-semibold">
                Price Chart (USD)
              </div>
              <PriceChart symbol={coinData?.symbol?.toUpperCase()} />
            </div>
          </div>
        </div>
      ) : (
        <div className="ml-5">Fetching data from API...</div>
      )}
    </>
  );
}

export default CoinPrice;
