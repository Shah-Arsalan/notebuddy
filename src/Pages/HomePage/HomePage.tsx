import "./HomePage.css";
import { Sidebar, Input, Note } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import { useFilter } from "../../useFilter/useFilter";
import { useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const { state , dispatch } = useData();
  const {token} = useAuth()
  const { notes } = state;
  const { filteredData } = useFilter();
  console.log("the data is " , filteredData)

  useEffect(() => {
    const getInitialData = async () => {
      try {
          const res = await axios.get("/api/notes", {
            headers: {
              authorization: token,
            }
          });
  
          if (res.status === 200 || res.status === 201) {
            dispatch({
              type: "ENTERNOTE",
              payload: { note: res.data.notes },
            });
          }
          
        } 
       catch (error) {
        console.error(error);
      }

      try {
        const res = await axios.get("/api/archives", {
          headers: {
            authorization: token,
          }
        });

        if (res.status === 200 || res.status === 201) {
          dispatch({
            type: "ARCHIVE",
            payload: { archives: res.data.archives },
          });
        }
     
      } 
     catch (error) {
      console.error(error);
    }
    };
  
    getInitialData(); 

  }, []);
  return (
    <>
      <div className="home-container">
        <Sidebar />
        <div className="input-note-container">
          <Input inputObject={undefined} />
          <div className="note-container">
            {filteredData?.map((ele) => {
              return <Note key={ele._id} ele={ele} identifier={undefined} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export { HomePage };
