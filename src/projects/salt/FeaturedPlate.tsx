import type { MenuFeature } from "./data";

export function FeaturedPlate({ feature }: { feature: MenuFeature }) {
  // The parent spread is keyed on the selected menu, so the plate turns in on every switch.
  return (
    <figure className="sl-plate">
      <img src={feature.image} alt={feature.alt} width="1254" height="1254" />
      <figcaption>
        {feature.label}
        <span>{feature.title}</span>
        <small>{feature.note}</small>
      </figcaption>
    </figure>
  );
}
