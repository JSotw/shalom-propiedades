import { BsPatchCheckFill } from "react-icons/bs";

export const CardSomos = ({ title, text }) => {
  return (
    <div
      className="inline-block align-top justify-center w-auto lg:w-[400px] bg-white shadow-xl p-6 h-auto 
      rounded-xl hover:scale-105 transition-all"
    >
      
      <h3 className="font-semibold xl:text-2xl text-xl flex justify-between items-center text-left">
        {title}
        <BsPatchCheckFill className="w-8 h-8 text-purple-600"/>
      </h3>
      <p className="mt-5 font-light text-[13px] xl:text-[16px]">{text}</p>
    </div>
  );
};

export const CardSomosUsuario = ({
  title,
  text,
  profileImg,
  profileName,
  profileDescription,
  profileEmail
}) => {
  return (
    <div
      className="align-top justify-center w-auto xl:w-[1000px] flex flex-col bg-white shadow-xl p-6 h-auto 
      rounded-xl transition-all gap-3"
    >
      <div className="">
        <h3 className="font-bold uppercase xl:text-2xl text-lg  text-center">
          {title}
        </h3>
        <p className="mt-3 text-center font-normal md:px-20 text-[13px] xl:text-[16px]">{text}</p>
      </div>
      <div className="text-center mt-4">
        <span className="flex justify-center items-center p-3">
          <img
            className="rounded-full w-16 h-16 drop-shadow-[0px_0px_4px_#3E3E3E]"
            src={profileImg}
            alt="Imagen de perfil"
          />
        </span>
        <h4 className="font-bold text-[17px]">{profileName}</h4>
        <p className="font-normal text-xs uppercase">{profileDescription}</p>
        <p className="font-normal text-blue-900 p-2 text-sm">{profileEmail}</p>
      </div>
    </div>
  );
};
