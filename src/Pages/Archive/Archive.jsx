import "./Archive.css";
import { Note, Sidebar } from "../../Components";
import { useData } from "../../Contexts";

const Archive = () => {
  const { state } = useData();
  const { archives } = state;
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="archive-container">
          {archives.map((ele) => {
            return <Note key={ele._id} ele={ele} identifier={"archive-note"} />;
          })}
        </div>
      </div>
    </>
  );
};

export { Archive };
