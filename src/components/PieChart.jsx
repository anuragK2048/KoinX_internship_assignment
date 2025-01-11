import React from "react";

const data = [
  { name: "Crowdsale investors", value: 80, color: "#4285F4" },
  { name: "Foundation", value: 20, color: "#F4A41C" },
];

const calculateRotation = (data) => {
  const total = data.reduce((sum, entry) => sum + entry.value, 0);
  let cumulativePercent = 0;

  return data.map((entry) => {
    const startPercent = cumulativePercent;
    cumulativePercent += entry.value / total;

    return {
      ...entry,
      startPercent,
      endPercent: cumulativePercent,
    };
  });
};

function PieChart() {
  const segments = calculateRotation(data);

  return (
    <div className="my-1 flex items-center">
      {/* Outer Pie Chart */}
      <div className="relative h-40 w-40">
        <div
          className="absolute left-0 top-0 h-full w-full rounded-full"
          style={{
            background: `conic-gradient(
              ${segments
                .map(
                  (segment) =>
                    `${segment.color} ${segment.startPercent * 100}% ${
                      segment.endPercent * 100
                    }%`,
                )
                .join(", ")}
            )`,
          }}
        ></div>

        {/* Inner White Circle */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full bg-white"
          style={{
            width: "70%",
            height: "70%",
            transform: "translate(-50%, -50%)",
          }}
        ></div>
      </div>

      {/* Legend */}
      <div className="ml-6">
        {data.map((entry, index) => (
          <div key={index} className="mb-2 flex items-center">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span className="ml-2 text-sm">
              {entry.name}: {entry.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChart;
