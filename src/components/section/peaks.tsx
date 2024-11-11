import SkewedButton from "../button/gameButton";
const PeakSection = () => {
  return (
    <div className="h-screen w-full ">
      <div
        className="h-[150px]"
        style={{
          backgroundImage: "url(/bg/volcano_bg.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="h-screen w-full  bg-primary-300">
        <div className="container"></div>
      </div>
    </div>
  );
};

export default PeakSection;
