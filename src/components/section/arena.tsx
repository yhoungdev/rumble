import TopHeader from "../misc/topHeader.tsx";

export default function ArenaSection() {
  return (
    <div className=" bg-black text-white font-mono px-8 py-[5em]">

      <div className={'container'}><TopHeader title={'LET THE GAME BEGIN'} /></div>
      <div className="flex container flex-col items-center gap-12 ">


        <h2 className="text-5xl font-bold text-center mb-8 kode_mono_font">
          ARENA
        </h2>
        <div
          className="flex flex-col items-center w-full  h-[50vh] md:h-[60vh]"
          style={{
            backgroundImage: "url(/bg/arena_play.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="flex flex-col items-center w-full  h-[50vh] md:h-[60vh]"
          style={{
            backgroundImage: "url(/bg/arena.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
}
