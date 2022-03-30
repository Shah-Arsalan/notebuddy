import "./HomePage.css";
import { Sidebar, Input, Note } from "../../Components";
import { useData } from "../../Contexts";
import { useFilter } from "../../useFilter/useFilter";

const HomePage = () => {
  const { state } = useData();
  const { notes } = state;
  const { filteredData } = useFilter();
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="input-note-container">
          <Input />
          <div className="note-container">
            {filteredData.map((ele) => {
              return <Note key={ele._id} ele={ele} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
