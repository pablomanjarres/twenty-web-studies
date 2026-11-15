import { Plus } from "lucide-react";
import { image, questions } from "./data";

export function Packaging() {
  return (
    <section className="vale-packaging" aria-labelledby="vale-packaging-title">
      <figure>
        <img
          src={image("campaign.jpg")}
          alt="Frosted green skincare bottles with stone-tone caps on pale limestone"
          loading="lazy"
        />
      </figure>
      <div className="vale-packaging-copy">
        <span className="vale-section-intro">Made for the everyday.</span>
        <h2 id="vale-packaging-title">A vessel worth holding on to.</h2>
        <p>
          Soft mineral tones. Frosted glass. Closures shaped to sit comfortably
          in the hand. The packaging is part of the daily moment, too.
        </p>
        <div className="vale-questions">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span className="vale-question-icon" aria-hidden="true">
                  <Plus size={16} />
                </span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
