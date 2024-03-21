/* eslint-disable react/prop-types */
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="overflow-hidden relative w-full m-0 max-w-full max-h-full">
      <div
        className={`flex transition-transform 
          ${
            isProperty
              ? "items-center justify-center h-[14rem] md:h-[28rem] max-h-auto"
              : "h-screen brightness-75"
          }`}
      >
        <div
          // {...console.log(imagesUrl)}
          className={`w-full h-full ease-out duration-500 relative overflow-hidden animate-fade bg-center
            ${
              isProperty
                ? "bg-contain bg-no-repeat p-3"
                : "bg-cover bg-[50%] bg-no-repeat"
            }`}
        >
          <img
            src={imagesUrl[current].url}
            alt="Images property"
            loading="eagle"
            className={`animate-fade ease-out duration-500 w-full h-full
              ${isProperty ? "object-contain  rounded-md" : "object-cover"}
            `}
          />
          {!isProperty ? (
            <>
              <div
                className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden 
                bg-gradient-to-r from-black via-gray-800 opacity-60
              "
              ></div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`absolute inset-0 items-center justify-between p-4 flex ${!isProperty ? "-mt-20 hidden md:flex":""}`}>
        <button
          onClick={prev}
          className="text-white drop-shadow-[0px_1px_2px_#3E3E3E]
          transition-all hover:scale-110 "
        >
          <FaChevronLeft size={35} className="" />
        </button>
        <button
          onClick={next}
          className="text-white drop-shadow-[0px_1px_2px_#3E3E3E]
          transition-all hover:scale-110"
        >
          <FaChevronRight size={35} />
        </button>
      </div>
      <div className={`absolute ${!isProperty ? "bottom-4" : "bottom-4 "} right-0 left-0`}>
        <div className={`flex items-center justify-center gap-2 ${isProperty ? 
            "w-full rounded-br-lg rounded-bl-lg p-2":""}`}>
          {imagesUrl.map((slide, index) => (
            <div
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all w-8 h-2 opacity-100 rounded-full cursor-pointer
                ${!isProperty ? "bg-white" : "bg-white border border-black"}
                ${
                  current === index
                    ? "shadow-[0px_0px_1px_#3E3E3E] p-[6px] bg-opacity-100"
                    : "bg-opacity-50 w-[20px]"
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
