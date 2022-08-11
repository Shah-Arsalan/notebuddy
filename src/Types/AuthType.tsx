import { userType } from "./userType";


export type AuthType = {
  loginCall:  ((email: string, password: string) => Promise<void>) | (() => void);
  signupHandler: ((email: string, password: string, firstname: string, lastname: string) => void);
  logoutHandler: () => void ;
  token: string;
  user: userType;
};
