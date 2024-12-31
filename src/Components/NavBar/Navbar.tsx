import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

const Navbar = () => {
  return (
    <div className="bg-[#000000e2] relative w-full lg:h-24">
      <div className="lg:w-[90%] lg:mx-auto">
        <TopNav />
        <BottomNav />
      </div>
    </div>
  );
};

export default Navbar;
