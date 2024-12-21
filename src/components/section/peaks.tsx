import PeakCarousel from "./peakCarousel.tsx";
import TopHeader from "../misc/topHeader.tsx";
const PeakSection = () => {
  return (
    <div
      className="  w-full  "
      id={"characters"}
      style={{
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="h-[100px]
        w-full bg-[url(/bg/volcano_bg.svg)]
        bg-center
        bg-cover bg-no-repeat"
      ></div>

      <div className="w-full py-[2em] bg-primary-300">
        <div className="container  mx-auto">
          <div className={" md:mb-[5em] mt-[2em]  md:mt-[4em]"}>
            <TopHeader title={"Characters"} />
          </div>
          <PeakCarousel />
        </div>
      </div>
    </div>
  );
};

export default PeakSection;
