import Logo from "../../assets/img/logo/shalom-black-2.webp";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { signin, isAuth,errors: signinErrors } = useAuth();

  useEffect(() => {
    if (isAuth) navigate('/admin/lista-propiedades')
  }, [isAuth])

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <section className="bg-gray-50 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex flex-col justify-center items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-12 h-12 mr-2 drop-shadow-sm"
            src={Logo}
            alt="logo"
          />
          Shalom Admin
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form
              onSubmit={onSubmit}
              className="space-y-4 md:space-y-6"
              method="POST"
            >
              <div>
                <label
                  htmlFor="usuario"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Usuario
                </label>
                <input
                  type="text"
                  {...register("username", { required: true })}
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                    focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="marlenne_m"
                  required=""
                />
                {errors.username && (
                  <p className="text-red-500 text-[12px]">Usuario requerido</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                    focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required=""
                />
                <div className="flex items-start">
                  {errors.password && (
                    <p className="text-red-500 text-[12px]">
                      Contraseña requerida
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  {signinErrors.map((error, index) => (
                    <p className="text-[12px] text-red-500" key={index}>
                      {error}
                    </p>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-[12px] font-medium text-blue-500 hover:underline "
                >
                  ¿Olvidó su contraseña?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-purple-500 focus:ring-4 
                  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 
                  py-2.5 text-center transition-all hover:bg-purple-400 "
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
