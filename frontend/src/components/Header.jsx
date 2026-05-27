import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/LogoCareFirstClinic.png";

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
      <div className="top-bar">
        <span>
          <FaPhoneAlt /> 999-999-9999
        </span>
        <span>
          <FaMapMarkerAlt /> 37 - 1301 8th St SW, Airdrie, AB
        </span>
      </div>

      <div className="main-nav">
        <Link to="/" className="brand" onClick={goHomeTop}>
          <img
            src={logo}
            alt="Care First Medical Clinic"
            className="brand-logo"
          />

          <div className="brand-text">
            <h1>Care First Medical Clinic</h1>
            <p>Walk-Ins Welcome</p>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>

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

          <button
            className="nav-scroll-btn"
            type="button"
            onClick={() => scrollToSection("why-us")}
          >
            Why Choose Us
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
      </div>
    </header>
  );
}