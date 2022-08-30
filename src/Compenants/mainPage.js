import "./mainPage.css";
import './cardSlides.css'
import TitlebarBelowImageList from "./ImageList";

const MainPage = () => {
  return (
      <div className="MainPage_Container">
          <div className="ContentContainer">
          </div>
          <div className="skillOutline">
          <TitlebarBelowImageList />
          </div>
          <div className="CardSlide_Container"></div>
      </div>
  );
};

export default MainPage;
