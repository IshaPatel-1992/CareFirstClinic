import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="page-hero">
        <h1>About Bethel Medical Centres</h1>
        <p>
          Compassionate, family-focused healthcare for Strathmore and nearby communities.
        </p>
      </section>

      <main className="about-wrapper">
        <section className="about-intro">
          <div>
            <h2>Your Health is Our Priority</h2>
            <p>
              Bethel Medical Centres provides modern, reliable, and patient-centered healthcare
              for individuals and families of all ages.
            </p>
            <p>
              Our goal is to make healthcare easier to access, comfortable to experience, and
              supportive for long-term wellness.
            </p>
          </div>

          <div className="about-highlight">
            <h3>Accepting New Patients</h3>
            <p>
              We welcome you and your family for primary care, preventive care, annual physicals,
              children’s health, women’s health, chronic disease management, and immunizations.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>What We Offer</h2>

          <div className="about-cards">
            <div className="about-card">
              <h3>Family Medicine</h3>
              <p>Ongoing healthcare support for patients of all ages.</p>
            </div>

            <div className="about-card">
              <h3>Preventive Care</h3>
              <p>Annual physicals, screenings, vaccinations, and wellness exams.</p>
            </div>

            <div className="about-card">
              <h3>Children’s Health</h3>
              <p>Dedicated care for infants, children, and adolescents.</p>
            </div>

            <div className="about-card">
              <h3>Chronic Care</h3>
              <p>Support for diabetes, hypertension, asthma, and other ongoing conditions.</p>
            </div>
          </div>
        </section>

        <section className="cta-strip">
          <div>
            <h2>Book Your Appointment Today</h2>
            <p>Call us or visit our appointment page to get started.</p>
          </div>

          <Link to="/appointment" className="btn primary">
            Book Appointment
          </Link>
        </section>
      </main>
    </>
  );
}