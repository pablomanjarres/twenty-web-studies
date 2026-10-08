import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { BrandLogo } from "../../shared/BrandLogo";
import { brand } from "./brand";
import { fixtures } from "./data";
export function ClubNotes() {
  return (
    <>
      <section id="matches" className="sp-matches">
        <div className="sp-section-head">
          <div>
            <span>GOOD GAMES. GOOD COMPANY.</span>
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
                {f.date}
                <strong>{f.time}</strong>
              </div>
              <div>
                <h3>{f.name}</h3>
                <p>
                  {f.format} / {f.level}
                </p>
              </div>
              <span>{f.spaces}</span>
              <a href="#court-book" aria-label={`Choose a court for ${f.name}`}>
                <ArrowUpRight size={22} />
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
          <span>PADEL IS BETTER TOGETHER</span>
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
            Start with a session <MoveUpRight size={23} />
          </a>
        </div>
      </section>
      <footer className="sp-footer">
        <BrandLogo brand={brand} />
        <p>Riverside courts · Open daily 07:00–22:00</p>
        <span>© 2026 Sprinto</span>
      </footer>
    </>
  );
}
