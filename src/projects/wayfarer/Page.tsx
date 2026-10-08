import { Header, Hero } from "./HeaderHero";
import { JourneyIndex } from "./Journeys";
import { Journal, Footer } from "./JournalFooter";
import "./styles.css";

export default function Page() {
  return (
    <main className="wayfarer-page">
      <Header />
      <Hero />
      <JourneyIndex />
      <Journal />
      <Footer />
    </main>
  );
}
