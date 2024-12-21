import { useState } from "react";
import Button from "../button";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderNavs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Characters", href: "#characters" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Arena", href: "/arena" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/", { state: { target: href } });
      } else {
        const targetElement = document.querySelector(href);
        targetElement?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={"container"}>
      <nav className="container kode_mono_font px-4 py-6 flex items-center justify-between">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src={"/logo/footer_logo.svg"}
              alt="logo"
              width={70}
              height={70}
            />
            <div className="font-bold text-xl">RUMBLE</div>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none text-gray-800 dark:text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(link.href)}
              className="hover:text-red-500 transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-8">
          <Button>Whitelist</Button>
        </div>

        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(link.href)}
                  className="text-gray-800 hover:text-red-500 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Button onClick={() => setIsMobileMenuOpen(false)}>
                Whitelist
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default HeaderNavs;
