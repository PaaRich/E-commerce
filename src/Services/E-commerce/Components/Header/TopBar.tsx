import { Link } from "react-router-dom"
import Logo from "../../../../assets/shopping-cart-basket-png.webp";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const TopBar = () => {
  return (
      <div className="text-white bg-secondary">
          <div className="mx-auto container flex justify-between items-center py-3 px-4">
              <div className="hidden md:flex items-center space-x-4 ">
                  <Link className="hover:text-gray-300" to={'#'}>
                      <img className="h-5 w-5" src={Logo} alt="brandLogo" />
                  </Link>
                  <Link className="hover:text-gray-300" to={'#instagram'}>
                      <FiInstagram/>
                  </Link>
                  <Link className="hover:text-gray-300" to={'#twitter'}>
                      <FaTwitter/>
                  </Link>
              </div>

              <div className="text-sm text-center flex-grow">
                  <span>We ship worldwide-Fast and reliable shipping</span>
              </div>

              <div className="tex-sm hidden md:block">
                  <Link to={"tel:+2330546684005"}>0546684005</Link>
              </div>
          </div>
    </div>
  )
}

export default TopBar