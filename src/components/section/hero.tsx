import Button from "../button";
import CountDown from "../misc/countDown";

const Hero = () => {
  return (
    <div className="">
      <main className="flex flex-col items-center gap-12 px-4 py-12 md:py-24 md:flex-row">
        <div className="flex-1 space-y-6 ">
          <div className={"  mx-auto  md:ml-[8em]"}>
            <h1 className="text-4xl font-bold leading-tight md:text-4xl kode_mono_font">
              Choose Your Element,
              <br />
              Conquer the Tournament!
            </h1>
            <p className="max-w-xl text-md mt-4 font-light text-gray-400">
              Dive into Rumble—a thrilling NFT experience where luck and
              strategy intertwine! Assemble your team of elemental{" "}
              <span className="text-red-500">Fire</span>,{" "}
              <span className="text-blue-500">Water</span>, and{" "}
              <span className="text-yellow-500">Air</span> and navigate a
              knockout tournament that challenges your wits and tactics. Will
              you forge alliances, or go solo for the grand prize?
            </p>
          </div>

          <CountDown />
        </div>

        <div className=" flex-1">
          <img
            src="./images/hero_image.png"
            alt="Game character with fire effects"
            objectFit="contain"
            className=""
          />
        </div>
      </main>
    </div>
  );
};

export default Hero;
