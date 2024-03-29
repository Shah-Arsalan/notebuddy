import "./App.css";
// @ts-ignore
import Mockman from "mockman-js";
import { Routes, Route, Navigate } from "react-router-dom";
import { Nav } from "./Components";
import {
  Archive,
  Error,
  HomePage,
  Labels,
  LandingPage,
  Login,
  Signup,
} from "./Pages";
import { useAuth } from "./Contexts";

function App() {
  const { token } = useAuth();
 
  // const localStorageItems = JSON.parse(
  //   localStorage.getItem("LoginCredentials")  || '{"dummy1":"dummy1value", "dummy2":"dummy2value"}'
  // )  

  // const token = localStorageItems?.token;
  // console.log("The token is", token)
  // console.log("re renderig")
  return (
    <div className="App">
      {token && <Nav />}
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/home"
          element={token ? <HomePage /> : <Navigate to="/" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/archive"
          element={token ? <Archive /> : <Navigate to="/" />}
        />
        <Route
          path="/labels"
          element={token ? <Labels /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/404" />} />

        <Route path="/404" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
