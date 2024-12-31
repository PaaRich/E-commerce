import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* NAVBAR */}
      <Navbar />

      {/* OUTLET */}
      <div>
        <Outlet />
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Layout;
