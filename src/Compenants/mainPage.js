import SwipeableTextMobileStepper from "./cardSlides"
import "./mainPage.css";

function mainPage() {
  return (
    <div className="MainPage_Container">
      <div className="ContentContainer">
          <SwipeableTextMobileStepper />
      </div>
      <div className="projects"></div>
      <div className="CardSlide_Container"></div>
    </div>
  );
}

export default mainPage;
