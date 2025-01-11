import { useEffect, useState } from "react";
import PriceChart from "./PriceChart";
import axios from "axios";

function CoinPrice({ coinId }) {
  const [coinData, setCoinData] = useState(null);
  const [priceData, setPriceData] = useState(null);

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
    <div className="ml-2 md:ml-4 lg:ml-9">
      <div className="flex flex-row gap-2 pb-14 pt-5 text-sm md:py-3">
        <span className="text-slate-400">Cryptopcurrencies</span>
        <span className="text-slate-400"> {">>"}</span>
        {coinData && <span className="font-semibold">{coinData.name}</span>}
      </div>
      <div className="relative rounded-md border border-gray-200 bg-white px-5 pb-7 pt-6 shadow-md">
        {coinData && priceData && (
          <div className="flex flex-col items-start gap-5">
            <div className="flex flex-col gap-8">
              <div className="absolute inset-x-0 bottom-full flex flex-row items-center gap-6 pb-4 md:relative md:bottom-auto md:flex-nowrap md:gap-8">
                <div className="flex flex-row items-center gap-2">
                  {coinData.image && (
                    <img
                      src={coinData.image.small}
                      alt={coinData.name}
                      width={30}
                      height={30}
                    />
                  )}
                  <h1
                    className="text-lg font-bold md:text-3xl"
                    style={{ color: "#0B1426" }}
                  >
                    {coinData.name}
                  </h1>
                  <p
                    className="text-sm font-semibold md:text-xl"
                    style={{ color: "#5D667B" }}
                  >
                    {coinData.symbol.toUpperCase()}
                  </p>
                </div>

                <div>
                  <p
                    className="text-md rounded-sm px-1 py-0.5 text-white sm:rounded-md sm:px-2 sm:py-1.5 sm:text-lg"
                    style={{ backgroundColor: "#808A9D" }}
                  >
                    Rank #{coinData.market_cap_rank}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex flex-row items-center gap-3">
                  <div className="flex flex-row items-center gap-6">
                    <span className="text-deepMidnightBlue text-3xl font-bold md:text-4xl">
                      &#x24;{priceData[coinId].usd}
                    </span>
                    <span
                      className={`rounded-sm px-2 py-0.5 text-sm sm:text-lg ${
                        parseFloat(priceData[coinId].usd_24h_change) >= 0
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {parseFloat(priceData[coinId].usd_24h_change) >= 0 ? (
                        <span className="text-xs sm:text-sm">&#9650; </span>
                      ) : (
                        <span className="text-xs sm:text-sm">&#9660; </span>
                      )}
                      {Math.abs(
                        parseFloat(priceData[coinId].usd_24h_change),
                      ).toFixed(2)}
                      %
                    </span>
                  </div>

                  <span
                    className="text-sm sm:text-lg"
                    style={{ color: "#768396" }}
                  >
                    (24H)
                  </span>
                </div>
                <p className="text-deepMidnightBlue text-lg font-semibold sm:text-xl">
                  &#8377; {priceData[coinId].inr}
                </p>
              </div>
            </div>

            <PriceChart />
          </div>
        )}
      </div>
    </div>
  );
}

export default CoinPrice;
