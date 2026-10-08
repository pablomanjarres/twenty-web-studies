import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Retreat } from "./components/Retreat";
import { Stay } from "./components/Stay";
import { Experiences } from "./components/Experiences";
import { Footer } from "./components/Footer";
import "./styles.css";

export default function Page() {
  return (
    <main className="vestra">
      <Header />
      <Hero />
      <Retreat />
      <Stay />
      <Experiences />
      <Footer />
    </main>
  );
}
