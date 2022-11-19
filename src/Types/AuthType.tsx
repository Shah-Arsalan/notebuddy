import { userType } from "./userType";


export type AuthType = {
  token: string;
  user: userType;
  setToken : React.Dispatch<any>;
  setUser : React.Dispatch<any>
};
