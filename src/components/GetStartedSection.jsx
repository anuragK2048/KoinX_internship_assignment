import TrendingCoins from "./TrendingCoins";

function GetStartedSection() {
  return (
    <div className="flex flex-col gap-6 md:gap-6 lg:gap-4">
      <div
        className="ml-3 mr-3 rounded-xl px-3 py-1 pt-4 md:ml-6 md:mr-4 md:rounded-2xl md:px-12 md:py-8 md:pt-11 lg:ml-5 lg:mr-9"
        style={{ backgroundColor: "#0052FE" }}
      >
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h3 className="text-xl font-bold leading-8 text-white md:px-8 md:text-3xl md:leading-10">
              Get Started with KoinX for FREE
            </h3>
            <p
              className="text-sm leading-5 md:text-lg md:leading-7"
              style={{ color: "#F2F2F2" }}
            >
              With our range of features that you can equip for free, koinX
              allows you to be more educated and aware of your tax reports.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 pb-6">
            {/* <Image
                src="/frame.svg"
                alt="Frame Logo"
                width={190}
                height={24}
                className="w-40 md:w-44"
              /> */}
            <div>
              <button
                className="rounded-lg bg-white px-6 py-3 text-sm font-bold md:text-lg"
                style={{ color: "#0F1629" }}
              >
                Get Started for FREE &nbsp;&nbsp;&rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
      <TrendingCoins />
    </div>
  );
}

export default GetStartedSection;
