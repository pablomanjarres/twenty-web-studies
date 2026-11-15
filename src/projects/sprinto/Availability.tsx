import { ArrowUpRight, Check } from "lucide-react";
import { courts, times, days, isAvailable, type BookingState } from "./data";
export function Availability({
  booking,
  update,
}: {
  booking: BookingState;
  update: (patch: Partial<BookingState>) => void;
}) {
  return (
    <section id="availability" className="sp-availability">
      <div className="sp-section-head">
        <div>
          <span className="sp-eyebrow">The court board</span>
          <h2>Make room for a rally.</h2>
        </div>
        <div className="sp-board-meta">
          <p>
            {days[booking.day].day} {days[booking.day].date} October
          </p>
          <ul className="sp-legend sp-eyebrow">
            <li>
              <i className="sp-mark-open" aria-hidden="true" />
              Open
            </li>
            <li>
              <i className="sp-mark-booked" aria-hidden="true" />
              Booked
            </li>
            <li>
              <i className="sp-mark-pick" aria-hidden="true" />
              Your pick
            </li>
          </ul>
          <p className="sp-swipe-hint sp-eyebrow">Swipe for later times</p>
        </div>
      </div>
      <div className="sp-board-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Court / surface</th>
              {times.map((time) => (
                <th scope="col" key={time}>
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courts.map((court, i) => (
              <tr key={court.name}>
                <th scope="row">
                  {court.name}
                  <small>{court.kind}</small>
                </th>
                {times.map((time) => {
                  const open = isAvailable(i, time, booking.day);
                  const picked = booking.court === i && booking.time === time;
                  return (
                    <td key={time}>
                      <button
                        disabled={!open}
                        aria-label={
                          open
                            ? `Choose ${court.name} at ${time}`
                            : `${court.name} at ${time}, booked`
                        }
                        aria-pressed={open ? picked : undefined}
                        onClick={() => {
                          update({ court: i, time });
                          document
                            .getElementById("court-book")
                            ?.scrollIntoView({ block: "start" });
                        }}
                      >
                        {open &&
                          (picked ? (
                            <Check size={20} aria-hidden="true" />
                          ) : (
                            <>
                              <i aria-hidden="true" />
                              <ArrowUpRight size={18} aria-hidden="true" />
                            </>
                          ))}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
