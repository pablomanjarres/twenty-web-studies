import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Terminal,
  Globe2,
  Database,
  Activity,
  Command,
  Copy,
} from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { codeExamples } from "./data";

export function BuildPreview() {
  const [language, setLanguage] = useState("TypeScript");
  const [deployed, setDeployed] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <section className="helio-build" id="helio-build">
      <div className="helio-build-heading">
        <div>
          <span className="helio-section-label">Designed for your flow</span>
          <h2>
            Write code.
            <br />
            We’ll handle the rest.
          </h2>
        </div>
        <p>
          Your favorite stack, a single command,
          <br />
          and a deployment that just works.
        </p>
      </div>
      <div className="helio-console">
        <div className="helio-console-rail">
          <BrandLogo brand={brand} symbolOnly />
          <Terminal size={19} />
          <Globe2 size={19} />
          <Database size={19} />
          <Activity size={19} />
          <Command size={19} />
        </div>
        <div className="helio-code">
          <div className="helio-code-tabs">
            {Object.keys(codeExamples).map((item) => (
              <button
                className={language === item ? "active" : ""}
                aria-pressed={language === item}
                key={item}
                onClick={() => {
                  setLanguage(item);
                  setCopied(false);
                }}
              >
                {item}
              </button>
            ))}
            <button
              className="helio-copy"
              aria-label="Copy example code"
              onClick={() => {
                void navigator.clipboard
                  ?.writeText(codeExamples[language].join("\n"))
                  .then(() => setCopied(true))
                  .catch(() => setCopied(false));
              }}
            >
              {copied ? <Check size={15} /> : <Copy size={15} />}
            </button>
          </div>
          <div className="helio-file-name">
            <span className="helio-file-dot" />
            index.
            {language === "TypeScript"
              ? "ts"
              : language === "Python"
                ? "py"
                : "go"}
            <span>hello-world / src</span>
          </div>
          <pre>
            {codeExamples[language].map((line, i) => (
              <div key={i}>
                <span>{i + 1}</span>
                <code
                  className={
                    line.startsWith("import") || line.startsWith("from")
                      ? "import"
                      : ""
                  }
                >
                  {line || " "}
                </code>
              </div>
            ))}
          </pre>
          <div className="helio-code-footer">
            <span>UTF-8</span>
            <span>{language}</span>
            <span>Helio Edge Runtime</span>
          </div>
        </div>
        <div className="helio-deploy-panel">
          <div className="helio-deploy-title">
            <span>Deployment overview</span>
            <ChevronDown size={14} />
          </div>
          <div className="helio-project-name">
            <span>↗</span>
            <div>
              <b>hello-world</b>
              <small>Production environment</small>
            </div>
            <span className="helio-ready">Ready</span>
          </div>
          <div className="helio-deploy-details">
            {[
              ["Framework", "Helio Edge"],
              ["Region", "Global"],
              ["Build time", deployed ? "0.8 seconds" : "—"],
              ["Last deployment", deployed ? "Just now" : "Not deployed"],
            ].map(([label, value]) => (
              <div key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>
          <div className="helio-terminal">
            <p>
              <span>❯</span> helio deploy
            </p>
            <p className="helio-terminal-muted">
              {deployed
                ? "✓ Build complete\n✓ Deployed to 35 regions\n✓ Your preview is ready"
                : "Your next great idea starts here.\nOne command. Anywhere in the world."}
            </p>
          </div>
          <button className="helio-primary" onClick={() => setDeployed(true)}>
            {deployed ? (
              <>
                <Check size={17} />
                Preview deployed
              </>
            ) : (
              <>
                Deploy preview <ArrowUpRight size={17} />
              </>
            )}
          </button>
          <span className="helio-deploy-note" role="status">
            {deployed
              ? "Deployment preview is ready."
              : "A little code. A lot of possibility."}
          </span>
        </div>
      </div>
    </section>
  );
}
