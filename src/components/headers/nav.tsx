import Button from "../button";

const HeaderNavs = () => {
  return (
    <nav className="container kode_mono_font mx-auto px-4 py-6 flex items-center justify-between">
      <div className="font-bold text-xl">RUMBLE</div>
      <div className="hidden md:flex items-center gap-8">
        <a className="hover:text-red-500 transition-colors" href="#">
          Home
        </a>
        <a className="hover:text-red-500 transition-colors" href="#">
          Characters
        </a>
        <a className="hover:text-red-500 transition-colors" href="#">
          How It Works
        </a>
        <a className="hover:text-red-500 transition-colors" href="#">
          Roadmap
        </a>
      </div>
      <Button>Whitelist</Button>
    </nav>
  );
};

export default HeaderNavs;
