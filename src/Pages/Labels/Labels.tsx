import "./Labels.css";
import { Note, Sidebar } from "../../Components";
import { useData } from "../../Contexts";
import { NoteType } from "../../Types/NoteType";
// import { NoteType } from "Types/NoteType";

const Labels = () => {
  const { state , appear , setAppear } = useData();
  const { notes } = state;
  console.log("length", notes.length);
  const tags = notes.reduce((acc, curr) => {
    return acc.concat(
      acc.some((element : NoteType) => element === curr.tag || curr.tag === "")
        ? []
        : [curr.tag]
    );
  }, []);
  console.log(tags);
  return (
    <>
    <div>
    {!appear && <i className="fas fa-bars hamburger" onClick={()=>{ setAppear(prev => !prev); console.log("appear is ", appear)}}></i>}
    </div>
      <div className="home-container">
        <Sidebar appear={appear}/>
        <div className="tags-container">
       
          {tags.map((tag : string) => {
            const tagNotes = notes.filter((item) => item.tag === tag);
            return (
              <div key={tag} className="element-container">
                <h1 className="element-tag">Label : {tag}</h1>
                <div className="tags-inner-container">
                  {tagNotes.map((note) => (
                    <Note ele={note} identifier={undefined}/>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export { Labels };
