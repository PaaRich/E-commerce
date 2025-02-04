import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#16a34a] text-[whitesmoke]">
      <div className="md:max-w-[90%] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">

          <div className="mx-auto">
            <h2>About Us</h2>
            <ul>
              <li><Link to={"about"}>About FarmGhana</Link></li>
              <li><Link to={"services"}>We are hiring</Link></li>
              <li><Link to={"terms"}>Terms and Conditions</Link></li>
              <li><Link to={"privacy"}>Privacy Policy</Link></li>
              <li><Link to={"billing"}>Billing Policy</Link></li>
            </ul>
          </div>

         <div className="mx-auto">
            <h2>About Us</h2>
            <ul>
              <li><Link to={"about"}>About FarmGhana</Link></li>
              <li><Link to={"services"}>We are hiring</Link></li>
              <li><Link to={"terms"}>Terms and Conditions</Link></li>
              <li><Link to={"privacy"}>Privacy Policy</Link></li>
              <li><Link to={"billing"}>Billing Policy</Link></li>
            </ul>
          </div>
          
          <div></div>
          <div></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
