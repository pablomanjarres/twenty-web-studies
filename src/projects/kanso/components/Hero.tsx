import { ArrowUpRight } from "lucide-react";
import { asset } from "../data";

export function Hero() {
  return (
    <section className="kanso-hero" id="home">
      <div className="kanso-hero-copy">
        <span>A little beauty in the everyday.</span>
        <h1>
          Objects for
          <br />
          the <em>ordinary</em>
          <br />
          moments.
        </h1>
        <p>
          Your first coffee. A shared meal. A stem from the garden. Thoughtful
          ceramics for the rituals that make a life.
        </p>
        <a className="kanso-shop-link" href="#collection">
          Meet the collection <ArrowUpRight size={22} />
        </a>
      </div>
      <div className="kanso-hero-photo">
        <img
          src={asset("vase")}
          alt="Handmade ceramic cups with warm natural glazes and tactile stoneware textures"
        />
        <div className="kanso-hero-product">
          <span>Small batch. Lasting company.</span>
          <span>
            The morning collection <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
      <div className="kanso-stamp">
        <span>
          MADE
          <br />
          SLOWLY
        </span>
        <i>✳</i>
        <span>
          LOVED
          <br />
          DAILY
        </span>
      </div>
    </section>
  );
}
