
function Footer() {
  return (
    <div className="footer bg-amber-400 w-full py-[2em]">
      <div className="container">
        <div className="flex items-center gap-2">
          <img src={"/logo/footer_logo.svg"} alt="logo" />
          <h4 className={'kode_mono_font text-black font-bold'}>Rumble Inc</h4>
        </div>
      </div>
    </div>
  );
}

export default Footer;
