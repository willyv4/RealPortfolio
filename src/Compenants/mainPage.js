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
        <div className="textContainer">
          <h1 className="TEXT">PROJECTS AND SKILLS</h1>
          <p>
            I have honed a variety of skills in and outside the tech industry.
            In the last 7 months I have created and contributed to many
            projects. heres some of the skills learned along the way... React,
            JavaScript, CSS, HTML, NodeJS, APIs, Supabase, Git, TypeScript, and
            Wordpress.
            <br></br>
            <br></br>
            Notable skills: Management, Conflict resolution, Troubleshooting,
            Building Relationships.
          </p>
        </div>
      </div>
    </div>
  );
}

export default mainPage;
