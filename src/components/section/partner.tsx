import Typography from "../misc/typography.tsx";
import TopHeader from "../misc/topHeader.tsx";

export default function Partner() {
  const partners1 = [
    { name: "Magic Eden", logo: "/images/partners/magic_eden.svg" },
    { name: "Phantom", logo: "/images/partners/phantom.svg" },
    { name: "Drip", logo: "/images/partners/drip.svg" },
    { name: "Orca", logo: "/images/partners/orca.svg" },
  ];

  const partners2 = [
    { name: "Bear", logo: "/images/partners/bear.svg" },
    { name: "Raydium", logo: "/images/partners/rayden.svg" },
    { name: "DeGods", logo: "/images/partners/degods.svg" },
    { name: "Jupiter", logo: "/images/partners/jupiter.svg" },
  ];

  return (
    <div className="text-white font-mono p-8">
      {/* Header */}
      <div className={"container"}>
        <TopHeader title={"Our Key Allies"} />
      </div>

      {/* Title */}
      <Typography>PARTNERS</Typography>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[2px] bg-gray-900/70  h-full"></div>
            <div className="absolute h-[2px] bg-gray-900/70  w-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {partners1.map((partner) => (
              <div
                key={partner.name}
                className="w-24 h-24 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${partner.logo})` }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center md:relative top-[4em]">
          <img
            src="/images/partners/nft.svg"
            alt="Mascot character"
            className="w-[200px] h-[150px] md:w-80 md:h-80"
          />
        </div>

        <div className="relative flex justify-center items-center">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-[2px] bg-gray-900/70  h-full"></div>
            <div className="absolute h-[2px] bg-gray-900/70 w-full"></div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {partners2.map((partner) => (
              <div
                key={partner.name}
                className="w-24 h-24 bg-center bg-contain bg-no-repeat"
                style={{ backgroundImage: `url(${partner.logo})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
