
export default function ArenaSection() {
  return (
    <div className=" bg-black text-white font-mono px-8 py-[5em]">
      <div className="mb-8 flex items-center">
        <div className="w-1 h-6 bg-yellow-500 mr-2" />
        <h1 className="text-xl">LET THE GAME BEGIN</h1>
      </div>

      <h2 className="text-5xl font-bold text-center mb-8 kode_mono_font">
        ARENA
      </h2>

      {/*<div className={' w-full h-[100vh] container bg-red-300 mx-auto'}>*/}

      {/*</div>*/}
      <div className="flex container flex-col items-center gap-12 ">
        <div
          className="flex flex-col items-center w-full max-w-[800px] h-[60vh]"
          style={{
            backgroundImage: "url(/bg/first_arena.svg)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></div>

        <div
          className="flex flex-col items-center w-full max-w-[800px] h-[60vh]"
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
