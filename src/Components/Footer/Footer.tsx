import styles from "./footer.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  // State for subscription input
  const [subscribeValue, setSubscribeValue] = useState("");

  return (
    <footer className={`${styles.c_footer} bg-gray-200 py-10 max-lg:px-5`}>
      <div className="md:max-w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Subscription */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Stay Updated</h2>
            <form className="flex max-lg:flex-col">
              <input 
                className="flex-1 focus:outline-none p-2 lg:rounded-l-md rounded-md border border-gray-300" 
                type="email" 
                placeholder="Enter your email" 
                value={subscribeValue} 
                onChange={(e) => setSubscribeValue(e.target.value)} 
              />
              <button 
                type="submit" 
                className="bg-[#16a34a] px-4 max-lg:py-3 max-lg:mt-3 text-white font-semibold hover:bg-[#16a34ab2] duration-150 rounded-md lg:rounded-r-md">
                Subscribe
              </button>
            </form>
            <p className="text-gray-500 mt-2">Sign up for exclusive offers and updates.</p>
          </div>

          {/* Footer Links */}
          {[
            { title: "About Our Store", links: [
              { text: "Who We Are", path: "/about" },
              { text: "Terms & Conditions", path: "/terms" },
              { text: "Payment & Billing", path: "/payment-info" },
              { text: "Privacy Policy", path: "/privacy" }
            ]},
            { title: "Customer Support", links: [
              { text: "FAQs", path: "/faq" },
              { text: "Shipping & Delivery", path: "/shipping" },
              { text: "Returns & Refunds", path: "/returns" },
              { text: "Contact Us", path: "/contact" }
            ]},
            { title: "Shop Categories", links: [
              { text: "Electronics", path: "/electronics" },
              { text: "Fashion & Apparel", path: "/fashion" },
              { text: "Groceries", path: "/groceries" },
              { text: "Home & Kitchen", path: "/home-kitchen" }
            ]}
          ].map((section, index) => (
            <div key={index}>
              <h1 className="text-xl font-semibold mb-3">{section.title}</h1>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <Link to={link.path} className="hover:text-[#16a34a] duration-150">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
