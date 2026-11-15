import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { fixtures } from "./data";
export function ClubNotes() {
  return (
    <>
      <section id="matches" className="sp-matches">
        <div className="sp-section-head">
          <div>
            <span className="sp-eyebrow">Good games. Good company.</span>
            <h2>
              There’s always
              <br />
              someone to play.
            </h2>
          </div>
          <p>
            Turn up solo. Leave with a doubles partner.
            <br />
            Our weekly sessions make it easy.
          </p>
        </div>
        <div className="sp-fixtures">
          {fixtures.map((f) => (
            <article key={f.name}>
              <div className="sp-fixture-date">
                <span className="sp-eyebrow">{f.date}</span>
                <strong>{f.time}</strong>
              </div>
              <div>
                <h3>{f.name}</h3>
                <p>
                  {f.format} / {f.level}
                </p>
              </div>
              <span className="sp-places">
                <i aria-hidden="true" />
                {f.spaces} left
              </span>
              <a
                href="#court-book"
                aria-label={`${f.name}, ${f.date} at ${f.time}: choose a court`}
              >
                <ArrowUpRight
                  size={24}
                  aria-hidden="true"
                  className="sp-nudge"
                />
              </a>
            </article>
          ))}
        </div>
      </section>
      <section id="club" className="sp-club">
        <div className="sp-court-drawing" aria-hidden="true">
          <div />
          <i />
          <span />
        </div>
        <div>
          <span className="sp-eyebrow">Padel is better together</span>
          <h2>
            Your first game
            <br />
            won’t be your last.
          </h2>
          <p>
            All levels. All ages. All the reasons to move.
            <br />
            Four courts, weekly socials and a club that feels like yours.
          </p>
          <a href="#court-book">
            Start with a session{" "}
            <MoveUpRight size={24} aria-hidden="true" className="sp-nudge" />
          </a>
        </div>
      </section>
    </>
  );
}
