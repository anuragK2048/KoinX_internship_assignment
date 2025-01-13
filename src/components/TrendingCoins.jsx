import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  //Fetch trending coins from coinGeko api
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        const trendingData = response.data.coins;
        const top3Coins = trendingData.slice(0, 3); // Get top 3 coins based on rank
        setTrendingCoins(top3Coins);
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []); //runs only when component is mounted

  return (
    <div className="border border-gray-200 bg-white px-5 py-5 pb-7 md:rounded-md md:py-7">
      <h3
        className="pb-2 text-xl font-semibold lg:text-2xl"
        style={{ color: "#0F1629" }}
      >
        Trending Coins (24h)
      </h3>
      {trendingCoins.map((coin) => (
        <div
          key={coin.item.id}
          className="flex items-center justify-between pt-5"
        >
          <div
            className="flex flex-row font-semibold"
            style={{ color: "#0F1629" }}
          >
            <img
              src={coin.item.thumb}
              alt={coin.item.name}
              className="mr-2 h-6 w-6 rounded-full md:h-8 md:w-8"
            />
            <span className="flex items-center text-sm font-normal lg:text-[1.075rem]">
              {coin.item.name} ({coin.item.symbol.toUpperCase()})
            </span>
          </div>

          <div
            className={`font-normal ${
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <div
              className={`flex w-20 items-center justify-between rounded-lg px-2 py-1 text-xs lg:w-[90px] lg:text-base ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <div className="ml-0.5 text-xs">&#9650; </div>
              ) : (
                <div className="ml-0.5 text-xs">&#9660; </div>
              )}
              {Math.round(
                coin.item.data.price_change_percentage_24h.usd * 100,
              ) / 100}
              %
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
