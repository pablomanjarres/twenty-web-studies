import type { MenuFeature } from "./data";

export function FeaturedPlate({ feature }: { feature: MenuFeature }) {
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
