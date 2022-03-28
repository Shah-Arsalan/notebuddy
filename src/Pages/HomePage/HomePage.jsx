import "./HomePage.css";
import { Sidebar, Input, Note } from "../../Components";
import { useData } from "../../Contexts";

const HomePage = () => {
  const { state } = useData();
  const { notes } = state;
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="input-note-container">
          <Input />
          <div className="note-container">
            {notes.map((ele) => {
              return <Note key={ele._id} ele={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
