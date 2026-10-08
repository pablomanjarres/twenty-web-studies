import type { Shipment } from "./data";

export function VehicleIllustration({ mode }: { mode: Shipment["mode"] }) {
  return (
    <svg className="md-vehicle-study" viewBox="0 0 240 84" aria-hidden="true">
      <ellipse cx="126" cy="72" rx="98" ry="5" fill="#090f19" opacity=".3" />
      {mode === "Ocean" ? (
        <>
          <path d="M18 51 220 51 201 71H43Z" fill="#92b3c9" />
          <path d="m18 51 9-6h181l12 6Z" fill="#d2e3ed" />
          <path d="M43 63H208l-7 8H43Z" fill="#476c8b" />
          {[0, 1, 2, 3].map((column) => (
            <g key={column} transform={`translate(${55 + column * 30} 29)`}>
              <rect
                width="28"
                height="16"
                rx="1"
                fill={column % 2 ? "#75b1b4" : "#a9c5d1"}
              />
              <path
                d="M4 2V14M9 2V14M14 2V14M19 2V14M24 2V14"
                stroke="#203c51"
                opacity=".35"
              />
              <rect
                y="-14"
                width="28"
                height="12"
                rx="1"
                fill={column % 2 ? "#b2c8d2" : "#83a7b9"}
              />
            </g>
          ))}
          <path d="M28 28h22v17H28Z" fill="#e6f0f4" />
          <path d="M31 20h16v8H31Z" fill="#b9cedb" />
          <path d="M34 33h12v4H34Z" fill="#243d53" />
          <path d="M36 12h3v8h-3Z" fill="#a3b8c7" />
        </>
      ) : mode === "Road" ? (
        <>
          <rect x="57" y="22" width="149" height="38" rx="3" fill="#c8dce6" />
          <path
            d="M64 27h134M64 33h134M64 39h134M64 45h134M64 51h134"
            stroke="#95acbb"
          />
          <path d="M15 57V40l13-19h24v40H15Z" fill="#72b9be" />
          <path d="m22 39 9-13h16v13Z" fill="#233c53" />
          <path d="M19 47h8v5h-8Z" fill="#e6eef1" />
          <path d="M14 57h196v6H14Z" fill="#40566c" />
          {[35, 155, 184].map((x) => (
            <g key={x}>
              <circle cx={x} cy="64" r="10" fill="#101a28" />
              <circle cx={x} cy="64" r="5" fill="#9cb1c0" />
            </g>
          ))}
        </>
      ) : (
        <>
          <path
            d="m20 46 80-7 18-27 18-3-10 30 78 2 17 5-17 7-78 2 11 21-15-1-22-20-78-5Z"
            fill="#d6e5ed"
          />
          <path
            d="m40 44 52-3-16-21 10-2 25 22 54 2-25 7-47 3-22 17-12-2 14-17Z"
            fill="#80aabc"
          />
          <path d="m185 42 15 1 11 4-12 4-13 1Z" fill="#62c5c9" />
        </>
      )}
    </svg>
  );
}
