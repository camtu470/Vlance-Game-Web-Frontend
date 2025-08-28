import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "../../ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${
        isScrolled
          ? "bg-[#111923] text-white shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <Link
            to="/"
            className="transition-colors text-white"
            style={{
              textShadow:
                "0 0 5px #a4dca4ff, 0 0 6px #0ddb0dff, 0 0 10px #d8eed8ff",
            }}
          >
            MyApp
          </Link>
        </div>

        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium items-center">
          {[
            { to: "/", label: "Home" },
            { to: "/shop", label: "Shop" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "text-white font-normal"
                    : "text-white font-normal"
                } hover:text-white`}
                style={{
                  textShadow:
                    "0 0 5px transparent, 0 0 2px transparent, 0 0 15px transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget.style as any).textShadow =
                    "0 0 5px #ebffd2ff, 0 0 10px #8de479ff, 0 0 15px #bdffbdff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget.style as any).textShadow =
                    "0 0 5px transparent, 0 0 10px transparent, 0 0 15px transparent";
                }}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Connect Wallet button */}
          <li>
            <Button
              variant="green-glow"
              fullWidth
              onClick={() => alert("Clicked")}
            >
              Connect Wallet
            </Button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul
          className={`md:hidden space-y-2 py-4 px-6 border-t animate-slideDown transition-colors duration-500
      bg-[#111923] border-gray-700 text-white`}
        >
          {[
            { to: "/", label: "Home" },
            { to: "/shop", label: "Shop" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/contact", label: "Contact" },
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block py-2 px-3 rounded transition-all duration-300 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-500"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Connect Wallet button mobile */}
          <li className="w-10/12 mx-auto">
            <Button
              variant="green-glow"
              fullWidth
              onClick={() => alert("Clicked")}
            >
              Connect Wallet
            </Button>
          </li>
        </ul>
      )}
    </nav>
  );
}
