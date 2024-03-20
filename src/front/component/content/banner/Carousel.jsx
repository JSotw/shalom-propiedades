/* eslint-disable react/prop-types */
import {
  TbSquareRoundedChevronLeftFilled,
  TbSquareRoundedChevronRightFilled,
} from "react-icons/tb";

import { useEffect, useState } from "react";

const Carousel = ({
  imagesUrl,
  autoSlide = false,
  autoSlideInterval = 3000,
  isProperty = false,
}) => {
  const [current, setCurrent] = useState(0);
  const prev = () =>
    setCurrent((current) =>
      current === 0 ? imagesUrl.length - 1 : current - 1
    );
  const next = () =>
    setCurrent((current) =>
      current === imagesUrl.length - 1 ? 0 : current + 1
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (slideIndex) => {
    setCurrent(slideIndex);
  };
  return (
    <div className="overflow-hidden rounded relative w-full m-0 max-w-full max-h-full">
      <div
        className={`flex transition-transform 
          ${isProperty ? "items-center justify-center h-[14rem] md:h-[28rem] max-h-auto" 
          : "h-48 sm:h-60 md:h-96"}`}
      >
        <div
          // {...console.log(imagesUrl)}
          className={`w-full h-full ease-out duration-500 animate-fade bg-center p-3
            ${isProperty ? "bg-contain bg-no-repeat" : "bg-center bg-cover"}`}
        >
          <img src={imagesUrl[current].url} alt="Images property" loading="eagle" 
            className={`animate-fade ease-out duration-500 rounded-md  w-full h-full
              ${isProperty ? "object-contain" : "object-cover"}
            `} />

        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="text-white opacity-75 drop-shadow-[0px_0px_1px_#3E3E3E]
          transition-all hover:scale-110"
        >
          <TbSquareRoundedChevronLeftFilled size={25} />
        </button>
        <button
          onClick={next}
          className="text-white opacity-75 drop-shadow-[0px_0px_1px_#3E3E3E]
          transition-all hover:scale-110"
        >
          <TbSquareRoundedChevronRightFilled size={25} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {imagesUrl.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all w-2 h-2 bg-white opacity-75 rounded-full cursor-pointer
                ${
                  current === index
                    ? "shadow-[0px_0px_1px_#3E3E3E] p-[7px]"
                    : "bg-opacity-50"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
