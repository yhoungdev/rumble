import { ArrowRight } from "lucide-react";
import TopHeader from "../misc/topHeader.tsx";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <TopHeader title={ 'How It Works' } />
          <button className="bg-white text-black rounded-full px-6 py-2 text-sm font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors">
            <span>Docs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div className="space-y-8">
            <h1 className="text-7xl font-mono tracking-wider kode_mono_font">
              RUMBLE
            </h1>
            <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
            <p className="text-gray-400 text-sm leading-relaxed">
              In Rumble, your journey begins by minting your very own elemental
              character. Choose from a diverse roster of unique designs, each
              representing one of the four elements: Fire, Water, Earth, or Air.
              During the minting process, you'll unlock special abilities and
              traits that define your character's strengths and weaknesses in
              battle. Once minted, your character will be ready to face off
              against other players in the knockout tournament, combining
              strategy and luck to enhance your chances of victory.
            </p>
          </div>

          {/* Right column */}
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-light mb-4">Mint your character</h2>
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">
                Choose your opponents
              </h2>
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-4">
                Battle and vote on outcomes
              </h2>
              <div className="h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
