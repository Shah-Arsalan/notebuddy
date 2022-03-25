import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div class="landing-container">
        <div class="landing-content">
          <h1>
            Welcome to <span className="brand-name">Note Buddy!</span>
          </h1>
          <h3>Your personal quick note taking app</h3>
          <p>Log in to say hi to your new buddy!</p>
          <button class="primary-button">Log In</button>
        </div>

        <div class="landing-image">
          <img
            src="https://res.cloudinary.com/dg9tbhjxx/image/upload/v1648225981/hero_i6yhx3.png"
            alt="image"
          />
        </div>
      </div>
    </>
  );
};

export { LandingPage };
