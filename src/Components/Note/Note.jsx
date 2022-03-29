import axios from "axios";
import { useState } from "react";
import { Input } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import "./Note.css";

const Note = ({ ele, identifier }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  const [edit, setEdit] = useState(false);
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
        <Input inputObject={ele} setEdit={setEdit} />
      ) : (
        <div className="note" style={{ backgroundColor }}>
          <h1>{title}</h1>
          <p>{content}</p>
          {tag !== "" && <p className="note-tag">{tag}</p>}

          <div className="note-features">
            <p className="time">{timeCreated}</p>
            <i onClick={() => editHandler()} class="fas fa-edit"></i>
            {!identifier ? (
              <i class="fas fa-archive" onClick={() => archiveHandler()}></i>
            ) : (
              <i
                class="fas fa-arrow-up"
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
