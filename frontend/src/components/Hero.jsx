import { Link } from "react-router-dom";
//import heroVideo from "../assets/services/1090224597-preview.mp4";
import heroImg from "../assets/banners/asset-generation-bc4c827a-7af7-4e53-bfe8-fa00bc15c284-2.png";

export default function Hero() {
  return (
    <>
      <section className="doctors-marquee">
        <div className="doctors-marquee-track">
          <span>Walk-Ins Welcome</span>
          <span>Family Medicine Services</span>
          <span>Preventive Health & Annual Physicals</span>
          <span>Professional Driver Medical Examinations</span>
          <span>Pediatric Care Services</span>
          <span>Women’s Health Services</span>
          <span>Chronic Disease Management</span>
          <span>Vaccinations & Immunization Services</span>
        </div>
      </section>

      <section className="hero video-hero">
        {/* <video className="hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video> */}
        <img src={heroImg} alt="Care First Medical Clinic" className="hero-image" />

        <div className="hero-overlay" />

        <div className="hero-inner">
          <div className="hero-content">
            <span className="hero-label">Care First Medical Clinic</span>

            <h1>Compassionate Healthcare for Your Family</h1>

            <p>
              Walk-ins welcome. Providing reliable, modern, and patient-focused
              medical care for individuals and families in Airdrie.
            </p>

            <div className="hero-actions">
              <Link to="/appointment" className="btn primary">
                Book Appointment
              </Link>

              <a href="/#services" className="btn secondary">
                View Services
              </a>
            </div>
          </div>

          <div className="hero-contact-card">
            <h3>Contact Clinic</h3>

            <p>
              <strong>Phone:</strong> 999-999-9999
            </p>

            <p>
              <strong>Clinic Hours:</strong> Hours will be updated soon
            </p>

            <p>
              <strong>Walk-Ins:</strong> Welcome
            </p>

            <p>
              <strong>Location:</strong> 37 - 1301 8th St SW, Airdrie, Alberta
            </p>

            <p>
              <strong>Landmark:</strong> Corner of 8th St and Yankee Valley Blvd
            </p>
          </div>
        </div>
      </section>
    </>
  );
}