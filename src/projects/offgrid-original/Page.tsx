import { Header, Hero } from "./HeaderHero";
import { WorkIndex } from "./WorkIndex";
import { Studio } from "./Studio";
import { BriefBuilder, Footer } from "./ContactFooter";
import "./styles.css";

export default function Page() {
  return (
    <main className="offgrid-original-page">
      <Header />
      <Hero />
      <WorkIndex />
      <Studio />
      <BriefBuilder />
      <Footer />
    </main>
  );
}
