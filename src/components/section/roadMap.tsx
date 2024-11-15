import RoadmapItem from "../misc/roadMapItem.tsx";
const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Blueprint",
      date: "Q3 24",
      avatar: "/api/placeholder/100/100",
      items: [
        "Game Development: We kick off the core development of the Rumble game, focusing on creating the foundational mechanics of the knockout tournament, opponent selection, and elemental battles.",
        "Art Design & Character Creation: Bringing each elemental character to life with unique designs and styles that capture the essence of Rumble's four elements.",
      ],
    },
    {
      phase: "The Battlefront",
      date: "Q4 24",
      avatar: "/api/placeholder/100/100",
      items: [
        "Partnerships with Gaming Communities: We'll establish partnerships with leading Web3 gaming communities, influencers, and platforms to expand our reach and bring like-minded players and NFT enthusiasts into the Rumble ecosystem.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-6xl font-bold text-white text-center mb-20 kode_mono_font">
        ROADMAP
      </h1>

      <div className="max-w-5xl mx-auto relative">
        {/* Dotted line connector */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dotted border-blue-400/30 -translate-x-1/2" />

        {roadmapData.map((item, index) => (
          <RoadmapItem
            key={index}
            phase={item.phase}
            date={item.date}
            items={item.items}
            avatar={item.avatar}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
