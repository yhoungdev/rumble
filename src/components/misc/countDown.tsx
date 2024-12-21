const CountDown = () => {
  return (
    <div className="relative w-full py-[4em]">
      <img
        src="/bg/banner.png"
        alt="Game character with fire effects"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <div
          className={
            "xl:mb-[5em] gap-2 flex flex-col justify-center items-center"
          }
        >
          <div className=" text-2xl text-white md:text-2xl kode_mono_font">
            TOURNAMENT STARTS IN
          </div>

          <div className="flex  items-center space-x-4 lg:text-2xl font-bold kode_mono_font text-white">
            <p className={"text-center"}>Comming Soon</p>
          </div>
        </div>

        <div className="relative inline-block mt-[4em] md:mt-[2em]">
          <button
            className="relative px-5 py-3 font-mono
              text-black transition-all duration-300 transform bg-white border-[1.8px] border-black
               kode_mono_font text-md rounded-xl rotate-12 ml-[4em] shadow-inner hover:-rotate-3 hover:scale-105"
          >
            Join The Rumble
          </button>

          <div className="absolute inset-0 transform translate-x-1 translate-y-1 bg-black/20 rounded-xl -rotate-6 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default CountDown;
