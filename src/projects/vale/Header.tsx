import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Header({ count, onBag }: { count: number; onBag: () => void }) {
  return (
    <header className="vale-header">
      <a href="#formulas" aria-label="Vale formulas">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Vale navigation">
        <a href="#formulas">Formulas</a>
        <a href="#ritual">The ritual</a>
      </nav>
      <button onClick={onBag}>Bag / {String(count).padStart(2, "0")}</button>
    </header>
  );
}
