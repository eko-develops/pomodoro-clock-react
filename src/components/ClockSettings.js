export default function ClockSettings({
  setClockTime,
  customSettingsRef,
  setViewSettings,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const [minutes, seconds] = new FormData(e.target).values();

    if (e.target.id === "work-form") {
      customSettingsRef.current = {
        ...customSettingsRef.current,
        work: {
          minutes: parseInt(minutes),
          seconds: parseInt(seconds),
        },
      };
    } else {
      customSettingsRef.current = {
        ...customSettingsRef.current,
        break: {
          minutes: parseInt(minutes),
          seconds: parseInt(seconds),
        },
      };
    }

    setClockTime(customSettingsRef.current);
  };

  const handleFormClose = () => {
    setViewSettings(false);
  };

  return (
    <div className="settings fadeIn">
      <h2>Custom Settings</h2>

      <div className="forms-container">
        <form id="work-form" onSubmit={(e) => handleFormSubmit(e)}>
          <h3>Work Time</h3>
          <label>Enter Minutes</label>
          <input name="custom-minutes" type="number" pattern="\d*" required />
          <label>Enter Seconds</label>
          <input name="custom-seconds" type="number" pattern="\d*" required />
          <button type="submit">Submit</button>
        </form>
        <form id="break-form" onSubmit={(e) => handleFormSubmit(e)}>
          <h3>Break Time</h3>
          <label>Enter Minutes</label>
          <input name="custom-minutes" type="number" pattern="\d*" required />
          <label>Enter Seconds</label>
          <input name="custom-seconds" type="number" pattern="\d*" required />
          <button type="submit">Submit</button>
        </form>
      </div>
      <button className="cancel-button" onClick={handleFormClose} type="button">
        Close
      </button>
    </div>
  );
}
