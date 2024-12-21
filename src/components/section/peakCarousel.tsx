import Button from "../button";
import { useState } from "react";
import CarouselPagination from "../misc/carouselPagination";
import { nftData } from "../../data";
import { RatingStateSvg } from "../../assets/svgs";

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
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 items-center justify-center relative">
        <div
          className="w-full lg:w-[554px] bg-black lg:h-[500px]
         rounded-2xl relative z-10 lg:-mr-20 flex items-center justify-center"
          style={{
            boxShadow: "15px 4px 20px rgba(255, 255, 255, 0.03)",
          }}
        >
          <div className="flex flex-col items-center lg:absolute -top-10">
            <img
              src={nftData[currentSlide].image}
              className={"lg:w-[450px] rounded-2xl"}
              alt={`Slide ${currentSlide + 1}`}
            />

            <div className={"my-2"}>
              <span className="text-lg font-bold kode_mono_font mt-2">
                {nftData[currentSlide].perks[0].title}
              </span>

              {/*<span className={"flex items-center justify-center gap-1 mt-2"}>*/}
              {/*  <RatingStateSvg />*/}
              {/*  <p className={"font-semibold text-xs"}>*/}
              {/*    {nftData[currentSlide].rating}*/}
              {/*  </p>*/}
              {/*</span>*/}
            </div>

            {/*<Button*/}
            {/*  className={"bg-white text-black my-[2em] lg:my-[3em]"}*/}
            {/*  textColor={"black"}*/}
            {/*>*/}
            {/*  Claim Guardian*/}
            {/*</Button>*/}
          </div>
        </div>

        <div className="w-full lg:w-[550px] flex    bg-black py-[2em] px-[2em] lg:h-[380px] rounded-3xl top-10 left-10 lg:static lg:top-auto lg:left-auto text-white">
          <div className={"w-[70%] mx-auto"}>
            <h4 className="text-amber-500 kode_mono_font text-center font-bold text-2xl mb-4">
              {nftData[currentSlide].name}
            </h4>
            <ul className="list-none space-y-4">
              {nftData[currentSlide].perks.map((perk, index) => (
                <li key={index}>
                  <p className="text-sm mt-1  ">{perk.description}</p>
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
