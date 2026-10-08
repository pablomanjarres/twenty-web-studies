import { ShoppingBag } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header({
  count,
  onCart,
}: {
  count: number;
  onCart: () => void;
}) {
  return (
    <header className="kanso-header">
      <a href="#home" aria-label="Kanso home">
        <BrandLogo brand={brand} />
      </a>
      <nav aria-label="Main navigation">
        <a href="#collection">The collection</a>
        <a href="#story">Our hands, our story</a>
        <a href="#care">Made with care</a>
      </nav>
      <button
        className="kanso-bag"
        onClick={onCart}
        aria-label={`Open bag, ${count} pieces`}
      >
        <ShoppingBag size={19} />
        <span>Bag ({count})</span>
      </button>
    </header>
  );
}
