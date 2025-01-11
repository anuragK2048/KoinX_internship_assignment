import img1 from "../assets/images/TeamImg1.svg";
import img2 from "../assets/images/TeamImg2.svg";
import img3 from "../assets/images/TeamImg3.svg";
import TrendingCoinsSlider from "./TrendingCoinSlider";

const data = [
  { name: "John Smith", image: img1 },
  { name: "Elina Williams", image: img2 },
  { name: "John Doe", image: img3 },
];
function Team() {
  return (
    <div className="md mx-3 mb-20 mt-6 rounded-md border border-gray-200 bg-white pl-2 pr-2 pt-7 tracking-wide shadow-md md:mx-4 md:pb-10 md:pl-7 md:pr-9 lg:mx-9">
      <h2 className="text-xl font-bold md:text-2xl">Team</h2>
      <p className="text-greenishGray pt-5 text-sm md:text-lg">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-6 pt-6">
        {data.map((val, i) => (
          <div
            key={i}
            className="bg-skyBlueMist flex flex-col items-center gap-4 rounded-lg px-3 py-3 md:flex-row md:gap-9 md:px-8 md:py-3.5"
          >
            <div className="flex flex-col items-center">
              <img
                src={val.image}
                alt="Team People Image"
                style={{ height: "80px" }}
              />
              <span className="pt-3 font-semibold tracking-wide">
                {val.name}
              </span>
              <span className="text-slateBlueGray whitespace-nowrap pt-1 text-center text-sm tracking-wide">
                Designation Here
              </span>
            </div>
            <p className="text-customBlue text-sm font-light md:w-5/6 md:text-base">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        ))}
        <div className="block sm:hidden">
          <div className="">
            <TrendingCoinsSlider title={"You May Also Like"} />
          </div>
          <div className="">
            <TrendingCoinsSlider title={"Trending Coins"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
