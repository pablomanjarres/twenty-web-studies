import { ArrowUpRight } from "lucide-react";
export function CollectionChromeHeader() {
  return (
    <header className="collection-header">
      <a href={import.meta.env.BASE_URL} className="collection-wordmark">
        <span className="collection-mark" aria-hidden="true">
          ✳
        </span>{" "}
        Twenty Web Studies
      </a>
      <nav aria-label="Collection navigation">
        <a href="#projects">The collection</a>
        <a
          href="https://github.com/pablomanjarres/twenty-web-studies/tree/redesign-v2"
          target="_blank"
          rel="noreferrer"
        >
          Source code <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  );
}
export function CollectionChromeFooter() {
  return (
    <footer className="collection-footer">
      <span>Twenty Web Studies</span>
      <p>Distinct brands. Different perspectives.</p>
      <a
        href="#top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        Back to top <ArrowUpRight size={16} />
      </a>
    </footer>
  );
}
