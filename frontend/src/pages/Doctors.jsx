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

import { SITE_INFO } from "../data/siteInfo";

const doctors = [
  {
    name: "Dr. Nkechi Okoro",
    title: "Family Physician",
    credentials:
      "MRCGP Qualified | CFPC Certified | Nigeria & UK-Trained Physician",
    shortBio:
      "Dr. Okoro is a compassionate Family Physician with 14+ years of experience across Nigeria, the UK, and Canada.",
    fullBio:
      "Dr. Nkechi Okoro is a Nigeria and UK-trained, MRCGP qualified, and CFPC certified Family Physician with over 14 years of experience, now practicing in Alberta. She provides compassionate, patient-centred care across primary care, chronic disease management, mental health, women’s and men’s health, adolescent care, contraceptive services, and minor procedures. Dr. Okoro is committed to creating a safe, respectful space where patients feel heard, supported, and cared for.",
    focus: [
      "Primary Care",
      "Chronic Disease Management",
      "Mental Health",
      "Women’s & Men’s Health",
      "Minor Procedures",
    ],
  },
  {
    name: "Dr. Emonena (Charles) Orhadje",
    title: "Family Physician",
    credentials: "MD | Family Medicine | 20+ Years of Experience",
    shortBio:
      "Dr. Orhadje has over 20 years of experience in family medicine, general practice, and emergency care.",
    fullBio:
      "Dr. Emonena Orhadje was born in Delta State, Nigeria, and completed his medical studies at the University of Benin. He has practiced medicine for over 20 years across Nigeria, Saint Lucia, Saskatchewan, and Alberta. His experience includes family medicine, general practice, and emergency medicine. Dr. Orhadje enjoys putting patients at ease with humour and involving them in their healthcare decisions. His areas of focus include mental health, men’s health, and family medicine.",
    focus: ["Family Medicine", "Mental Health", "Men’s Health", "Emergency Care"],
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

                <p className="care-doctor-description">{doctor.shortBio}</p>

                <div className="care-doctor-focus">
                  {doctor.focus.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

                <details className="care-doctor-details">
                  <summary>Read Full Bio</summary>
                  <p>{doctor.fullBio}</p>
                </details>

                <div className="care-doctor-contact">
                  <p>
                    <FaPhoneAlt />
                    <a href={`tel:${SITE_INFO.phoneLink}`}>{SITE_INFO.phone}</a>
                  </p>

                  <p>
                    <FaEnvelope />
                    <a href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a>
                  </p>

                  <p>
                    <FaMapMarkerAlt />
                    <span>{SITE_INFO.address}</span>
                  </p>

                  <p>
                    <FaClock />
                    <span>
                      {SITE_INFO.hours.weekdays}
                      <br />
                      {SITE_INFO.hours.saturday}
                      <br />
                      {SITE_INFO.hours.sunday}
                    </span>
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