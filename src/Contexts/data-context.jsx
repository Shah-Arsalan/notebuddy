import { useContext, createContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../DataReducer/Datareducer";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DataReducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
