import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="scroller">
        <div className="components">
          <div className="component-child">
            <i className="far fa-sticky-note"></i>

            <h3 className="component-content">Note</h3>
          </div>

          <div className="component-child">
            <i className="fas fa-archive"></i>

            <h3 className="component-content">Archived</h3>
          </div>

          <div className="component-child">
            <i className="fas fa-trash-alt"></i>

            <h3 className="component-content">Bin</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export { Sidebar };
