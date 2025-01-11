import PieChart from "./PieChart";

const Tokenomics = () => {
  return (
    <div className="hidden md:block">
      <div className="ml-3 mt-6 flex flex-col gap-3 rounded-md border border-gray-200 bg-white px-7 pb-11 pt-7 tracking-wide shadow-md md:ml-4 lg:ml-9">
        <h2 className="text-customBlue text-xl font-bold md:text-2xl">
          Tokenomics
        </h2>
        <h3 className="text-charcoalGray pt-4 text-xl font-semibold">
          Initial Distribution
        </h3>
        <div>
          <PieChart />
        </div>
        <p className="text-greenishGray text-lg">
          Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
          vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
          amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
          eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
          urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
          bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
          ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
          mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
        </p>
      </div>
    </div>
  );
};

export default Tokenomics;
