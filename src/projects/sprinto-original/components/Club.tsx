import { ArrowUpRight } from "lucide-react";
import { asset } from "../data";

export function Club() {
  return (
    <section className="sprinto-original-club" id="sprinto-original-club">
      <img
        src={asset("player")}
        alt="Players enjoying a game on a bright blue racket-sport court"
      />
      <div>
        <span>A club. A crew. A reason to get out.</span>
        <h2>
          GOOD GAME.
          <br />
          BETTER COMPANY.
        </h2>
        <p>
          The rally is only half the story. Stay for the people, the post-match
          chats, and the feeling of a day well played.
        </p>
        <a
          href="#sprinto-original-courts"
          className="sprinto-original-lime-button"
        >
          Meet you on court <ArrowUpRight size={20} />
        </a>
      </div>
    </section>
  );
}
