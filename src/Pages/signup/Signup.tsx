import "./Signup.css";
import { useAuth } from "../../Contexts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signupHandler } from "../../utils/utils";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser , setToken  } = useAuth();
  const [signUpDetails, setSignUpDetails] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    confirmpassword: "",
  });

  const[appear , setAppear] = useState(false);
  const[passwordType , setPasswordType] = useState("password")

  // useEffect(() => {
  //   if (token) {
  //     setTimeout(() => {
  //       navigate("/home");
  //     }, 1000);
  //   }
  // }, [token]);
  return (
    <>
      {" "}
      <div className="signup-page">
        <div className="login-container">
          <div className="login-inputs login-inputs-signup">
            <h1>Sign Up</h1>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                if(signUpDetails.password !== signUpDetails.confirmpassword  ){
                  setAppear(prev => !prev)
                }
                else if(signUpDetails.email == ""){
                  setAppear(prev => !prev)
                }
                else if(signUpDetails.firstname == ""){
                  setAppear(prev => !prev)
                }
                else if(signUpDetails.lastname == ""){
                  setAppear(prev => !prev)
                }else{
                signupHandler(
                  signUpDetails.email,
                  signUpDetails.password,
                  signUpDetails.firstname,
                  signUpDetails.lastname,
                  setUser,
                  setToken,
                  navigate
                );
              }}}
            >
              <div className="input">
                <label htmlFor="signup-email">Email</label>
                <input
                  required={true}
                  id="signup-email"
                  value={signUpDetails.email}
                  placeholder="user@gmail.com"
                  className="input-txt"
                  type="email"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="signup-first">First name</label>
                <input
                  id="signup-first"
                  value={signUpDetails.firstname}
                  placeholder="Jon"
                  className="input-txt"
                  type="text"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      firstname: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input">
                <label htmlFor="signup-last">Last Name</label>
                <input
                  id="signup-last"
                  value={signUpDetails.lastname}
                  placeholder="Doe"
                  className="input-txt"
                  type="text"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="input">
                <label htmlFor="signup-password">Password</label>
                <div className="input-icon">
                <input
                  required={true}
                  id="signup-password"
                  value={signUpDetails.password}
                  placeholder="********"
                  className="input-txt"
                  type={passwordType}
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      password: e.target.value,
                    })
                  }
                />
                  <i onClick={() => {
                  if(passwordType == "password"){
                    setPasswordType("text")
                  }else{
                    setPasswordType("password")
                  }
                }} className="fas fa-eye"></i>
                </div>
              </div>
              <div className="input">
                <label htmlFor="conf-password">Confirm Password</label>
                <input
                  id="conf-password"
                  value={signUpDetails.confirmpassword}
                  placeholder="********"
                  className="input-txt"
                  type="password"
                  onChange={(e) =>
                    setSignUpDetails({
                      ...signUpDetails,
                      confirmpassword: e.target.value,
                    })
                  }
                />
              </div>

              <div className="input forgot-password">
                <div className="list-item">
                  <input id="item-1" type="checkbox" name="checkbox-input" />
                  <label htmlFor="item-1">I accept all terms and conditions</label>
                </div>
              </div>

              <div className="input btn-input">
                <button type="submit" className="primary-button">
                  Create Account
                </button>
              </div>

              <div className="input login-link flex-justify-center">
              <p className="loginLink" onClick={() => navigate("/login")}>Already a user? Login</p>
              </div>
            </form>
          </div>
        </div>
        {appear &&<div className="error-msg">
        
        <p>Ensure all fields are filled and both passwords are same!</p>
        <p className="cross" onClick={() => {
          setAppear(prev => !prev)
        }}>❌</p>
        </div>}
      </div>
    </>
  );
};

export { Signup };
