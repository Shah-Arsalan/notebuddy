import {
  useContext,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { DataReducer, initialState } from "../DataReducer/Datareducer";
import { useAuth } from "./index.js";

const DataContext = createContext();
const DataProvider = ({ children }) => {
  const { token, user } = useAuth();
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (!token) {
      dispatch({
        type: "ENTERNOTE",
        payload: { note: [] },
      });
    }
    if (token) {
      console.log("user here", user);
      dispatch({
        type: "ENTERNOTE",
        payload: { note: user.notes },
      });
      dispatch({
        type: "ARCHIVE",
        payload: { archives: user.archives },
      });
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{ state, searchValue, setSearchValue, dispatch }}
    >
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
