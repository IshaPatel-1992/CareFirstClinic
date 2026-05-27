import { Link } from "react-router-dom";
import {
  MapPin,
  HeartPulse,
  Users,
  Stethoscope,
  ShieldPlus,
  PhoneCall,
} from "lucide-react";

const careHighlights = [
  {
    title: "Family Medicine Clinic",
    text: "Primary care support for individuals and families.",
    icon: <Stethoscope size={28} />,
  },
  {
    title: "Walk-In Access",
    text: "Walk-ins are welcome for care inquiries and common medical concerns.",
    icon: <PhoneCall size={28} />,
  },
  {
    title: "Family-Focused Care",
    text: "Healthcare support for children, adults, seniors, and families.",
    icon: <Users size={28} />,
  },
  {
    title: "Preventive Care",
    text: "Support for checkups, screenings, immunizations, and wellness needs.",
    icon: <ShieldPlus size={28} />,
  },
];

export default function HomeAbout() {
  return (
    <section id="about" className="care-about-section">
      <div className="care-about-wrapper">
        <div className="care-about-header">
          <span className="section-label center">About Care First</span>

          <h2>Healthcare That Starts With Care</h2>

          <p>
            Care First Medical Clinic is a family medicine and walk-in clinic in
            Airdrie, focused on accessible, compassionate, and patient-centered
            care.
          </p>
        </div>

        <div className="care-about-layout">
          <div className="care-about-main-card">
            <div className="care-about-icon">
              <HeartPulse size={44} />
            </div>

            <span className="care-about-badge">Care First Medical Clinic</span>

            <h3>Your Health Comes First</h3>

            <p>
              Our clinic is built around making healthcare easier to access for
              individuals and families. We provide common family medicine,
              preventive care, walk-in support, and ongoing health guidance in a
              welcoming clinic environment.
            </p>

            <p>
              Located in Airdrie near 8th St SW and Yankee Valley Blvd, Care
              First Medical Clinic is here to support patients with respectful,
              reliable, and compassionate care.
            </p>

            <div className="care-about-actions">
              <Link to="/appointment" className="btn primary">
                Book Appointment
              </Link>

              <Link to="/contact" className="btn secondary dark">
                Contact Clinic
              </Link>
            </div>
          </div>

          <div className="care-about-info-panel">
            <div className="care-info-line">
              <Stethoscope size={22} />
              <div>
                <strong>Walk-Ins Welcome</strong>
                <span>Please call the clinic for current hours and availability.</span>
              </div>
            </div>

            <div className="care-info-line">
              <MapPin size={22} />
              <div>
                <strong>Clinic Location</strong>
                <span>37 - 1301 8th St SW, Airdrie, Alberta</span>
              </div>
            </div>

            <div className="care-info-line">
              <HeartPulse size={22} />
              <div>
                <strong>Patient-Focused Care</strong>
                <span>Modern healthcare with a caring, family-first approach.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="care-highlight-grid">
          {careHighlights.map((item) => (
            <div className="care-highlight-card" key={item.title}>
              <div className="care-highlight-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}