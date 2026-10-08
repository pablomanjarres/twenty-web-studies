import { coffees } from "./data";

export function CoffeeBag({ coffee }: { coffee: (typeof coffees)[number] }) {
  return (
    <svg
      className="ci-coffee-bag"
      viewBox="0 0 250 310"
      role="img"
      aria-label={`${coffee.name} illustrated coffee bag`}
    >
      <defs>
        <linearGradient
          id={`ci-bag-${coffee.number}`}
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >
          <stop offset="0" stopColor="#D6C2A3" />
          <stop offset=".5" stopColor="#F0DFBD" />
          <stop offset="1" stopColor="#BCA485" />
        </linearGradient>
      </defs>
      <ellipse cx="126" cy="290" rx="77" ry="9" fill="#38271F" opacity=".12" />
      <path
        d="M70 28h110l-4 28 14 215c1 10-129 10-130 0L74 56Z"
        fill={`url(#ci-bag-${coffee.number})`}
      />
      <path d="M74 55h102M70 29h110" stroke="#917C62" strokeWidth="3" />
      <path d="m60 271 18-15h96l16 15" fill="#BBA788" />
      <rect x="69" y="97" width="112" height="142" fill={coffee.color} />
      <g fill="#38271F" textAnchor="middle">
        <text
          x="125"
          y="122"
          fontSize="12"
          fontFamily="DM Sans"
          fontWeight="700"
          letterSpacing="2"
        >
          CINDER
        </text>
        <path d="M125 134c-2 5-7 7-7 12a7 7 0 0 0 14 0c0-3-3-6-4-8-1 3-2 4-3 5 1-4 1-6 0-9Z" />
        <text x="125" y="176" fontSize="18" fontFamily="Grindela">
          {coffee.name === "Golden Hour" ? "Golden" : coffee.name}
        </text>
        {coffee.name === "Golden Hour" && (
          <text x="125" y="196" fontSize="18" fontFamily="Grindela">
            Hour
          </text>
        )}
        <text
          x="125"
          y="217"
          fontSize="8"
          fontFamily="DM Sans"
          letterSpacing="1"
        >
          FRESH ROAST · 250 G
        </text>
        <text
          x="125"
          y="83"
          fontSize="7"
          fontFamily="DM Sans"
          letterSpacing="1.4"
        >
          GOOD COFFEE, EVERY DAY.
        </text>
      </g>
    </svg>
  );
}
