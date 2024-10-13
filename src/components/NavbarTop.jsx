import { useState, useEffect } from "react";
import { navMenu } from "../constant";
import { GiHamburgerMenu } from "react-icons/gi"; // Ikon hamburger
import { TiThMenu } from "react-icons/ti";

function NavbarTop({ setCover }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk menu samping

  // Mengatur visibilitas navbarTop saat di-scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <nav
        className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-200 shadow-lg text-lg font-semibold text-primary px-10 py-2 rounded-lg transition-transform duration-300 z-50 ${
          isVisible ? "translate-y-0" : "-translate-y-40"
        } hidden md:block border-[3px] border-primary`}
      >
        <div className="flex gap-5">
          {navMenu.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.link}`}
              className="px-4 py-1 rounded-lg transition-colors duration-300 hover:bg-primary hover:text-gray-200"
              onClick={() => {
                menu.title === "Home" && setCover(true);
                closeMenu(); // Tutup menu jika di klik
              }}
            >
              {menu.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Icon Menu untuk layar kecil */}
      <div className="md:hidden fixed top-5 right-5 z-50">
        <button
          onClick={toggleMenu}
          className="border-[2px] border-orange rounded-md"
        >
          <TiThMenu className="text-3xl text-orange" />
        </button>
      </div>

      {/* Menu Samping */}
      <div
        className={`fixed top-0 right-0 h-full bg-slate-900 shadow-lg transition-transform duration-300 z-40 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-1/2 md:w-1/3 border-l border-primary`}
      >
        <div className="flex flex-col p-5">
          {navMenu.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.link}`}
              className="py-2 text-lg font-semibold transition-colors duration-300 hover:bg-primary hover:text-gray-200"
              onClick={() => {
                menu.title === "Home" && setCover(true);
                closeMenu(); // Tutup menu saat item diklik
              }}
            >
              {menu.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarTop;
