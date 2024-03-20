import { FaImage } from "react-icons/fa";

export const CardSkeletonInfo = () => {
  return (
    <div
      className="p-5 text-sm font-normal bg-white shadow-xl rounded-lg w-full h-full gap-2 xl:gap-4 flex 
      flex-col"
    >
      <h3 className="font-semibold text-lg lg:text-lg animate-pulse bg-gray-300 rounded-xl h-9"></h3>
      <p className="pt-1 xl:pt-5 text-xs animate-pulse bg-gray-300 h-1 rounded-xl w-10"></p>
      <h3 className="font-light lg:text-3xl text-2xl animate-pulse bg-gray-300 h-8 rounded-xl"></h3>
      <span className="flex items-center gap-5 animate-pulse bg-gray-300 h-2 rounded-xl"></span>
      <span className="flex items-center gap-5 animate-pulse bg-gray-300 h-2 rounded-xl"></span>
      <span className="flex items-center gap-5 animate-pulse bg-gray-300 h-2 rounded-xl"></span>
    </div>
  );
};

export const CardSkeletonImage = () => {
  return (
    <div
      className="p-5 text-sm font-normal bg-white rounded-xl w-full h-full gap-2 xl:gap-4 flex 
      flex-col"
    >
      <div
        className="h-full w-full object-cover bg-gray-300 animate-pulse rounded-xl flex 
          justify-center items-center"
      >
        <FaImage className="text-gray-400 animate-pulse w-40 h-80" />
      </div>
    </div>
  );
};

export const CardSkeletonDescription = () => {
  return (
    <div
      className="p-5 text-sm font-normal bg-white shadow-xl rounded-xl w-full h-full gap-2 xl:gap-4 flex 
      flex-col"
    >
      <h3
        className="h-5 w-32 object-cover bg-gray-300 animate-pulse rounded-xl flex 
          justify-center items-center"
      ></h3>
      <p
        className="h-16 w-full object-cover bg-gray-300 animate-pulse rounded-xl flex 
          justify-center items-center"
      ></p>
      <p
        className="h-4 w-48 object-cover bg-gray-300 animate-pulse rounded-xl flex 
          justify-center items-center"
      ></p>
    </div>
  );
};
