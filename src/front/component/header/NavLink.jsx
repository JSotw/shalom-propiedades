import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block w-screen md:w-auto text-center py-3 px-6 text-white rounded
        group relative overflow-hidden text-sm font-medium hover:text-purple-800 hover:bg-white
        duration-300"
    >
      {/* <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all 
        duration-200 group-hover:w-full"></span> */}
      {title}
    </Link>
  );
};

export default NavLink;