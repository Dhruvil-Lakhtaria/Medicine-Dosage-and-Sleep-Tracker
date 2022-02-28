import "./css/Homepage.css";
import "./css/Snooze.css";
import "./css/Appointment.css";
import "./css/LoginPage.css";
import "./css/MyMedsPage.css"
import Home from "./components/Homepage/Home";
import AppointmentPage from "./components/AppointmentPage/AppointmentPage";
import MyMedsPage from './components/MyMedsPage/MyMeds'
import Snooze from "./components/Snooze/Snooze";
import LoginForm from "./components/RegisterPage/LoginForm";
import Navbar from "./components/Homepage/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<LoginForm />} />
          <Route path="/appointments" element={<AppointmentPage />}/>
          <Route path="/mymeds" element={<MyMedsPage />} />
          <Route path="/snooze" element={<Snooze />}/>
          <Route path="/register" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
