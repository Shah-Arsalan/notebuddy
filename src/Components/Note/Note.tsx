import axios from "axios";
import { useState } from "react";
// import { NoteType } from "Types/NoteT";
import { Input } from "..";
import { useAuth, useData } from "../../Contexts";
import { NoteType } from "../../Types/NoteType";
import { archiveHandler, archiveRestoreHandler, deleteHandler } from "../../utils/utils";
import "./Note.css";

const Note = ({ ele, identifier } : {ele : NoteType, identifier : string | undefined }) => {
  const { token } = useAuth();
  const { dispatch  } = useData();
  const { title, content, timeCreated, backgroundColor, _id, tag } = ele;
const [edit , setEdit] = useState(false);
  const editHandler = () => {
    setEdit(true);
  };

 
  return (
    <>
      {edit ? (
        <Input inputObject={ele} setEdit={setEdit}/>
      ) : (
        <div className="note" style={{ backgroundColor }}>
          <h1>{title}</h1>
          <p>{content}</p>
          {tag !== "" && <p className="note-tag">{tag}</p>}

          <div className="note-features">
            <p className="time">{timeCreated}</p>
           { !identifier && <i onClick={() => editHandler()} className="fas fa-edit"></i>}
            {!identifier ? (
              <i className="fas fa-archive" onClick={() => archiveHandler(_id,ele,token,dispatch)}></i>
            ) : (
              <i
                className="fas fa-arrow-up"
                onClick={() => archiveRestoreHandler(_id , token ,dispatch)}
              ></i>
            )}

            <i className="fas fa-trash-alt" onClick={() => deleteHandler(identifier , token , _id , dispatch)}></i>
          </div>
        </div>
      )}
    </>
  );
};

export { Note };
