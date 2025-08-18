import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      {/* Top bar */}
      <div className="bg-[#17804b] text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
          {/* LEFT: Contacts with Icons */}
          <div className="flex gap-6 items-center">
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-yellow-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-yellow-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-yellow-400">
              <FaInstagram />
            </a>
          </div>

          {/* RIGHT: Book Now */}
          <div>
            <Link to="/contact" className="bg-white text-[#17804b] px-4 py-1 rounded-md font-semibold hover:bg-yellow-400 hover:text-[#17804b] transition">
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
              className="h-20 w-auto"
            />
          </Link>

          {/* CENTER: Navbar */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium">
            <Link to="/" className="hover:text-[#785e4f]">Home</Link>
            <Link to="/about" target="_blank" className="hover:text-[#785e4f]">About</Link>
            <Link to="/events" target="_blank" className="hover:text-[#785e4f]">Events</Link>
            <Link to="/packages" target="_blank" className="hover:text-[#785e4f]">Packages</Link>
            <Link to="/contact" target="_blank" className="hover:text-[#785e4f]">Contact</Link>
          </nav>

          {/* RIGHT: Mobile Menu Button */}
          <button className="md:hidden inline-flex items-center justify-center w-10 h-10 border rounded">
            Menu
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;