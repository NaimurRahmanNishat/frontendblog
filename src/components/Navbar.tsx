import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const navlink: NavLink[] = [
  {
    id: 0,
    path: "/",
    label: "Home",
  },
  {
    id: 1,
    path: "/blogs",
    label: "Blogs",
  },
  {
    id: 2,
    path: "/about",
    label: "About",
  },
  {
    id: 3,
    path: "/contact",
    label: "Contact",
  },
];

interface NavLink {
  path: string;
  label: string;
  id: number;
}

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpne] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenuOpen = () => {
    setIsMenuOpne(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-md">
      {/* desktop menu and mobile button */}
      <div className="container mx-auto max-w-7xl px-4 py-3 flex items-center justify-between gap-4">
        {/* logo */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        {/* menu items */}
        <ul className="md:flex hidden space-x-8 text-gray-700 font-medium">
          {navlink.map((item) => (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-secondery" : "hover:text-secondery"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* search and color toggle */}
        <div className="md:flex hidden space-x-4 items-center">
          {/* search */}
          <Search />
          {/* color switcher */}
          <div
            className={`w-14 h-8 items-center rounded-full bg-[#E8E8EA] p-1 cursor-pointer transition-colors duration-300 ${
              isDarkMode ? "flex justify-end" : "justify-start"
            }`}
          >
            <button
              onClick={toggleDarkMode}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md transition-transform duration-300"
            >
              {isDarkMode ? (
                <FaMoon className="text-gray-500" />
              ) : (
                <FaSun className="text-yellow-500" />
              )}
            </button>
          </div>
        </div>
        {/* mobile menu bar */}
        <div className="md:hidden block">
          <button onClick={toggleMenuOpen}>
            {isMenuOpen ? (
              <IoClose className="size-6 text-gray-600" />
            ) : (
              <HiMiniBars3BottomRight className="size-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>
      {/* mobile menu */}
      {isMenuOpen && (
        <ul className="flex justify-center flex-col items-center space-y-4 text-gray-700 py-4">
          {navlink.map((item) => (
            <li key={item.id} onClick={toggleMenuOpen}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "text-secondery" : "hover:text-secondery"
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <Search />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
