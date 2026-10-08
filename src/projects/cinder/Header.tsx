import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
export function Header({
  count,
  onBasket,
}: {
  count: number;
  onBasket: () => void;
}) {
  return (
    <header className="cinder-header">
      <a href="#coffee">
        <BrandLogo brand={brand} />
      </a>
      <span>Small roast. Big morning.</span>
      <nav aria-label="Roastery navigation">
        <a href="#batch">Batch notes</a>
        <a href="#brew">Brew sheet</a>
        <button onClick={onBasket}>Basket [{count}]</button>
      </nav>
    </header>
  );
}
