import GroupOrientation from './ButtonGroup';
import Typist from 'react-typist';

import "./textIntro.css";

const TextIntro = () => {
  return (
    <div>
      <GroupOrientation />
      <div className="backgroundpic">
        <img className="photo" alt="will" src="mypic.jpg"></img>
      </div>
      <div><Typist className="text">
        WHAT'S UP? I'M 
        WILL VALADEZ, <br></br>
        A WEB DEVELOPER
      </Typist>
      </div>
      <div className="triangle-element"></div>
      <div className="triangle-element2"></div>
    </div>
  );
};

export default TextIntro;
