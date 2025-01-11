import logo from "../assets/images/koinX_logo.png";

function Navbar() {
  return (
    <>
      <div className="h-18 flex justify-between bg-white px-7">
        <div className="content-center">
          <img src={`${logo}`} className="h-[5rem]"></img>
        </div>
        <div className="flex gap-8 text-base font-semibold text-stone-700">
          <div className="content-center">Crypto Taxes</div>
          <div className="content-center">Free Tools</div>
          <div className="content-center">Resource Center</div>
          <button className="m-4 mx-3 content-center rounded-xl border bg-gradient-to-r from-[#3d6fe2] to-[#2849e6] px-5 py-2 text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
