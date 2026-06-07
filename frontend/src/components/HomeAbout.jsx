import { Link } from "react-router-dom";
import {
  HeartPulse,
  Users,
  Stethoscope,
  ShieldPlus,
  Brain,
  Dumbbell,
  Home,
  Pill,
} from "lucide-react";

const careHighlights = [
  {
    title: "Family & Walk-In Care",
    text: "Accessible primary care and walk-in support for common health concerns.",
    icon: <Stethoscope size={28} />,
  },
  {
    title: "Mental Health Support",
    text: "Therapy and wellness support services planned for patient care needs.",
    icon: <Brain size={28} />,
  },
  {
    title: "Physiotherapy Services",
    text: "Support for mobility, recovery, pain management, and physical wellness.",
    icon: <Dumbbell size={28} />,
  },
  {
    title: "Pharmacy & Home Care",
    text: "Additional healthcare support services planned for patient convenience.",
    icon: <Pill size={28} />,
  },
];

export default function HomeAbout() {
  return (
    <section id="about" className="care-about-section">
      <div className="care-about-wrapper">
        <div className="care-about-header">
          <span className="section-label center">About Care First</span>

          <h2>A Community Healthcare Centre for Airdrie Families</h2>

          <p>
            Care First Medical Clinic is being developed as an accessible,
            patient-focused healthcare centre offering family medicine, walk-in
            care, wellness services, and supportive health programs.
          </p>
        </div>

        <div className="care-about-layout">
          <div className="care-about-main-card">
            <div className="care-about-icon">
              <HeartPulse size={44} />
            </div>

            <span className="care-about-badge">
              Care First Medical Clinic
            </span>

            <h3>More Than a Clinic — Care That Connects</h3>

            <p>
              Our goal is to make healthcare easier to access by bringing
              together medical care, preventive health, therapy services,
              pharmacy support, and wellness-focused programs in one convenient
              location.
            </p>

            <p>
              Located in Airdrie near 8th St SW and Yankee Valley Blvd, Care
              First Medical Clinic is designed to support children, adults,
              seniors, and families with respectful and compassionate care.
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
              <Users size={22} />
              <div>
                <strong>Walk-Ins & New Patients</strong>
                <span>
                  Walk-ins welcome. New patients accepted. Please call ahead to
                  confirm provider availability and clinic hours.
                </span>
              </div>
            </div>

            <div className="care-info-line">
              <ShieldPlus size={22} />
              <div>
                <strong>Integrated Health Services</strong>
                <span>
                  Planned services include family medicine, mental health,
                  physiotherapy, respiratory therapy, pharmacy, and home care
                  support.
                </span>
              </div>
            </div>

            <div className="care-info-line">
              <Home size={22} />
              <div>
                <strong>Convenient Airdrie Location</strong>
                <span>37 - 1301 8th St SW, Airdrie, Alberta</span>
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