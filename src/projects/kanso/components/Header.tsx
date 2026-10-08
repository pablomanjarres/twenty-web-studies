import { Search, ShoppingBag, X, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Header({
  count,
  onCart,
  query,
  onQuery,
}: {
  count: number;
  onCart: () => void;
  query: string;
  onQuery: (value: string) => void;
}) {
  const [searching, setSearching] = useState(false);
  return (
    <header className="kanso-header">
      <a
        className="kanso-header-mark"
        href="#objects"
        aria-label="Kanso objects"
      >
        <BrandLogo brand={brand} symbolOnly />
        <span>Objects, made slowly.</span>
      </a>
      <nav aria-label="Atelier navigation">
        <a href="#batch">The batch</a>
        <a href="#atelier">
          The atelier <ArrowUpRight size={12} />
        </a>
      </nav>
      <div className="kanso-utilities">
        {searching && (
          <input
            autoFocus
            aria-label="Search ceramic objects"
            placeholder="Find an object"
            value={query}
            onChange={(event) => onQuery(event.target.value)}
          />
        )}
        <button
          aria-label={searching ? "Close search" : "Search objects"}
          onClick={() => {
            setSearching(!searching);
            if (searching) onQuery("");
          }}
        >
          {searching ? <X size={17} /> : <Search size={17} />}
        </button>
        <button className="kanso-bag-trigger" onClick={onCart}>
          <ShoppingBag size={17} />
          <span>Bag ({count})</span>
        </button>
      </div>
    </header>
  );
}
