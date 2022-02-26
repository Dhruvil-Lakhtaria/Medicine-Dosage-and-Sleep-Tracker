
import "./css/Homepage.css"
import "./css/Snooze.css"
import "./css/Appointment.css"
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import Home from "./components/Homepage/Home";
import Snooze from "./components/Snooze/Snooze";
import Navbar from "./components/Homepage/Navbar";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <AppointmentPage />
    </div>

  );
}

export default App;
