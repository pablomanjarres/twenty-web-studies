import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Practice } from "./components/Practice";
import { Contact } from "./components/Contact";
import "./styles.css";

export default function Page() {
  return (
    <main className="forma">
      <Header />
      <Hero />
      <Projects />
      <Practice />
      <Contact />
    </main>
  );
}
