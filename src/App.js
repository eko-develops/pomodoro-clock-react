function App() {
  return (
    <div className="App">
      <header>
        <div className="brand">
          ekodevelops
        </div>
        <div className="socials">
          <div className="single-social">
            <div className="social-icon">
            </div>
            <span>GitHub</span>
          </div>
        </div>
      </header>
      <div className="content">
        <h1>Pomodoro Clock</h1>
        <h2 className="time">00:00</h2>
        <div className="button-wrapper">
          <button type="button" className="start-button">Start</button>
          <button type="button" className="pause-button">Pause</button>
          <button type="button" className="reset-button">Reset</button>
        </div>
      </div>
    </div>
      );
}
export default App;