import axios from "axios";
import { useState } from "react";
import { Input } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import "./Note.css";

const Note = ({ ele }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  const [edit, setEdit] = useState(false);
  const { title, content, timeCreated, backgroundColor, _id } = ele;

  const editHandler = () => {
    setEdit(true);
  };

  const deleteHandler = async () => {
    try {
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

          <div className="note-features">
            <p className="time">{timeCreated}</p>
            <i onClick={() => editHandler()} class="fas fa-edit"></i>

            <i className="fas fa-trash-alt" onClick={() => deleteHandler()}></i>
          </div>
        </div>
      )}
    </>
  );
};

export { Note };
