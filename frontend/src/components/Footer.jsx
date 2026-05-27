import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="care-footer">
      <div className="care-footer-top">
        <div className="care-footer-brand">
          <span className="care-footer-label">
            <FaHeart />
            Care First Medical Clinic
          </span>

          <h2>Healthcare That Puts Patients First</h2>

          <p>
            Providing compassionate family medicine, preventive healthcare,
            walk-in services, and patient-focused medical care in Airdrie,
            Alberta.
          </p>

          <div className="care-footer-badge">
            Walk-Ins Welcome
          </div>
        </div>

        <div className="care-footer-grid">
          <div className="care-footer-card">
            <h3>Quick Links</h3>

            <div className="care-footer-links">
              <Link to="/">Home</Link>
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#why-us">Why Choose Us</a>
              <Link to="/doctors">Doctors</Link>
              <Link to="/appointment">Appointment</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          <div className="care-footer-card">
            <h3>Clinic Information</h3>

            <div className="care-footer-contact">
              <p>
                <FaMapMarkerAlt />
                <span>
                  37 - 1301 8th St SW
                  <br />
                  Airdrie, Alberta
                </span>
              </p>

              <p>
                <FaPhoneAlt />
                <a href="tel:19999999999">999-999-9999</a>
              </p>

              <p>
                <FaEnvelope />
                <span>Email Coming Soon</span>
              </p>

              <p>
                <FaClock />
                <span>Please call for clinic hours.</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="care-footer-bottom">
        <span>
          © {year} Care First Medical Clinic. All rights reserved.
        </span>

        <span>
          Designed with care for better patient access.
        </span>
      </div>
    </footer>
  );
}