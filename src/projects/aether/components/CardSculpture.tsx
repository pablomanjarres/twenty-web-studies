import { Check } from "lucide-react";
import { PaymentCard } from "./PaymentCard";

export function CardSculpture() {
  return (
    <div
      className="aether-sculpture"
      aria-label="Aether payment cards in ember, paper, and charcoal"
    >
      <div className="aether-sculpture-ring" />
      <PaymentCard color="#383A33" className="aether-card-back" />
      <PaymentCard color="#D9D6C9" className="aether-card-middle" />
      <PaymentCard color="#FF6B35" className="aether-card-front" />
      <div className="aether-received">
        <span>
          <Check size={15} />
        </span>
        <div>
          Payment received<strong>+ $2,450.00</strong>
        </div>
        <small>just now</small>
      </div>
      <div className="aether-sculpture-caption">
        Made for your kind of work.
      </div>
    </div>
  );
}
