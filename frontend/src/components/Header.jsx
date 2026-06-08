import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/care-first-medical-clinic-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const goHomeTop = () => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 80);
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 120);
  };

  return (
    <header className="site-header">
      <div className="main-nav compact-nav">
        <Link to="/" className="brand" onClick={goHomeTop}>
          <img
            src={logo}
            alt="Care First Medical Clinic"
            className="brand-logo"
          />
        </Link>

        <nav className={menuOpen ? "nav open" : "nav"}>
          <button className="nav-scroll-btn" type="button" onClick={goHomeTop}>
            Home
          </button>

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("about")}
          >
            About
          </button>

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("services")}
          >
            Services
          </button>

          <NavLink to="/doctors" onClick={() => setMenuOpen(false)}>
            Doctors
          </NavLink>

          <NavLink to="/appointment" onClick={() => setMenuOpen(false)}>
            Appointment
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </nav>

        <div className="header-actions">
          <a href="tel:15872871837" className="header-phone">
            <FaPhoneAlt />
            <span>587-287-1837</span>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=37%20-%201301%208th%20St%20SW%20Airdrie%20Alberta"
            target="_blank"
            rel="noreferrer"
            className="header-location"
          >
            <FaMapMarkerAlt />
          </a>
        </div>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}