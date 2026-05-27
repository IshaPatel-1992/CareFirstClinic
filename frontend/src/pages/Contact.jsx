import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWalking,
} from "react-icons/fa";

export default function Contact() {
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
              Clinic details are being finalized. Please call the clinic for
              current hours, availability, and appointment information.
            </p>
          </div>

          <div className="care-contact-grid">
            <div className="care-contact-card primary-card">
              <div className="care-contact-icon">
                <FaPhoneAlt />
              </div>

              <h3>Call the Clinic</h3>

              <p>
                For appointments, walk-in availability, and general clinic
                inquiries, please contact the clinic directly.
              </p>

              <a href="tel:19999999999" className="contact-action-btn phone-btn">
                <FaPhoneAlt />
                Call Clinic
              </a>

              <div className="care-contact-detail">
                <strong>Phone</strong>
                <span>999-999-9999</span>
              </div>
            </div>

            <div className="care-contact-card">
              <div className="care-contact-icon">
                <FaEnvelope />
              </div>

              <h3>Email</h3>

              <p>
                Email details will be updated once confirmed by the clinic.
              </p>

              <div className="care-contact-detail">
                <strong>Email</strong>
                <span>Email Coming Soon</span>
              </div>
            </div>

            <div className="care-contact-card">
              <div className="care-contact-icon">
                <FaClock />
              </div>

              <h3>Clinic Hours</h3>

              <p>
                Clinic hours are not finalized yet. Please call before visiting.
              </p>

              <div className="care-contact-detail">
                <strong>Hours</strong>
                <span>Hours will be updated soon</span>
              </div>
            </div>

            <div className="care-contact-card">
              <div className="care-contact-icon">
                <FaWalking />
              </div>

              <h3>Walk-Ins</h3>

              <p>
                Walk-ins are welcome. Availability may vary depending on clinic
                schedule and provider availability.
              </p>

              <div className="care-contact-detail">
                <strong>Status</strong>
                <span>Walk-Ins Welcome</span>
              </div>
            </div>
          </div>

          <div className="care-location-card">
            <div className="care-location-content">
              <span className="section-label">Our Location</span>

              <h3>Visit Care First Medical Clinic</h3>

              <p>
                Located at 37 - 1301 8th St SW, Airdrie, Alberta, near the
                corner of 8th St and Yankee Valley Blvd.
              </p>

              <div className="map-address-pill">
                <FaMapMarkerAlt />
                <span>37 - 1301 8th St SW, Airdrie, Alberta</span>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=37%20-%201301%208th%20St%20SW%20Airdrie%20Alberta"
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
                src="https://www.google.com/maps?q=37%20-%201301%208th%20St%20SW%20Airdrie%20Alberta&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}