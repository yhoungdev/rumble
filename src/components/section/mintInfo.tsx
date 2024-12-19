export default function MintInformation() {
  return (
    <div
      className={`h-[70vh] md:h-[190vh] w-full flex items-center justify-center 
       bg-contain bg-center bg-no-repeat
        md:bg-[url('/bg/sliced_cloud.tsx.svg')] 
        bg-[url('/bg/mobile_cloud_image.png')]`}
    >
      <div className="relative">
        <h1 className="justify-center hidden text-4xl text-black animate-float md:flex md:text-6xl kode_mono_font">
          Dive Into Aqua Rise
        </h1>

        <div
          className="flex flex-col items-center justify-between
          px-6 py-2  lg:py-[3em] text-white md:flex-row"
        >
          <div className="  text-center md:text-left md:mb-0 kode_mono_font">
            <p className="text-lg lg:text-3xl text-black md:text-white">4096</p>
            <p className="text-lg lg:text-3xl text-black md:text-white">
              Elemental Warriors
            </p>
            <p className="text-lg lg:text-3xl  text-black md:text-white">
              Await
            </p>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/images/collectibles/ice_boy.svg"
              alt="Ice warrior character"
              className="relative z-10
                animate-float w-[215px] lg:w-[450px]"
            />
            <div className="absolute inset-0 bg-white rounded-full opacity-30 blur-2xl" />
          </div>

          <p
            className=" text-lg lg:text-3xl text-black md:mt-0
            kode_mono_font md:text-white"
          >
            Mp: 0.5 SOL
          </p>
        </div>

        <div className="flex justify-center  pb-6">
          <button
            className="bg-black w-[200px] text-white rounded-full px-12
            lg:w-[250px] py-2 lg:py-3 text-lg font-semibold hover:bg-black/90"
          >
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}
