import { BrandLogo } from "../../../shared/BrandLogo";
import { brand } from "../brand";

export function PaymentCard({
  color,
  className = "",
}: {
  color: string;
  className?: string;
}) {
  return (
    <div
      className={`aether-payment-card ${className}`}
      style={{ backgroundColor: color }}
    >
      <BrandLogo brand={brand} />
      <div className="aether-card-chip">
        <i />
        <i />
        <i />
      </div>
      <span className="aether-card-digits">
        •••• &nbsp; •••• &nbsp; •••• &nbsp; 2048
      </span>
      <div className="aether-card-bottom">
        <span>MORGAN WELLS</span>
        <strong>visa</strong>
      </div>
    </div>
  );
}
