import { Header, Hero } from "./HeaderHero";
import { Approaches } from "./Approaches";
import { BiggerPicture } from "./BiggerPicture";
import { Conversation } from "./Conversation";
import { Footer } from "./Footer";
import "./styles.css";

export default function Page() {
  return (
    <main className="verdant-page">
      <Header />
      <Hero />
      <Approaches />
      <BiggerPicture />
      <Conversation />
      <Footer />
    </main>
  );
}
