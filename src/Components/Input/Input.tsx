import "./Input.css";
import AddIcon from "@mui/icons-material/Add";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import { useState } from "react";
import axios from "axios";
import { useAuth, useData } from "../../Contexts";
import { NoteType } from "Types/NoteType";

// type InputType = {
//   inputObject? : NoteType , 
// }

const Input = ({ inputObject } : {inputObject : NoteType | undefined}) => {
  const { token } = useAuth();
  const { dispatch, setSearchValue, searchValue , setEdit } = useData();
  const [expansion, setExpansion] = useState(false);
  const date = new Date();
  const initialState  : NoteType = {
    title: "",
    content: "",
    timeCreated: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    time: date.getTime(),
    backgroundColor: "#FFFFFF",
    tag: "",
    _id:""
  };
  const [note, setNote] = useState(inputObject ? inputObject : initialState);

  function appear() {
    setExpansion(true);
  }

  const noteHandler = async () => {
    try {
      let res = null;
      if (inputObject) {
        res = await axios.post(
          `/api/notes/${inputObject._id}`,
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
    } catch (error) {
      console.error(error);
    }
  };

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
            e.preventDefault();
            noteHandler();
            setNote({
              title: "",
              content: "",
              backgroundColor: note.backgroundColor,
              timeCreated: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
              time: date.getTime(),
              tag: "",
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

export { Input };
