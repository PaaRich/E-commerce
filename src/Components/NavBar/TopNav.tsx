import { Link } from "react-router-dom";
import { MdCall, MdEmail, MdFacebook } from "react-icons/md";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import NavbarStyle from "./Navbar.module.css";

const TopNav = () => {
  return (
    <div>
      <div
        className={`${NavbarStyle.top_nav} text-white lg:flex lg:items-center lg:justify-between`}
      >
        <div
          className={`%
            ${NavbarStyle.social_links} lg:flex`}
        >
          <Link
            to={"contact"}
            className="flex items-center border-x-2 border-[#ffffff49] hover:underline"
          >
            <MdCall color={"green"} size={24} />
            +233540093004
          </Link>
          <Link
            to={"email"}
            className="flex items-center border-r-2 border-[#ffffff49] hover:underline"
          >
            <MdEmail color={"green"} size={24} />
            info.farmart.org
          </Link>
        </div>

        {/* LINKS */}
        <div className={`${NavbarStyle.nav_social_links} lg:flex`}>
          <Link to={"facebook"} className="border-l-2 border-[#ffffff49]">
            <MdFacebook color="green" size={24} />
          </Link>
          <Link to={"twitter"} className="border-x-2 border-[#ffffff49]">
            <FaTwitter color="green" size={24} />
          </Link>
          <Link to={"linkedIn"} className="border-r-2 border-[#ffffff49]">
            <FaLinkedin color="green" size={24} />
          </Link>
          <Link to={"instagram"} className="border-r-2 border-[#ffffff49]">
            <FaInstagram color="green" size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
