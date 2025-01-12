import React from "react";

const Recommendation = () => {
  const data = [
    { label: "Buy", percentage: 76, color: "bg-[#50b089]" },
    { label: "Hold", percentage: 8, color: "bg-[#c7c8cd]" },
    { label: "Sell", percentage: 16, color: "bg-[#ef4553]" },
  ];

  return (
    <div className="flex items-center gap-6">
      {/* Circle */}
      <div className="flex h-32 items-center rounded-full bg-[#eef9f4] px-8 text-3xl text-[#55b787] md:h-36 md:text-4xl">
        76%
      </div>

      {/* Bars */}
      <div className="flex w-full flex-col gap-5">
        {data.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <span className="min-w-12 text-left text-base">{item.label}</span>

            {/* Highlighted percentage */}
            <div
              className={`h-3 rounded ${item.color}`}
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
