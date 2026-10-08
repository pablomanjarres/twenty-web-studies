export function SolarArray() {
  return (
    <svg viewBox="0 0 230 180" aria-hidden="true">
      <path
        d="m25 120 145 45 42-81L67 39Z"
        fill="#293e41"
        stroke="#102f32"
        strokeWidth="2"
      />
      <path d="m25 120 145 45v9L24 131Z" fill="#192e31" />
      <path d="m170 165 42-81v9l-42 81Z" fill="#567371" />
      <g fill="none" stroke="#849894" strokeWidth="1.2">
        {[0, 1, 2, 3].map((i) => (
          <path key={i} d={`M${34 + i * 13} ${101 - i * 20}l145 45`} />
        ))}
        {[0, 1, 2, 3, 4].map((i) => (
          <path key={i} d={`M${48 + i * 27} ${127 + i * 8}l42-81`} />
        ))}
      </g>
      <path
        d="m69 142 2 22 32 10v-22m42 14 1 12 31-3v-21"
        fill="none"
        stroke="#71826d"
        strokeWidth="4"
      />
    </svg>
  );
}
export function WindField() {
  return (
    <svg viewBox="0 0 230 180" aria-hidden="true">
      <path d="m25 145 126 30 65-40-128-30Z" fill="#d8dcc1" />
      {[
        { x: 76, y: 56, scale: 1 },
        { x: 160, y: 73, scale: 0.75 },
      ].map((t) => (
        <g key={t.x} transform={`translate(${t.x} ${t.y}) scale(${t.scale})`}>
          <path d="M-4 8-7 89l17 5L6 8Z" fill="#f8f7eb" stroke="#b1b7a0" />
          <path
            d="M0 0-7-50 4-43 5-5M3 3l44 25-11 4L0 10M-2 5l-43 20 2-12L-6 0"
            fill="#f9f7ec"
            stroke="#9aab99"
          />
          <circle r="6" fill="#e5c24d" stroke="#343d26" />
        </g>
      ))}
    </svg>
  );
}
export function BatteryBank() {
  return (
    <svg viewBox="0 0 230 180" aria-hidden="true">
      <path d="m29 143 128 31 52-30-123-32Z" fill="#d7dcc9" />
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${45 + i * 46} ${20 + i * 12})`}>
          <path d="M0 20 30 8l28 9-29 13Z" fill="#f9f9ef" stroke="#bac2ad" />
          <path d="M0 20v105l29 8V30Z" fill="#eff0df" stroke="#bac2ad" />
          <path d="M29 30v103l29-15V17Z" fill="#c5ccb6" stroke="#9da98e" />
          <path d="M8 38v55l13 4V42Z" fill="#718c70" />
          <path d="M9 87v7l11 3v-7Z" fill="#e5c24d" />
          <path d="M8 106l13 4" stroke="#69755e" />
        </g>
      ))}
    </svg>
  );
}
export function Inverter() {
  return (
    <svg viewBox="0 0 160 150" aria-hidden="true">
      <path d="m25 115 85 23 30-17-84-23Z" fill="#d9ddc7" />
      <path d="M40 26 85 8l35 12-47 21Z" fill="#fffcf0" stroke="#b8bea5" />
      <path d="M40 26v93l33 9V41Z" fill="#f4f3e4" stroke="#b8bea5" />
      <path d="M73 41v87l47-21V20Z" fill="#cbd1b8" stroke="#9dab8e" />
      <path d="M47 57 65 63v24l-18-5Z" fill="#343d26" />
      <path d="m53 63-3 9 6 1-2 7 8-10-6-2 2-3Z" fill="#e5c24d" />
      <circle cx="56" cy="105" r="3" fill="#8aa578" />
    </svg>
  );
}
export function SiteHouse() {
  return (
    <svg viewBox="0 0 230 180" aria-hidden="true">
      <path d="m19 143 110 32 90-50-103-29Z" fill="#d8dcc7" />
      <path d="m42 84 69-47 76 23-77 49Z" fill="#8d977a" stroke="#56674e" />
      <path d="m42 84 68 25v57l-68-23Z" fill="#f0efdb" stroke="#b3bba2" />
      <path d="m110 109 77-49v65l-77 41Z" fill="#c2c9ae" stroke="#a6b398" />
      <path d="m110 109-26-35-42 10" fill="#f5f2e1" stroke="#b3bba2" />
      <path
        d="M61 104v27l22 7v-27Zm65 11v27l19-10v-29Zm30-17v26l18-10V87Z"
        fill="#455c48"
      />
      <path d="M95 122v39l13 5v-39Z" fill="#c9ab70" />
      <path
        d="m63 108 17 6m49 5 12-7m18-10 12-8"
        stroke="#e5c24d"
        strokeWidth="3"
      />
    </svg>
  );
}
