export function PortStudy() {
  return (
    <section className="md-port-study" aria-label="Maritime port study">
      <img
        src={import.meta.env.BASE_URL + "images/meridian/port-study.webp"}
        alt="An evening port study with a container vessel, cranes and illuminated freight lanes"
      />
      <header>
        <span>FIELD STUDY / MARITIME</span>
        <h2>The point of arrival.</h2>
      </header>
      <p>
        A vessel, a berth, a working shore.
        <br />
        The last mile begins here.
      </p>
      <footer>
        PORT OPERATIONS / MATERIAL STUDY <span>MERIDIAN 06</span>
      </footer>
    </section>
  );
}
