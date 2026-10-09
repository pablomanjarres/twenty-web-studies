import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function JourneyNavigation() {
  return (
    <header className="wf-header">
      <a href="#atlas" aria-label="Wayfarer field journeys">
        <BrandLogo brand={brand} />
      </a>
      <span>Small groups. Longer stories.</span>
      <nav aria-label="Main">
        <a href="#field-notes">Field notes</a>
        <a href="#guide">Our way of walking</a>
      </nav>
      <span className="wf-edition">Walking journeys · 2027</span>
    </header>
  );
}
