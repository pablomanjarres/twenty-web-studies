export function Header() {
  return (
    <header className="estelle-header">
      <nav aria-label="Estelle">
        <a href="#estelle-pieces">Pieces / 01–02</a>
        <a href="#estelle-visit">
          Arrange a viewing{" "}
          <span className="estelle-arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </nav>
      <span>Objects to wear. Objects to keep.</span>
    </header>
  );
}
