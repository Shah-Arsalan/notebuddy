import axios from "axios";
import { ActionType } from "../DataReducer/Datareducer";
// import { ActionType } from "DataReducer/Datareducer";
import { NoteType } from "../Types/NoteType";



export const noteHandler = async (identifier : NoteType | undefined , note : NoteType , token : string ) => {
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
       return res.data;
      // console.log(res);
      // if (res.status === 200 || res.status === 201) {
      //   console.log("check", res.data.notes);
      //   dispatch({
      //     type: "ENTERNOTE",
      //     payload: { note: res.data.notes },
      //   });
      // }
      
    } }
    catch (error) {
      console.error(error);
    }
  };