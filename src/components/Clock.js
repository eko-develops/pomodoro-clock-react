import ClockDisplay from "./ClockDisplay.js";
import ClockControls from "./ClockControls.js";
import { useState, useEffect, useRef } from "react";
import ClockSettings from "./ClockSettings.js";

export default function Clock() {
  const defaultClockTime = {
    currentClock: "work",
    work: {
      minutes: 0,
      seconds: 3,
    },
    break: {
      minutes: 0,
      seconds: 5,
    },
  };

  const [isRunning, setIsRunning] = useState(false); //intially clock not running
  const [clockTime, setClockTime] = useState(defaultClockTime); //initally set default clock to work, will later be determined by customSettingsRef
  const customSettingsRef = useRef(defaultClockTime); //ref needed to store custom settings. mainly for reset
  const currentClockRef = useRef(clockTime.currentClock);
  const [viewSettings, setViewSettings] = useState(false);

  const clockSettings = viewSettings && (
    <ClockSettings
      setClockTime={setClockTime}
      customSettingsRef={customSettingsRef}
      setViewSettings={setViewSettings}
      viewSettings={viewSettings}
    />
  );

  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        if (clockTime[currentClockRef.current].seconds === 0) {
          if (clockTime[currentClockRef.current].minutes !== 0) {
            //handle if seconds hits less than 0 and there are still minutes left, reduce minutes and set seconds
            setClockTime({
              ...clockTime,
              [currentClockRef.current]: {
                minutes: clockTime[currentClockRef.current].minutes - 1,
                seconds: 59,
              },
            });
          } else {
            //if the minutes is 0, and seconds is 0, timer is finished.
            setIsRunning(false);
            if (clockTime.currentClock === "work") {
              currentClockRef.current = "break";

              setClockTime({
                ...clockTime,
                work: customSettingsRef.current.work,
                currentClock: "break",
              });
            } else {
              currentClockRef.current = "work";

              setClockTime({
                ...clockTime,
                break: customSettingsRef.current.break,
                currentClock: "work",
              });
            }
          }
        } else {
          //if seconds is not 0, count down normally
          setClockTime({
            ...clockTime,
            [currentClockRef.current]: {
              ...clockTime[currentClockRef.current],
              seconds: clockTime[currentClockRef.current].seconds - 1,
            },
          });
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isRunning, clockTime]);

  const handleClockSwitch = (e) => {
    let id = e.target.id;
    if (id === "work-switch") {
      id = "work";
    } else {
      id = "break";
    }

    setIsRunning(false);
    currentClockRef.current = id;
    setClockTime({
      ...customSettingsRef.current,
      currentClock: currentClockRef.current,
    });
  };

  return (
    <div className="clock-container">
      <div className="clock-switch">
        <button
          id="work-switch"
          onClick={(e) => handleClockSwitch(e)}
          type="button"
        >
          Work
        </button>
        <button
          id="break-switch"
          onClick={(e) => handleClockSwitch(e)}
          type="button"
        >
          Break
        </button>
      </div>
      <h4>It's currently {currentClockRef.current} time</h4>
      <ClockDisplay clockTime={clockTime} currentClockRef={currentClockRef} />
      <div className="notice"></div>
      <ClockControls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setClockTime={setClockTime}
        customSettingsRef={customSettingsRef}
        currentClockRef={currentClockRef}
        viewSettings={viewSettings}
        setViewSettings={setViewSettings}
      />
      {clockSettings}
    </div>
  );
}
