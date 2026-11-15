import { Plus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";

const navigation = [
  { label: "New arrivals", href: "#archive-original-shop" },
  { label: "Shop the edit", href: "#archive-original-shop" },
  { label: "Our perspective", href: "#archive-original-story" },
];

export function Header({ count, onBag }: { count: number; onBag: () => void }) {
  return (
    <>
      <div className="archive-original-utility archive-original-label">
        <span>Selected pieces. Considered choices.</span>
        <span>Complimentary delivery over £150</span>
      </div>
      <header className="archive-original-header">
        <a
          href="#archive-original-top"
          className="archive-original-home"
          aria-label="Archive home"
        >
          <BrandLogo brand={brand} />
        </a>
        <nav aria-label="Archive navigation" className="archive-original-label">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="archive-original-grow-link"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          onClick={onBag}
          className="archive-original-bag archive-original-label"
        >
          Bag <span className="archive-original-tabular">({count})</span>
          <Plus size={15} aria-hidden="true" />
        </button>
      </header>
    </>
  );
}
