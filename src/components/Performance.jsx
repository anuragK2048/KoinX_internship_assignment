import React from "react";

function Performance() {
  return (
    <div className="ml-3 mt-6 flex flex-col gap-6 rounded-md border border-gray-200 bg-white px-2 pb-8 pt-3 shadow-md md:ml-4 md:gap-7 md:px-6 md:pb-12 md:pt-6 lg:ml-9">
      <h2 className="text-customBlue text-xl font-bold md:text-2xl">
        Performance
      </h2>

      <div className="flex flex-col gap-10">
        {/* Today's Low and High */}
        <div className="flex flex-row items-center gap-4">
          <div className="text-customDarkBlue flex flex-col gap-1 md:gap-2">
            <span className="text-xs">Today's Low</span>
            <span className="text-base font-semibold md:text-lg">
              46,930.22
            </span>
          </div>
          <div className="relative h-1 flex-grow rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <div className="absolute -bottom-8 left-2/3 -translate-x-1/4 transform">
              <span className="absolute -top-7 text-xs md:text-sm">
                &#9650;
              </span>
              <span className="text-customDarkBlue absolute -top-3 left-1/2 -translate-x-1/2 transform text-xs md:text-base">
                $48,637.83
              </span>
            </div>
          </div>
          <div className="text-customDarkBlue flex flex-col gap-1 md:gap-2">
            <span className="text-xs">Today's High</span>
            <span className="text-base font-semibold md:text-lg">
              49,343.83
            </span>
          </div>
        </div>

        {/* 52W Low and High */}
        <div className="flex flex-row items-center gap-4">
          <div className="text-customDarkBlue flex flex-col gap-1 md:gap-2">
            <span className="text-xs">52W Low</span>
            <span className="text-base font-semibold md:text-lg">
              16,930.22
            </span>
          </div>
          <div className="h-1 flex-grow rounded-md bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"></div>
          <div className="text-customDarkBlue flex flex-col gap-1 md:gap-2">
            <span className="text-xs">52W High</span>
            <span className="text-base font-semibold md:text-lg">
              49,743.83
            </span>
          </div>
        </div>
      </div>

      {/* Fundamentals Section */}
      <div className="flex flex-col gap-4 pt-4">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-customDarkBlue text-lg font-bold md:text-xl">
            Fundamentals
          </h3>
          <span className="h-3 w-3 rounded-full bg-gray-400 text-center text-xs text-white md:h-4 md:w-4 md:text-sm">
            <span className="">i</span>
          </span>
        </div>
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left Column */}
          <div className="flex flex-grow flex-col whitespace-nowrap text-xs font-medium md:text-sm">
            {[
              ["Bitcoin Price", "$16,815.46"],
              ["24h Low / 24h High", "$16,382.07 / $16,874.12"],
              ["7d Low / 7d High", "$16,382.07 / $16,874.12"],
              ["Trading Volume", "$23,249,202,782"],
              ["Market Cap Rank", "#1"],
            ].map(([label, value], index) => (
              <div
                key={index}
                className="text-slateGray flex h-10 items-center justify-between gap-5 border-b border-gray-300"
              >
                <span>{label}</span>
                <span className="text-eerieBlack whitespace-nowrap">
                  {value}
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-grow flex-col whitespace-nowrap text-xs font-medium md:text-sm">
            {[
              ["Market Cap", "$323,507,290,047"],
              ["Market Cap Dominance", "38.343%"],
              ["Volume / Market Cap", "0.0718"],
              [
                "All-Time High",
                <>
                  <span>
                    $69,044.77 <span className="text-red-500">-75.6%</span>
                  </span>
                  <span className="text-slateGray whitespace-nowrap text-xs">
                    Nov 10, 2021 (about 1 year)
                  </span>
                </>,
              ],
              [
                "All-Time Low",
                <>
                  <span>
                    $67.81 <span className="text-green-500">24729.1%</span>
                  </span>
                  <span className="text-slateGray whitespace-nowrap text-xs">
                    Jul 06, 2013 (over 9 years)
                  </span>
                </>,
              ],
            ].map(([label, value], index) => (
              <div
                key={index}
                className="text-slateGray flex h-10 items-center justify-between gap-5 border-b border-gray-300"
              >
                <span>{label}</span>
                <div className="text-eerieBlack flex flex-col items-end">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Performance;
