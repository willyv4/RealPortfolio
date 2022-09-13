import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe-Container">
      <h1 className="aboutmeheader" id="aboutme">
        ABOUT ME
      </h1>
      <img
        alt="me"
        className="lilpic"
        src="how-much-do-nursing-homes-cost.png"
      ></img>
      <p className="AboutmeText">
        Hey, I’m William Valadez! I have a strong passion for creating user
        interfaces and an effortless user experience as well as creating
        functional programs! My web development journey started when I realized
        that managing in the manufacturing industry wasn't as fun or challenging
        as my new found obsession, coding. So from that point i got a new less time consuming job and i've been
        recourcelful in teaching my self how to code. I'm very busy as i work
        full time and i'm a full time bussiness student, yet over the past 7 months
        i've managed to become a compenant developer. My short-term goal is to get a web
        development internship or junior dev position. I look forward to learning and working with professionals i'm excited to put in the time and effort.
      </p>
      <div className="AboutMetriangle"></div>
    </div>
  );
};

export default AboutMe;
