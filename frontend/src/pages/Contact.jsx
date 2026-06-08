import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWalking,
} from "react-icons/fa";

import { SITE_INFO } from "../data/siteInfo";

export default function Contact() {
  const mapQuery = encodeURIComponent(SITE_INFO.address);

  return (
    <>
      <section className="care-contact-hero">
        <div className="care-contact-hero-content">
          <span>Contact Care First</span>
          <h1>We’re Here to Help</h1>
          <p>
            Contact Care First Medical Clinic for appointments, walk-in
            inquiries, clinic hours, and patient information.
          </p>
        </div>
      </section>

      <section className="care-contact-section">
        <div className="care-contact-wrapper">
          <div className="care-contact-header">
            <span className="section-label center">Get In Touch</span>
            <h2>Contact Care First Medical Clinic</h2>
            <p>
              Please call or email the clinic for current appointment
              availability, walk-ins, and patient information.
            </p>
          </div>

          <div className="care-contact-clean-layout">
            <div className="care-contact-main-card">
              <div className="care-contact-icon large">
                <FaPhoneAlt />
              </div>

              <h3>Call or Email the Clinic</h3>

              <p>
                Our clinic team can assist with appointment requests, walk-in
                availability, patient inquiries, and general clinic information.
              </p>

              <a
                href={`tel:${SITE_INFO.phoneLink}`}
                className="contact-main-phone"
              >
                <FaPhoneAlt />
                {SITE_INFO.phone}
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="contact-main-email"
              >
                <FaEnvelope />
                {SITE_INFO.email}
              </a>
            </div>

            <aside className="care-contact-side-panel">
              <h3>Clinic Hours</h3>

              <div className="contact-side-line">
                <FaClock />
                <span>
                  {SITE_INFO.hours.weekdays}
                  <br />
                  {SITE_INFO.hours.saturday}
                  <br />
                  {SITE_INFO.hours.sunday}
                </span>
              </div>

              <div className="contact-side-note">
                <FaWalking />
                <span>
                  Walk-ins are welcome. Please call ahead to confirm current
                  availability.
                </span>
              </div>
            </aside>
          </div>

          <div className="care-location-card">
            <div className="care-location-content">
              <span className="section-label">Our Location</span>

              <h3>Visit Care First Medical Clinic</h3>

              <p>
                Located in Airdrie, Alberta. Please use the map below for
                directions to the clinic.
              </p>

              <div className="map-address-pill">
                <FaMapMarkerAlt />
                <span>{SITE_INFO.address}</span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                target="_blank"
                rel="noreferrer"
                className="map-direction-btn"
              >
                <FaMapMarkerAlt />
                Open in Google Maps
              </a>
            </div>

            <div className="map-section">
              <iframe
                title="Care First Medical Clinic Map"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}