import { useNavigate } from "react-router-dom";
import { useData } from "../../Contexts";
import "./Sidebar.css";

const Sidebar = ({ appear} : {appear :    boolean}) => {
  const navigate = useNavigate();
  const {setAppear} = useData();

  return (
    <>
      <div className={`scroller ${!appear && "hide"}`}>
        <div className="components">
          <div className="component-child">
            <i className="far fa-sticky-note"></i>

            <h3 onClick={() => navigate("/home")} className="component-content">
              Note
            </h3>
          </div>

          <div className="component-child">
            <i className="fas fa-archive"></i>

            <h3
              className="component-content"
              onClick={() => navigate("/archive")}
            >
              Archived
            </h3>
          </div>

          <div className="component-child">
            <i className="fas fa-tag"></i>

            <h3
              className="component-content"
              onClick={() => navigate("/labels")}
            >
              Labels
            </h3>
          </div>

          <div className="component-child collapse">
          <i className="fas fa-caret-left"></i>

            <h3
              className="component-content"
              onClick={() => setAppear(false)}
              
            >
              Collapse
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
