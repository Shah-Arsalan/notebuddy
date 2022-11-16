import axios from "axios";
import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "DataReducer/Datareducer";
import { NoteType } from "../Types/NoteType";



export const noteHandler = async (identifier : NoteType | undefined , note : NoteType , token : string , dispatch :  React.Dispatch<ActionType>  ) => {
    try {
      let res = null;
      if (identifier) {
        console.log("identifier hai",identifier,identifier._id);
        console.log("new note", note)
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

    console.log(res);
      if (res.status === 200 || res.status === 201) {
        console.log("check", res.data.notes);
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