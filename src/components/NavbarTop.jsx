import { useState, useEffect } from "react";
import { navMenu } from "../constant";

function NavbarTop({ setCover }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 bg-gray-200 shadow-lg text-lg font-semibold text-primary px-10 py-2 rounded-lg transition-transform duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-40"
      } hidden md:block`}
    >
      <div className="flex gap-7">
        {navMenu.map((menu, index) => (
          <a
            key={index}
            href={`#${menu.link}`}
            className="px-5 py-1 rounded-lg transition-colors duration-300 hover:bg-primary hover:text-gray-200"
            onClick={() => menu.title === "Home" && setCover(true)}
          >
            {menu.title}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default NavbarTop;
