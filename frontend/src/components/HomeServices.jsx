import {
  Stethoscope,
  ShieldPlus,
  Baby,
  HeartPulse,
  Activity,
  Syringe,
  Brain,
  Dumbbell,
  Pill,
  Home,
  Wind,
  UserRound,
} from "lucide-react";

const services = [
  {
    title: "Family & Walk-In Care",
    text: "Family medicine, walk-in visits, general health concerns, and ongoing primary care support.",
    icon: <Stethoscope size={28} />,
  },
  {
    title: "Preventive Healthcare",
    text: "Annual physicals, preventive screening, wellness checks, and health education.",
    icon: <ShieldPlus size={28} />,
  },
  {
    title: "Women’s & Men’s Health",
    text: "Health support for women’s wellness, men’s health concerns, and routine care needs.",
    icon: <UserRound size={28} />,
  },
  {
    title: "Paediatric & Elderly Care",
    text: "Care support for children, seniors, elderly patients, and families across all stages of life.",
    icon: <Baby size={28} />,
  },
  {
    title: "Chronic Care Management",
    text: "Ongoing support for chronic health conditions and long-term wellness needs.",
    icon: <Activity size={28} />,
  },
  {
    title: "Immunisations & Vaccinations",
    text: "Routine and seasonal immunisation and vaccination services for eligible patients.",
    icon: <Syringe size={28} />,
  },
  {
    title: "Mental Health Therapy",
    text: "Supportive therapy services planned for emotional wellness and mental health needs.",
    icon: <Brain size={28} />,
  },
  {
    title: "Physiotherapy Services",
    text: "Mobility, recovery, pain management, and physical wellness support services.",
    icon: <Dumbbell size={28} />,
  },
  {
    title: "Respiratory Therapy",
    text: "Respiratory health support and therapy services planned for patient care needs.",
    icon: <Wind size={28} />,
  },
  {
    title: "Pharmacy Services",
    text: "Pharmacy support, medication management, and patient convenience services.",
    icon: <Pill size={28} />,
  },
  {
    title: "Home Care Support",
    text: "Home care support services planned to help patients and families with ongoing care needs.",
    icon: <Home size={28} />,
  },
  {
    title: "Driver Medical Exams",
    text: "Professional driver medical examination support for eligible patients.",
    icon: <HeartPulse size={28} />,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="care-services-section">
      <div className="care-services-wrapper">
        <div className="care-services-header">
          <span className="section-label center">Our Services</span>

          <h2>Complete Healthcare Support in One Place</h2>

          <p>
            Care First Medical Clinic is preparing a wide range of healthcare
            services for individuals and families. Service availability may vary
            and can be confirmed by contacting the clinic.
          </p>
        </div>

        <div className="care-services-grid no-images">
          {services.map((service, index) => (
            <div
              className={`care-service-card simple-service-card ${
                index === 0 || index === 6 || index === 9
                  ? "care-service-card-featured"
                  : ""
              }`}
              key={service.title}
            >
              <div className="care-service-simple-icon">{service.icon}</div>

              <div className="care-service-content simple">
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