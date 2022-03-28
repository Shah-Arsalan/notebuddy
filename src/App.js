import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./Components";
import { HomePage, LandingPage, Login, Signup } from "./Pages";
import { useAuth } from "./Contexts";

function App() {
  const { token } = useAuth();
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={token ? <HomePage /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
