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
    }, [isRunning, timer, rest]);

    const handleStart = () => {
        console.log('start clicked');
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
    }

    return (
        <>
        <h1>Pomodoro Clock</h1>
        {isFinished && <span className="finished-timer-text">The timer has finished!</span> }
        <h2 className="time">{timerMinutes}:{timerSeconds}</h2>
        <div className="button-wrapper">
            {!rest
            ?
            <button onClick={handleStart} type="button" className="start-button">Start Productivity</button>
            :
            <button onClick={handleStart} type="button" className="start-button">Start Break</button>
            }
          {/* <button onClick={handleStart} type="button" className="start-button">Start</button> */}
          <button onClick={handlePause} type="button" className="pause-button">Pause</button>
          <button onClick={handleReset} type="button" className="reset-button">Reset</button>
        </div>  
          {/* <button type="button" className="settings-button">Settings</button> */}
          {isRunning ? <div>running</div> : <div>not running</div>}
          {isFinished ? <div>finished</div> : <div>not finished</div>}
        </>
    )
}

export default Clock
