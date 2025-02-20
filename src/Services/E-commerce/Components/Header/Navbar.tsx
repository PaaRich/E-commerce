import { Link } from "react-router-dom"
const Navbar = () => {
  return (
      <>
          <nav className="container mx-auto flex items-center justify-between py-4 px-6">
              <div>
                  <Link to={"/"} className="text-2xl font-medium">FarmHouse</Link>
              </div>
              <div className="hidden md:flex space-x-6">
                  <Link to={"/"} className="text-sm uppercase font-medium">Men</Link>
              </div>
          </nav>
      </>
  )
}

export default Navbar