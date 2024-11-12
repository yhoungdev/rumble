
export default function MintInformation() {
  return (
    <>

      <div className={'h-[180vh]  w-full bg-red-300 flex items-center justify-center'}
           style={{
             backgroundImage: `url(${'/bg/sliced_cloud.tsx.svg'})`,
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat"
           }}
      >
        <div className=" relative">
          <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 text-white">
            <div className="text-center md:text-left mb-4 md:mb-0 kode_mono_font">
              <p className="text-lg">4096</p>
              <p className="text-lg">Elemental Warriors</p>
              <p className="text-lg">Await</p>
            </div>

            <div className="relative flex justify-center items-center">
              <img
                src="/images/collectibles/ice_boy.svg"
                alt="Ice warrior character"
                width={350}
                height={350}
                className="relative z-10 animate-float"
              />
              <div className="absolute inset-0 bg-white opacity-30 rounded-full blur-2xl" />
            </div>

            <p className="text-lg mt-4 md:mt-0 kode_mono_font">
              Mp: 0.5 SOL
            </p>
          </div>

          <div className="flex justify-center pb-6 pt-4">
            <button
              className="bg-black w-[200px] text-white rounded-full px-12 py-2 text-lg font-semibold hover:bg-black/90">
              Mint
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

