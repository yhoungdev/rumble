import { Twitter, Twitch, ChevronUp } from "lucide-react";
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  return (
    <div className="footer bg-amber-400 w-full py-[2em] ">
      <div className="container flex justify-between mx-auto">
        <div className="flex items-center gap-2">
          <img src={"/logo/footer_logo.svg"} alt="logo" />
          <h4 className={"kode_mono_font text-black font-bold"}>Rumble Inc</h4>
        </div>

        <div
          className={"flex items-center justify-between gap-4  md:w-[266px]"}
        >
          <div className="flex items-center gap-2">
            <Twitch className={"cursor-pointer"} />
            <Twitter className={"cursor-pointer"} />
          </div>

          <div
            className={
              "cursor-pointer w-5 h-5 border-[1.5px] border-white flex items-center justify-center  rounded-full"
            }
            onClick={scrollToTop}
          >
            <ChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
