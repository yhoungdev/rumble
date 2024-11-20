import Button from "../button";
import CountDown from "../misc/countDown";

const Hero = () => {
  return (
    <div className="">
      <main className="flex flex-col items-center gap-12 px-4 py-12 md:py-24 md:flex-row">
        <div className="flex-1 space-y-6 ">
          <div className={'container  mx-auto  md:ml-[11em]'}>
            <h1 className="text-4xl font-bold leading-tight md:text-4xl kode_mono_font">
              Choose Your Element,
              <br />
              Conquer the Tournament!
            </h1>
            <p className="max-w-xl text-lg text-gray-400">
              Dive into Rumble—a thrilling NFT experience where luck and strategy
              intertwine! Assemble your team of elemental{" "}
              <span className="text-red-500">Fire</span>,{" "}
              <span className="text-blue-500">Water</span>, and{" "}
              <span className="text-yellow-500">Air</span> and navigate a knockout
              tournament that challenges your wits and tactics. Will you forge
              alliances, or go solo for the grand prize?
            </p>
          </div>

          <CountDown/>
        </div>


        <div className="container flex-1">
          <img
            src="./images/hero_image.svg"
            alt="Game character with fire effects"
            layout="fill"
            objectFit="contain"
            className=""
          />
          <div className="absolute w-8 h-16 rotate-45 top-1/4 -left-4 bg-yellow-400/20 animate-pulse" />
          <div className="absolute w-8 h-16 -rotate-45 bottom-1/4 -right-4 bg-yellow-400/20 animate-pulse" />
        </div>
      </main>
    </div>
  );
};

export default Hero;
