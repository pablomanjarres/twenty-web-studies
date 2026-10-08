import { type CSSProperties } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Account } from "./components/Account";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { texture } from "./data";
import "./styles.css";

export default function Page() {
  return (
    <main
      className="aether"
      style={{ "--aether-grain": `url(${texture})` } as CSSProperties}
    >
      <Header />
      <Hero />
      <div className="aether-partners">
        <span>For a different kind of working life.</span>
        {["designers", "developers", "photographers", "dreamers"].map((i) => (
          <strong key={i}>{i}</strong>
        ))}
      </div>
      <Account />
      <Features />
      <Footer />
    </main>
  );
}
