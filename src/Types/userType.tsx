// import { NoteType } from "./NoteType";

import { NoteType } from "./NoteType";

export type userType = {
  _id: string;
  archives: Array<NoteType>;
  createdAt: string;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  notes: Array<NoteType>;
  updatedAt: string;
};
