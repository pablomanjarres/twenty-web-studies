import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Ticker } from "./components/Ticker";
import { Courts } from "./components/Courts";
import { Play } from "./components/Play";
import { Club } from "./components/Club";
import { Footer } from "./components/Footer";
import "./styles.css";

export default function Page() {
  return (
    <main className="sprinto-original">
      <Header />
      <Hero />
      <Ticker />
      <Courts />
      <Play />
      <Club />
      <Footer />
    </main>
  );
}
