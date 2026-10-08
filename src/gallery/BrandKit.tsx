import { KitChromeHeader, KitChromeFooter } from "./KitChrome";
import { Download } from "lucide-react";
import type { Brand } from "../shared/types";
import "./brand-kit.css";
import "./brand-responsive.css";
import { BrandIdentity } from "./BrandIdentity";
import { presentationColors } from "../shared/brand-colors";
export function BrandKit({ brand }: { brand: Brand }) {
  const { ink } = presentationColors(brand);
  const base = `${import.meta.env.BASE_URL}brand-kits/${brand.slug}/`;
  return (
    <div
      className="brand-kit"
      style={
        {
          "--kit-ink": ink,
          "--kit-accent": brand.colors[2]?.hex,
          "--kit-display": `'${brand.fonts.heading}'`,
          "--kit-body": `'${brand.fonts.body}'`,
        } as React.CSSProperties
      }
    >
      <KitChromeHeader brand={brand} />
      <main>
        <section className="kit-intro">
          <span>{brand.category}</span>
          <h1>{brand.name}</h1>
          <p>{brand.tagline}</p>
        </section>
        <section className="kit-story">
          <h2>A brand with a purpose.</h2>
          <p>{brand.description}</p>
        </section>
        <BrandIdentity brand={brand} />
        <section className="kit-section">
          <div className="kit-section-heading">
            <h2>Color system</h2>
            <p>A deliberate palette for the product and its communications.</p>
          </div>
          <div className="kit-colors">
            {brand.colors.map((color) => (
              <div key={color.hex}>
                <div style={{ background: color.hex }} />
                <h3>{color.name}</h3>
                <code>{color.hex.toUpperCase()}</code>
              </div>
            ))}
          </div>
        </section>
        <section className="kit-section">
          <div className="kit-section-heading">
            <h2>Typography</h2>
            <p>{brand.artDirection}</p>
          </div>
          <div className="kit-type-grid">
            <div>
              <span>Display / {brand.fonts.heading}</span>
              <p style={{ fontFamily: brand.fonts.heading }}>
                Aa Bb Cc
                <br />
                Design with purpose.
              </p>
            </div>
            <div>
              <span>Body / {brand.fonts.body}</span>
              <p style={{ fontFamily: brand.fonts.body }}>
                A clear voice. A considered experience.
              </p>
              <div style={{ fontFamily: brand.fonts.body }}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ
                <br />
                abcdefghijklmnopqrstuvwxyz
                <br />
                0123456789
              </div>
            </div>
          </div>
        </section>
        <section className="kit-download">
          <div>
            <h2>Make it yours.</h2>
            <p>
              Vector logos, color tokens, typography guidance, and a visual
              brand sheet.
            </p>
          </div>
          <div>
            <a href={`${base}brand-kit.pdf`} download>
              <Download size={17} /> Brand sheet PDF
            </a>
            <a href={`${base}logo-package.zip`} download>
              <Download size={17} /> Logo package
            </a>
          </div>
        </section>
      </main>
      <KitChromeFooter brand={brand} />
    </div>
  );
}
