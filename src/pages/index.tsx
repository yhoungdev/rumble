import HeaderNavs from "../components/headers/nav";
import Hero from "../components/section/hero";
import PeakSection from "../components/section/peaks";
import ArenaSection from "../components/section/arena";
import HowItWorks from "../components/section/howItWorks";
import MintInformation from "../components/section/mintInfo";
import Roadmap from "../components/section/roadMap.tsx";
import Team from "../components/section/team.tsx";
import Partner from "../components/section/partner.tsx";
import Footer from "../components/section/footer.tsx";
import FaqSection from "../components/section/faq.tsx";
import ArtAndTextSection from "../components/section/artAndText.tsx";

const IndexHomepage = () => {
  return (
    <div>
      <div
        className=""
        style={{
          backgroundImage: "url(/bg/full_hero_bg.png)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <HeaderNavs />
        <Hero />
      </div>
      <PeakSection />
      <ArtAndTextSection/>
      {/*<ArenaSection />*/}
      <HowItWorks />
      <MintInformation />
      <Roadmap />
      <FaqSection />
      <Team />
      <Partner />
      <Footer />
    </div>
  );
};

export default IndexHomepage;
