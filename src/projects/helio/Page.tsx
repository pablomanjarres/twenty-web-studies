import {
  Header,
  Hero,
  BuildPreview,
  Platform,
  Pricing,
  Footer,
} from "./components";
import "./styles.css";
export default function Page() {
  return (
    <div className="helio" id="helio-top">
      <Header />
      <main>
        <Hero />
        <Platform />
        <BuildPreview />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
