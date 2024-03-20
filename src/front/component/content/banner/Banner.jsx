import Carousel from "./Carousel";

const Banner = () => {
  const imagesUrl = [
    {
      url: "https://firebasestorage.googleapis.com/v0/b/shalom-propiedades.appspot.com/o/assets%2Ffotos-carrusel%2F1.webp?alt=media&token=661c9424-b52d-44be-b08a-78e8ea55b4fe",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/shalom-propiedades.appspot.com/o/assets%2Ffotos-carrusel%2F2.webp?alt=media&token=9840b2be-fc72-43c6-9a04-3cdccfabd531",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/shalom-propiedades.appspot.com/o/assets%2Ffotos-carrusel%2F3.webp?alt=media&token=f07238e1-e856-4f40-8d29-fccb5fafb3f8",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/shalom-propiedades.appspot.com/o/assets%2Ffotos-carrusel%2F4.webp?alt=media&token=acd39cec-66f7-42c3-bb90-74b20f5a0aa0",
    },
  ];
  return (
    <section id="banner" className="">
      <Carousel
        autoSlide={true}
        autoSlideInterval={15000}
        imagesUrl={imagesUrl}
      />
    </section>
  );
};

export default Banner;
