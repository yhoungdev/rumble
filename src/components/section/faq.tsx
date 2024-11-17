import Accordion from "../misc/accordion.tsx";
import Button, { RoundedButton } from "../button";

export default function FaqSection() {
  // Define FAQ items in an array
  const faqItems = [
    {
      title: "What is Rumble?",
      description:
        "Rumble is an NFT-based knockout tournament game where players mint elemental characters and battle through rounds.",
    },
    {
      title: "What is the collection size and mint price?",
      description:
        "The collection size and mint price vary depending on the tournament specifics. Please visit our site for the latest details.",
    },
    {
      title: "How are battles conducted?",
      description:
        "Battles are conducted using advanced algorithms to ensure fairness and randomness in determining the winners of each round.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-8 py-16 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl kode_mono_font">FAQ</h1>
        </div>

        <div className="flex  items-center justify-between  border-b-2 pb-[1em] mb-12">
          <h3 className={"kode_mono_font text-3xl"}>Clarity From Depths</h3>

          <RoundedButton>Support</RoundedButton>
        </div>

        {/* Description */}
        <div className="mb-12">
          <p className="text-gray-400 text-base leading-relaxed max-w-2xl">
            Rumble is an NFT-based knockout tournament game where players mint
            elemental characters and battle through rounds. Each round, winners
            can either split the grand prize or move on to try and become the
            last person standing.
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
