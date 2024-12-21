import Accordion from "../misc/accordion.tsx";
import { RoundedButton } from "../button";
import TopHeader from "../misc/topHeader.tsx";
import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  // Define FAQ items in an array
  const faqItems = [
    {
      title: "Mint your character",
      description:
        "Rumble is an NFT-based knockout tournament game where players mint elemental characters and battle through rounds.",
    },
    {
      title: "Choose your opponents",
      description:
        "The collection size and mint price vary depending on the tournament specifics. Please visit our site for the latest details.",
    },
    {
      title: "Battle and vote on outcomes",
      description:
        "Battles are conducted using advanced algorithms to ensure fairness and randomness in determining the winners of each round.",
    },
  ];

  return (
    <div
      className="min-h-screen rumble  text-white px-8 py-16 font-sans"
      style={{}}
    >
      <div className={"container"}>
        <TopHeader title={"How It Works"} />
      </div>
      <div className="container mt-[2em]">
        <div className="flex w-full items-center justify-between  border-b-2 pb-[1em] mb-12">
          <h3 className={"kode_mono_font text-3xl  md:text-5xl"}>RUMBLE</h3>

          {/*<RoundedButton>*/}
          {/*  <div className={"flex items-center gap-4"}>*/}
          {/*    DOCS <ArrowRight />*/}
          {/*  </div>*/}
          {/*</RoundedButton>*/}
        </div>

        {/* Description */}
        <div className="mb-12 md:ml-10">
          <p className="text-gray-400 text-sm lg:text-lg leading-relaxed md:w-[500px]">
            In Rumble, your journey begins by minting your very own elemental
            character. Choose from a diverse roster of unique designs, each
            representing one of the four elements: Fire, Water, Earth, or Air.
            During the minting process, you'll unlock special abilities and
            traits that define your character's strengths and weaknesses in
            battle. Once minted, your character will be ready to face off
            against other players in the knockout tournament, combining strategy
            and luck to enhance your chances of victory.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-8">
          {faqItems.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
