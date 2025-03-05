import Agro from "../../assets/Home-How-we-help-2-e1611825306334-1024x519-removebg-preview.png";
const HeroHeader = () => {
  return (
    <div className="container max-lg:hidden mx-auto lg:relative lg:h-[90dvh]">
      <div className="lg:flex items-center gap-x-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <div className="lg:w-3/4 lg:flex lg:items-center bg-[rgb(245,245,245)] lg:h-[400px] lg:px-10 px-3 rounded-lg shadow-lg w-full h-full">
          <div className="lg:h-[60%] lg:flex lg:flex-col lg:justify-between ">
            <h1 className="text-[2rem] font-semibold">FarmGhana</h1>
            <p className="text-2xl my-4">
              Your number 1 Online Marketing
              <br /> shop in Ghana
            </p>
            <button
              type="submit"
              className="bg-[#23f802e0] hover:bg-[#23f802af] duration-150 p-2 rounded-sm text-white font-semibold text-xl tracking-wider w-fit"
            >
              Buy now
            </button>
          </div>
          <div>
            <img
              src={Agro}
              alt="img"
              className="w-full h-full object-cover mix-blend-multiply"
            />
          </div>
        </div>
        <div className="hidden lg:w-1/4 lg:h-[400px] bg-[#02f879e0] relative lg:flex lg:items-center rounded-lg shadow-lg">
          <div className="lg:h-[60%] lg:flex lg:flex-col lg:justify-between px-10">
            <h1 className="text-2xl font-bold">20% SALE OFF</h1>
            <p className="text-lg font-semibold">
              For All Christmas <br />
              Products
            </p>
            <button
              type="submit"
              className="bg-[#23f802e0] hover:bg-[#23f802af] duration-150 p-2 rounded-sm text-white font-semibold text-xl tracking-wider w-fit"
            >
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
