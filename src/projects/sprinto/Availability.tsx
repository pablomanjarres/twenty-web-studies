import { ArrowUpRight } from "lucide-react";
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
          <span>THE COURT BOARD</span>
          <h2>Make room for a rally.</h2>
        </div>
        <p>
          {days[booking.day].day} {days[booking.day].date} October
          <span>
            <i />
            Available <i className="sp-occupied" />
            Booked
          </span>
        </p>
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
                {times.map((time) => (
                  <td key={time}>
                    <button
                      disabled={!isAvailable(i, time, booking.day)}
                      aria-label={`Choose ${court.name} at ${time}`}
                      aria-pressed={
                        booking.court === i && booking.time === time
                      }
                      onClick={() => {
                        update({ court: i, time });
                        document
                          .getElementById("court-book")
                          ?.scrollIntoView({ block: "start" });
                      }}
                    >
                      {isAvailable(i, time, booking.day) ? (
                        <ArrowUpRight size={17} />
                      ) : (
                        <span>—</span>
                      )}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
