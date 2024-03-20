import { IoEllipsisHorizontalSharp } from "react-icons/io5";


const CardContacto = ({title, description}) => {

  return (
    <article className="transition-[300ms] bg-white hover:scale-105 shadow-[0px_2px_5px_-1px] shadow-[rgba(0,0,0,0.11)] 
      p-4 font-light text-sm rounded-xl min-h-28 w-72 sm:w-48">
      <span className="text-purple-500">
        {<IoEllipsisHorizontalSharp className="w-5 h-5" />}
      </span>
      <h3 className="font-medium ">{title}</h3>
      <p className="text-[12px] hover:te text-wrap break-words">{description}</p>
    </article>
  );
};

export default CardContacto;