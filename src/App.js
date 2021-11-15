import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const initialProdTimer = {
    minutes: 0,
    seconds: 5
}

const initialBreakTimer = {
    minutes: 0,
    seconds: 3
}

  return (
    <div className="App">
      <Header />
      <div className="content">
        <Clock initialProdTimer={initialProdTimer} initialBreakTimer={initialBreakTimer} />
      </div>
      <Footer />
    </div>
      );
}
export default App;