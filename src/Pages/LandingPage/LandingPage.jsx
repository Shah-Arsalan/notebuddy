import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="landing-container">
        <div class="landing-content">
          <h1>
            Welcome to <span className="brand-name">Note Buddy!</span>
          </h1>
          <h3>Your personal quick note taking app</h3>
          <p>Log in to say hi to your new buddy!</p>
          <button class="primary-button" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>

        <div class="landing-image">
          <img
            src="https://res.cloudinary.com/dg9tbhjxx/image/upload/v1648225981/hero_i6yhx3.png"
            alt="logo-icon"
          />
        </div>
      </div>
    </>
  );
};

export { LandingPage };
