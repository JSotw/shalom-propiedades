import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { useAuth } from "../../../back/context/AuthContext";

import NavLink from "./NavLink";
import Logo from "../../../assets/img/logo/shalom-purple-1.webp";
import LogoIsAuth from "../../../assets/img/logo/shalom-purple-2.webp";
import MobileMenu from "./MobileMenu";

import navLinks from "../info/navLinks.json"

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white font-light text-[12px] z-20
      md:rounded">
      <div className="flex xl:px-12 flex-wrap item-center xl:justify-between mx-auto pt-1 shadow-sm justify-around">
        <Link className="flex items-center" to="/">
          <img className={user ? "w-14 lg:w-16 md:w-10" : "p-1 w-28"} src={user ? LogoIsAuth : Logo} alt="" />
        </Link>
        <div className="mobile-menu block md:hidden mt-1 rounded">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="text-black flex items-center px-3 py-2 rounded border hover:bg-purple-400 hover:text-white transition-all"
            >
              <IoMenu className="h-6 w-6" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="text-black flex items-center px-3 py-2 rounded border hover:bg-purple-400 hover:text-white transition-all"
            >
              <IoClose className="h-6 w-6" />
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
                  className="block w-screen md:w-auto text-center py-2 ml-8 pl-6 pr-6 text-slate-800 rounded duration-300 transition-all
                  group relative overflow-hidden px-12 text-sm font-semibold bg-purple-400 hover:scale-[1.03] hover:bg-purple-500"
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
