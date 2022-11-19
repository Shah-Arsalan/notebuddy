import React, { useContext, useState } from "react";
import { createContext } from "react";
import { AuthType } from "../Types/AuthType";




// const AuthContext = createContext<AuthType>({} as AuthType);

const AuthContext = createContext<AuthType>({ token : "" , user : {
  _id : "",
  archives : [],
  createdAt : "",
  email : "",
  firstName : "",
  id : "",
  lastName : "" ,
  notes : [],
  updatedAt : "",
  } , setToken : ()=>{} , setUser : ()=>{}});




const AuthProvider = ({ children } : {children : React.ReactChild} ) => {

  const localStorageItems = JSON.parse(
    localStorage.getItem("LoginCredentials")  || '{"dummy1":"dummy1value", "dummy2":"dummy2value"}'
  )  
  const [token, setToken] = useState(localStorageItems?.userToken);
  const [user, setUser] = useState(localStorageItems?.activeUser);



  return (
    <AuthContext.Provider
      value={{  token, user , setToken , setUser  }}
      // value={{ loginCall }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };


