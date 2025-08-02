import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext, type ThemeType } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import { FiSettings, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu/theme dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setThemeOpen(false);
      }
    };

    if (menuOpen || themeOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen, themeOpen]);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/50 dark:bg-black/70 shadow-md z-50 p-4 flex items-center justify-between">
      <div className="text-2xl font-bold tracking-wide">ThemeApp</div>

      <div className="flex items-center gap-4 md:gap-10">
        {/* Desktop Menu */}
        <nav className="hidden sm:flex gap-6 text-sm font-semibold">
          <Link className="hover:text-blue-600 transition" to="/">
            Home
          </Link>
          <Link className="hover:text-blue-600 transition" to="/about">
            About
          </Link>
          <Link className="hover:text-blue-600 transition" to="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Settings icon - always visible */}
        <div className="relative">
          <button
            onClick={() => setThemeOpen(!themeOpen)}
            className="text-xl rounded-full hover:bg-blue-600 dark:hover:bg-gray-800 transition sm:p-1"
          >
            <FiSettings />
          </button>

          {themeOpen && (
            <div
              ref={menuRef}
              className="absolute top-10 right-0 sm:w-96 w-72 flex gap-10 justify-between items-center bg-white dark:bg-gray-900 shadow-lg rounded-md p-4 border dark:border-gray-600 z-50"
            >
              <p className="text-sm font-semibold mb-2  text-black">Select Theme</p>
              <select
                value={theme}
                onChange={(e) => setTheme(e.target.value as ThemeType)}
                className=" p-2 rounded border border-gray-300 dark:border-gray-600 bg-white text-black dark:bg-gray-900 dark:text-white"
              >
                <option value="theme1">Theme 1</option>
                <option value="theme2">Theme 2</option>
                <option value="theme3">Theme 3</option>
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-black text-black dark:text-white text-sm p-4 shadow-md z-40 flex flex-col gap-4 md:hidden">
          <Link
            onClick={() => setMenuOpen(false)}
            to="/"
            className="hover:text-blue-600"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/about"
            className="hover:text-blue-600"
          > 
            About
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            to="/contact"
            className="hover:text-blue-600"
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
