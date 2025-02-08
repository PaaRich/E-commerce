import styles from "./footer.module.css";
import { useState } from "react";
import {Link} from "react-router-dom"

const Footer = () => {

  // subcribe form portal
  const [subscribeValue, setSubscribeValue ] = useState<string>("");
  return (
    <footer className={`${styles.c_footer} bg-gray-200 py-10`}>
      <div className="md:max-w-[90%] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">

          {/* subscription */}
          <div className="py-3 md:py-0">
            <h2 className="text-xl font-semibold mb-3">Subscription</h2>
            <form action="">
              <input className="focus:outline-0 p-2 mb-3 rounded-s-md" type="email" placeholder="Please enter your email" value={subscribeValue} onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setSubscribeValue(event.target.value) }} />
              <button type="submit" className="bg-[#16a34a] p-2 text-white font-semibold hover:bg-[#16a34ab2] duration-150 rounded-e-sm">subscribe</button>
            </form>
            <p className="text-gray-500">Register now to get promotion and coupons</p>
          </div>

         <div className="py-3 md:py-0">
            <h1 className="text-xl font-semibold mb-3">About FarmGhana</h1>
            <ul>
              <li><Link to={'about-us'}>About us</Link></li>
              <li><Link to={'terms-and-conditions'}>Terms and Conditions</Link></li>
              <li><Link to={'payment'}>FarmGhana Payment info. Guidelines</Link></li>
              <li><Link to={'terms-and-conditions'}>Privacy Notice</Link></li>
            </ul>
          </div>
          
            <div className="py-3 md:py-0">
              <h1 className="text-xl font-semibold mb-3">Shopping Guide</h1>
              <ul>
                <li><Link to={'about-us'}>About us</Link></li>
                <li><Link to={'terms-and-conditions'}>Terms and Conditions</Link></li>
                <li><Link to={'payment'}>FarmGhana Payment info. Guidelines</Link></li>
                <li><Link to={'terms-and-conditions'}>Privacy Notice</Link></li>
              </ul>
          </div>

         <div className="py-3 md:py-0">
              <h1 className="text-xl font-semibold mb-3">Shopping Guide</h1>
              <ul>
                <li><Link to={'about-us'}>About us</Link></li>
                <li><Link to={'terms-and-conditions'}>Terms and Conditions</Link></li>
                <li><Link to={'payment'}>FarmGhana Payment info. Guidelines</Link></li>
                <li><Link to={'terms-and-conditions'}>Privacy Notice</Link></li>
              </ul>
          </div>
        </div>

        {/* socials */}
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
