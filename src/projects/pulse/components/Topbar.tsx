import { useState } from "react";
import { Bell, Search, ChevronDown } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";
import { asset } from "../data";

export function Topbar({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (v: string) => void;
}) {
  const [notice, setNotice] = useState(false);
  return (
    <header className="pulse-topbar">
      <div>
        <BrandLogo brand={brand} />
        <span>Care, connected.</span>
      </div>
      <label className="pulse-search">
        <Search size={15} />
        <input
          aria-label="Search appointments"
          placeholder="Find a patient or appointment"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
      <div className="pulse-topbar-actions">
        <button aria-label="Notifications" onClick={() => setNotice(!notice)}>
          <Bell size={18} />
          <i />
        </button>
        <img src={asset("doctor")} alt="Dr. Sarah Chen" />
        <span>
          Dr. Sarah Chen <ChevronDown size={12} />
        </span>
      </div>
      {notice && (
        <div className="pulse-notice" role="status">
          <strong>Your care team is up to date.</strong>
          <p>Olivia Martinez checked in for her 9:00 appointment.</p>
        </div>
      )}
    </header>
  );
}
