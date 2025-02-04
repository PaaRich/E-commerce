import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return (
    <div className="bg-[#000000e2] w-full h-24">
      <div className="md:max-w-[90%] md:mx-auto">
        <TopNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
