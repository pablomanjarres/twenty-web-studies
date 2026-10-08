import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { issues } from "./data";
interface Props {
  issue: number;
  onIssue: (index: number) => void;
  category: string;
  onCategory: (name: string) => void;
  saved: number;
}
export function Rail({ issue, onIssue, category, onCategory, saved }: Props) {
  return (
    <aside className="monograph-rail">
      <a
        href="#monograph-top"
        className="monograph-mark"
        aria-label="Monograph home"
      >
        <BrandLogo brand={brand} />
      </a>
      <p className="monograph-rail-note">
        A journal for
        <br />
        curious eyes.
      </p>
      <label className="monograph-issue-label">
        On the wall
        <select
          value={issue}
          onChange={(event) => onIssue(Number(event.target.value))}
        >
          {issues.map((item, index) => (
            <option key={item.name} value={index}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
      <nav aria-label="Story subjects" className="monograph-subjects">
        {["All", "Art", "Spaces", "Studio"].map((item, index) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => onCategory(item)}
          >
            <span>0{index + 1}</span>
            {item}
            <span>{category === item ? "●" : ""}</span>
          </button>
        ))}
      </nav>
      <div className="monograph-rail-bottom">
        <span>Reading list / {saved.toString().padStart(2, "0")}</span>
        <a href="#monograph-archive">Exhibition archive ↘</a>
        <a href="#monograph-print">The printed issue ↘</a>
        <p>
          Art. Spaces. Studio.
          <br />
          An independent publication.
        </p>
      </div>
    </aside>
  );
}
