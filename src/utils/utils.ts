import axios from "axios";
import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "DataReducer/Datareducer";
import { NoteType } from "../Types/NoteType";



export const noteHandler = async (identifier : NoteType | undefined , note : NoteType , token : string , dispatch :  React.Dispatch<ActionType>  ) => {
    try {
      let res = null;
      if (identifier) {
        console.log("The updated note is ", note)
        res = await axios.post(
          `https://backend-notebuddy.up.railway.app/notes/${identifier?._id}`,

            note
          ,
          {
            headers: {
              authorization: token,
            },
          }
        );
        
        
      } else {
        console.log("receivd note" , note)
        res = await axios.post(
          "https://backend-notebuddy.up.railway.app/notes",
          note ,
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
        const res = await axios.delete(`https://backend-notebuddy.up.railway.app/notes/delete/${_id}`, {
          headers: {
            authorization: token,
          },
        });

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
      } else {
        const res = await axios.delete(`https://backend-notebuddy.up.railway.app/notes/delete/${_id}`, {
          headers: {
            authorization: token,
          },
        });

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
        `https://backend-notebuddy.up.railway.app/notes/archive/${_id}`,
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
        `https://backend-notebuddy.up.railway.app/notes/archive/restore/${_id}`,
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


export const loginCall = async (email : string, password : string  , setUser  : React.Dispatch<any>, setToken :  React.Dispatch<any> , navigate :  any , setAppear : React.Dispatch<React.SetStateAction<boolean>> , setMessage :React.Dispatch<React.SetStateAction<string>> , setLoading :React.Dispatch<React.SetStateAction<boolean>> ) => {
  
  try {
    const response = await axios.post("https://backend-notebuddy.up.railway.app/users/login", {
      email,
      password, 
    });


    if(response.status === 404){
      console.log("This is 404 error")
    }


    if (response.status === 200 || response.status === 201) {
      localStorage.setItem(
        "LoginCredentials",
        JSON.stringify({
          userToken: response.data.token,
          activeUser: response.data.email,
        })
      );
     
      setUser(response.data.email);
      setToken(response.data.token);
      setLoading(prev => !prev)
      navigate("/home");
    }

   
    console.log("The response is" , response);
    return response.data;
  } catch (error) {
    console.error(error);
      if(axios.isAxiosError(error)){
        console.log("This is axios error" , error)
      }

      if (error == "Error: Request failed with status code 404"){
        console.log("404")
        setAppear(prev => !prev)
        setMessage("Email does't exist");
        setLoading(prev => !prev)
      }

      if (error == "Error: Request failed with status code 401"){
        console.log("401");
        setAppear(prev => !prev);
        setMessage("Password entered is wrong");
        setLoading(prev => !prev)
      }

      // Error: Request failed with status code 401

      return error;
  }
};


export const signupHandler = async (email  : string , password : string , firstname  : string, lastname : string ,  setUser  : React.Dispatch<any>, setToken :  React.Dispatch<any> , navigate :  any , setAppear :  React.Dispatch<React.SetStateAction<boolean>> , setMessage : React.Dispatch<React.SetStateAction<string>> , setLoading :  React.Dispatch<React.SetStateAction<boolean>>) => {
  console.log("upar");
  try {
    const response = await axios.post("https://backend-notebuddy.up.railway.app/users/signup", {
      email,
      password,
      firstname,
      lastname,
    });
    console.log("in main body" , response)
    if (response.status === 200 || response.status === 201) {
    navigate("/login");
    setLoading(prev => !prev)
    }
    
    return response.data;
  } catch (error) {
    console.error("in error",error);
    if(axios.isAxiosError(error)){
      console.log("Thsi is axios error")
    }

    if(error == "Error: Request failed with status code 422"){
      setAppear(prev => !prev)
      setLoading(prev => !prev)
      setMessage("Email Entered is already registered")
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
    console.log("inside getInitialNOtedata");
      const res = await axios.get("https://backend-notebuddy.up.railway.app/notes", {
        headers: {
          authorization: token,
        }
      });

      if (res.status === 200 || res.status === 201) {
        console.log("payload is " , res.data.notes)
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
    const res = await axios.get("https://backend-notebuddy.up.railway.app/notes/archive", {
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