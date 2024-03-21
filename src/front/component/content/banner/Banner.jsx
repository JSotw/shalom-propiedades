import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const Banner = ({imagesUrl}) => {
  return (
    <section id="banner" className="relative">
      <Carousel
        autoSlide={true}
        autoSlideInterval={5000}
        imagesUrl={imagesUrl}
      />
      <div
        className="md:bottom-50 md:left-20 absolute bottom-32 w-44 left-0 right-0 mr-auto ml-auto
        md:m-0"
      >
        <h4 className="font-bold text-center text-white text-3xl">SHALOM</h4>
        <p className="text-center p-2 font-normal text-gray-100">
          Venta | Arriendo
        </p>
        <Link
          className="text-purple-800 rounded-lg font-bold text-center text-sm p-4
          transition-all hover:scale-105 duration-300 flex justify-center 
          bg-white "
          to="/propiedades"
        >
          Ver propiedades
        </Link>
      </div>
    </section>
  );
};

export default Banner;
