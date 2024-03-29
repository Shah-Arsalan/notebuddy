import "./HomePage.css";
import { Sidebar, Input, Note } from "../../Components";
import { useAuth, useData } from "../../Contexts";
import { useFilter } from "../../useFilter/useFilter";
import { useEffect , useState } from "react";
import { getInitialArchivesData, getInitialNoteData } from "../../utils/utils";

const HomePage = () => {
  const { dispatch } = useData();
  const { state  , appear , setAppear} = useData();
  const { archives , notes} = state;
  const {token} = useAuth()
  const { filteredData } = useFilter();
  // const[appear , setAppear ] = useState(false)
  console.log("the data is " , filteredData)
  const [edit  , setEdit] = useState(false);
  console.log("running on new render")

  useEffect(() => {
    getInitialNoteData(token , dispatch); 
    getInitialArchivesData(token , dispatch);

  }, []);
  return (
    <>
    <div>
   {!appear && <i className="fas fa-bars hamburger" onClick={()=>{ setAppear(prev => !prev); console.log("appear is ", appear)}}></i>}
    </div>
      <div className="home-container">
        <Sidebar appear={appear}/>
        <div className="input-note-container">
          <Input inputObject={undefined} setEdit={setEdit}/>
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
