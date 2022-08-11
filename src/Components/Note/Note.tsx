import axios from "axios";
import { useState } from "react";
import { NoteType } from "Types/NoteType";
import { Input } from "..";
import { useAuth, useData } from "../../Contexts";
import "./Note.css";

const Note = ({ ele, identifier } : {ele : NoteType, identifier : string | undefined }) => {
  const { token } = useAuth();
  const { dispatch , edit , setEdit } = useData();
  const { title, content, timeCreated, backgroundColor, _id, tag } = ele;

  const editHandler = () => {
    setEdit(true);
  };

  const deleteHandler = async () => {
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
      }
    } catch (error) {
      console.error(error);
    }
  };

  const archiveHandler = async () => {
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
        console.log("archive status", res.status);
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
        dispatch({
          type: "ARCHIVE",
          payload: { archives: res.data.archives },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const archiveRestoreHandler = async () => {
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
        console.log("archive status", res.status);
        dispatch({
          type: "ENTERNOTE",
          payload: { note: res.data.notes },
        });
        dispatch({
          type: "ARCHIVE",
          payload: { archives: res.data.archives },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {edit ? (
        <Input inputObject={ele} />
      ) : (
        <div className="note" style={{ backgroundColor }}>
          <h1>{title}</h1>
          <p>{content}</p>
          {tag !== "" && <p className="note-tag">{tag}</p>}

          <div className="note-features">
            <p className="time">{timeCreated}</p>
            <i onClick={() => editHandler()} className="fas fa-edit"></i>
            {!identifier ? (
              <i className="fas fa-archive" onClick={() => archiveHandler()}></i>
            ) : (
              <i
                className="fas fa-arrow-up"
                onClick={() => archiveRestoreHandler()}
              ></i>
            )}

            <i className="fas fa-trash-alt" onClick={() => deleteHandler()}></i>
          </div>
        </div>
      )}
    </>
  );
};

export { Note };
