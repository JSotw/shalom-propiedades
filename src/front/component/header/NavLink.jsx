import { Link } from "react-router-dom";

const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      className="block w-screen md:w-auto text-center py-2 pl-6 pr-6 text-slate-800 rounded transition-[250ms] 
        group relative overflow-hidden px-12 text-sm font-light hover:text-purple-400"
    >
      <span className="ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-purple-400 transition-all 
        duration-200 group-hover:w-full"></span>
      {title}
    </Link>
  );
};

export default NavLink;