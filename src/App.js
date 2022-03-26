import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, LandingPage, Login, Signup } from "./Pages";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
