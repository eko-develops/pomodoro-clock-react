const Clock = () => {
    return (
        <>
        <h1>Pomodoro Clock</h1>
        <h2 className="time">25:00</h2>
        <div className="button-wrapper">
          <button type="button" className="start-button">Start</button>
          <button type="button" className="pause-button">Pause</button>
          <button type="button" className="reset-button">Reset</button>
        </div>  
        </>
    )
}

export default Clock
