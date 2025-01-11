import React, { useEffect, useState } from "react";
import SentimentCarousel from "./SentimentCarousel";
import Recommendation from "./Recommendation";

const Sentiment = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }

  //   const ReactApexChart = require("react-apexcharts").default;

  const series = [
    {
      data: [76, 8, 16],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "30%",
        distributed: true,
        dataLabels: {
          position: "top",
        },
      },
    },

    xaxis: {
      categories: ["buy", "hold", "sell"],
      labels: {
        show: false,
      },
    },
    style: {
      fontSize: "60px",
    },
    colors: ["#28a745", "#C7C8CE", "#dc3545"],
  };

  return (
    <div className="ml-3 mt-6 flex flex-col gap-4 rounded-md border border-gray-200 bg-white px-2 pb-11 pt-1 shadow-md md:ml-4 md:px-7 md:pt-7 lg:ml-9">
      <h2 className="text-customBlue pt-2 text-xl font-bold md:text-2xl">
        Sentiment
      </h2>

      <div className="flex flex-row items-center gap-2">
        <span className="text-customDarkBlue text-lg font-semibold md:text-xl">
          Key Events
        </span>
        <span className="rounded-full bg-gray-500 px-1.5 text-xs text-white md:px-2 md:text-sm">
          i
        </span>
      </div>

      <SentimentCarousel />

      <div className="flex flex-row items-center gap-2 pt-5">
        <span className="text-customDarkBlue text-lg font-semibold md:text-xl">
          Analyst Estimates
        </span>
        <span className="rounded-full bg-gray-500 px-1.5 text-xs text-white md:px-2 md:text-sm">
          i
        </span>
      </div>

      <div className="flex flex-row items-center md:gap-20 lg:gap-24"></div>
      <Recommendation />
    </div>
  );
};

export default Sentiment;
