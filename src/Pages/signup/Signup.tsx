import "./Signup.css";
import { useAuth, useData } from "../../Contexts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signupHandler } from "../../utils/utils";
import { Loader } from "../../Components/Loader/Loader";

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
const [check , setCheck] = useState(false)
  // const[appear , setAppear] = useState(false);
  const[appear , setAppear] = useState(false);
  const [message , setMessage ] = useState("");
  const[passwordType , setPasswordType] = useState("password")
  const { loading , setLoading} = useData();

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
        {loading && <Loader/>}
        <div className="login-container">
          <div className="login-inputs login-inputs-signup">
            <h1>Sign Up</h1>
            <form
              className="form"
              onSubmit={(e) => {
                setLoading(prev => !prev)
                e.preventDefault();
                console.log("clicked")
                if(signUpDetails.password !== signUpDetails.confirmpassword  ){
                  setAppear(prev => !prev)
                  setMessage("Passwords don't match!")
                  setLoading(prev => !prev)
                }
                else if(signUpDetails.email == ""){
                  setAppear(prev => !prev)
                  setMessage("Enter Email field!")
                  setLoading(prev => !prev)
                }
                else if(signUpDetails.firstname == ""){
                  setAppear(prev => !prev)
                  setMessage("Enter first name field!")
                  setLoading(prev => !prev)
                }
                else if(signUpDetails.lastname == ""){
                  setAppear(prev => !prev)
                  setMessage("Enter last name field!")
                  setLoading(prev => !prev)
                }
                else if(check== false){
                  setAppear(prev => !prev)
                  setMessage("You need to accept the terms and conditions!")
                  setLoading(prev => !prev)
                }
                else{
                signupHandler(
                  signUpDetails.email,
                  signUpDetails.password,
                  signUpDetails.firstname,
                  signUpDetails.lastname,
                  setUser,
                  setToken,
                  navigate,
                  setAppear,
                  setMessage,
                  setLoading

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
                  <input id="item-1" type="checkbox" name="checkbox-input" onChange={() => setCheck(prev => !prev)}/>
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
            {appear &&<div className="error-msg">
        
        {message}
        <p className="cross" onClick={() => {
          setAppear(prev => !prev)
        }}>❌</p>
        </div>}
          </div>
        </div>
        
      </div>
    </>
  );
};

export { Signup };
