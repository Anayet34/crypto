import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from './image/logo.png';
import { FiAlignJustify, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Cereal Guy Logo" />
        <span>Cereal Guy</span>
      </div>
      <div className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {isMobileMenuOpen && (
          <button className="close-menu" onClick={closeMobileMenu}>
            <FiX />
          </button>
        )}
        <ul className="nav-links">
          <li>
            <Link
              activeClass="active"
              to="about-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu} // Close menu when clicked
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="features-page"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu} // Close menu when clicked
            >
              Tokonomas
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="extra-page"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu} // Close menu when clicked
            >
              Partner
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="roadmap-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu} // Close menu when clicked
            >
              Roadmap
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact-page"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMobileMenu} // Close menu when clicked
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="buttons">
          <button>BUY NOW</button>
        </div>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <FiAlignJustify />
      </button>
    </nav>
  );
};

export default Navbar;

