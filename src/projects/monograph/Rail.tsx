import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { issues, subjects } from "./data";
interface Props {
  issue: number;
  onIssue: (index: number) => void;
  category: string;
  onCategory: (name: string) => void;
  saved: number;
  savedOnly: boolean;
  onSavedOnly: () => void;
}
export function Rail({
  issue,
  onIssue,
  category,
  onCategory,
  saved,
  savedOnly,
  onSavedOnly,
}: Props) {
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
        <span className="monograph-small-label">On the wall</span>
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
        {subjects.map((item, index) => (
          <button
            key={item}
            aria-pressed={category === item}
            onClick={() => onCategory(item)}
          >
            <span className="monograph-subject-number">0{index + 1}</span>
            <span className="monograph-underline">{item}</span>
            <span className="monograph-subject-dot" aria-hidden="true">
              {category === item ? "●" : ""}
            </span>
          </button>
        ))}
      </nav>
      <div className="monograph-rail-bottom">
        <button
          className="monograph-reading-toggle"
          aria-pressed={savedOnly}
          onClick={onSavedOnly}
        >
          <span>Reading list</span>
          <span>{saved.toString().padStart(2, "0")}</span>
        </button>
        <a
          className="monograph-link monograph-rail-link"
          href="#monograph-archive"
        >
          Exhibition archive <span className="monograph-arrow">↘</span>
        </a>
        <a
          className="monograph-link monograph-rail-link"
          href="#monograph-print"
        >
          The printed issue <span className="monograph-arrow">↘</span>
        </a>
        <p>
          Art. Spaces. Studio.
          <br />
          An independent publication.
        </p>
      </div>
    </aside>
  );
}
