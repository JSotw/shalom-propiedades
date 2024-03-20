import {
  FaBath,
  FaBed,
  FaCalendarCheck,
  FaExpand,
} from "react-icons/fa";

import { SpinnerLoading } from "../../svgLoading";

const CardInfoPropiedad = ({title, price, size, cant_bathroom, cant_bedroom}) => {
  return (
    <div className="p-5 text-sm font-normal bg-white shadow-lg rounded-xl w-auto gap-2 xl:gap-4 flex 
      flex-col">
      <h3 className="font-semibold text-lg lg:text-lg">
        {`${title}`}
      </h3>
      <p className="pt-1 xl:pt-5 text-xs">Desde</p>
      <p className="font-light lg:text-3xl text-2xl">
        {price ? (
          <p>{price}</p>
        ) : (
          <SpinnerLoading
            className="text-gray-700 spin"
            with={14}
            height={14}
          />
        )}
      </p>
      <span className="flex items-center gap-5">
        <FaExpand />
        {size ? (
          <p>{size} totales</p>
        ) : (
          <SpinnerLoading
            className="text-gray-700 spin"
            with={14}
            height={14}
          />
        )}
      </span>
      <span className="flex items-center gap-5">
        <FaBath />
        {cant_bathroom ? (
          <p>{cant_bathroom} baños</p>
        ) : (
          "No aplica"
        )}
      </span>
      <span className="flex items-center gap-5">
        <FaBed />
        {cant_bedroom ? (
          <p>{cant_bedroom} dormitorios</p>
        ) : (
          "No aplica"
        )}
      </span>
      {/* <span className="flex items-center gap-5">
        <FaCalendarCheck />
        {formattedDate ? (
          <p>Publicado el {formattedDate}</p>
        ) : (
          <SpinnerLoading
            className="text-gray-700 spin"
            with={14}
            height={14}
          />
        )}
      </span> */}
    </div>
  );
};

export default CardInfoPropiedad;
