import SwipeableTextMobileStepper from "./cardSlides";
import TextIntro from "./textIntro";
import "./mainPage.css";
import AboutMe from "./AboutMe";

function mainPage() {
  return (
    <div>
      <div className="landing">
        <TextIntro />
      </div>
      <AboutMe />
      <div className="MainPage_Container">
        <div className="textContainer">
          <h1 className="TEXT" id="projects">PROJECTS AND SKILLS</h1>
          <p className="projectandskills">
            I have honed a variety of skills in and outside the tech industry.
            In the last 7 months I have created and contributed to many
            projects. Here's some of the skills learned along the way... React,
            JavaScript, CSS, HTML, NodeJS, APIs, Supabase, Firebase, Git, TypeScript, and
            Wordpress.
            <br></br>
            <br></br>
            Other notable skills: Management, Conflict resolution, Troubleshooting,
            Building Relationships.
          </p>
        </div>
        <SwipeableTextMobileStepper />
      </div>
    </div>
  );
}

export default mainPage;
