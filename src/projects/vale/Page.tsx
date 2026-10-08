import { useState } from "react";
import { products } from "./data";
import { Header, Hero } from "./HeaderHero";
import { Essentials } from "./Essentials";
import { Philosophy } from "./Philosophy";
import { Ritual } from "./Ritual";
import { RitualDrawer } from "./RitualDrawer";
import { Footer } from "./Footer";
import "./styles.css";

export default function Page() {
  const [selected, setSelected] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const toggle = (name: string) =>
    setSelected((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  return (
    <main className="vale-page">
      <Header count={selected.length} onOpen={() => setOpen(true)} />
      <Hero />
      <Essentials selected={selected} onSelect={toggle} />
      <Philosophy />
      <Ritual
        onChoose={() => {
          setSelected(products.map((product) => product.name));
          setOpen(true);
        }}
      />
      <Footer />
      {open && (
        <RitualDrawer
          selected={selected}
          onClose={() => setOpen(false)}
          onSelect={toggle}
        />
      )}
    </main>
  );
}
