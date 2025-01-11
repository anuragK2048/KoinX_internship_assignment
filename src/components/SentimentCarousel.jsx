import React, { useState } from "react";
import SentimentLogo1 from "../assets/images/SentimentLogo1.svg";
import SentimentLogo2 from "../assets/images/SentimentLogo2.svg";

const SentimentCarousel = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cards = [
    {
      image: SentimentLogo1,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa.`,
      bg_color: "blue",
    },
    {
      image: SentimentLogo2,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
      bg_color: "green",
    },
    {
      image: SentimentLogo1,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
      bg_color: "blue",
    },
    {
      image: SentimentLogo2,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
      bg_color: "green",
    },
    {
      image: SentimentLogo1,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
      bg_color: "blue",
    },
    {
      image: SentimentLogo2,
      content1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,

      content2: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa.`,
      bg_color: "green",
    },
  ];

  const moveLeft = () => {
    setCurrentCard((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const moveRight = () => {
    setCurrentCard((next) => (next === cards.length - 1 ? 0 : next + 1));
  };

  return (
    <div className="relative overflow-x-auto md:overflow-hidden">
      <style>{`
        ::-webkit-scrollbar {
          display: none;
        }
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      `}</style>
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentCard * (window.innerWidth / 22)}%)`,
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-11/12 flex-shrink-0 pr-4 md:w-5/6 lg:w-2/3"
          >
            <div
              className={`rounded-xl bg-${card.bg_color}-50 p-2 pb-5 md:p-6 md:pb-10`}
            >
              <div className="flex flex-row gap-3">
                <img
                  src={card.image}
                  alt="Sentiment Logo"
                  className="w-8 md:w-12"
                />
                <p className="text-shadowyNavy text-xs font-semibold md:text-lg">
                  {card.content1}
                </p>
              </div>
              <div className="pl-11 pt-3 text-xs text-gray-500 md:pl-14 md:text-lg">
                {card.content2}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="text-slateBlueGray absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-white px-4 py-2 text-2xl font-semibold shadow-md md:block lg:block"
        onClick={moveLeft}
      >
        {"<"}
      </button>
      <button
        className="text-slateBlueGray absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 transform rounded-full bg-white px-4 py-2 text-2xl font-semibold shadow-md md:block lg:block"
        onClick={moveRight}
      >
        {">"}
      </button>
    </div>
  );
};

export default SentimentCarousel;
