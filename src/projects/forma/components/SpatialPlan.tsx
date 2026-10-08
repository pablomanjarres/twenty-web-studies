import type { Project } from "../data";
export function SpatialPlan({ project }: { project: Project }) {
  const apartment = project.type === "Interiors";
  return (
    <figure className="forma-plan">
      <svg
        viewBox="0 0 520 285"
        role="img"
        aria-label={`${project.name} spatial study diagram`}
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M45 40h420v205H45z" strokeWidth="3" />
          <path
            d={
              apartment
                ? "M260 40v84m0 38v83M260 125h205M390 125v120"
                : "M320 40v85m0 35v85M320 125h145M400 40v85M45 155h95m38 0h142"
            }
          />
          <path
            d="M148 154v35a35 35 0 0 0 35-35M320 132h28a28 28 0 0 1-28 28"
            strokeWidth=".7"
          />
          <path
            d="M45 17h420M45 10v15M465 10v15M488 40v205M481 40h14M481 245h14"
            strokeWidth=".5"
          />
          <path
            d="M65 63h90v60H65zM90 192h100v30H90zM345 64h30v34h-30zM345 185h83v35h-83z"
            strokeWidth=".6"
          />
          <path
            d="M198 60h70v34h-70zM204 55v45M228 55v45M252 55v45"
            strokeWidth=".5"
          />
        </g>
        <g fill="currentColor" fontSize="8" fontFamily="monospace">
          <text x="220" y="12">
            14.00
          </text>
          <text x="496" y="145" transform="rotate(90 496 145)">
            6.80
          </text>
          <text x="205" y="137">
            LIVING
          </text>
          <text x="345" y="154">
            PRIVATE
          </text>
          <text x="45" y="275">
            SPATIAL STUDY / NOT TO SCALE
          </text>
          <text x="415" y="275">
            N ↑
          </text>
        </g>
      </svg>
      <figcaption>
        <span>01 / A RELATIONSHIP OF ROOMS</span>
        <span>Concept diagram</span>
      </figcaption>
    </figure>
  );
}
