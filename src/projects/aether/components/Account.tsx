import { useState } from "react";
import { Check, MoveUpRight } from "lucide-react";
import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function Account() {
  const [currency, setCurrency] = useState("USD");
  const balances: { [key: string]: string } = {
    USD: "$12,480.50",
    EUR: "€11,526.46",
    GBP: "£9,615.78",
  };
  return (
    <section className="aether-account" id="account">
      <div>
        <span className="aether-section-kicker">
          A little less admin. A lot more possibility.
        </span>
        <h2>
          One account.
          <br />
          Room for every ambition.
        </h2>
        <p>
          See where you stand, set something aside, and send your next invoice.
          All in a space that feels like yours.
        </p>
        <ul>
          {[
            "A clear view of your cash flow",
            "Separate spaces for tax and savings",
            "A card that works as hard as you do",
          ].map((i) => (
            <li key={i}>
              <Check size={17} />
              {i}
            </li>
          ))}
        </ul>
      </div>
      <div className="aether-account-preview">
        <div className="aether-preview-top">
          <BrandLogo brand={brand} />
          <span>
            Hello, Morgan <span className="aether-profile-dot">MW</span>
          </span>
        </div>
        <div className="aether-balance-row">
          <span>Available balance</span>
          <div className="aether-currency-tabs" aria-label="Balance currency">
            {Object.keys(balances).map((i) => (
              <button
                key={i}
                aria-pressed={currency === i}
                onClick={() => setCurrency(i)}
              >
                {i}
              </button>
            ))}
          </div>
        </div>
        <strong className="aether-balance">{balances[currency]}</strong>
        <div className="aether-spaces">
          <div>
            <span>Tax pot</span>
            <strong>$3,120.00</strong>
            <i style={{ width: "72%" }} />
          </div>
          <div>
            <span>Next adventure</span>
            <strong>$1,850.00</strong>
            <i style={{ width: "46%" }} />
          </div>
        </div>
        <div className="aether-transaction">
          <span className="aether-transaction-icon">
            <MoveUpRight size={20} />
          </span>
          <div>
            Studio North<strong>Brand identity · Invoice #024</strong>
          </div>
          <b>+ $2,450.00</b>
        </div>
      </div>
    </section>
  );
}
