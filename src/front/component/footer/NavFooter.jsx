import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import Logo from "../../../assets/img/logo/shalom-black-1.webp";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

import navLinks from "../info/navLinks.json"

const NavFooter = () => {
  const [navfooterOpen, setNavfooterOpen] = useState(false);
  const moreInfo = useRef(null);

  const scrollInfo = (ref) => {
    setTimeout(() => {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }, 100);
  };
  return (
    <section className="">
      <aside id="info" className="flex justify-center text-[12px] relative">
        {!navfooterOpen ? (
          <button
            onClick={() => {
              setNavfooterOpen(true);
              scrollInfo(moreInfo);
            }}
            className="bg-white items-center p-3 inline-flex rounded-t-md border-t-[1px] 
              border-x-[1px] absolute bottom-[-1px] "
          >
            Más información
            <span className="pl-2">
              <IoIosArrowUp />
            </span>
          </button>
        ) : (
          <button
            onClick={() => {
              setNavfooterOpen(false);
              scrollInfo(moreInfo);
            }}
            className="bg-white items-center p-3 inline-flex rounded-t-md border-t-[1px] 
              border-x-[1px] absolute bottom-[-1px]"
          >
            Cerrar
            <span className="pl-2">
              <IoIosArrowDown />
            </span>
          </button>
        )}
      </aside>

      {navfooterOpen ? (
        <section
          id="moreInfo"
          ref={moreInfo}
        
          className="w-full border-t-[1px] bg-white shadow-sm gap-2 grid grid-cols-2 grid-rows-2 
          sm:grid-cols-3 sm:grid-rows-1 text-[12px] text-center sm:text-start transition-all"
        >
          <div className="p-4 grid justify-center align-middle col-span-2 sm:col-auto items-center">
            <img className="w-14" src={Logo} alt="" />
          </div>
          <div className="p-4 ">
            <h3 className="font-medium">Compañía</h3>
            <ul>
              {navLinks.map((link, index) => (
                <li key={index} className="">
                  <Link
                    className="flex transition-all justify-center sm:justify-start text-gray-600"
                    to={link.href}
                  >
                    <p className="hover:border-b hover:border-gray-400 border-transparent border-b">
                      {link.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4">
            <h3 className="font-medium">Redes sociales</h3>
            <Link
              className="flex items-end transition-all justify-center sm:justify-start hover:text-[#1877f2] text-gray-600"
              to="https://web.facebook.com"
            >
              <span className="p-1">
                <FaFacebook />
              </span>
              Facebook
            </Link>
            <Link
              className="flex items-end transition-all justify-center sm:justify-start hover:text-[#D43089] text-gray-600"
              to="https://web.facebook.com"
            >
              <span className="p-1">
                <FaInstagram />
              </span>
              Instagram
            </Link>
            <Link
              className="flex items-end transition-all justify-center sm:justify-start hover:text-[#FF0000] text-gray-600"
              to="https://web.facebook.com"
            >
              <span className="p-1">
                <FaYoutube />
              </span>
              YouTube
            </Link>
          </div>
        </section>
      ) : null}
    </section>
  );
};

export default NavFooter;
