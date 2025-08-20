import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#17804b] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* LEFT: Contacts */}
          <div className="hidden sm:flex gap-6 items-center">
            <a href="tel:+918860134967" className="hover:opacity-80 flex items-center gap-2">
              <FaPhoneAlt className="text-xs" /> 88-60134-967
            </a>
            <a href="tel:+919211942642" className="hover:opacity-80 flex items-center gap-2">
              <FaPhoneAlt className="text-xs" /> 92-119426-42
            </a>
            <a href="mailto:naturenest81@gmail.com" className="hover:opacity-80 flex items-center gap-2">
              <FaEnvelope className="text-xs" /> naturenest81@gmail.com
            </a>
          </div>

          {/* CENTER: Social Icons */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>

          {/* RIGHT: Book Now (hidden on mobile) */}
          <div className="hidden sm:block">
            <Link
              to="/contact"
              className="bg-white text-[#17804b] px-4 py-1 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#17804b] transition"
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* LEFT: Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://ext.same-assets.com/726936217/397242796.png"
              alt="Nature Nest"
              className="h-16 w-auto"
            />
          </Link>

          {/* CENTER: Navbar (desktop only) */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link to="/" className="hover:text-[#785e4f]">Home</Link>
            <Link to="/about" className="hover:text-[#785e4f]">About</Link>
            <Link to="/events" className="hover:text-[#785e4f]">Events</Link>
            <Link to="/packages" className="hover:text-[#785e4f]">Packages</Link>
            <Link to="/contact" className="hover:text-[#785e4f]">Contact</Link>
          </nav>

          {/* RIGHT: Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border rounded"
          >
            {isOpen ? <HiX size={22} /> : <HiMenu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <nav className="flex flex-col gap-3 px-4 py-4 text-base font-medium">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#393d3b] text-white py-2 rounded-md hover:bg-yellow-400 hover:text-[#17804b] transition"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#393d3b] text-white py-2 rounded-md hover:bg-yellow-400 hover:text-[#17804b] transition"
              >
                About
              </Link>
              <Link
                to="/events"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#393d3b] text-white py-2 rounded-md hover:bg-yellow-400 hover:text-[#17804b] transition"
              >
                Events
              </Link>
              <Link
                to="/packages"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#393d3b] text-white py-2 rounded-md hover:bg-yellow-400 hover:text-[#17804b] transition"
              >
                Packages
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-[#393d3b] text-white py-2 rounded-md hover:bg-yellow-400 hover:text-[#17804b] transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

