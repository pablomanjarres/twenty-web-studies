import type { ReactNode } from "react";
import { exhibitions, issues, subjects } from "./data";
interface Props {
  onCategory: (name: string) => void;
  onIssue: (index: number) => void;
}
function IndexGroup({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="monograph-index-group">
      <h2 className="monograph-small-label">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
}
export function ClosingIndex({ onCategory, onIssue }: Props) {
  return (
    <footer className="monograph-footer">
      <nav className="monograph-index" aria-label="Monograph index">
        <IndexGroup title="Subjects">
          {subjects.map((name) => (
            <li key={name}>
              <button
                className="monograph-link"
                onClick={() => onCategory(name)}
              >
                {name === "All" ? "All stories" : name}
              </button>
            </li>
          ))}
        </IndexGroup>
        <IndexGroup title="Issues">
          {issues.map((item, index) => (
            <li key={item.name}>
              <button className="monograph-link" onClick={() => onIssue(index)}>
                {item.name}, {item.theme.toLowerCase()}
              </button>
            </li>
          ))}
        </IndexGroup>
        <IndexGroup title="Archive">
          {exhibitions.map((item) => (
            <li key={item.title}>
              <a
                className="monograph-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.title}
              </a>
            </li>
          ))}
        </IndexGroup>
        <IndexGroup title="Print">
          <li>
            <a className="monograph-link" href="#monograph-print">
              The printed issue
            </a>
          </li>
          <li>
            <a className="monograph-link" href="#monograph-essay">
              The long look
            </a>
          </li>
        </IndexGroup>
      </nav>
      <div className="monograph-footer-line">
        <span>Monograph. A different way of seeing.</span>
        <a className="monograph-link" href="#monograph-top">
          Back to the wall <span className="monograph-arrow">↑</span>
        </a>
      </div>
    </footer>
  );
}
