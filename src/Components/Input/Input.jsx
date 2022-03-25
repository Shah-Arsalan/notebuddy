import "./Input.css";
import AddIcon from "@mui/icons-material/Add";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

import { useState } from "react";

const Input = () => {
  const [expansion, setExpansion] = useState(false);
  function appear() {
    setExpansion(true);
  }
  return (
    <>
      <div>
        <form className="create-note">
          {expansion ? <input name="title" placeholder="Title" /> : null}
          <textarea
            onClick={appear}
            id="MyText"
            name="content"
            placeholder="Take a note..."
            rows={expansion ? 4 : 1}
          />
          <Zoom in={true}>
            <Fab>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </>
  );
};

export { Input };
