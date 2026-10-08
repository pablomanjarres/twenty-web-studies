import { MapPin } from "lucide-react";
import { Booking } from "./Booking";
import { asset } from "../data";

export function Hero() {
  return (
    <section className="vestra-hero" id="home">
      <img
        className="vestra-panorama"
        src={asset("mountains")}
        alt="Sunlight falling across a dramatic alpine mountain landscape"
      />
      <div className="vestra-hero-shade" />
      <div className="vestra-hero-content">
        <span>
          <MapPin size={13} /> South Tyrol, Italian Alps
        </span>
        <h1>
          A little closer
          <br />
          to nature.
        </h1>
        <p>
          A place to pause. A place to feel.
          <br />
          An alpine retreat, beautifully unhurried.
        </p>
      </div>
      <div className="vestra-hero-bottom">
        <span>46° 43′ N &nbsp; 11° 39′ E</span>
        <span>Let the mountains set the pace.</span>
      </div>
      <Booking />
    </section>
  );
}
