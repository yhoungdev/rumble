import Button from "../button";
import { useState } from "react";
import CarouselPagination from "../misc/carouselPagination";

const perks = [
  {
    title: "Healing Aura",
    description:
      "Ability: Restores a small percentage of health to itself or allies at the start of each round.",
  },
  {
    title: "Stability Boost",
    description:
      "Ability: Temporarily increases the stability of an opponent's characters, making their attacks less effective during their next turn.",
  },
  {
    title: "Nature's Wrath",
    description:
      "Ability: Unleashes a powerful area attack that can deal damage to multiple opponents, reflecting the destructive power of nature when provoked.",
  },
];

const carouselImgs = [
  "/images/collectibles/aura.svg",
  "/images/collectibles/ice_boy.svg",
];

const PerkCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = carouselImgs.length;

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
         rounded-lg relative z-10 md:-mr-20 flex items-center justify-center"
        >
          <div className="flex flex-col items-center md:absolute -top-10">
            <img
              src={carouselImgs[currentSlide]}
              className={"md:w-[359px]"}
              alt={`Slide ${currentSlide + 1}`}
            />
            <Button
              className={"bg-white text-black my-[2em] md:my-[3em]"}
              textColor={"black"}
            >
              Claim Guardian
            </Button>
          </div>
        </div>

        {/* PERKS Section */}
        <div className="w-full md:w-[550px] bg-black py-[2em] px-[2em] md:h-[380px] rounded-3xl top-10 left-10 md:static md:top-auto md:left-auto text-white">
          <div className={"w-[70%] mx-auto"}>
            <h4 className="text-amber-500 kode_mono_font text-center font-bold text-2xl mb-4">
              PERKS
            </h4>
            <ul className="list-none space-y-4">
              {perks.map((perk, index) => (
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
