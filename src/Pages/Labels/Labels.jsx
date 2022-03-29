import "./Labels.css";
import { Note, Sidebar } from "../../Components";
import { useData } from "../../Contexts";

const Labels = () => {
  const { state } = useData();
  const { notes } = state;
  console.log("length", notes.length);
  const tags = notes.reduce((acc, curr) => {
    return acc.concat(
      acc.some((element) => element === curr.tag) ? [] : [curr.tag]
    );
  }, []);
  console.log(tags);
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="archive-container"></div>
        {tags.map((tag) => {
          // individual tags eg work
          const tagNotes = notes.filter((item) => item.tag === tag); // array of notes that have the similar tag
          return (
            <div key={tag}>
              <h1 className="element-tag">{tag}</h1>
              {tagNotes.map((note) => (
                <Note ele={note} />
              ))}
            </div>
          );
        })}
      </div>
    </>
  );
};
export { Labels };
