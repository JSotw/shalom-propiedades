import Img404 from "../../assets/img/iconos/error404.webp";
import { useAuth } from "../../back/context/AuthContext";
import { Link } from "react-router-dom";
import { RiWhatsappFill } from "react-icons/ri";

const Error404 = () => {
  const { user } = useAuth();
  return (
    <>
      <section
        id="404_not_found"
        className="grid justify-center items-center h-screen text-gray-700"
      >
        <div className="bg-[#ffffff] p-10 text-center grid gap-6 shadow-xl rounded">
          <div className="flex justify-center">
            <img className="w-32 drop-shadow-md" src={Img404} alt="" />
          </div>
          <div>
            <h3 className=" font-bold text-3xl">¡Lo sentimos!</h3>
            <h5 className="font-light">
              La página que busca no está disponible
            </h5>
          </div>
          <div>
            <Link
              className="text-white bg-blue-500 text-md px-9 py-3 flex-row justify-center cursor-pointer
                focus:outline-none font-semibold rounded-md text-center inline-flex 
                items-center mr-2 mb-2 hover:shadow-md transition-all w-full
                duration-200 ease-in-out hover:scale-[1.01] opacity-80 hover:opacity-100 gap-2"
              to="/"
            >
              Ir a la página de inicio
            </Link>
          </div>
          <div>
            {user ? (
              <Link
                className="text-white bg-blue-500 text-md px-9 py-3 flex-row justify-center cursor-pointer
                focus:outline-none font-semibold rounded-md text-center inline-flex 
                items-center mr-2 mb-2 hover:shadow-md transition-all w-full
                duration-200 ease-in-out hover:scale-[1.01] opacity-80 hover:opacity-100 gap-2"
                to="/admin/lista-propiedades"
              >
                Ir a la página de administración
              </Link>
            ) : (
              null
            )}
          </div>
          <div className="grid">
            <span className="flex justify-center p-2"><RiWhatsappFill className="w-9 h-9 drop-shadow-md text-[#25D366]"/></span>
            <p className="text-[12px]">O contáctenos a:</p>
            <div className="text-[13px] h-full ">
              <p className="font-semibold"> +56 940580449</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
