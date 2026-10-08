import { ArrowUpRight, Check } from "lucide-react";
import { features } from "./data";

export function Platform() {
  return (
    <section className="helio-platform" id="helio-platform">
      <div className="helio-trusted">
        <span>Built for ambitious teams everywhere</span>
        <div>
          <b>Layers</b>
          <b>✳ Quotient</b>
          <b>orbit</b>
          <b>⊞ Circooles</b>
          <b>velox</b>
        </div>
      </div>
      <div className="helio-platform-title">
        <h2>
          Small beginnings.
          <br />
          Planet-sized possibilities.
        </h2>
        <p>
          Everything you need to go from
          <br />
          the first commit to your next million users.
        </p>
      </div>
      <div className="helio-feature-grid">
        {features.map((feature) => (
          <article key={feature.title}>
            <feature.icon size={28} />
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
            <span>{feature.label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section className="helio-pricing" id="helio-pricing">
      <div>
        <span className="helio-section-label">A place to start</span>
        <h2>Big ideas start small.</h2>
        <p>
          Build your first project for free. Find your momentum, then grow on
          your terms.
        </p>
      </div>
      <div className="helio-free">
        <div>
          <span>Developer</span>
          <strong>
            $0<small>/ month</small>
          </strong>
        </div>
        <ul>
          <li>
            <Check size={15} />
            Unlimited personal projects
          </li>
          <li>
            <Check size={15} />
            Global edge network
          </li>
          <li>
            <Check size={15} />
            100 GB bandwidth
          </li>
        </ul>
        <a className="helio-primary" href="#helio-build">
          Make something great <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
