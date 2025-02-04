import { useState } from "react";
import logo from "../assets/images/koinX_logo.png";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      {/* Navbar for large view */}
      <div className="h-18 flex justify-between bg-white pl-7 pr-2 md:px-7">
        <div className="content-center">
          <img src={`${logo}`} className="h-[5rem]"></img>
        </div>
        <div className="flex gap-4 text-base font-semibold text-stone-700 md:gap-9">
          <button
            className="mr-7 sm:hidden"
            style={{ scale: "1.9" }}
            onClick={toggleMenu}
          >
            {showMenu ? "" : <HiOutlineMenu style={{}} />}{" "}
            {/*react hamburger icon*/}
          </button>
          <div className="hidden content-center sm:block">Crypto Taxes</div>
          <div className="hidden content-center sm:block">Free Tools</div>
          <div className="hidden content-center sm:block">Resource Center</div>
          <button className="m-4 mx-3 hidden content-center rounded-xl border bg-gradient-to-r from-[#3d6fe2] to-[#2849e6] px-5 py-2 text-white sm:block">
            Get Started
          </button>
        </div>
      </div>

      {/* Navbar for mobile view */}
      {showMenu && (
        <div
          className="min-h-88 fixed right-0 top-0 z-50 bg-neutral-800 bg-opacity-50 px-4 py-6 font-semibold backdrop-blur-md sm:hidden"
          style={{ width: "50%" }}
        >
          <button
            className="absolute right-9 mt-0 scale-150 text-xl text-white"
            onClick={toggleMenu}
          >
            X
          </button>
          <div className="flex flex-col items-center gap-11 pt-14 text-lg">
            <a href="#" className="text-white hover:text-gray-200">
              Crypto Taxes
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Free Tools
            </a>
            <a href="#" className="text-white hover:text-gray-200">
              Resource Center
            </a>
            <button
              className="rounded-md bg-blue-500 px-5 py-2 text-white hover:bg-blue-600"
              onClick={toggleMenu}
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
