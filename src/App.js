import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import SettingsForm from "./components/SettingsForm";

function App() {

  useEffect( () => {
    document.title = `Pomodoro Clock`;
  }, [] );

  const uiClickAudio = new Audio("/sounds/ui-click.wav");
  const prodFinishedAudio = new Audio("/sounds/finished-prod-sound.wav");
  const breakFinishedAudio = new Audio("/sounds/finished-break-sound.wav");
  
  const playFinishedBreakSound = () => {
    breakFinishedAudio.play();
  }

  const playFinishedProdSound = () => {
    prodFinishedAudio.play();
  }

  const playClickSound = () => {
    uiClickAudio.play();
  }

  const [displaySettings, setDisplaySettings] = useState(false);

  //used only for display labels on settings modal
  const [customTimers, setCustomTimers] = useState({
    prodTimer: {
      minutes: 25,
      seconds: 0
    },
    breakTimer:{
      minutes: 5,
      seconds: 0,
    }
  });

  const [timers, setTimers] = useState({
    prodTimer: {
      minutes: 0,
      seconds: 5
    },
    breakTimer: {
      minutes: 0,
      seconds: 3
    }
  });

  return (
    <div className="App">
      <Header />
      <div className="content">
        <SettingsForm playClickSound={playClickSound} timers={timers} setTimers={setTimers} customTimers={customTimers} setCustomTimers={setCustomTimers} setDisplaySettings={setDisplaySettings} displaySettings={displaySettings}/>
        <Clock displaySettings={displaySettings} playFinishedBreakSound={playFinishedBreakSound} playFinishedProdSound={playFinishedProdSound} playClickSound={playClickSound} setDisplaySettings={setDisplaySettings} timers={timers} setTimers={setTimers} />
        <p>The initial working timer is set to 5 seconds and break timer is set to 3 seconds. This is intended to allow testing of the audio sounds and switching between working and break timers.</p>
      </div>
      <Footer />
    </div>
      );
}
export default App;