import {
  ChevronLeft,
  ChevronRight,
  Settings,
  ShoppingBag,
  BarChart2,
} from "lucide-react";
import SkewedButton from "../button/gameButton";

export default function ArenaSection() {
  return (
    <div className="min-h-screen bg-black text-white font-mono p-8">
      <div className="mb-8 flex items-center">
        <div className="w-1 h-6 bg-yellow-500 mr-2" />
        <h1 className="text-xl">LET THE GAME BEGIN</h1>
      </div>

      <h2 className="text-5xl font-bold text-center mb-8 kode_mono_font">ARENA</h2>

      <div className="max-w-4xl mx-auto border border-blue-500 rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2" />

        <div className="bg-gray-900 p-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center bg-gray-800 rounded-md p-2">
              <span className="text-blue-400 mr-2">Kil3r.sol</span>
              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div className="w-1/3 h-full bg-blue-400" />
              </div>
              <span className="text-yellow-500 ml-2">LV8</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=20&width=20"
                  width={20}
                  height={20}
                  alt="SOL"
                  className="mr-1"
                />
                <span>0.894 SOL</span>
              </div>
              <div className="flex items-center">
                <img
                  src="/placeholder.svg?height=20&width=20"
                  width={20}
                  height={20}
                  alt="Diamond"
                  className="mr-1"
                />
                <span>45,698</span>
              </div>
              <button className="bg-gray-800 p-2 rounded">
                <img
                  src="/placeholder.svg?height=24&width=24"
                  width={24}
                  height={24}
                  alt="Menu"
                />
              </button>
            </div>
          </div>

          <div className="relative">
            <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-2">
              <ChevronLeft className="w-8 h-8" />
            </button>
            <div className="flex justify-center items-center">
              <img
                src="/images/collectibles/nf1.svg"
                width={300}
                height={300}
                alt="Character"
                className="filter drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]"
              />
            </div>
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-10 rounded-full p-2">
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <div className="flex justify-between mt-8">
            <SkewedButton className="">
              QUEST
              <span className="ml-2 bg-yellow-500 text-black text-xs px-1 rounded">
                3
              </span>
            </SkewedButton>
            <button className="bg-red-900 text-white px-6 py-2 rounded-md flex items-center">
              <img
                src="/placeholder.svg?height=20&width=20"
                width={20}
                height={20}
                alt="Skull"
                className="mr-2"
              />
              Deathmatch
              <span className="ml-2 text-xs opacity-50">Treasure Island</span>
            </button>
            <SkewedButton>FIGHT</SkewedButton>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2" />
      </div>

      <div className="fixed right-4 bottom-4 space-y-2">
        <button className="bg-gray-800 p-3 rounded-md block">
          <Settings className="w-6 h-6" />
        </button>
        <button className="bg-gray-800 p-3 rounded-md block">
          <ShoppingBag className="w-6 h-6" />
        </button>
        <button className="bg-gray-800 p-3 rounded-md block">
          <BarChart2 className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
