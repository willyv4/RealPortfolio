import BasicMenu from "./Menu";
import "./textIntro.css";

const TextIntro = () => {
  return (
    <div>
      <BasicMenu />
      <div className="backgroundpic">
        <img className="photo" alt="will" src="mypic.jpg"></img>
      </div>
      <h1>
        WILL VALADEZ <br></br>
        WEB DEVELOPER
      </h1>
      <div className="triangle-element"></div>
      <div className="triangle-element2"></div>
    </div>
  );
};

export default TextIntro;
