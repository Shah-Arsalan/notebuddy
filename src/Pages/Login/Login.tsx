import "./Login.css";
import { useAuth, useData } from "../../Contexts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../utils/utils";
import { truncate } from "fs";
import { Loader } from "../../Components/Loader/Loader";
const Login = () => {
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const[appear , setAppear] = useState(false);
  const [message , setMessage ] = useState("");
  const { setToken} = useAuth();
  const {setUser }= useAuth();
  const { loading , setLoading} = useData();

  const guestLoginHandler = () => {
    setLoginDetails({
      email: "demo@gmail.com",
      password: "a",
    });
    loginCall("demo@gmail.com", "a" ,setUser , setToken ,navigate , setAppear , setMessage , setLoading );
  };


  return (
    <>
      <div className="login-page">
        {loading && <Loader/>}
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
                onClick={() => {
                  setLoading(prev => !prev)
                  loginCall(loginDetails.email, loginDetails.password, setUser , setToken , navigate , setAppear , setMessage , setLoading)
                }
                  
                }
              >
                Log In
              </button>
            </div>

            {/* <div className="input btn-input">
              <button
                className="primary-button primary-button-login"
                onClick={() => guestLoginHandler()}
              >
                Log In as guest
              </button>
            </div> */}

            <div
              onClick={() => navigate("/signup")}
              className="input signup-link signup-input flex-justify-center"
            >
              Dont have existing accout : Sign Up?
            </div>
            {appear &&<div className="error-msg-login">
        
        <p>{message}</p>
        <p className="cross-login" onClick={() => {
          setAppear(prev => !prev)
        }}>❌</p>
        </div>}
          </div>
        </div>
      </div>
    </>
  );
};

export { Login };
