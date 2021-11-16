import { useState, useEffect } from 'react';

const Clock = ({ timers, setDisplaySettings, playClickSound, playFinishedProdSound, playFinishedBreakSound}) => {

    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [rest, setRest] = useState(false);
    const currentTimer = rest ? timers.breakTimer : timers.prodTimer;
    const [timer, setTimer] = useState(currentTimer);

    const timerMinutes = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
    const timerSeconds = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;

    useEffect( () => {
        setTimer(currentTimer);
    }, [timers, currentTimer])

    useEffect(() => {

        if(isRunning){
            document.title = rest ? `${timerMinutes}:${timerSeconds} - On break..` : `${timerMinutes}:${timerSeconds} - Working..`;
        
            const interval = setInterval( () => {
                if(timer.seconds === 0){
                    if(timer.minutes !== 0){
                        setTimer({
                            minutes: timer.minutes - 1,
                            seconds: 59
                        });
                    } else {
                        setIsRunning(false);
                        setIsFinished(true);
                        setRest(!rest);
                        if(rest){
                            document.title = `${timerMinutes}:${timerSeconds} - Time to work!`;
                            setTimer(timers.prodTimer);
                            playFinishedProdSound();
                        } else {
                            document.title = `${timerMinutes}:${timerSeconds} - It's break time!`;
                            setTimer(timers.breakTimer);
                            playFinishedBreakSound();
                        }
                    }
                } else {
                    setTimer({minutes: timer.minutes, seconds: timer.seconds - 1});
                }

            }, 1000);

            return () => clearInterval(interval);

        }
    }, [isRunning, timer, rest, timers, playFinishedProdSound, playFinishedBreakSound, timerMinutes, timerSeconds]);

    const handleStart = () => {
        console.log('start clicked');
        setIsFinished(false);
        setIsRunning(true);
        playClickSound();
    }
    const handlePause = () => {
        console.log('pause clicked');
        setIsRunning(false);
        playClickSound();
    }
    const handleReset = () => {
        console.log('reset clicked');
        setIsRunning(false);
        setIsFinished(false);
        setTimer(currentTimer);
        // setRest(false);
        playClickSound();
        document.title = `Pomodoro Clock`;
    }

    const handleSettings = () => {
        setDisplaySettings(true);
        console.log('settings clicked');
        playClickSound();
    }

    return (
        <>
        <div className="finished-timer-text-wrapper">
        {(isFinished && rest) && 
        <span className="finished-timer-text">The timer has finished!<br/><strong>It's time for your break.</strong></span>
        }
        {(isFinished && !rest) && 
        <span className="finished-timer-text">The timer has finished!<br/><strong>It's time to get busy.</strong></span>
        }
        </div>
        <h2 className="time">{timerMinutes}:{timerSeconds}</h2>
        <div className="main-button-wrapper">

        <div className="button-wrapper">
                <div className="start-reset-wrapper">
                    <button onClick={isRunning ? handlePause : handleStart} type="button" className={isRunning ? "pause-button start-pause" : "start-button start-pause" }>{isRunning ? "Pause" : "Start"}<br/>{rest ? "BREAK" : "PRODUCTIVITY"}</button>
                    <button onClick={handleReset} type="button" className="reset-button">Reset</button>
                </div>
                <button onClick={handleSettings} disabled={isRunning ? true : false} type="button" className="settings-button">Settings</button>
            </div>  
        </div>
          {/* {isRunning ? <div>running</div> : <div>not running</div>}
          {isFinished ? <div>finished</div> : <div>not finished</div>}
          {rest ? <div>break</div> : <div>productivity</div>} */}
        </>
    )
}

export default Clock
