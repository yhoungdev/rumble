import RoadmapItem from "../misc/roadMapItem.tsx";
import Typography from "../misc/typography.tsx";
import TopHeader from "../misc/topHeader.tsx";
const Roadmap = () => {
  const roadmapData = [
    {
      phase: "Concept & Strategy:",
      date: "1",
      avatar: "/images/roadmap/4.svg",
      items: [
        "Crafting the elemental world and defining the rules of the knockout tournament.",
        " The core gameplay mechanics are designed to spark intense competition",
      ],
    },
    {
      phase: "Art & Design:",
      date: "2",
      avatar: "/images/roadmap/3.svg",
      items: [
        `Our team dives deep into the creation of stunning elemental characters—each wave of creativity flowing into the unique designs of Aqua, Ignis, Terra, and Zephyr.`,
      ],
    },
    {
      phase: "Launch the Collection (4096 NFTs)",
      date: "3",
      avatar: "/images/roadmap/2.svg",
      items: [
        `The tide is rising, and Aqua’s champions are ready. The official mint begins, bringing our elemental warriors into the hands of their masters.`,
      ],
    },
    {
      phase: "Community Growth",
      date: "4",
      avatar: "/images/roadmap/1.svg",
      items: [
        `Rallying the elemental forces—building a passionate community around the tournament. Allowlist spots, giveaways, and special events will flow like currents through our community.`,
      ],
    },
    // {
    //   phase: "Knockout Tournament Begins",
    //   date: "5",
    //   avatar: "/images/roadmap/1.svg",
    //   items: [
    //     `The elemental forces clash! Players will select their opponents, strategize their battles, and fight their way through each round as the pool of contestants shrinks by half.`,
    //   ],
    // },
    // {
    //   phase: "Battle Buffs Unleashed",
    //   date: "6",
    //   avatar: "/images/roadmap/1.svg",
    //   items: [
    //     `Introducing character buffs based on your choices—an opportunity to tilt the odds in your favor with the right matchups. Water flows, and so should your strategy.`,
    //     `As the tide ebbs and flows, those who remain active will enjoy exclusive rewards, staking opportunities, and future tournament access.`,
    //   ],
    // },
  ];

  return (
    <div
      className="min-h-screen p-8 bg-gray-900 roadmap_gradient"
      id={"roadmap"}
    >
      <div className={"container"}>
        <TopHeader title={"The Adventure Ahead"} />
      </div>

      <Typography>ROADMAP</Typography>

      <div
        className="relative max-w-3xl  mx-auto
          lg:bg-[url(/bg/line.png)] bg-no-repeat bg-contain bg-center "
      >
        {roadmapData.map((item, index, array) => {
          const isLastItem = index === array.length - 1;
          return (
            <RoadmapItem
              key={index}
              phase={item.phase}
              date={item.date}
              items={item.items}
              avatar={item.avatar}
              isLeft={index % 2 === 0}
              isLastItem={isLastItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Roadmap;
