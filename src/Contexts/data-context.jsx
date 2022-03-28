import { useContext, createContext, useEffect, useReducer } from "react";
import { DataReducer, initialState } from "../DataReducer/Datareducer";
import { useAuth } from "./index.js";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);

  useEffect(() => {
    if (!token) {
      dispatch({
        type: "ENTERNOTE",
        payload: { note: [] },
      });
    }
    if (token) {
      dispatch({
        type: "ENTERNOTE",
        payload: { note: user.notes },
      });
    }
  }, [token]);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
