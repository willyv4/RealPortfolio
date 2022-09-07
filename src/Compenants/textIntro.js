import GroupOrientation from "./ButtonGroup";
import Typist from "react-typist";

import "./textIntro.css";

const TextIntro = () => {
  return (
    <div>
      <GroupOrientation />
      <div className="backgroundpic">
        <img className="photo" alt="will" src="mypic.jpg"></img>
      </div>
        <Typist className="text">
          WHAT'S UP? I'M WILL VALADEZ, A WEB DEVELOPER.
        </Typist>
      <div className="triangle"></div>
    </div>
  );
};

export default TextIntro;
