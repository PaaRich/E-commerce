import Logo from "../../assets/shopping-cart-basket-png.webp";
//import { FaSearch } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
// import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const BottomNav = () => {
  return (
    <div className="bg-green-600 lg:h-24 lg:flex">
      {/* LOGO */}
      <div className="lg:w-1/5 relative">
        <div className="bg-white lg:w-full h-full absolute top-0 left-12 skew-x-12 z-10"></div>
        <div className="flex items-center bg-white z-20 absolute ">
          <img src={Logo} alt="logo" className="w-[100px]" />
          <span className="font-bold text-2xl">FarmGH</span>
        </div>
      </div>

      <div className="lg:w-4/5 pl-40 pr-10 flex items-center justify-between">
        
          {/* <form className="flex items-center bg-white text-lg pl-2 rounded-sm focus:outline-1 lg:w-3/5">
            <FaSearch />
            <input
              type="search"
              placeholder="Search products,brand and categories"
              className="p-2 outline-none w-full"
            />
            <button
              type="submit"
              className="bg-[#23f802e0] hover:bg-[#23f80297] cursor-pointer duration-200 p-2 text-white font-semibold tracking-wider"
            >
              Search
            </button>
          </form> */}
          <div className="w-3/5">
            <ul className="flex items-center justify-between text-[whitesmoke]">
              <li className="text-lg tracking-widest"><Link to={"/"}>Home</Link></li>
            <li className="text-lg tracking-widest flex items-center group cursor-pointer relative">Services<IoIosArrowDown className="group-hover:rotate-180 duration-200" size={23} />
              <ul className="absolute hidden group-hover:block top-full w-[200px] shadow-lg z-50 px-4 bg-white text-black">
               <li><Link to={"e-commerce"}>E-commerce</Link></li>
               <li><Link to={"training"}>Training</Link></li>
               <li><Link to={"media"}>Media</Link></li>
              </ul>
            </li>
              <li className="text-lg tracking-widest"><Link to={"about"}>About</Link></li>
              <li className="text-lg tracking-widest"><Link to={"contact"}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="w-auto">
            <div className="flex items-center text-white text-lg">
              <MdOutlinePermIdentity color="black" size={28} />
              <Link
                to={"login"}
                className="border-r-[1px] px-2 hover:underline"
              >
                Login
              </Link>
              <Link to={"register"} className="px-2 hover:underline">
                Register
              </Link>
            </div>

            {/* <div>
              <Link
                to={"cart"}
                className="border-2 py-2 text-xl px-4 rounded-full flex items-center justify-between text-white gap-x-2"
              >
                <BsCart4 />
                Cart
              </Link>
            </div> */}
          </div>
        
      </div>
    </div>
  );
};

export default BottomNav;
