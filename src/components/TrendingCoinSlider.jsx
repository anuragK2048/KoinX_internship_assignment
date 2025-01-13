import React, { useState, useEffect } from "react";

function TrendingCoinsSlider({ title }) {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending",
        );
        if (response.ok) {
          const data = await response.json();
          setTrendingCoins(data.coins);
          setShowLeftButton(false);
          setShowRightButton(data.coins.length > 1);
        } else {
          throw new Error("Failed to fetch trending coins");
        }
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };

    fetchTrendingCoins();
  }, []); //runs only when component is mounted

  // logic to implement sliding with buttons
  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === trendingCoins.length - 1 ? 0 : prevIndex + 1;
      setShowLeftButton(true);
      setShowRightButton(newIndex !== trendingCoins.length - 1);
      return newIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        prevIndex === 0 ? trendingCoins.length - 1 : prevIndex - 1;
      setShowRightButton(true);
      setShowLeftButton(newIndex !== 0);
      return newIndex;
    });
  };

  return (
    <div className="px-3 pb-3 md:px-5 md:pb-9">
      <div className="relative overflow-hidden md:ml-8 md:mr-8">
        {/* buttons for sliding */}
        {showLeftButton && (
          <div className="absolute left-0 top-1/2 z-50">
            <button
              className="rounded-full bg-white px-2 py-1 shadow-md md:px-3 md:py-2"
              onClick={handlePrev}
            >
              {"<"}
            </button>
          </div>
        )}
        {showRightButton && (
          <div className="absolute right-0 top-1/2 z-50 transform">
            <button
              className="rounded-full bg-white px-2 py-1 shadow-md md:px-3 md:py-2"
              onClick={handleNext}
            >
              {">"}
            </button>
          </div>
        )}

        <h2 className="text-xl font-semibold text-darkGraphite md:mb-5 md:text-2xl">
          {title}
        </h2>
        <div
          className="flex flex-row gap-2 md:gap-3"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          {/* displaying all trending coins */}
          {trendingCoins.map((coin) => (
            <div
              key={coin.item.id}
              className="coin-card flex h-32 w-44 min-w-44 flex-col gap-1 rounded-lg border border-gray-200 bg-white py-2 pl-2 md:h-44 md:w-96 md:min-w-72 md:gap-2 md:py-4 md:pl-4 md:pr-10"
            >
              <div className="felx-row flex items-center gap-2">
                <img
                  src={coin.item.thumb}
                  alt={coin.item.name}
                  className="bor h-6 rounded-full md:h-8"
                />

                <div className="flex flex-row items-center">
                  <p className="text-xs font-normal text-darkGraphite md:text-base">
                    {coin.item.symbol}
                  </p>

                  <p
                    className={`text-${
                      coin.item.data.price_change_percentage_24h.usd >= 0
                        ? "green-500"
                        : "red-500"
                    } bg-${
                      coin.item.data.price_change_percentage_24h.usd <= 0
                        ? "red-100"
                        : "green-100"
                    } flex h-3 items-center rounded-sm bg-opacity-60 text-xs font-extralight md:h-5 md:p-1 md:text-xs`}
                  >
                    {coin.item.data.price_change_percentage_24h.usd >= 0
                      ? "+"
                      : ""}
                    {coin.item.data.price_change_percentage_24h.usd.toFixed(2)}%
                  </p>
                </div>
              </div>
              {/* displaying price */}
              <div className="text-center">
                <p className="pb-2 text-sm text-darkCharcoal md:text-[1.3rem]">
                  {/[a-zA-Z]/.test(coin.item.data.price) ? (
                    <span className="text-sm font-extralight">
                      price unavailable
                    </span>
                  ) : (
                    <span className="flex justify-start">
                      ${coin.item.data.price.toFixed(4)}
                    </span>
                  )}
                </p>
                {/* image of current coin graph */}
                <img
                  src={coin.item.data.sparkline}
                  alt={coin.item.name}
                  className="h-12 md:h-20"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingCoinsSlider;
