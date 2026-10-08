import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

export function Orbit() {
  return (
    <div className="helio-orbit" aria-label="A globally connected cloud orbit">
      <div className="helio-orbit-grid" />
      <svg
        viewBox="0 0 600 520"
        className="helio-orbit-lines"
        aria-hidden="true"
      >
        <ellipse
          cx="310"
          cy="260"
          rx="240"
          ry="83"
          transform="rotate(-32 310 260)"
        />
        <ellipse
          cx="310"
          cy="260"
          rx="240"
          ry="130"
          transform="rotate(43 310 260)"
        />
        <circle cx="310" cy="260" r="181" />
        <path d="M35 260h540M310 23v474" strokeDasharray="3 7" />
        <circle className="helio-orbit-node" cx="124" cy="340" r="14" />
        <circle className="helio-orbit-node light" cx="490" cy="200" r="11" />
        <circle className="helio-orbit-node light" cx="386" cy="85" r="7" />
      </svg>
      <div className="helio-globe">
        <div className="helio-globe-latitudes" />
        <div className="helio-globe-longitudes" />
      </div>
      <span className="helio-orbit-coordinate top">
        eu-west-1
        <br />
        <b>12ms</b>
      </span>
      <span className="helio-orbit-coordinate bottom">
        us-east-1
        <br />
        <b>8ms</b>
      </span>
      <div className="helio-orbit-status">
        <span />
        All regions operational <Check size={12} />
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="helio-hero">
      <div className="helio-hero-copy">
        <a className="helio-release" href="#helio-platform">
          <span>New</span> Meet the next generation of Helio{" "}
          <ArrowRight size={13} />
        </a>
        <h1>
          Less friction.
          <br />
          More liftoff.
        </h1>
        <p>
          The cloud for people who build.
          <br />
          Deploy in seconds. Scale without limits.
          <br />
          Keep your focus on what comes next.
        </p>
        <div className="helio-actions">
          <a className="helio-primary" href="#helio-build">
            Deploy your first project <ArrowUpRight size={18} />
          </a>
          <a href="#helio-platform">
            Explore the platform <ArrowRight size={17} />
          </a>
        </div>
        <div className="helio-hero-proof">
          <span>
            <Check size={13} />
            No credit card required
          </span>
          <span>
            <Check size={13} />
            Start free, stay in control
          </span>
        </div>
      </div>
      <Orbit />
    </section>
  );
}
