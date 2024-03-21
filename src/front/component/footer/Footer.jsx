import { Link } from "react-router-dom";
import navLinks from "../../info/navLinks.json";
import Logo from "../../../assets/img/logo/shalom-black-1.webp";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="moreInfo"
      className="w-full bg-white shadow-lg gap-2 grid justify-center sm:justify-around 
       grid-cols-1 grid-rows-1 sm:grid-cols-3 sm:grid-rows-1 text-[14px] text-center sm:text-start transition-all"
    >
      <div className="p-4 grid justify-center align-middle col-span-2 sm:col-auto items-center">
        <img className="w-20" src={Logo} alt="" />
      </div>
      <div className="flex justify-around sm:col-span-2">
        <div className="p-4 text-left">
          <h3 className="font-medium">Navegación</h3>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index} className="">
                <Link
                  className="flex transition-all py-[3px] justify-start text-gray-600"
                  to={link.href}
                >
                  <p className="hover:border-b hover:border-purple-700 border-transparent border-b">
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-4 text-left ">
          <h3 className="font-medium">Redes sociales</h3>
          <Link
            className="flex transition-all py-1 items-center hover:text-[#1877f2] 
          text-gray-600"
            to="https://web.facebook.com"
            target="_blank"
          >
            <span className="pr-2 text-[#1877f2]">
              <FaFacebook className="w-4 h-4" />
            </span>
            Facebook
          </Link>
          <Link
            className="flex items-center py-1 transition-all  hover:text-[#D43089] text-gray-600"
            to="https://www.instagram.com"
            target="_blank"
          >
            <span className="pr-2 text-[#D43089]">
              <FaInstagram className="w-4 h-4" />
            </span>
            Instagram
          </Link>
          <Link
            className="flex items-center  py-1 transition-all  hover:text-[#FF0000] text-gray-600"
            to="https://www.youtube.com"
            target="_blank"
          >
            <span className="pr-2 text-[#FF0000]">
              <FaYoutube className="w-4 h-4" />
            </span>
            YouTube
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Footer;
