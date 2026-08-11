import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Images/nkdatti-logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <a href="#home" className="navbar--logo">
        <img src={logo} alt="NKDatti logo" />
      </a>

      <button
        className={`navbar--menu ${menuOpen ? "menu-open" : ""}`}
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`navbar--links ${menuOpen ? "menu-open" : ""}`}>
        <ul className="navbar_links--lists">
          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" onClick={closeMenu}>
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <a href="#contact" className="navbar--btn" onClick={closeMenu}>
        Let's Talk
      </a>
    </header>
  );
}

export default Navbar;
