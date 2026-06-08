import {
  FaUserMd,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStethoscope,
  FaHeart,
  FaClock,
} from "react-icons/fa";

import heroImg from "../assets/banners/shutterstock_2270845943.jpg";

const doctors = [
  {
    name: "Doctor Name Coming Soon",
    title: "Family Physician",
    credentials: "Professional details will be updated soon.",
    description:
      "Care First Medical Clinic is preparing updated physician profiles and clinic information.",
  },
  {
    name: "Doctor Name Coming Soon",
    title: "Family Physician",
    credentials: "Professional details will be updated soon.",
    description:
      "Please contact the clinic for current physician availability and appointment information.",
  },
];

export default function Doctors() {
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

      <section className="care-doctors-hero">
        {/* <video className="care-doctors-hero-video" autoPlay muted loop playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video> */ }

        <img
          src={heroImg}
          alt="Care First Medical Clinic doctors and healthcare team"
          className="care-doctors-hero-image"
        />


        <div className="care-doctors-hero-overlay" />

        <div className="care-doctors-hero-content">
          <span>
            <FaStethoscope /> Care First Medical Team
          </span>

          <h1>Meet Our Doctors</h1>

          <p>
            Caring family physicians supporting patients and families with
            accessible, respectful, and patient-focused healthcare.
          </p>
        </div>
      </section>

      <section className="care-doctors-section">
        <div className="care-doctors-wrapper">
          <div className="care-doctors-intro-card">
            <div>
              <span className="section-label">Trusted Family Care</span>

              <h2>Compassionate care for every stage of life</h2>

              <p>
                Our physicians provide family medicine and primary healthcare for
                individuals and families in Airdrie. Service availability,
                appointment access, and walk-in care can be confirmed by
                contacting the clinic.
              </p>
            </div>

            <div className="care-doctors-intro-badge">
              <FaHeart />
              <strong>Patient-Focused Care</strong>
              <span>Family medicine, walk-ins, and ongoing health support.</span>
            </div>
          </div>

          <div className="care-doctors-grid">
            {doctors.map((doctor) => (
              <article className="care-doctor-card" key={doctor.name}>
                <div className="care-doctor-card-top">
                  <div className="care-doctor-avatar">
                    <FaUserMd />
                  </div>

                  <div className="care-doctor-title">
                    <span>{doctor.title}</span>
                    <h3>{doctor.name}</h3>
                    <p>{doctor.credentials}</p>
                  </div>
                </div>

                <p className="care-doctor-description">
                  {doctor.description}
                </p>

                <div className="care-doctor-contact">
                  <p>
                    <FaPhoneAlt />
                    <span>999-999-9999</span>
                  </p>

                  <p>
                    <FaEnvelope />
                    <span>Email Coming Soon</span>
                  </p>

                  <p>
                    <FaMapMarkerAlt />
                    <span>37 - 1301 8th St SW, Airdrie, Alberta</span>
                  </p>

                  <p>
                    <FaClock />
                    <span>Please call for clinic hours and availability.</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}