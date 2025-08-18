import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#393d3b] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img
            src="https://ext.same-assets.com/726936217/397242796.png"
            alt="logo"
            className="h-20 w-auto"
          />
          <p className="mt-4 text-sm opacity-90">
            The Rafting Camping in Rishikesh is one of the best riverside rafting camps in Rishikesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About Nature Nest</a></li>
            <li><a href="#events" className="hover:underline">Services</a></li>
            <li><a href="#packages" className="hover:underline">Our Packages</a></li>
            <li><a href="#contact" className="hover:underline">Contact us</a></li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h4 className="font-semibold mb-3">Get In Touch</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <i className="fas fa-phone"></i> 88-60134-967
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-phone"></i> 92-119426-42
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-envelope"></i> naturenest81@gmail.com
            </li>
          </ul>
        </div>

        {/* Enquire Form */}
        <div>
          <h4 className="font-semibold mb-3">Enquire Now</h4>
          <form className="space-y-3">
            <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Name" />
            <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Your email" />
            <input className="w-full px-3 py-2 rounded text-[#393d3b]" placeholder="Phone" />
            <button type="button" className="w-full px-3 py-2 rounded bg-white text-[#393d3b] font-medium hover:bg-gray-200">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#17804b]">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs opacity-80 flex items-center justify-between">
          <span>© 2025</span>
          <div className="flex items-center gap-4 text-sm">
            <a href="tel:+918860134967" className="flex items-center gap-1 hover:underline">
              <i className="fas fa-phone"></i> Call
            </a>
            <a href="https://wa.me/918860134967?text=" className="flex items-center gap-1 hover:underline">
              <i className="fab fa-whatsapp"></i> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;