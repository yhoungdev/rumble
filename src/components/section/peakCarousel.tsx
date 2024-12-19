import Button from "../button";
import { useState } from "react";
import CarouselPagination from "../misc/carouselPagination";
import { nftData } from "../../data";

const PerkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = nftData.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="w-full mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center relative">
        <div
          className="w-full md:w-[554px] bg-black md:h-[500px]
         rounded-2xl relative z-10 md:-mr-20 flex items-center justify-center"
        >
          <div className="flex flex-col items-center md:absolute -top-10">
            <img
              src={nftData[currentSlide].image}
              className={"md:w-[450px]"}
              alt={`Slide ${currentSlide + 1}`}
            />

            <h4 className={'kode_mono_font text-xl md:text-2xl mt-4'}>Earth</h4>
            {/*<Button*/}
            {/*  className={"bg-white text-black my-[2em] md:my-[3em]"}*/}
            {/*  textColor={"black"}*/}
            {/*>*/}
            {/*  Claim Guardian*/}
            {/*</Button>*/}
          </div>
        </div>

        <div className="w-full md:w-[550px] bg-black py-[2em] px-[2em] md:h-[380px] rounded-3xl top-10 left-10 md:static md:top-auto md:left-auto text-white">
          <div className={"w-[70%] mx-auto"}>
            <h4 className="text-amber-500 kode_mono_font text-center font-bold text-2xl mb-4">
              PERKS
            </h4>
            <ul className="list-none space-y-4">
              {nftData[currentSlide].perks.map((perk, index) => (
                <li key={index}>
                  <span className="text-lg font-bold kode_mono_font">
                    • {perk.title}
                  </span>
                  <p className="text-[10px]">{perk.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="controller flex items-center justify-center my-[2em]">
        <CarouselPagination
          total={totalSlides}
          current={currentSlide}
          onNext={nextSlide}
          onPrevious={prevSlide}
        />
      </div>
    </div>
  );
};

export default PerkCarousel;
