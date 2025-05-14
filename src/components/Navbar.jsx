import { useState, useEffect } from "react";
import {
  FaHome,
  FaUtensils,
  FaImages,
  FaCalendarAlt,
  FaPhoneAlt,
  FaMountain,
} from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { RiReservedLine } from "react-icons/ri";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: <FaHome className="mr-2" /> },
    { name: "Menu", icon: <FaUtensils className="mr-2" /> },
    { name: "Gallery", icon: <FaImages className="mr-2" /> },
    { name: "Events", icon: <FaCalendarAlt className="mr-2" /> },
    { name: "Contact", icon: <FaPhoneAlt className="mr-2" /> },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all shadow-lg duration-300 ${
        scrolled
          ? "bg-gradient-to-tl to-green-300 via-green-400 from-green-500 shadow-lg"
          : "bg-gradient-to-br to-green-300 via-green-400 from-green-500 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center ">
            <FaMountain
              className={`h-8 w-8 ${
                scrolled ? "text-green-700" : "text-white"
              }`}
            />
            <span
              className={`ml-2 font-serif text-xl md:text-2xl font-bold tracking-wider ${
                scrolled ? "text-green-800" : "text-white"
              }`}
            >
              Grand Vista Retreat
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className={`flex items-center px-3 py-2 text-sm font-medium transition-all duration-200 
                    hover:text-green-600 ${
                      scrolled
                        ? "text-gray-700 hover:text-green-600"
                        : "text-white hover:text-green-300"
                    }`}
                >
                  {item.icon}
                  {item.name}
                </a>
              ))}
              <button className="bg-green-600 hover:bg-green-700 text-white flex items-center px-4 py-2 rounded-md transition-all duration-200 text-sm font-medium">
                <RiReservedLine className="mr-2" />
                Reserve Table
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                scrolled
                  ? "text-gray-700 hover:text-green-600"
                  : "text-white hover:text-green-300"
              }`}
            >
              {isOpen ? (
                <IoIosClose className="block h-6 w-6" />
              ) : (
                <IoIosMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name.toLowerCase()}`}
              className="flex items-center text-gray-700 hover:bg-green-50 hover:text-green-700  px-3 py-2 rounded-md text-base font-medium"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white flex items-center justify-center px-3 py-2 rounded-md text-base font-medium">
            <RiReservedLine className="mr-2" />
            Reserve Table
          </button>
        </div>
      </div>
    </nav>
  );
}
