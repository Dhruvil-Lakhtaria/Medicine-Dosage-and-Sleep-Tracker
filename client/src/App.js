import "./App.css";
import TopSection from "./components/TopSection";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <MainSection />
    </div>
  );
}

export default App;
