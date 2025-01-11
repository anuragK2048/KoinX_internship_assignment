import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingCoins() {
  const [trendingCoins, setTrendingCoins] = useState([]);

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
  }, []);

  return (
    <div className="border border-gray-200 bg-white px-5 py-5 pb-7 shadow-md md:ml-6 md:mr-6 md:rounded-md md:py-7 lg:ml-5 lg:mr-9">
      <h3
        className="pb-2 text-xl font-bold lg:text-3xl"
        style={{ color: "#0F1629" }}
      >
        Trending Coins (24H)
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
              className="mr-2 h-6 w-6 md:h-8 md:w-8"
            />
            <span className="text-sm lg:text-lg">{coin.item.name}</span>
            <span className="text-sm lg:text-lg">
              ({coin.item.symbol.toUpperCase()})
            </span>
          </div>

          <div
            className={`font-medium ${
              coin.item.data.price_change_percentage_24h.usd > 0
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            <span
              className={`rounded-sm px-2 py-1 text-xs lg:text-lg ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <span className="text-xs">&#9650; </span>
              ) : (
                <span className="text-xs">&#9660; </span>
              )}
              {Math.round(
                coin.item.data.price_change_percentage_24h.usd * 100,
              ) / 100}
              %
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
