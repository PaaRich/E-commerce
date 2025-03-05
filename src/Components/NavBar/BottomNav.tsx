import Logo from "../../assets/shopping-cart-basket-png.webp";
//import { FaSearch } from "react-icons/fa";
import { MdOutlinePermIdentity } from "react-icons/md";
// import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { IoIosArrowDown } from "react-icons/io";
import NavDropdown from "./NavDropdown";
import { RiMenuFill,RiCloseLargeFill } from "react-icons/ri";
import { useState } from "react";

const BottomNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className="bg-green-600 lg:h-24 max-lg:py-3 flex items-center justify-between max-lg:px-3 ">
      {/* LOGO */}
      <div className="flex items-center justify-between max-lg:w-full">
        <div>
          {/* <div className="bg-white w-full h-full absolute top-0 left-12 skew-x-12 z-10 hidden md:block"></div> */}
          <div className="lg:flex lg:items-center">
            <img src={Logo} alt="logo" className="w-[100px] hidden md:block" />
            <span className="font-bold text-2xl">FarmGH</span>
          </div>
        </div>

        <div className="lg:hidden block cursor-pointer" onClick={()=>setIsOpen(!isOpen)}>
          {isOpen?<RiCloseLargeFill size={25} color="white"/>:<RiMenuFill size={25} color="white"/>}
          
        </div>
      </div>
      

      <div className={`max-lg:duration-200 max-lg:w-52 max-lg:py-5 max-lg:h-dvh lg:w-4/5 lg:pl-40 lg:pr-10 flex items-center max-lg:flex-col justify-between max-lg:fixed top-0 ${isOpen?"left-0":"-left-96"} max-lg:bg-green-600 lg:bg-green-600`}>
        
        <div className="lg:w-3/5">
          <h1 className="font-bold text-2xl mb-3 lg:hidden">FarmGH</h1>
            <ul className="flex lg:items-center lg:justify-between max-lg:flex-col text-[whitesmoke]">
              <li className="text-lg tracking-widest max-lg:pb-3"><Link to={"/"}>Home</Link></li>
            {/* */}
            <NavDropdown/>
              <li className="text-lg tracking-widest max-lg:pb-3"><Link to={"about"}>About</Link></li>
              <li className="text-lg tracking-widest max-lg:pb-3"><Link to={"contact"}>Contact Us</Link></li>
            </ul>
          </div>

          <div className="w-auto">
            <div className="flex items-center text-white text-lg">
              <MdOutlinePermIdentity className="max-md:hidden" color="black" size={28} />
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
          </div>
        
      </div>
      
    </div>
  );
};

export default BottomNav;
