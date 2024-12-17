import { useState } from "react";
import Button from "../button";
import { Menu, X } from "lucide-react";

const HeaderNavs = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Characters", href: "#characters" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Roadmap", href: "#roadmap" },

  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={"container"}>
      <nav className=" container kode_mono_font  px-4 py-6 flex items-center justify-between">
        <div className="font-bold text-xl">RUMBLE</div>

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
            <a
              key={index}
              className="hover:text-red-500 transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Button>Whitelist</Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-50 md:hidden">
            <div className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  className="text-gray-800 hover:text-red-500 transition-colors"
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
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
