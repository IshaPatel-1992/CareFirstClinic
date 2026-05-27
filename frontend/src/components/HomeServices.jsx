import {
  HeartPulse,
  Stethoscope,
  Baby,
  Syringe,
  Activity,
  ShieldPlus,
  ArrowUpRight,
} from "lucide-react";

import familyCareImg from "../assets/services/edited/bethel-family-medicine-card.webp";
import preventiveImg from "../assets/services/edited/bethel-preventive-health-card.webp";
import pediatricImg from "../assets/services/edited/bethel-pediatric.png";
import womenHealthImg from "../assets/services/edited/bethel-womens-health-card.png";
import chronicImg from "../assets/services/edited/bethel-services-chronic-disease-card.png";
import vaccineImg from "../assets/services/edited/bethel-flu-vaccination-immunization-card.png";

const services = [
  {
    title: "Family Medicine",
    text: "Primary healthcare and ongoing wellness support for individuals and families.",
    icon: <Stethoscope size={28} />,
    image: familyCareImg,
  },
  {
    title: "Preventive Health",
    text: "Annual physicals, wellness screenings, and preventive care services.",
    icon: <ShieldPlus size={28} />,
    image: preventiveImg,
  },
  {
    title: "Pediatric Care",
    text: "Compassionate healthcare support for infants, children, and adolescents.",
    icon: <Baby size={28} />,
    image: pediatricImg,
  },
  {
    title: "Women’s Health",
    text: "Women’s wellness exams, Pap tests, and family health support.",
    icon: <HeartPulse size={28} />,
    image: womenHealthImg,
  },
  {
    title: "Chronic Care",
    text: "Support for diabetes, hypertension, asthma, and ongoing conditions.",
    icon: <Activity size={28} />,
    image: chronicImg,
  },
  {
    title: "Immunizations",
    text: "Routine and seasonal vaccinations for eligible patients and families.",
    icon: <Syringe size={28} />,
    image: vaccineImg,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="care-services-section">
      <div className="care-services-wrapper">
        <div className="care-services-header">
          <span className="section-label center">Our Services</span>

          <h2>Healthcare Services Built Around Your Family</h2>

          <p>
            Care First Medical Clinic offers common family medicine and primary
            care services. Service availability may vary and can be confirmed by
            contacting the clinic.
          </p>
        </div>

        <div className="care-services-grid">
          {services.map((service, index) => (
            <div
              className={`care-service-card ${
                index === 1 || index === 4 ? "care-service-card-featured" : ""
              }`}
              key={service.title}
            >
              <div className="care-service-image-wrap">
                <img
                  src={service.image}
                  alt={service.title}
                  className="care-service-image"
                />

                <div className="care-service-overlay" />
              </div>

              <div className="care-service-content">
                <div className="care-service-top">
                  <div className="care-service-icon">{service.icon}</div>

                  <div className="care-service-arrow">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}