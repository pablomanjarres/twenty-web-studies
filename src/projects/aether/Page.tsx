import { type CSSProperties, useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Account } from "./components/Account";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { invoices, texture } from "./data";
import "./styles.css";

export default function Page() {
  const [selected, setSelected] = useState(invoices[0].id);
  const invoice = invoices.find((item) => item.id === selected) ?? invoices[0];
  return (
    <main
      className="aether"
      style={{ "--aether-grain": `url(${texture})` } as CSSProperties}
    >
      <Header />
      <Hero invoice={invoice} onSelect={setSelected} />
      <Account invoice={invoice} onSelect={setSelected} />
      <Features />
      <Footer />
    </main>
  );
}
