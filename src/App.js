import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, LandingPage } from "./Pages";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/welcome" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
