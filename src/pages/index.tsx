import React from "react";
import HeaderNavs from "../components/headers/nav";
import Hero from "../components/section/hero";
import PeakSection from "../components/section/peaks";
import ArenaSection from "../components/section/arena";
import HowItWorks from "../components/section/howItWorks";
import MintInformation from "../components/section/mintInfo";

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
      <ArenaSection />
      <HowItWorks />
      <MintInformation />
    </div>
  );
};

export default IndexHomepage;
