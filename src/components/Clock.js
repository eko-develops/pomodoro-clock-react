import { useState, useEffect } from 'react';

const Clock = () => {

    const initialProdTimer = {
        minutes: 0,
        seconds: 5
    }

    const initialBreakTimer = {
        minutes: 0,
        seconds: 3
    }

    const [timer, setTimer] = useState(initialProdTimer);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [rest, setRest] = useState(false);

    const timerMinutes = timer.minutes < 10 ? `0${timer.minutes}` : timer.minutes;
    const timerSeconds = timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds;

    useEffect(() => {

        if(isRunning){
        
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
                            setTimer(initialProdTimer);
                        } else {
                            setTimer(initialBreakTimer);
                        }
                    }
                } else {
                    setTimer({minutes: timer.minutes, seconds: timer.seconds - 1});
                }

            }, 1000);

            return () => clearInterval(interval);

        }
    }, [isRunning, timer, rest, initialBreakTimer, initialProdTimer]);

    const handleStart = () => {
        console.log('start clicked');
        setIsFinished(false);
        setIsRunning(true);
    }
    const handlePause = () => {
        console.log('pause clicked');
        setIsRunning(false);
    }
    const handleReset = () => {
        console.log('reset clicked');
        setIsRunning(false);
        setIsFinished(false);
        setTimer(initialProdTimer);
        setRest(false);
    }

    return (
        <>
        <h1>Pomodoro Clock</h1>
        <div className="finished-timer-text-wrapper">
        {(isFinished && rest) && 
        <span className="finished-timer-text">The timer has finished!<br/><strong>It's time for your break.</strong></span>
        }
        {(isFinished && !rest) && 
        <span className="finished-timer-text">The timer has finished!<br/><strong>It's time to get busy.</strong></span>
        }
        </div>
        <h2 className="time">{timerMinutes}:{timerSeconds}</h2>
        <div className="button-wrapper">
          <button onClick={isRunning ? handlePause : handleStart} type="button" className={isRunning ? "pause-button start-pause" : "start-button start-pause" }>{isRunning ? "Pause" : "Start"}</button>
          <button onClick={handleReset} type="button" className="reset-button">Reset</button>
        </div>  
          {/* {isRunning ? <div>running</div> : <div>not running</div>}
          {isFinished ? <div>finished</div> : <div>not finished</div>}
          {rest ? <div>break</div> : <div>productivity</div>} */}
        </>
    )
}

export default Clock
