import React, {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DataReducer, initialState } from "../DataReducer/Datareducer";
import { useAuth } from "./index.js";
import {ActionType} from "../DataReducer/Datareducer";
import { NoteType } from "Types/NoteType";
import { StateType } from "Types/StateType";
import axios from "axios";
import { useNavigate } from "react-router-dom";



type DataInterface = { state : StateType , searchValue : string   , setSearchValue :  React.Dispatch<React.SetStateAction<string>> , dispatch : React.Dispatch<ActionType>  , edit : boolean, setEdit :  React.Dispatch<React.SetStateAction<boolean>>
}


const DataContext = createContext<DataInterface>({state : {notes : [] , archives : [] , searched : "" , date : "" } , searchValue : "" , setSearchValue : () => {} , dispatch : () => {} , edit : false , setEdit :  () => {}  });

const DataProvider = ({ children } : {children : React.ReactChild}) => {
  const { token, user } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [searchValue, setSearchValue] = useState("");
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();



  // useEffect(() => {
  //   if (!token) {
  //     dispatch({
  //       type: "ENTERNOTE",
  //       payload: { note: [] },
  //     });
  //   }
  //   if (token) {
  //     console.log("user here", user);
  //     console.log("user notes here" , user.notes)
  //     dispatch({
  //       type: "ENTERNOTE",
  //       payload: { note: user.notes },
  //     });
  //     dispatch({
  //       type: "ARCHIVE",
  //       payload: { archives: user.archives },
  //     });
  //   }
  // },[token]);


  // useEffect(() => {
  //   const getInitialData = async () => {
  //     try {
  //         const res = await axios.delete("/api/notes", {
  //           headers: {
  //             authorization: token,
  //           }
  //         });
  
  //         if (res.status === 200 || res.status === 201) {
  //           dispatch({
  //             type: "ENTERNOTE",
  //             payload: { note: res.data.notes },
  //           });
  //         }
          
  //       } 
  //      catch (error) {
  //       console.error(error);
  //     }

  //     try {
  //       const res = await axios.delete("/api/archives", {
  //         headers: {
  //           authorization: token,
  //         }
  //       });

  //       if (res.status === 200 || res.status === 201) {
  //         dispatch({
  //           type: "ARCHIVE",
  //           payload: { archives: res.data.archives },
  //         });
  //       }
     
  //     } 
  //    catch (error) {
  //     console.error(error);
  //   }
  //   };
  
  //   getInitialData(); 

  // }, []);


  return (
    <DataContext.Provider
      value={{ state, searchValue, setSearchValue, dispatch , edit , setEdit } }
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
