import Clock from "./components/Clock";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Clock />
      </div>
      <Footer />
    </div>
      );
}
export default App;