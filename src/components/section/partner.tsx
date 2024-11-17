import Typography from "../misc/typography.tsx";
import TopHeader from "../misc/topHeader.tsx";

export default function Partner() {
  const partners1 = [
    { name: "ME", logo: "/images/partners/bear.svg" },
    { name: "Ghost", logo: "/images/partners/drip.svg" },
    { name: "DRiP", logo: "/images/partners/jupiter.svg" },
    { name: "Sun", logo: "/images/partners/orca.svg" },
  ];

  const partners2 = [
    { name: "DeGods", logo: "/images/partners/phantom.svg" },
    { name: "Jupiter", logo: "/images/partners/degods.svg" },
    { name: "R", logo: "/images/partners/rayden.svg" },
  ];

  return (
    <div className="  text-white font-mono p-8">
      {/* Header */}
     <TopHeader title={'Our Key Allies'}/>

      {/* Title */}
      <Typography>PARTNERS</Typography>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="grid grid-cols-2 gap-8">
          {partners1.map((partner) => (
            <div
              key={partner.name}
              className="w-24 h-24 bg-center bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${partner.logo})` }}
            />
          ))}
        </div>

        <div className="flex justify-center items-center md:relative top-[4em]">
          <img
            src="/images/partners/nft.svg"
            alt="Mascot character"
            className="w-[200px] h-[150px] md:w-80 md:h-80 "
          />
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
  );
}
