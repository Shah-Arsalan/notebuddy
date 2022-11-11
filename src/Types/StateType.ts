import { NoteType } from "./NoteType";

export type StateType = {
    notes: Array<NoteType>,
    archives: Array<NoteType>,
    searched: string,
    date: string,
  };
  
