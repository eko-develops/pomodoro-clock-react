import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from 'react';
import SettingsForm from "./components/SettingsForm";

function App() {

  const [displaySettings, setDisplaySettings] = useState(false);

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
      minutes: 25,
      seconds: 0
    },
    breakTimer: {
      minutes: 5,
      seconds: 0
    }
  });

  return (
    <div className="App">
      <Header />
      <div className="content">
        <SettingsForm customTimers={customTimers} setCustomTimers={setCustomTimers} setDisplaySettings={setDisplaySettings} displaySettings={displaySettings}/>
        <Clock setDisplaySettings={setDisplaySettings} timers={timers} setTimers={setTimers} />
      </div>
      <Footer />
    </div>
      );
}
export default App;