import { Footer } from "./Navigation";
import { Console } from "./Console";
import { Recipes } from "./Recipes";
import "./styles.css";
export default function Page() {
  return (
    <div className="helio" id="helio-top">
      <main>
        <Console />
        <Recipes />
      </main>
      <Footer />
    </div>
  );
}
