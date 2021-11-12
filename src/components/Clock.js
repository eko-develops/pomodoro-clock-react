const Clock = () => {

    const handleStart = () => {
        console.log('start clicked');
    }
    const handlePause = () => {
        console.log('pause clicked');
    }
    const handleReset = () => {
        console.log('reset clicked');
    }

    return (
        <>
        <h1>Pomodoro Clock</h1>
        <h2 className="time">25:00</h2>
        <div className="button-wrapper">
          <button onClick={handleStart} type="button" className="start-button">Start</button>
          <button onClick={handlePause} type="button" className="pause-button">Pause</button>
          <button onClick={handleReset} type="button" className="reset-button">Reset</button>
        </div>  
        </>
    )
}

export default Clock
