import React, {
  useContext,
  createContext,
  useReducer,
  useState,
} from "react";
import { DataReducer, initialState } from "../DataReducer/Datareducer";
import {ActionType} from "../DataReducer/Datareducer";
import { StateType } from "../Types/StateType";



type DataInterface = { state : StateType , searchValue : string   , setSearchValue :  React.Dispatch<React.SetStateAction<string>> , dispatch : React.Dispatch<ActionType>  , edit : boolean, setEdit :  React.Dispatch<React.SetStateAction<boolean>>
}


const DataContext = createContext<DataInterface>({state : {notes : [] , archives : [] , searched : "" , date : "" } , searchValue : "" , setSearchValue : () => {} , dispatch : () => {} , edit : false , setEdit :  () => {}  });

const DataProvider = ({ children } : {children : React.ReactChild}) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [searchValue, setSearchValue] = useState("");
  const [edit, setEdit] = useState(false);


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
