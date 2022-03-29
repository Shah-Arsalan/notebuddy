import "./Labels.css";
import { Note, Sidebar } from "../../Components";
import { useData } from "../../Contexts";

const Labels = () => {
  const { state } = useData();
  const { notes } = state;
  console.log("length", notes.length);
  const tags = notes.reduce((acc, curr) => {
    return acc.concat(
      acc.some((element) => element === curr.tag || curr.tag === "")
        ? []
        : [curr.tag]
    );
  }, []);
  console.log(tags);
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="tags-container">
          {tags.map((tag) => {
            const tagNotes = notes.filter((item) => item.tag === tag);
            return (
              <div key={tag} className="element-container">
                <h1 className="element-tag">Label : {tag}</h1>
                <div className="tags-inner-container">
                  {tagNotes.map((note) => (
                    <Note ele={note} />
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
