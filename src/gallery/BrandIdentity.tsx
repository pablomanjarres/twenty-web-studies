import type { Brand } from "../shared/types";
import { BrandLogo } from "../shared/BrandLogo";
import { presentationColors } from "../shared/brand-colors";
function LogoSpecimen({
  brand,
  invert = false,
}: {
  brand: Brand;
  invert?: boolean;
}) {
  const { ink, paper } = presentationColors(brand);
  return (
    <div
      className="kit-specimen"
      style={{
        background: invert ? ink : paper,
        color: invert ? paper : ink,
        fontFamily: brand.fonts.heading,
      }}
    >
      <BrandLogo brand={brand} />
      <span>{invert ? "Reverse lockup" : "Primary lockup"}</span>
    </div>
  );
}
export function BrandIdentity({ brand }: { brand: Brand }) {
  const { ink, paper } = presentationColors(brand);
  return (
    <section className="kit-section">
      <div className="kit-section-heading">
        <h2>The identity</h2>
        <p>{brand.logoMeaning}</p>
      </div>
      <div className="kit-logo-grid">
        <LogoSpecimen brand={brand} />
        <LogoSpecimen brand={brand} invert />
      </div>
      <div className="kit-symbol-row">
        <div style={{ color: ink }}>
          <BrandLogo brand={brand} symbolOnly />
          <span>Symbol</span>
        </div>
        <div className="kit-icon" style={{ background: ink, color: paper }}>
          <BrandLogo brand={brand} symbolOnly />
        </div>
        <p>
          Keep clear space equal to one quarter of the symbol height. Use the
          single-color mark on busy backgrounds.
        </p>
      </div>
    </section>
  );
}
