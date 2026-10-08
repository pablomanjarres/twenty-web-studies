import { products } from "./data";

export function ProductIllustration({
  product,
}: {
  product: (typeof products)[number];
}) {
  const id = product.name.replace(/ /g, "");
  return (
    <svg
      className={`va-package va-package-${product.shape}`}
      viewBox="0 0 220 280"
      role="img"
      aria-label={`${product.name} pale green skincare packaging`}
    >
      <defs>
        <linearGradient id={`va-glass-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#EFF2DC" />
          <stop offset=".28" stopColor={product.tone} />
          <stop offset=".64" stopColor="#D4DCC5" />
          <stop offset="1" stopColor="#A8B69B" />
        </linearGradient>
        <linearGradient id={`va-cap-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#D1CBBD" />
          <stop offset=".5" stopColor="#F9F6E9" />
          <stop offset="1" stopColor="#E0D9C8" />
        </linearGradient>
      </defs>
      <ellipse
        cx="112"
        cy="259"
        rx={product.shape === "jar" ? 74 : 43}
        ry="8"
        fill="#385039"
        opacity=".11"
      />
      {product.shape === "jar" ? (
        <>
          <rect
            x="37"
            y="161"
            width="150"
            height="84"
            rx="18"
            fill={`url(#va-glass-${id})`}
          />
          <path
            d="M41 156c0-20 137-22 143 0v23c-22 14-118 14-143 0Z"
            fill={`url(#va-cap-${id})`}
          />
        </>
      ) : (
        <>
          <rect
            x="73"
            y="87"
            width="77"
            height="162"
            rx="16"
            fill={`url(#va-glass-${id})`}
          />
          <path
            d={
              product.shape === "pump"
                ? "M77 87V59q0-12 14-12h48q7 0 7 10v30Z"
                : "M76 87V27q34-23 72-3v63Z"
            }
            fill={`url(#va-cap-${id})`}
          />
          {product.shape === "pump" && (
            <path d="M97 47V32h54v10h-41v5Z" fill="#F8F5E7" />
          )}
        </>
      )}
      <g fill="#48654B" textAnchor="middle">
        <text
          x="112"
          y={product.shape === "jar" ? 214 : 151}
          fontFamily="The Foriene,serif"
          fontSize={product.shape === "jar" ? 31 : 34}
        >
          vale
        </text>
        <text
          x="112"
          y={product.shape === "jar" ? 231 : 182}
          fontFamily="Manrope,sans-serif"
          fontSize="6.5"
          letterSpacing="1.1"
        >
          {product.name.toUpperCase()}
        </text>
        {product.shape !== "jar" && (
          <text
            x="112"
            y="222"
            fontFamily="Manrope,sans-serif"
            fontSize="5.5"
            letterSpacing="1"
          >
            BOTANICAL DAILY CARE
          </text>
        )}
      </g>
    </svg>
  );
}
