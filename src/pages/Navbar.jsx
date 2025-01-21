import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Ensure it's imported
import ReactGA from "react-ga4";

const Navbar = ({ logo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (category, label) => {
    ReactGA.event({
      category: category,
      action: "click",
      label: label,
    });
  };

  return (
    <nav className="bg-black p-4 sticky -top-1 z-50">
      <div className="flex justify-end items-center">
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="text-white lg:hidden">
          {isMenuOpen ? (
            // Font Awesome close icon (X)
            <i className="fas fa-times w-6 h-6"></i>
          ) : (
            // Font Awesome hamburger icon (three lines)
            <i className="fas fa-bars w-6 h-6"></i>
          )}
        </button>
      </div>
      <img
        src={logo}
        alt="Smile Fotobox Co."
        className="w-24 absolute left-3 top-2"
      />

      {/* Navbar links for mobile */}
      <div
        className={`lg:flex lg:items-center lg:justify-center lg:space-x-4 lg:ml-6 mt-4 lg:mt-0 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="#home"
          className="text-white py-2 px-4 block"
          onClick={() => handleLinkClick("Navbar", "Home")}
        >
          Home
        </a>
        <a
          href="#equipment"
          className="text-white py-2 px-4 block"
          onClick={() => handleLinkClick("Navbar", "Equipment")}
        >
          Equipment
        </a>
        <a
          href="#instagram"
          className="text-white py-2 px-4 block"
          onClick={() => handleLinkClick("Navbar", "Instagram")}
        >
          Instagram
        </a>
        <a
          href="#contact"
          className="text-white py-2 px-4 block"
          onClick={() => handleLinkClick("Navbar", "Contact")}
        >
          Contact
        </a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeGu4gHN_HFx02-3WZ5pFzhi_onrcwTemh8giaK-ExY_GbRsw/viewform"
          target="_blank"
          className="text-white py-2 px-4 block"
          onClick={() => handleLinkClick("Navbar", "Book Your Event")}
        >
          Book Your Event
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
