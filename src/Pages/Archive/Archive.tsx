import "./Archive.css";
import { Note, Sidebar } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import { getInitialArchivesData } from "../../utils/utils";
import { useEffect } from "react";

const Archive = () => {
  const { state } = useData();
  const { archives } = state;
  const { dispatch } = useData();
  const {token} = useAuth();
  console.log("archives are", archives.length)
  useEffect(() => {
    getInitialArchivesData(token , dispatch);

  }, []);
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
