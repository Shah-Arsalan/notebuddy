import "./Input.css";
import AddIcon from "@mui/icons-material/Add";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";
import axios from "axios";
import { useAuth, useData } from "../../Contexts";
import { NoteType } from "../../Types/NoteType";
import { noteHandler } from "../../utils/utils";



const Input = ({ inputObject , setEdit} : {inputObject : NoteType | undefined , setEdit :  React.Dispatch<React.SetStateAction<boolean>>}) => {
  console.log("here is the input object",inputObject)
  const { token } = useAuth();
  const { dispatch, setSearchValue} = useData();
  const [expansion, setExpansion] = useState(false);
  const date = new Date();
  const initialState  : NoteType = {
    title: "",
    content: "",
    timeCreated: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    time: date.getTime(),
    backgroundColor: "#FFFFFF",
    tag: "",
    tags:[],
    _id:""
  };
  const [note, setNote] = useState(inputObject ? inputObject : initialState);

  function appear() {
    setExpansion(true);
  }


  return (
    <>
      <div className={`${inputObject && "active-outer"}`}>
        <form
          style={{
            backgroundColor: inputObject
              ? inputObject.backgroundColor
              : "var(--white)",
          }}
          className="create-note"
          onSubmit={(e) => {
            console.log("note in fr",note)
            e.preventDefault();
            noteHandler(inputObject,note,token,dispatch);
            setNote({
              title: "",
              content: "",
              backgroundColor: note.backgroundColor,
              timeCreated: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
              time: date.getTime(),
              tag: "",
              tags:[],
            });
            inputObject && setEdit(false);
            setSearchValue("");
            dispatch({ type: "SEARCHRESET" });
          }}
        >
          {expansion ? (
            <input
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
              name="title"
              placeholder="Title"
              style={{
                backgroundColor: inputObject
                  ? inputObject.backgroundColor
                  : "var(--white)",
              }}
            />
          ) : null}
          <textarea
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
            onClick={appear}
            id="MyText"
            name="content"
            placeholder="Take a note..."
            rows={expansion ? 4 : 1}
            style={{
              backgroundColor: inputObject
                ? inputObject.backgroundColor
                : "var(--white)",
            }}
          />
          <div className="input-features">
            {expansion && (
              <input
                value={note.backgroundColor}
                type="color"
                className="color-input"
                onChange={(e) => {
                  setNote({ ...note, backgroundColor: e.target.value });
                }}
              />
            )}

            {expansion && <p className="separator">|</p>}

            {expansion && (
              <input
                placeholder="Add tag"
                value={note.tag}
                type="text"
                className="tag-input"
                onChange={(e) => {
                  setNote({ ...note, tag: e.target.value });
                }}
              />
            )}
          </div>

          <Zoom in={true}>
            <Fab type="submit">
              <AddIcon />
            </Fab>
          </Zoom>
        
        </form>
      </div>
    </>
  );
};

export { Input }
