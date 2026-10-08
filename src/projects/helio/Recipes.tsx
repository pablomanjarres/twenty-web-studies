import { ArrowRight, Braces, Terminal } from "lucide-react";
import { useState } from "react";
import { codeExamples } from "./data";
export function Recipes() {
  const [language, setLanguage] = useState("TypeScript");
  return (
    <section className="helio-recipes" id="helio-recipes">
      <div className="helio-architecture-strip">
        {[
          {
            icon: Braces,
            label: "01 / WRITE",
            detail: "Your code, your tools.",
          },
          {
            icon: Terminal,
            label: "02 / RELEASE",
            detail: "A single, clear command.",
          },
          {
            icon: ArrowRight,
            label: "03 / EVERYWHERE",
            detail: "One endpoint. A global edge.",
          },
        ].map(({ icon: Icon, label, detail }) => (
          <div key={label}>
            <Icon size={21} />
            <span>
              {label}
              <b>{detail}</b>
            </span>
          </div>
        ))}
      </div>
      <div className="helio-recipe-grid">
        <header>
          <span className="helio-eyebrow">THE SMALL BEGINNING</span>
          <h2>
            Bring your stack.
            <br />
            Keep your flow.
          </h2>
          <p>
            A familiar handler becomes a globally reachable endpoint. Choose a
            language and see the shape of a first application.
          </p>
          <a href="#helio-build">OPEN THE WORKBENCH ↗</a>
        </header>
        <div className="helio-recipe-code">
          <div>
            {Object.keys(codeExamples).map((lang) => (
              <button
                key={lang}
                aria-pressed={language === lang}
                onClick={() => setLanguage(lang)}
              >
                {lang}
              </button>
            ))}
          </div>
          <pre>
            <code>{codeExamples[language].join("\n")}</code>
          </pre>
          <span>GET /hello → 200 OK</span>
        </div>
      </div>
      <div className="helio-usage" id="helio-pricing">
        <header>
          <span className="helio-eyebrow">START WITH ROOM TO BUILD</span>
          <h2>
            Simple usage.
            <br />
            Visible limits.
          </h2>
        </header>
        <table>
          <caption>Developer plan — $0 per month</caption>
          <tbody>
            {[
              ["Personal projects", "Unlimited"],
              ["Edge bandwidth", "100 GB / month"],
              ["Build minutes", "500 / month"],
              ["Global regions", "35 included"],
            ].map(([name, value]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
