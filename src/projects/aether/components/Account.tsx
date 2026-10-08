import { ArrowUpRight, Check, CornerDownRight } from "lucide-react";
import { accountBalance, invoices, money, type Invoice } from "../data";

export function Account({
  invoice,
  onSelect,
}: {
  invoice: Invoice;
  onSelect: (id: string) => void;
}) {
  const balance = accountBalance(invoice);
  return (
    <section className="aether-account" id="account">
      <header>
        <span className="aether-section-kicker">02 / A CLEARER PICTURE</span>
        <h2>
          Good work.
          <br />
          Clear numbers.
        </h2>
        <p>
          From the moment you send an invoice to the next thing you set in
          motion. Everything has its place.
        </p>
      </header>
      <div className="aether-account-preview">
        <div className="aether-preview-top">
          <span>YOUR WORK, ACCOUNTED FOR</span>
          <span>October 2026 / Sample ledger</span>
        </div>
        <div className="aether-ledger">
          <div className="aether-ledger-labels">
            <span>CLIENT / PROJECT</span>
            <span>INVOICE</span>
            <span>AMOUNT</span>
            <span>STATUS</span>
          </div>
          {invoices.map((item) => (
            <button
              key={item.id}
              aria-pressed={item.id === invoice.id}
              onClick={() => onSelect(item.id)}
            >
              <div>
                <span className="aether-client-mark">{item.initials}</span>
                <span>
                  <b>{item.client}</b>
                  <small>{item.project}</small>
                </span>
              </div>
              <span>
                #{item.id} · {item.date}
              </span>
              <strong>{money(item.amount)}</strong>
              <span className="aether-invoice-state">
                {item.id === invoice.id ? (
                  <>
                    <Check size={12} /> Selected
                  </>
                ) : (
                  "Upcoming"
                )}
              </span>
            </button>
          ))}
        </div>
        <div className="aether-allocation">
          <div>
            <span>AVAILABLE FOR WHAT’S NEXT</span>
            <strong>{money(balance)}</strong>
            <small>
              <CornerDownRight size={13} /> {invoice.client} ·{" "}
              {money(invoice.amount)} included
            </small>
          </div>
          <div>
            <span>SET ASIDE, WITHOUT THINKING</span>
            <strong>{money(invoice.amount * 0.25)}</strong>
            <small>25% allocation from this invoice</small>
            <div className="aether-allocation-track">
              <i />
            </div>
          </div>
          <a href="#start">
            Make room for
            <br />
            your next ambition.
            <ArrowUpRight size={25} />
          </a>
        </div>
      </div>
    </section>
  );
}
