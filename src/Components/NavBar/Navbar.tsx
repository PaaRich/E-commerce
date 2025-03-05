import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return (
    <div className="lg:bg-[#000000e2] w-full lg:h-24  sticky shadow-lg top-0 z-50">
      <div className="lg:max-w-[90%] max-w-auto mx-auto">
        <TopNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
