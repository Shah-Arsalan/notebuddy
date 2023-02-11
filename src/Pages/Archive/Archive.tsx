import "./Archive.css";
import { Note, Sidebar } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import { getInitialArchivesData } from "../../utils/utils";
import { useEffect } from "react";

const Archive = () => {
  const { state , appear , setAppear} = useData();
  const { archives } = state;
  const { dispatch } = useData();
  const {token} = useAuth();
  console.log("archives are", archives.length)
  useEffect(() => {
    getInitialArchivesData(token , dispatch);

  }, []);
  return (
    <>
    <div>
    {!appear && <i className="fas fa-bars hamburger" onClick={()=>{ setAppear(prev => !prev); console.log("appear is ", appear)}}></i>}
    </div>
      <div className="home-container">
        <Sidebar appear={appear} />
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
