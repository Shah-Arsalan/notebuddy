import { NotEmittedStatement } from "typescript";
import { NoteType } from "../Types/NoteType";
import { StateType } from "../Types/StateType";

// import { StateType } from "Types/StateType";
const initialState : StateType = {
  notes: [],
  archives: [],
  searched: "",
  date: "",
};



export type ActionType =  {
  type : "ENTERNOTE", 
  payload : {note : Array<NoteType>}
} |
{
  type : "ARCHIVE", 
  payload : {archives : Array<NoteType>}
}  |
{
  type : "SEARCHFILTER", 
  payload : {value : string}
}   |
{
  type : "SEARCHRESET", 
} |
{
  type : "DATEFILTER", 
  payload : string
}|
{
  type : "CLEAR", 
  
}
const DataReducer = (state : StateType, action : ActionType) : StateType => {
  // const { payload } = action;
  switch (action.type) {
    case "ENTERNOTE":
      console.log(action.payload);
      return {
        ...state,
        notes: [...action.payload.note],
      };

    case "ARCHIVE": {
      return {
        ...state,
        archives: [...action.payload.archives],
      };
    }

    case "SEARCHFILTER": {
      return {
        ...state,
        searched: action.payload.value,
      };
    }

    case "SEARCHRESET": {
      return {
        ...state,
        searched: "",
      };
    }

    case "DATEFILTER": {
      console.log(action.payload);
      return {
        ...state,
        date: action.payload,
      };
    }

    case "CLEAR": {
      return {
        ...state,
        searched: "",
        date: "",
      };
    }
    default:
      return state;
  }
};

export { DataReducer, initialState };
