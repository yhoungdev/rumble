import { Twitter, Twitch, ChevronUp } from "lucide-react";
function Footer() {
  return (
    <div className="footer bg-amber-400 w-full py-[2em] ">
      <div className="container flex justify-between">
        <div className="flex items-center gap-2">
          <img src={"/logo/footer_logo.svg"} alt="logo" />
          <h4 className={"kode_mono_font text-black font-bold"}>Rumble Inc</h4>
        </div>

        <div className={"flex items-center gap-4"}>
          <div className="flex items-center gap-2">
            <Twitch className={"cursor-pointer"} />
            <Twitter className={"cursor-pointer"} />
          </div>

          <div
            className={
              "cursor-pointer w-5 h-5 border-2 flex items-center justify-center  rounded-full"
            }
          >
            <ChevronUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
