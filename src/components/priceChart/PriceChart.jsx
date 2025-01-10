// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    // Clear the container to prevent duplicates
    if (container.current) {
      container.current.innerHTML = ""; // Removes any existing widget
    }

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "symbols": [
            [
              "COINBASE:BTCUSD|7D"
            ]
          ],
          "chartOnly": true,
          "autosize": true,
          "width": "100%",
          "height": "560",
          "locale": "en",
          "colorTheme": "light",
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "left",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": false,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "area",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "medium",
          "lineWidth": 2,
          "lineType": 0,
          "dateRanges": [
            "1d|15",
            "1w|60",
            "1m|240",
            "3m|1D",
            "12m|1W",
            "60m|1W",
            "all|1M"
          ]
        }`;
    container.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={container}
      style={{ border: "2px solid black" }}
    >
      {/* <div className="tradingview-widget-container__widget"></div> */}
      <div className="tradingview-widget-copyright">
        {/* <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);