import { Wind } from "lucide-react";

export function EnergyDiagram({ kind }: { kind: string }) {
  return (
    <svg
      className="ve-energy-diagram"
      viewBox="0 0 430 310"
      role="img"
      aria-label={`${kind} energy project diagram`}
    >
      <defs>
        <pattern
          id="ve-diagram-grid"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M22 0H0V22"
            stroke="#343D26"
            opacity=".09"
            strokeWidth=".6"
            fill="none"
          />
        </pattern>
      </defs>
      <rect width="430" height="310" fill="url(#ve-diagram-grid)" />
      <g fill="none" stroke="#343D26" strokeWidth="1.4">
        {kind === "Solar" ? (
          <>
            <circle cx="328" cy="65" r="22" />
            <path d="M328 30v-13M328 113V99M293 65h-14M363 65h14M303 40l-10-10M352 40l10-10M303 90l-10 10M352 90l10 10" />
            <path d="m72 176 139-81 145 73-139 84Z" fill="#D7D7BC" />
            <path d="m86 180 125-73 129 65-125 72Z" fill="#89997C" />
            <path
              d="m111 165 127 65M138 149l127 65M165 133l127 65M191 117l127 65M125 201l125-74M168 223l125-75"
              stroke="#D9E3CD"
            />
            <path
              d="M90 185v43M216 252v32M339 176v33M73 229l145 74 138-82"
              strokeDasharray="3 4"
            />
            <path d="M296 99 252 134" strokeDasharray="4 4" />
          </>
        ) : kind === "Wind" ? (
          <>
            <path d="M205 261V114M198 261h14M100 244v-87M94 244h12M309 252V155M303 252h12" />
            <circle cx="205" cy="111" r="6" fill="#343D26" />
            <path
              d="m201 106 17-85 8-2-13 88M210 114l75 45-1 8-78-48M199 113l-78 42-7-4 81-48"
              fill="#D7D7BC"
            />
            <circle cx="100" cy="155" r="4" fill="#343D26" />
            <path
              d="m98 151 11-51 5-1-8 55M104 157l45 27-1 5-48-28M96 157l-47 25-4-3 49-29"
              fill="#D7D7BC"
            />
            <circle cx="309" cy="153" r="4" fill="#343D26" />
            <path
              d="m307 149 11-51 5-1-8 55M313 155l45 27-1 5-48-28M305 155l-47 25-4-3 49-29"
              fill="#D7D7BC"
            />
            <path
              d="M48 265q164-31 330 5M53 281q158-33 318 5"
              strokeDasharray="4 5"
            />
          </>
        ) : (
          <>
            <path d="m77 128 65-35 62 31v118l-62 35-65-33Z" fill="#CCD3BA" />
            <path d="m204 124 65-35 65 34v116l-65 37-65-34Z" fill="#D8DAC6" />
            <path d="m77 128 65 33 62-37M142 161v116M204 124l65 36 65-37M269 160v116" />
            <path
              d="M90 157v65M104 163v66M117 170v66M156 173v65M171 165v65M187 157v65M221 156v66M236 163v66M251 170v66M285 173v65M302 164v65M317 156v65"
              strokeWidth="3"
            />
            <path d="M133 54h159M215 39v-11M151 49l-18 5 18 5M275 49l17 5-17 5" />
            <path d="m208 45-7 15h14l-7 15" strokeWidth="2.5" />
          </>
        )}
      </g>
      <text
        x="23"
        y="31"
        fill="#343D26"
        fontFamily="IBM Plex Mono"
        fontSize="8"
        letterSpacing="1.1"
      >
        {kind.toUpperCase()} / SYSTEM STUDY
      </text>
      <text
        x="326"
        y="291"
        fill="#343D26"
        fontFamily="IBM Plex Mono"
        fontSize="7"
        letterSpacing="1"
      >
        VERDANT / 01
      </text>
    </svg>
  );
}
