import { IoEllipsisHorizontalSharp } from "react-icons/io5";


const CardContacto = ({icon, title, description}) => {

  return (
    <article className="transition-[300ms] bg-white hover:scale-105 shadow-[0px_2px_5px_-1px] 
      shadow-[rgba(0,0,0,0.11)] p-4 font-light text-md rounded-xl flex flex-col min-h-32 w-72 sm:w-[200px]">
      <span className="text-purple-700">
        {icon}
      </span>
      <h3 className="pt-2 font-semibold">{title}</h3>
      <p className="text-[12px] hover:te text-wrap break-words">{description}</p>
    </article>
  );
};

export default CardContacto;