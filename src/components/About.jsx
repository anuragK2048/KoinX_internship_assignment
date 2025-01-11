import React from "react";
import holdingBitcoin1 from "../assets/images/holdingBitcoin1.svg";
import holdingBitcoin2 from "../assets/images/holdingBitcoin2.svg";
import arrowRight from "../assets/images/arrow_right.png";
function About() {
  return (
    <div className="mx-3 mt-6 rounded-md border border-gray-200 bg-white px-2 pt-3 tracking-wide shadow-md sm:pb-8 md:mx-4 md:px-7 md:pt-7 lg:mx-9">
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
      <div className="border-gray-200 md:border-b-2 md:pb-4">
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
        <div className="flex flex-row flex-wrap gap-4 pt-5 md:flex-nowrap lg:mr-4 lg:gap-8">
          <div className="flex h-[152px] w-full flex-row gap-2 rounded-lg bg-gradient-to-br from-[#94e9aa] via-[#5c9fa7] to-[#2d60a7] p-3 md:w-1/2">
            <img
              src={holdingBitcoin1}
              alt="AboutLogo"
              // style={{ width: "170px", height: "24px" }}
              className="md:h-32"
            />
            <div className="ml-5 mt-[9px] flex max-w-40 flex-col flex-wrap gap-4 min-[1300px]:ml-6">
              <div className="text-lg font-semibold text-white md:text-xl">
                Calculate Your Profits
              </div>
              <button className="flex w-36 flex-row items-center justify-evenly rounded-md bg-white px-1.5 py-1 text-sm font-[500] md:text-base">
                Check Now{" "}
                <img src={arrowRight} alt="arrow" className="h-6"></img>
              </button>
            </div>
          </div>

          <div className="flex h-[152px] w-full flex-row gap-2 rounded-lg bg-gradient-to-br from-[#f19b6e] via-[#e66f55] to-[#de4d42] p-3 md:w-1/2">
            <img
              src={holdingBitcoin2}
              alt="AboutLogo"
              // style={{ width: "170px", height: "24px" }}
              className="md:h-32"
            />
            <div className="ml-5 mt-[9px] flex flex-col gap-4 lg:w-max min-[1300px]:ml-6">
              <div className="w-44 text-lg font-semibold text-white md:w-60 md:text-xl">
                Calculate your tax liability
              </div>
              <div className="flex w-36 flex-row items-center justify-evenly rounded-md bg-white px-1.5 py-1 text-sm font-[500] md:text-base">
                Check Now{" "}
                <img src={arrowRight} alt="arrow" className="h-6"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-greenishGray hidden pt-4 text-sm leading-8 sm:block md:text-lg">
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
