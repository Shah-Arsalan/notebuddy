import "./Nav.css";
const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div>
          <h1 className="logo">Note Buddy</h1>
        </div>

        <div className="icons">
          <i className="fas fa-user icon"></i>
          <i className="fab fa-github icon"></i>
          <i className="fab fa-twitter icon"></i>
        </div>
      </div>
    </>
  );
};

export { Nav };
