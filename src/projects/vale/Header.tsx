import { ShoppingBag } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

export function Header({ count, onBag }: { count: number; onBag: () => void }) {
  return (
    <header className="vale-header">
      <a href="#formulas" aria-label="Vale formulas">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Vale navigation">
        <a href="#formulas">The collection</a>
        <a href="#ritual">Your daily ritual</a>
      </nav>
      <button className="vale-bag-button" onClick={onBag}>
        <ShoppingBag size={17} />
        Bag <span aria-label={`${count} items`}>{count}</span>
      </button>
    </header>
  );
}
