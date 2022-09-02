import SwipeableTextMobileStepper from "./cardSlides";
import TextIntro from "./textIntro";
import "./mainPage.css";

function mainPage() {
  return (
    <div>
      <div className="landing">
        <TextIntro />
      </div>
      <div className="MainPage_Container">
        <div className="ContentContainer">
          <SwipeableTextMobileStepper />
        </div>
        <div className="projects"></div>
        <div className="CardSlide_Container"></div>
      </div>
    </div>
  );
}

export default mainPage;
