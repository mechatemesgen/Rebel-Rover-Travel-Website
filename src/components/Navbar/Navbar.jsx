import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "../ui/NavLinks";
import SearchOverlay from "../ui/SearchOverlay";
import NavLogo from "../../assets/logo1 1.svg";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative z-50">
      {/* Navbar */}
      <nav className="glass fixed w-full bg-gray-900/80 backdrop-blur-[1px] shadow-md">
        <div className="navbar px-4 md:px-8 py-2 flex justify-between items-center">
          {/* LOGO & Home */}
          <div className="flex items-center justify-between w-full">
            <NavLink to="/" className="flex items-center">
              <img
                src={NavLogo}
                alt="Logo"
                className="w-60 h-auto transition-transform"
              />
            </NavLink>

            {/* Hamburger for mobile */}
            <div className="lg:hidden text-white text-xl">
              <button onClick={toggleDrawer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-6 items-center">
            <NavLinks />
          </ul>

          {/* Search Icon Trigger (Desktop) */}
          <div className="text-white ml-6 hidden lg:block">
            <button
              onClick={toggleSearch}
              className="transition-all duration-300"
            >
              <svg
                className="h-5 opacity-80 hover:opacity-100 transition-all"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidenav */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-900 text-white p-5 z-40 transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <img
            src={NavLogo}
            alt="Logo"
            className="w-40 h-auto transition-transform"
          />
          <button onClick={toggleDrawer} className="text-white text-xl">
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          <NavLinks isMobile={true} onCloseMobile={closeDrawer} />
        </ul>

        {/* Mobile search button */}
        <div className="mt-6">
          <button
            onClick={() => {
              toggleSearch();
              closeDrawer();
            }}
            className="flex items-center gap-2 w-full px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all"
          >
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <span>Search Destinations</span>
          </button>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50 z-30"
          onClick={closeDrawer}
        />
      )}

      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </div>
  );
};

export default Navbar;
