import "./HomePage.css";
import { Sidebar, Input, Note } from "../../Components";

const HomePage = () => {
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="input-note-container">
          <Input />
          <div className="note-container">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
