export default function ClockDisplay({ clockTime, currentClockRef }) {
  const minutes =
    clockTime[currentClockRef.current].minutes < 10
      ? `0${clockTime[currentClockRef.current].minutes}`
      : clockTime[currentClockRef.current].minutes;
  const seconds =
    clockTime[currentClockRef.current].seconds < 10
      ? `0${clockTime[currentClockRef.current].seconds}`
      : clockTime[currentClockRef.current].seconds;

  const otherClockTime =
    currentClockRef.current === "work" ? clockTime.break : clockTime.work;

  const otherClockMins =
    otherClockTime.minutes < 10
      ? `0${otherClockTime.minutes}`
      : otherClockTime.minutes;

  const otherClockSecs =
    otherClockTime.seconds < 10
      ? `0${otherClockTime.seconds}`
      : otherClockTime.seconds;

  const otherClockLabel = currentClockRef.current === "work" ? "Break" : "Work";

  return (
    <div className="display">
      <div className="main-display">
        <div className="minutes">
          <h2>{minutes}</h2>
        </div>
        <span>:</span>
        <div className="seconds">
          <h2>{seconds}</h2>
        </div>
      </div>
      <div className="other-clock">
        <h6>{otherClockLabel} set as</h6>
        <h4>{`${otherClockMins} : ${otherClockSecs}`}</h4>
      </div>
    </div>
  );
}
