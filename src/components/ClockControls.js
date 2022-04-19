export default function ClockControls({
  isRunning,
  setIsRunning,
  setClockTime,
  customSettingsRef,
  currentClockRef,
  viewSettings,
  setViewSettings,
}) {
  const handleStartPauseClick = () => setIsRunning(!isRunning);

  const handleResetClick = () => {
    setIsRunning(false);
    setClockTime({
      ...customSettingsRef.current,
      currentClock: currentClockRef.current,
    });
  };

  const handleSettingsClick = () => setViewSettings(!viewSettings);

  const playPauseButton = isRunning ? "Pause" : "Start";

  return (
    <>
      <div className="controls">
        <div className="clock-controls">
          <button
            onClick={handleStartPauseClick}
            className="start-pause"
            type="button"
          >
            {playPauseButton}
          </button>
          <button onClick={handleResetClick} className="reset" type="button">
            Reset
          </button>
        </div>
        <button
          onClick={handleSettingsClick}
          className="settings-button"
          type="button"
        >
          Settings
        </button>
      </div>
    </>
  );
}
