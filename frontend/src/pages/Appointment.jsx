import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaCalendarCheck,
  FaWalking,
} from "react-icons/fa";

import heroImage from "../assets/banners/shutterstock_1122624086.jpg";
import { SITE_INFO } from "../data/siteInfo";

export default function Appointment() {
  return (
    <>
      <section className="care-appointment-hero">
        <img
          src={heroImage}
          alt="Care First Medical Clinic appointments"
          className="care-appointment-hero-image"
        />

        <div className="care-appointment-hero-overlay" />

        <div className="care-appointment-hero-content">
          <span>
            <FaCalendarCheck />
            Appointments & Walk-Ins
          </span>

          <h1>Book Your Visit With Care First</h1>

          <p>
            Call the clinic for appointment requests, walk-in availability, new
            patient information, and general inquiries.
          </p>
        </div>
      </section>

      <section className="care-appointment-section">
        <div className="care-appointment-wrapper">
          <div className="care-appointment-header">
            <span className="section-label center">Patient Information</span>
            <h2>Simple Ways to Contact the Clinic</h2>
            <p>
              Please contact Care First Medical Clinic directly for the most
              current appointment and walk-in availability.
            </p>
          </div>

          <div className="care-appointment-layout-clean">
            <div className="care-appointment-main-card">
              <div className="care-appointment-icon large">
                <FaPhoneAlt />
              </div>

              <h3>Call to Book or Ask About Walk-Ins</h3>

              <p>
                Our clinic team can help with appointment requests, provider
                availability, walk-in questions, and new patient information.
              </p>

              <a
                href={`tel:${SITE_INFO.phoneLink}`}
                className="appointment-main-phone"
              >
                <FaPhoneAlt />
                {SITE_INFO.phone}
              </a>

              <a
                href={`mailto:${SITE_INFO.email}`}
                className="appointment-main-email"
              >
                <FaEnvelope />
                {SITE_INFO.email}
              </a>
            </div>

            <aside className="care-appointment-side-panel">
              <h3>Clinic Hours</h3>

              <div className="appointment-side-line">
                <FaClock />
                <span>
                  {SITE_INFO.hours.weekdays}
                  <br />
                  {SITE_INFO.hours.saturday}
                  <br />
                  {SITE_INFO.hours.sunday}
                </span>
              </div>

              <div className="appointment-side-note">
                Walk-ins are welcome. Please call ahead to confirm current
                availability.
              </div>
            </aside>
          </div>

          <div className="care-appointment-steps">
            <div>
              <FaPhoneAlt />
              <strong>1. Call Clinic</strong>
              <span>Confirm appointment or walk-in availability.</span>
            </div>

            <div>
              <FaUserPlus />
              <strong>2. Share Details</strong>
              <span>Ask about registration or patient information.</span>
            </div>

            <div>
              <FaWalking />
              <strong>3. Visit Clinic</strong>
              <span>Arrive during confirmed clinic availability.</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}