import { image, questions } from "./data";
export function Packaging() {
  return (
    <section className="vale-packaging">
      <figure>
        <img
          src={image("campaign.jpg")}
          alt="Frosted green skincare bottles with stone-tone caps on pale limestone"
          loading="lazy"
        />
        <figcaption>
          Glass, stone tones, and a simpler everyday object.
        </figcaption>
      </figure>
      <div>
        <span className="vale-label">What stays behind</span>
        <h2>
          A vessel worth
          <br />
          holding on to.
        </h2>
        <p>
          Soft mineral tones. Frosted glass. Closures shaped to sit comfortably
          in the hand. The packaging is part of the daily moment, too.
        </p>
        <div className="vale-questions">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span>+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
