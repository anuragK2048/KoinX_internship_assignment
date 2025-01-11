import React from "react";
import holdingBitcoin1 from "../assets/images/holdingBitcoin1.svg";
import holdingBitcoin2 from "../assets/images/holdingBitcoin2.svg";
function About() {
  return (
    <div className="ml-3 mt-6 rounded-md border border-gray-200 bg-white px-2 pb-8 pt-3 tracking-wide shadow-md md:ml-4 md:px-7 md:pt-7 lg:ml-9">
      <h2 className="text-customBlue pt-2 text-xl font-bold tracking-wide md:text-2xl">
        About Bitcoin
      </h2>
      <div className="border-gray-200 pb-3 md:border-b-2">
        <p className="pt-4 text-lg font-bold tracking-wide md:text-[1.2rem]">
          What is Bitcoin?
        </p>
        <p className="text-greenishGray pt-2 text-sm leading-8 md:text-lg">
          Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume
          of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
          -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its
          7-day all-time low of $16,394.75. BTC has a circulating supply of
          19.24 M BTC and a max supply of 21 M BTC.
        </p>
      </div>
      <div className="border-gray-200 pb-4 md:border-b-2">
        <p className="pt-2 text-lg font-bold md:text-xl">
          Lorem ipsum dolor sit amet
        </p>
        <p className="text-greenishGray pt-3 text-sm leading-8 md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
          tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
          at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
          scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies
          urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque
          fermentum sapien morbi sodales odio sed rhoncus.{" "}
        </p>
        <p className="text-greenishGray pt-5 text-sm leading-8 md:text-lg">
          Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
          vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
          felis pellentesque interdum. Odio cursus phasellus velit in senectus
          enim dui. Turpis tristique placerat interdum sed volutpat. Id
          imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi
          nunc praesent massa turpis a. Integer dignissim augue viverra nulla et
          quis lobortis phasellus. Integer pellentesque enim convallis ultricies
          at.
        </p>
        <p className="text-greenishGray pt-5 text-sm leading-8 md:text-lg">
          Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
          massa vel convallis duis ac. Mi adipiscing semper scelerisque
          porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
          congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
          eget. Ullamcorper dui
        </p>
      </div>

      <div className="border-gray-200 pb-4 pt-6 md:border-b-2">
        <h2 className="text-xl font-bold md:text-2xl">
          Already Holding Bitcoin?
        </h2>
        <div className="flex flex-row flex-wrap gap-10 pt-5 md:flex-nowrap">
          <div className="flex w-full flex-row gap-8 rounded-lg bg-blue-400 p-4 md:w-1/2">
            <img
              src={holdingBitcoin1}
              alt="AboutLogo"
              style={{ width: "170px", height: "24px" }}
            />
            <div className="flex flex-col items-start justify-center gap-6 leading-7 md:leading-9">
              <p className="w-44 text-lg font-bold text-white md:w-40 md:text-2xl">
                Calculate Your Profits
              </p>
              <button className="flex flex-row items-center rounded-md bg-white px-3 py-1 text-sm font-semibold md:px-6 md:py-2 md:text-lg md:tracking-wide">
                Check Now &nbsp;{" "}
                <span className="text-xl md:text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>

          <div className="flex w-full flex-row gap-6 rounded-lg bg-orange-400 p-4 md:w-1/2 md:gap-8">
            <img
              src={holdingBitcoin2}
              alt="AboutLogo"
              style={{ width: "170px", height: "24px" }}
            />
            <div className="flex flex-col items-start justify-center gap-6">
              <p className="w-30 text-lg font-bold leading-7 text-white md:w-56 md:text-2xl md:leading-9">
                Calculate your tax liability
              </p>
              <button className="flex flex-row items-center rounded-md bg-white px-3 py-1 text-sm font-semibold md:px-6 md:py-2 md:text-lg md:tracking-wide">
                Check Now &nbsp;{" "}
                <span className="text-xl md:text-3xl">&#x1F852;</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-greenishGray pt-4 text-sm leading-8 md:text-lg">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
}

export default About;
