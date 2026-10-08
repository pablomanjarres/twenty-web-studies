import { FileText, ArrowUpRight, MoreHorizontal } from "lucide-react";
import { asset } from "../data";

export function Patient() {
  return (
    <section className="pulse-patient" id="patient">
      <div className="pulse-section-heading">
        <h2>Next in your care</h2>
        <MoreHorizontal size={18} />
      </div>
      <div className="pulse-patient-profile">
        <img src={asset("patient")} alt="Olivia Martinez" />
        <h3>Olivia Martinez</h3>
        <p>Patient since March 2024</p>
        <span>
          <i /> Checked in
        </span>
      </div>
      <div className="pulse-patient-details">
        <div>
          <span>Patient ID</span>
          <strong>#PT-2048</strong>
        </div>
        <div>
          <span>Age / Gender</span>
          <strong>32 / Female</strong>
        </div>
        <div>
          <span>Appointment</span>
          <strong>09:00 – 09:30</strong>
        </div>
        <div>
          <span>Visit type</span>
          <strong>Annual wellness</strong>
        </div>
      </div>
      <div className="pulse-visit-note">
        <FileText size={15} />
        <p>
          Visit note
          <span>
            Annual wellness review.
            <br />
            Patient intake is ready.
          </span>
        </p>
      </div>
      <a href="#appointments" className="pulse-patient-button">
        View today’s schedule <ArrowUpRight size={15} />
      </a>
    </section>
  );
}
