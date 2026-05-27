import {
  MapPin,
  Clock,
  UserRoundCheck,
  ClipboardCheck,
  HeartHandshake,
  PhoneCall,
} from "lucide-react";

const careFeatures = [
  {
    title: "Accessible Care",
    text: "Walk-in availability and appointment support for everyday medical concerns.",
    icon: <Clock size={34} />,
  },
  {
    title: "Clear Communication",
    text: "Helpful clinic guidance for appointments, follow-ups, and general inquiries.",
    icon: <PhoneCall size={34} />,
  },
  {
    title: "Family-Friendly Setting",
    text: "A welcoming environment for children, adults, seniors, and families.",
    icon: <UserRoundCheck size={34} />,
  },
  {
    title: "Continuity of Care",
    text: "Support for checkups, results, referrals, and ongoing health needs.",
    icon: <ClipboardCheck size={34} />,
  },
  {
    title: "Convenient Location",
    text: "Located in Airdrie near 8th St SW and Yankee Valley Blvd.",
    icon: <MapPin size={34} />,
  },
  {
    title: "Compassionate Approach",
    text: "Care delivered with respect, comfort, and patient access in mind.",
    icon: <HeartHandshake size={34} />,
  },
];

export default function HomeDepartments() {
  return (
    <section id="why-us" className="care-departments-section">
      <div className="care-departments-wrapper">
        <div className="care-departments-header">
          <span className="section-label center">Patient Experience</span>

          <h2>Designed to Make Healthcare Easier to Access</h2>

          <p>
            Care First Medical Clinic focuses on convenient access, clear
            communication, and supportive care for patients and families in
            Airdrie.
          </p>
        </div>

        <div className="care-departments-grid">
          {careFeatures.map((item, index) => (
            <div
              className={`care-department-card ${
                index === 1 || index === 4 ? "featured-card" : ""
              }`}
              key={item.title}
            >
              <div className="care-department-icon">{item.icon}</div>

              <div className="care-department-content">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}