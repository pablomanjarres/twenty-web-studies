import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Courts } from "./components/Courts";
import { Play } from "./components/Play";
import { Club } from "./components/Club";
import { Footer } from "./components/Footer";
import "./styles.css";

export default function Page() {
  return (
    <main className="sprinto">
      <Header />
      <Hero />
      <div className="sprinto-ticker">
        <span>PADEL IS FOR EVERYONE</span>
        <i>✳</i>
        <span>MORE RALLIES. MORE GOOD DAYS.</span>
        <i>✳</i>
        <span>FIND YOUR PEOPLE</span>
      </div>
      <Courts />
      <Play />
      <Club />
      <Footer />
    </main>
  );
}
