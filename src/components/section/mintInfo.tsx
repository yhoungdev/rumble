export default function MintInformation() {
  return (
    <div
      className={`h-[180vh] w-full flex items-center justify-center 
       bg-cover bg-center bg-no-repeat
        md:bg-[url('/bg/sliced_cloud.tsx.svg')] 
        bg-[url('/bg/mobile_cloud.png')]`}
    >
      <div className="relative">
        <h1 className="justify-center hidden text-4xl text-black animate-float md:flex md:text-6xl kode_mono_font">
          Dive Into Aqua Rise
        </h1>

        <div className="flex flex-col items-center justify-between px-6 py-4 text-white md:flex-row">
          <div className="mb-4 text-center md:text-left md:mb-0 kode_mono_font">
            <p className="text-3xl text-black md:text-white">4096</p>
            <p className="my-1 text-3xl text-black md:text-white">
              Elemental Warriors
            </p>
            <p className="text-3xl text-black md:text-white">Await</p>
          </div>

          <div className="relative flex items-center justify-center">
            <img
              src="/images/collectibles/ice_boy.svg"
              alt="Ice warrior character"
              width={550}
              height={550}
              className="relative z-10 animate-float"
            />
            <div className="absolute inset-0 bg-white rounded-full opacity-30 blur-2xl" />
          </div>

          <p className="mt-4 text-3xl text-black md:mt-0 kode_mono_font md:text-white">
            Mp: 0.5 SOL
          </p>
        </div>

        <div className="flex justify-center pt-4 pb-6">
          <button className="bg-black w-[200px] text-white rounded-full px-12 py-2 text-lg font-semibold hover:bg-black/90">
            Mint
          </button>
        </div>
      </div>
    </div>
  );
}
