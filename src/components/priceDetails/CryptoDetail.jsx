import { useEffect, useState } from "react";
import CoinPrice from "./CoinPrice";
import { Navigate, redirect, useNavigate, useParams } from "react-router";

function CryptoDetail() {
  const navigate = useNavigate();
  const { coinID } = useParams();

  const [cryptoData, setCryptoData] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [displayList, setDisplayList] = useState(false);
  const [dropDownData, setDropDownData] = useState([]);

  useEffect(() => {
    setSearchValue(coinID);
    setDisplayList(false);
  }, [coinID]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-ujaX8xEaphG8e2g68AGHCgBe",
      },
    };

    fetch("https://api.coingecko.com/api/v3/exchanges/binance/tickers", options)
      .then((res) => res.json())
      .then((res) => {
        const uniqueTickers = res.tickers.filter(
          (ticker, index, self) =>
            index === self.findIndex((t) => t.coin_id === ticker.coin_id),
        );
        setCryptoData(res);
        setDropDownData(uniqueTickers);
      })
      .catch((err) => console.error(err));
  }, [coinID]);
  function handleSearchQuery(e) {
    const curQuery = e.target.value;
    setSearchValue(curQuery);
    const filteredData = cryptoData.tickers.filter((val) =>
      val.coin_id.toLowerCase().startsWith(curQuery.toLowerCase()),
    );
    setDropDownData(filteredData);
    setDisplayList(true);
  }
  function handleDropClick() {
    setDisplayList((cur) => !cur);
  }
  return (
    <div>
      {cryptoData?.name && (
        <div className="relative mx-2 mt-5 md:mx-4 lg:mx-9">
          {/* Search Input */}
          <div className="relative flex items-center">
            <input
              type="text"
              value={searchValue}
              onChange={handleSearchQuery}
              placeholder="Search other cryptocurrencies..."
              className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300"
            />
            <span
              className="absolute right-3 p-2 text-gray-400 hover:cursor-pointer"
              onClick={handleDropClick}
            >
              {displayList ? "▲" : "▼"}
            </span>
          </div>

          {/* Dropdown */}
          {displayList && (
            <div className="absolute z-10 mt-1 max-h-80 w-full overflow-y-auto rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              {cryptoData.tickers.length > 0 ? (
                dropDownData.map((ticker, i) => (
                  <div
                    key={i}
                    className="cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:text-indigo-700"
                    onClick={() => navigate(`/${ticker.coin_id}`)}
                  >
                    {ticker.coin_id}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-sm text-gray-500">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>
      )}
      <CoinPrice coinId={coinID} />
    </div>
  );
}

export default CryptoDetail;
