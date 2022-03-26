import "./Login.css";
import { useAuth } from "../../Contexts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const { loginCall, token, user } = useAuth();

  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });

  const guestLoginHandler = () => {
    setLoginDetails({
      email: "adarshbalika@gmail.com",
      password: "adarshBalika",
    });
    loginCall("adarshbalika@gmail.com", "adarshBalika123");
  };

  useEffect(() => {
    if (token) {
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  }, [token]);
  return (
    <>
      <div className="login-page">
        <div className="login-container login-box">
          <div className="login-inputs">
            <h1>Login</h1>
            <div className="input">
              <label htmlFor="login-email">Email</label>
              <input
                id="login-email"
                value={loginDetails.email}
                className="input-txt"
                type="email"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, email: e.target.value })
                }
              />
            </div>
            <div className="input">
              <label htmlFor="login-password">Password</label>
              <input
                id="login-password"
                value={loginDetails.password}
                className="input-txt"
                type="password"
                onChange={(e) =>
                  setLoginDetails({ ...loginDetails, password: e.target.value })
                }
              />
            </div>

            <div className="input htmlFot-password">
              <div className="list-item">
                <input id="item-1" type="checkbox" name="checkbox-input" />
                <label htmlFor="item-1">Remember me</label>
                <a href="">Forgot Password</a>
              </div>
            </div>

            <div className="input btn-input">
              <button
                className="primary-button primary-button-login"
                onClick={() =>
                  loginCall(loginDetails.email, loginDetails.password)
                }
              >
                Log In
              </button>
            </div>

            <div className="input btn-input">
              <button
                className="primary-button primary-button-login"
                onClick={() => guestLoginHandler()}
              >
                Log In as guest
              </button>
            </div>

            <div
              onClick={() => navigate("/signup")}
              className="input signup-link signup-input flex-justify-center"
            >
              Dont have existing accout : Sign Up?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
