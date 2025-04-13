import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi"; // SVG dropdown icon

const links = [
  { id: 1, url: "", text: "home" },
  { id: 2, url: "about", text: "about us" },
  {
    id: 3,
    url: "package",
    text: "package",
    subLinks: ["Adventure", "Family", "Luxury"],
  },
  {
    id: 4,
    url: "destination",
    text: "destination",
    subLinks: ["Europe", "Asia", "Africa"],
  },
  {
    id: 5,
    url: "blog",
    text: "blog",
    subLinks: ["Travel Tips", "Guides", "Stories"],
  },
  { id: 6, url: "contact", text: "contact" },
];

const NavLinks = ({ isMobile = false, onCloseMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {links.map(({ id, url, text, subLinks }) => (
        <li
          key={id}
          className={`relative whitespace-nowrap transition-all ${
            id === 1 ? "mr-8" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between ${
              isMobile ? "w-full" : "cursor-pointer"
            }`}
          >
            <NavLink
              to={`/${url}`}
              onClick={onCloseMobile}
              className={({ isActive }) =>
                `capitalize font-semibold py-2 px-4 block transition-colors duration-300 ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {text}
            </NavLink>

            {subLinks && (
              <button
                onClick={() => toggleDropdown(id)}
                className={`transition-transform duration-300 ${
                  openDropdown === id ? "rotate-180" : ""
                } text-white px-2`}
              >
                <FiChevronDown size={18} />
              </button>
            )}
          </div>

          {subLinks && (
            <ul
              className={`overflow-hidden mt-5 transform transition-all duration-300 ease-in-out ${
                openDropdown === id
                  ? "max-h-96 opacity-100 scale-100"
                  : "max-h-0 opacity-0 scale-95"
              } ${
                isMobile
                  ? "relative bg-gray-800 rounded-md"
                  : "absolute top-full left-0 w-48 bg-gray-600 text-white rounded-lg shadow-md z-30"
              }`}
            >
              {subLinks.map((sub, idx) => (
                <li key={idx}>
                  <NavLink
                    to={`/${url}#${sub.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() => {
                      setOpenDropdown(null);
                      onCloseMobile?.();
                    }}
                    className="block px-4 py-2 text-sm hover:bg-blue-100/20 transition-colors"
                  >
                    {sub}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
};

export default NavLinks;
