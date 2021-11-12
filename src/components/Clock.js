import { useState, useEffect } from 'react';

const Clock = () => {

    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(3);
    const [isRunning, setIsRunning] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        if(isRunning){
        
        const interval = setInterval( () => {
            if(seconds === 0){
                if(minutes !== 0){
                    setSeconds(59);
                    setMinutes(minutes - 1);
                } else {
                    setIsFinished(true);
                    setIsRunning(false);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);

        return () => clearInterval(interval);
            
        }
        
    }, [isRunning, seconds, minutes]);

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
        setMinutes(25);
        setSeconds(0);
    }

    return (
        <>
        <h1>Pomodoro Clock</h1>
        {isFinished && <span className="finished-timer-text">The timer has finished!</span> }
        <h2 className="time">{timerMinutes}:{timerSeconds}</h2>
        <div className="button-wrapper">
          <button onClick={handleStart} type="button" className="start-button">Start</button>
          <button onClick={handlePause} type="button" className="pause-button">Pause</button>
          <button onClick={handleReset} type="button" className="reset-button">Reset</button>
        </div>  
          <button type="button" className="settings-button">Settings</button>
          {isRunning ? <div>running</div> : <div>not running</div>}
          {isFinished ? <div>finished</div> : <div>not finished</div>}
        </>
    )
}

export default Clock
