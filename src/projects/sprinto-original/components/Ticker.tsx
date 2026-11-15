import { tickerPhrases } from "../data";

function PhraseList({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined}>
      {tickerPhrases.map((phrase) => (
        <li key={phrase}>
          {phrase}
          <i aria-hidden="true">✳</i>
        </li>
      ))}
    </ul>
  );
}

export function Ticker() {
  return (
    <div className="sprinto-original-ticker">
      <div className="sprinto-original-ticker-track">
        <PhraseList />
        <PhraseList hidden />
      </div>
    </div>
  );
}
