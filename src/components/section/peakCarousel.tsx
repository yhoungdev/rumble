const PerkCarousel = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-center relative">
      
        <div className="w-full md:w-[724px] bg-black h-[300px] md:h-[500px] rounded-lg relative z-10 md:-mr-20"></div>


        <div className="w-full md:w-[622px] bg-gray-500 h-[200px] md:h-[380px] rounded-3xl absolute top-10 left-10 md:static md:top-auto md:left-auto"></div>
      </div>
    </div>
  );
};

export default PerkCarousel;
