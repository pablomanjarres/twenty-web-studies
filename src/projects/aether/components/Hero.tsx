import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
import {
  accountBalance,
  invoices,
  money,
  sculpture,
  type Invoice,
} from "../data";

export function Hero({
  invoice,
  onSelect,
}: {
  invoice: Invoice;
  onSelect: (id: string) => void;
}) {
  return (
    <section className="aether-hero" id="home">
      <div className="aether-hero-heading">
        <span className="aether-note">01 / THE INDEPENDENT ACCOUNT</span>
        <h1>
          Your work.
          <br />
          Your worth.
        </h1>
      </div>
      <div className="aether-hero-object">
        <span className="aether-object-ring" />
        <img
          src={sculpture}
          alt="A satin graphite aether payment card wrapped in a translucent ember ribbon"
          fetchPriority="high"
        />
        <span className="aether-object-caption">
          WORK → INCOME → POSSIBILITY
        </span>
      </div>
      <aside className="aether-hero-aside">
        <span className="aether-note">A LITTLE LESS ADMIN.</span>
        <p>
          A beautiful account
          <br />
          for everything you
          <br />
          make happen.
        </p>
        <a className="aether-button" href="#account">
          Meet your account <ArrowUpRight size={19} />
        </a>
        <small>Built around independence.</small>
      </aside>
      <div className="aether-flow-strip">
        <div className="aether-incoming">
          <span className="aether-note">CHOOSE AN INCOMING INVOICE</span>
          <div>
            {invoices.map((item) => (
              <button
                key={item.id}
                aria-pressed={invoice.id === item.id}
                onClick={() => onSelect(item.id)}
              >
                <span>{item.initials}</span>
                <div>
                  <b>{item.client}</b>
                  <small>{money(item.amount)}</small>
                </div>
                {invoice.id === item.id && <Check size={14} />}
              </button>
            ))}
          </div>
        </div>
        <span className="aether-flow-arrow" aria-hidden="true">
          ↗
        </span>
        <div className="aether-hero-balance" aria-live="polite">
          <span className="aether-note">YOUR NEXT CHAPTER, FUNDED</span>
          <strong>{money(accountBalance(invoice))}</strong>
          <small>Sample account · includes invoice #{invoice.id}</small>
        </div>
        <a href="#account" className="aether-ledger-link">
          The whole picture <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
