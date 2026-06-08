import { Link } from "react-router-dom";
import {
  Phone,
  MapPin,
  Clock3,
  UserPlus,
  HeartPulse,
  Stethoscope,
  ShieldCheck,
  Baby,
} from "lucide-react";

import heroImg from "../assets/banners/asset-generation-bc4c827a-7af7-4e53-bfe8-fa00bc15c284-2.png";
import { SITE_INFO } from "../data/siteInfo";

const marqueeItems = [
  "Accepting New Patients",
  "Family Medicine",
  "Walk-In Medical Care",
  "Preventive Healthcare",
  "Annual Physical Examinations",
  "Women's Health",
  "Men's Health",
  "Paediatric Care",
  "Senior & Elderly Care",
  "Chronic Disease Management",
  "Mental Health Therapy",
  "Physiotherapy Services",
  "Respiratory Therapy",
  "Home Care Support",
  "Health Screening Programs",
  "Immunisations & Vaccinations",
  "Professional Driver Medical Exams",
  "Pharmacy Services",
  "Medication Management",
  "Patient Wellness Programs",
];
const services = [
  { label: "Family Medicine", icon: <Stethoscope size={18} /> },
  { label: "Walk-In Care", icon: <HeartPulse size={18} /> },
  { label: "Mental Health", icon: <ShieldCheck size={18} /> },
  { label: "Physiotherapy", icon: <Baby size={18} /> },
  { label: "Pharmacy Services", icon: <HeartPulse size={18} /> },
  { label: "Home Care", icon: <ShieldCheck size={18} /> },
];

export default function Hero() {
  return (
    <>
      <section className="doctors-marquee">
        <div className="doctors-marquee-track">
          {marqueeItems.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </section>

      <section className="care-hero-split">
        <div className="care-hero-split-bg">
          <img src={heroImg} alt="Care First Medical Clinic" />
          <div className="care-hero-split-overlay" />
        </div>

        <div className="care-hero-split-inner">
          <aside className="care-hero-clinic-card">
            <span className="care-hero-card-label">
              <HeartPulse size={16} />
              Clinic Information
            </span>

            <h3>Care First Medical Clinic</h3>

            <div className="care-clinic-line">
              <Phone size={19} />
              <div>
                <strong>Phone</strong>
                <a href={`tel:${SITE_INFO.phoneLink}`}>
                  <span>{SITE_INFO.phone}</span>
                </a>
              </div>
            </div>

            <div className="care-clinic-line">
              <MapPin size={19} />
              <div>
                <strong>Location</strong>
                <span>{SITE_INFO.address}</span>
              </div>
            </div>

            <div className="care-clinic-line">
              <Clock3 size={19} />
              <div>
                <strong>Clinic Hours</strong>
                <span>
                  {SITE_INFO.hours.weekdays}
                  <br />
                  {SITE_INFO.hours.saturday}
                  <br />
                  {SITE_INFO.hours.sunday}
                </span>
              </div>
            </div>

            <div className="care-clinic-note">
              Walk-ins welcome. Please call ahead to confirm current
              availability.
            </div>
          </aside>

          <div className="care-hero-main-content">
            <span className="care-hero-main-badge">
              <UserPlus size={16} />
              Accepting New Patients
            </span>

            <h1>
              Your Community Healthcare
              <br />
              Destination in Airdrie
            </h1>

            <p>
              Accessible, compassionate, and patient-focused medical care
              for children, adults, seniors, and families.
            </p>

            <div className="care-hero-main-actions">
              <Link to="/appointment" className="btn primary">
                Book Appointment
              </Link>

              <Link to="/contact" className="btn secondary">
                Contact Clinic
              </Link>
            </div>
          </div>
        </div>

        <div className="care-hero-service-strip">
          {services.map((service) => (
            <div className="care-hero-service-item" key={service.label}>
              {service.icon}
              <span>{service.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}