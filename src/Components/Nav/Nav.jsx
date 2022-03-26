import { useState } from "react";
import { useAuth } from "../../Contexts";
import { useNavigate } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  const navigate = useNavigate();
  const { logoutHandler } = useAuth();
  const [appear, setAppear] = useState(false);
  return (
    <>
      <div className="nav-container">
        <div>
          <h1 className="logo">Note Buddy</h1>
        </div>

        <div className="icons">
          <div className="user-icon-container">
            <p
              className="logout-text"
              style={{ display: appear ? "block" : "none" }}
              onClick={() => {
                logoutHandler();
                navigate("/");
                setAppear((prev) => !prev);
              }}
            >
              Logout
            </p>
            <i
              className="fas fa-user icon"
              onClick={() => setAppear((prev) => !prev)}
            ></i>
          </div>

          <i className="fab fa-github icon"></i>
          <i className="fab fa-twitter icon"></i>
        </div>
      </div>
    </>
  );
};

export { Nav };
