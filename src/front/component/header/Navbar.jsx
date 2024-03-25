import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAuth } from "../../../back/context/AuthContext";

import NavLink from "./NavLink";
import Logo from "../../../assets/img/logo/shalom-white-1.webp";
import LogoIsAuth from "../../../assets/img/logo/shalom-purple-2.webp";
import MobileMenu from "./MobileMenu";

import navLinks from "../../info/navLinks.json"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-purple-800 z-50 font-light text-[12px]">
      <div className="flex xl:px-12 flex-wrap item-center xl:justify-between mx-auto pt-1 px-6 shadow-sm justify-between">
        <Link className="flex items-center" to="/">
          <img className={user ? "w-16 lg:w-16 md:w-10" : "p-1 w-32"} src={user ? LogoIsAuth : Logo} alt="" />
        </Link>
        <div className="mobile-menu block md:hidden p-1 m-2 rounded">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-white flex items-center p-[10px] rounded
                  transition-all"
            >
              <HiMenuAlt3 className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-white flex items-center p-3 rounded animate-jump
                 transition-all"
            >
              <HiX className="h-6 w-6" />
            </button>
          )}
        </div>

        <div className="menu w-screen hidden md:block md:w-auto" id="navbar">
          <ul className="p-1 m-2 flex md:flex-row">
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}

            {user ? (
              <li>
                <Link
                  className="block w-screen md:w-auto text-center py-2 ml-8 pl-6 pr-6 text-slate-800 rounded duration-300
                  transition-all group relative overflow-hidden px-12 text-sm font-semibold bg-purple-400 
                  hover:scale-[1.03] hover:bg-purple-500"
                  to="/admin/lista-propiedades"
                >
                  Ir a administración
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MobileMenu links={navLinks} /> : null}
    </nav>
  );
};
export default Navbar;
