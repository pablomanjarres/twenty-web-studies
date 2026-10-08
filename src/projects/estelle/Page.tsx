import { useState } from "react";
import {
  Header,
  Hero,
  Collection,
  Atelier,
  Appointment,
  Footer,
} from "./components";
import "./styles.css";
export default function Page() {
  const [saved, setSaved] = useState<string[]>([]);
  function save(name: string) {
    setSaved((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  }
  return (
    <div className="estelle" id="estelle-top">
      <Header favorites={saved.length} />
      <main>
        <Hero />
        <Collection saved={saved} onSave={save} />
        <Atelier />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}
