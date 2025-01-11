import React from "react";

const Recommendation = () => {
  const data = [
    { label: "Buy", percentage: 76, color: "bg-green-500" },
    { label: "Hold", percentage: 8, color: "bg-gray-400" },
    { label: "Sell", percentage: 16, color: "bg-red-500" },
  ];

  return (
    <div className="flex items-center gap-6">
      {/* Circle */}
      <div className="flex h-32 items-center rounded-full bg-green-200 px-8 text-3xl text-green-500 md:h-36 md:text-4xl">
        76%
      </div>

      {/* Bars */}
      <div className="flex w-full flex-col gap-5">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="w-12 text-left text-base">{item.label}</span>

            {/* Highlighted percentage */}
            <div
              className={`h-3 rounded-full ${item.color}`}
              style={{ width: `${item.percentage}%` }}
            ></div>
            <span className="w-10 text-left text-sm">{item.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
