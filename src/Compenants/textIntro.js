import GroupOrientation from "./ButtonGroup";
import Typed from "react-typed";

import "./textIntro.css";

const TextIntro = () => {
  return (
    <div>
      <GroupOrientation />
      <div className="backgroundpic">
        <img className="photo" alt="will" src="mypic.jpg"></img>
      </div>
      <Typed className="text" 
            strings={["What's up? I'm Will, a Web Developer!", "What's up I'm Will, a Front-end Software Engineer!", "Your best friend?"]}
            typeSpeed={60}
            backSpeed={80}
            loop />
      <div className="triangle"></div>
    </div>
  );
};

export default TextIntro;
