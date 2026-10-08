import { ArrowDownRight, Plus } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { image, looks } from "./data";
export function Header({ count, onBag }: { count: number; onBag: () => void }) {
  return (
    <header className="archive-header">
      <a href="#archive-top" aria-label="Archive home">
        <BrandLogo brand={brand} symbolOnly />
      </a>
      <span>INDEPENDENT BY INSTINCT</span>
      <nav aria-label="Archive navigation">
        <a href="#archive-shop">Collection</a>
        <a href="#archive-story">Perspective</a>
      </nav>
      <button onClick={onBag} className="archive-bag">
        Bag ({count})<Plus size={14} />
      </button>
    </header>
  );
}
export function Hero({
  look,
  onLook,
  onShop,
}: {
  look: number;
  onLook: (index: number) => void;
  onShop: () => void;
}) {
  const selected = looks[look];
  return (
    <section className="archive-hero">
      <div className="archive-campaign-image">
        <img
          key={selected.image}
          src={image(selected.image)}
          alt={`Archive ${selected.name}: a sculptural tailored silhouette in a quiet architectural setting`}
          fetchPriority="high"
        />
      </div>
      <h1 className="archive-edge-identity">ARCHIVE</h1>
      <div className="archive-season-label">
        <span>COLLECTION 06 / AUTUMN 2026</span>
        <p>
          New forms.
          <br />
          Lasting presence.
        </p>
      </div>
      <a className="archive-shop-look" href="#archive-shop" onClick={onShop}>
        Shop this look <ArrowDownRight size={20} />
      </a>
      <div className="archive-look-strip">
        <div className="archive-look-picker" aria-label="Campaign looks">
          {looks.map((item, index) => (
            <button
              key={item.name}
              aria-pressed={index === look}
              onClick={() => onLook(index)}
            >
              <img src={image(item.image)} alt="" />
              <div>
                <small>LOOK / 0{index + 1}</small>
                <b>{item.name}</b>
              </div>
              <span>{index === look ? "●" : "○"}</span>
            </button>
          ))}
        </div>
        <div className="archive-look-caption" aria-live="polite">
          <span>0{look + 1} / 02</span>
          <p>{selected.caption}</p>
          <small>Selected pieces. A personal vocabulary.</small>
        </div>
      </div>
    </section>
  );
}
