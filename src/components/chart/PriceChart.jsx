// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from "react";

function TradingViewWidget({ symbol }) {
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
              "BINANCE:${symbol}USD|7D"
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
            "1d|1",
            "1w|60",
            "1m|240",
            "3m|1D",
            "12m|1W",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(41, 98, 255, 0.92)",
          "topColor": "rgba(41, 98, 255, 0.24)",
          "bottomColor": "rgba(41, 98, 255, 0)"
        }`;
    container.current.appendChild(script);

    // Cleanup on unmount
    return () => {
      if (container.current) container.current.innerHTML = "";
    };
  }, [symbol]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-copyright"></div>
    </div>
  );
}

export default memo(TradingViewWidget);
