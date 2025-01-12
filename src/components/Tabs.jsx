import React, { useState } from "react";

const tabItems = [
  { id: "overview", label: "Overview" },
  { id: "fundamentals", label: "Fundamentals" },
  { id: "news-insights", label: "News Insights" },
  { id: "sentiments", label: "Sentiments" },
  { id: "team", label: "Team" },
  { id: "technicals", label: "Technicals" },
  { id: "tokenomics", label: "Tokenomics" },
];

function Tabs() {
  const [activeTab, setActiveTab] = useState("overview");

  const handleSetActive = (tabId) => {
    setActiveTab(tabId);

    // Smooth scroll to the target section
    const targetElement = document.getElementById(tabId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="text-greenishGray mx-2 flex flex-row gap-12 overflow-x-auto border-b-2 border-gray-300 pt-10 text-sm font-semibold md:mx-4 md:pt-14 lg:mx-9 lg:text-lg">
      {/* Custom styles to hide the scrollbar */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        `}
      </style>

      {tabItems.map((tab) => (
        <div key={tab.id}>
          <div
            className={`cursor-pointer whitespace-nowrap ${
              activeTab === tab.id
                ? "border-b-4 border-blue-500 pb-2 text-blue-600"
                : ""
            } ${tab.id === "technicals" || tab.id === "tokenomics" ? "hidden md:block" : ""}`}
            onClick={() => handleSetActive(tab.id)}
          >
            {tab.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tabs;
