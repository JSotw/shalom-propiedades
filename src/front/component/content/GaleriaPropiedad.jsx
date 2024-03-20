import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Carousel from "./banner/Carousel";

const GaleriaPropiedad = ({ imagesUrl, isProperty }) => {
  return (
    <Carousel
      autoSlide={true}
      autoSlideInterval={15000}
      imagesUrl={imagesUrl}
      isProperty={isProperty}
    />
  );
};

export default GaleriaPropiedad;
