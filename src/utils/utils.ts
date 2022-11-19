import axios from "axios";
import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "DataReducer/Datareducer";
import { NoteType } from "../Types/NoteType";



export const noteHandler = async (identifier : NoteType | undefined , note : NoteType , token : string , dispatch :  React.Dispatch<ActionType>  ) => {
    try {
      let res = null;
      if (identifier) {
        res = await axios.post(
          `/api/notes/${identifier?._id}`,
          {
            note,
          },
          {
            headers: {
              authorization: token,
            },
          }
        );
        
        
      } else {
        res = await axios.post(
          "/api/notes",
          { note },
          {
            headers: {
              authorization: token,
            },
          }
        );
    }

    
      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
      }
     return res.data;
  }
    catch (error) {
      console.error(error);
      if(axios.isAxiosError(error)){
        console.log("Thsi is axios error")
      }
      return error;
    }
  };

  export const deleteHandler = async (identifier : string | undefined , token : string,  _id : string | undefined, dispatch :  React.Dispatch<ActionType> ) => {
    try {
      if (!identifier) {
        const res = await axios.delete(`/api/notes/${_id}`, {
          headers: {
            authorization: token,
          },
        });

        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: "ENTERNOTE",
            payload: { note: res.data.notes },
          });
        }
        return res.data;
      } else {
        const res = await axios.delete(`/api/archives/delete/${_id}`, {
          headers: {
            authorization: token,
          },
        });

        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: "ARCHIVE",
            payload: { archives: res.data.archives },
          });
        }
        return res.data;
      }
    } catch (error) {
      console.error(error);
      if(axios.isAxiosError(error)){
        console.log("Thsi is axios error")
      }
      return error;
    }
  };


  export const archiveHandler = async (_id : string | undefined , ele : NoteType , token : string , dispatch : React.Dispatch<ActionType>) => {
    try {
      const res = await axios.post(
        `/api/notes/archives/${_id}`,
        { ele },
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
        dispatch({
          type: "ARCHIVE",
          payload: { archives: res.data.archives },
        });
      }
      return res.data;
    } catch (error) {
      console.error(error);
      if(axios.isAxiosError(error)){
        console.log("Thsi is axios error")
      }
      return error;
    }
  };

  export   const archiveRestoreHandler = async (_id : string | undefined, token: string , dispatch : React.Dispatch<ActionType>) => {
    try {
      const res = await axios.post(
        `/api/archives/restore/${_id}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );

      if (res.status === 200 || res.status === 201) {
        
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
        dispatch({
          type: "ARCHIVE",
          payload: { archives: res.data.archives },
        });
      }
      return res.data;
    } catch (error) {
      console.error(error);
      if(axios.isAxiosError(error)){
        console.log("Thsi is axios error")
      }
      return error;
    }
  };


export const loginCall = async (email : string, password : string  , setUser  : React.Dispatch<any>, setToken :  React.Dispatch<any> , navigate :  any) => {
  
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
     
      setUser(response.data.foundUser);
      setToken(response.data.encodedToken);
      navigate("/home");
    }
    return response.data;
  } catch (error) {
    console.error(error);
      if(axios.isAxiosError(error)){
        console.log("Thsi is axios error")
      }
      return error;
  }
};


export const signupHandler = async (email  : string , password : string , firstname  : string, lastname : string ,  setUser  : React.Dispatch<any>, setToken :  React.Dispatch<any> , navigate :  any) => {
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
   
      setUser(response.data.createdUser);
      setToken(response.data.encodedToken);
    }
    navigate("/home");
    return response.data;
  } catch (error) {
    console.error(error);
    if(axios.isAxiosError(error)){
      console.log("Thsi is axios error")
    }
    return error;
  }
};

export  const logoutHandler = (setUser  : React.Dispatch<any>, setToken :  React.Dispatch<any>) => {
  localStorage.removeItem("LoginCredentials");
  setToken(null);
  setUser(null);
  return 2;
};

export const getInitialNoteData = async (token : string , dispatch : React.Dispatch<ActionType>) => {
  try {
      const res = await axios.get("/api/notes", {
        headers: {
          authorization: token,
        }
      });

      if (res.status === 200 || res.status === 201) {
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
      }
      return res.data;
    } 
   catch (error) {
    console.error(error);
    if(axios.isAxiosError(error)){
      console.log("Thsi is axios error")
    }
    return error;
  }
};

export const getInitialArchivesData = async (token : string , dispatch : React.Dispatch<ActionType>) => {
  try {
    const res = await axios.get("/api/archives", {
      headers: {
        authorization: token,
      }
    });

    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: "ARCHIVE",
        payload: { archives: res.data.archives },
      });
    }
    return res.data;
  } 
 catch (error) {
  console.error(error);
    if(axios.isAxiosError(error)){
      console.log("Thsi is axios error")
    }
    return error;
}
};