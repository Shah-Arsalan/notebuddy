import React, { useContext, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import { AuthType } from "../Types/AuthType";
import { useNavigate } from "react-router-dom";


// const AuthContext = createContext<AuthType>({} as AuthType);

const AuthContext = createContext<AuthType>({ loginCall : () => {}, signupHandler: () => {} , logoutHandler : () => {} , token : "" , user : {
  _id : "",
  archives : [],
  createdAt : "",
  email : "",
  firstName : "",
  id : "",
  lastName : "" ,
  notes : [],
  updatedAt : "",
  }});




const AuthProvider = ({ children } : {children : React.ReactChild} ) => {
  const navigate = useNavigate();

  const localStorageItems = JSON.parse(
    localStorage.getItem("LoginCredentials")  || '{"dummy1":"dummy1value", "dummy2":"dummy2value"}'
  )  
  const [token, setToken] = useState(localStorageItems?.userToken);
  const [user, setUser] = useState(localStorageItems?.activeUser);
  console.log("ts1",token)
  console.log("ts2",user)
  const loginCall = async (email : string, password : string ) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password, 
      });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "LoginCredentials",
          JSON.stringify({
            userToken: response.data.encodedToken,
            activeUser: response.data.foundUser,
          })
        );
        console.log("checking : ", response);
        console.log("checking : ", response.data.foundUser);
        setUser(response.data.foundUser);
        setToken(response.data.encodedToken);
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const signupHandler = async (email  : string , password : string , firstname  : string, lastname : string) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        email,
        password,
        firstname,
        lastname,
      });
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem(
          "LoginCredentials",
          JSON.stringify({
            userToken: response.data.encodedToken,
            activeUser: response.data.createdUser,
          })
        );
        console.log("checking 2 : ", response);
        console.log("checking 2 : ", response.data.createdUser);
        setUser(response.data.createdUser);
        setToken(response.data.encodedToken);
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("LoginCredentials");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ loginCall, signupHandler, logoutHandler, token, user }}
      // value={{ loginCall }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };


// const AuthContext = createContext<AuthType>({ loginCall : () => {} , signupHandler: () => {} , logoutHandler : () => {} , token : "" , user : {
//   _id : "",
//   archives : [],
//   createdAt : "",
//   email : "",
//   firstName : "",
//   id : "",
//   lastName : "" ,
//   notes : [],
//   updatedAt : "",
//   }});

// if(typeof logincredentials === string) {
//   localstorageitem = json.parse(localstorage.getItem(login credentials))
//   } 
// typescript se bachao 