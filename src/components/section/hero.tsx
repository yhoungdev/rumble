import Button from "../button";

const Hero = () => {
  return (
    <div className="container">
      <main className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-4xl kode_mono_font font-bold leading-tight">
            Choose Your Element,
            <br />
            Conquer the Tournament!
          </h1>
          <p className="text-gray-400 text-lg max-w-xl">
            Dive into Rumble—a thrilling NFT experience where luck and strategy
            intertwine! Assemble your team of elemental{" "}
            <span className="text-red-500">Fire</span>,{" "}
            <span className="text-blue-500">Water</span>, and{" "}
            <span className="text-yellow-500">Air</span> and navigate a knockout
            tournament that challenges your wits and tactics. Will you forge
            alliances, or go solo for the grand prize?
          </p>

          {/* Tournament Timer */}
          <div className="w-full bg-red-300 h-[40vh] py-[3em] "
            style={
              {
                background: 'url(/bg/tournermentbanner.svg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }
            }>
            <div className="w-[75%] text-center mx-auto h-full ">
            <div className="text-xl md:text-2xl kode_mono_font text-white mb-2">
              TOURNAMENT STARTS IN
            </div>
            </div>
          </div>
       
        </div>

        {/* Hero Image */}
        <div className="flex-1 relative">
          <div className="relative w-full h-[500px]">
            <img
              src="./images/hero_image.svg"
              alt="Game character with fire effects"
              layout="fill"
              objectFit="contain"
              className="animate-float"
            />
          </div>
          {/* Lightning Effects */}
          <div className="absolute top-1/4 -left-4 w-8 h-16 bg-yellow-400/20 rotate-45 animate-pulse" />
          <div className="absolute bottom-1/4 -right-4 w-8 h-16 bg-yellow-400/20 -rotate-45 animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
