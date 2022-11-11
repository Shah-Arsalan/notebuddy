// import { NoteType } from "Types/NoteType";
import { NoteType } from "../Types/NoteType";
import { StateType } from "../Types/StateType";
// import { StateType } from "Types/StateType";

const sortByTag = (state : StateType, data : Array<NoteType>) => {
  if (state.searched === "") {
    return data;
  }
  return data.filter((el) =>
    el.tag.toLowerCase().includes(state.searched.toLowerCase())
  );
};

const sortByDate = (state : StateType, data : Array<NoteType>) => {
  console.log("date filter here" , data.sort((a, b) => b.time - a.time) )
  if (state.date === "oldestFirst") {
    return data.sort((a, b) => b.time - a.time);
  } else {
    return data.sort((a, b) => a.time - b.time);
  }
};

export { sortByTag, sortByDate };
