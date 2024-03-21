import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { useAuth } from "../../../back/context/AuthContext";

const MobileMenu = ({ links }) => {
  const { user } = useAuth();
  return (
    <ul className="flex flex-col h-screen justify-start bg-purple-900 shadow-md md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
      {user ? (
        <li>
          <Link
            className="block w-screen md:w-auto text-center py-2 pl-6 pr-6 text-slate-800 rounded 
              duration-300 transition-all
              group relative overflow-hidden px-12 text-sm font-semibold bg-purple-400 
              hover:scale-[1.03] hover:bg-purple-500"
            to="/admin"
          >
            Ir a administración
          </Link>
        </li>
      ) : null}
    </ul>
  );
};

export default MobileMenu;
