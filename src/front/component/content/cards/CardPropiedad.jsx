import { FaBath, FaBed, FaExpand } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const CardPropiedad = ({
  img,
  price,
  size,
  type,
  category,
  location_region,
  cant_bathroom,
  cant_bedroom,
}) => {
  return (
    <div className="w-64 rounded-xl overflow-hidden shadow-md h-full hover:scale-105 transition-all 
      duration-300 cursor-pointer">
      <img
        className="object-cover w-full h-40"
        src={img}
        alt="Image property"
      />
      <div className="px-6 py-4">
        <p className="text-xs text-purple-500 text-light">
          {`${type} en ${category}`}
        </p>
        <p className="text-sm font-semibold text-gray-900">Desde</p>
        <h3 className="font-bold text-lg text-purple-600">{`${price}`}</h3>
        <span className="text-xs text-gray-600 py-2 gap-2 flex items-center">
          <HiLocationMarker />
          {location_region}
        </span>
      </div>
      <hr className="mx-3" />
      <div className="px-6 py-4 flex text-sm text-gray-500 gap-2 justify-around">
        <span className="flex items-center gap-2">
          <FaExpand /> {`${size}`}
        </span>
        <span className="flex items-center gap-2">
          <FaBath /> {cant_bathroom}
        </span>
        <span className="flex items-center gap-2">
          <FaBed /> {cant_bedroom}
        </span>
      </div>
    </div>
  );
};

export default CardPropiedad;
