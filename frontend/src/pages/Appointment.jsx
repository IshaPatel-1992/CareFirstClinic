import {
  FaPhoneAlt,
  FaEnvelope,
  FaUserPlus,
  FaClock,
  FaClinicMedical,
  FaCalendarCheck,
  FaWalking,
} from "react-icons/fa";

import heroImage from "../assets/services/banners/shutterstock_2681519119.jpg";

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
            Please call Care First Medical Clinic for appointments, walk-in
            availability, clinic hours, and patient inquiries.
          </p>
        </div>
      </section>

      <section className="care-appointment-section">
        <div className="care-appointment-wrapper">
          <div className="care-appointment-header">
            <span className="section-label center">Patient Information</span>

            <h2>Simple Ways to Contact the Clinic</h2>

            <p>
              Online booking details are not confirmed yet. Please contact the
              clinic directly for current appointment availability.
            </p>
          </div>

          <div className="care-appointment-grid">
            <div className="care-appointment-card primary-card">
              <div className="care-appointment-icon">
                <FaPhoneAlt />
              </div>

              <h3>Book by Phone</h3>

              <p>
                Call the clinic for appointment requests, walk-in availability,
                and general patient inquiries.
              </p>

              <a
                href="tel:19999999999"
                className="appointment-action-btn phone-btn"
              >
                <FaPhoneAlt />
                Call Clinic
              </a>

              <div className="appointment-contact-info">
                <FaPhoneAlt />
                <span>999-999-9999</span>
              </div>
            </div>

            <div className="care-appointment-card">
              <div className="care-appointment-icon">
                <FaWalking />
              </div>

              <h3>Walk-Ins Welcome</h3>

              <p>
                Walk-ins are welcome. Please call ahead to confirm current
                hours and provider availability.
              </p>

              <div className="coming-soon">
                Availability may vary by clinic schedule.
              </div>
            </div>

            <div className="care-appointment-card">
              <div className="care-appointment-icon">
                <FaUserPlus />
              </div>

              <h3>New Patient Information</h3>

              <p>
                Patient registration details will be updated once confirmed by
                the clinic.
              </p>

              <div className="coming-soon">
                Please call for current patient information.
              </div>
            </div>

            <div className="care-appointment-card">
              <div className="care-appointment-icon">
                <FaClinicMedical />
              </div>

              <h3>Clinic Services</h3>

              <p>
                Family medicine, preventive care, pediatric care, women’s
                health, chronic care, and immunizations may be available.
              </p>

              <div className="clinic-hours">
                <FaClock />
                <span>Please call for clinic hours and availability.</span>
              </div>
            </div>

            <div className="care-appointment-card wide-card">
              <div className="care-appointment-icon">
                <FaEnvelope />
              </div>

              <h3>Email Information</h3>

              <p>
                Email contact details will be added once confirmed. For now,
                please call the clinic for appointment and patient inquiries.
              </p>

              <div className="appointment-contact-info">
                <FaEnvelope />
                <span>Email Coming Soon</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}