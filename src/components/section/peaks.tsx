import PeakCarousel from "./peakCarousel.tsx";
const PeakSection = () => {
  return (
    <div className="  w-full  "
      style={
      {
        backgroundAttachment: 'fixed'
      }
      }>
      <div
        className="h-[150px]"
        style={{
          backgroundImage: "url(/bg/volcano_bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      ></div>

      <div className="w-full py-[5em] bg-primary-300">
        <div className="container  mx-auto">
          <PeakCarousel />
        </div>
      </div>
    </div>
  );
};

export default PeakSection;
