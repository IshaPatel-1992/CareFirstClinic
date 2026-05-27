import { Stethoscope } from "lucide-react";

export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="service-card">
      <div className="service-icon">
        {icon || <Stethoscope size={34} />}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}