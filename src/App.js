import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from 'react';
import SettingsForm from "./components/SettingsForm";
import Switch from '@mui/material/Switch';

function App() {

  const uiClickAudio = new Audio("/sounds/ui-click.wav");
  const prodFinishedAudio = new Audio("/sounds/finished-prod-sound.wav");
  const breakFinishedAudio = new Audio("/sounds/finished-break-sound.wav");

  useEffect( () => {
    document.title = `Pomodoro Clock`;
  }, [] );

  uiClickAudio.volume = 0.6;
  prodFinishedAudio.volume = 0.1;
  breakFinishedAudio.volume = 0.1;

  //set as an object to add a slider that controls volume in the future
  // const [volumeLevel, setVolumeLevel] = useState({
  //   uiClickAudio: uiClickAudio.volume = 0.6,
  //   prodFinishedAudio: prodFinishedAudio.volume = 0.1,
  //   breakFinishedAudio: breakFinishedAudio.volume = 0.1
  // });


  const playFinishedBreakSound = () => {
    breakFinishedAudio.play();
  }

  const playFinishedProdSound = () => {
    prodFinishedAudio.play();
  }

  const playClickSound = () => {
    uiClickAudio.play();
  }

  const [rest, setRest] = useState(false);


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

  const [switchValue, setSwitchValue] = useState(false);

  const [isRunning, setIsRunning] = useState(false);

  const handleSwitchChange = (e) => {
    setSwitchValue(e.target.checked);
    setRest( prev => !prev);
    playClickSound();
  }

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div><strong className="current-settings-title">Custom Settings</strong><br/><strong>Productivity Timer:</strong> {customTimers.prodTimer.minutes} minutes</div>
        <div><strong>Break Timer:</strong> {customTimers.breakTimer.minutes} minutes</div>
        <SettingsForm playClickSound={playClickSound} timers={timers} setTimers={setTimers} customTimers={customTimers} setCustomTimers={setCustomTimers} setDisplaySettings={setDisplaySettings} displaySettings={displaySettings}/>
        <Clock isRunning={isRunning} setIsRunning={setIsRunning} setRest={setRest} rest={rest} displaySettings={displaySettings} playFinishedBreakSound={playFinishedBreakSound} playFinishedProdSound={playFinishedProdSound} playClickSound={playClickSound} setDisplaySettings={setDisplaySettings} timers={timers} setTimers={setTimers} />
        <div className="switch-container">
          <span>{rest ? 'Break Mode' : 'Productivity Mode'}</span>
          <Switch
          disabled={isRunning ? true : false} 
          checked={switchValue}
          onChange={e => handleSwitchChange(e)}
          />
        </div>
        <p>The initial working timer is set to 5 seconds and break timer is set to 3 seconds. This is intended to allow testing of the audio sounds and switching between working and break timers.</p>
      </div>
      <Footer />
    </div>
      );
}
export default App;