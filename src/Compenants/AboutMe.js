import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="AboutMe-Container">
      <h1 className="aboutmeheader">ABOUT ME</h1>
      <img alt="me" className="lilpic" src="how-much-do-nursing-homes-cost.png"></img>
      <p className="AboutmeText">
        What’s up? I’m William Valadez and I have a keen passion for
        creating user interfaces and an effortless user experience. My web
        development journey started when I realized that management in the
        manufacturing industry didn’t fulfill my passions. So i dived into some
        basic web development and that led me to teaching myself and I have been
        hooked ever since.
      </p>
      <div className="AboutMetriangle"></div>
    </div>
  );
};

export default AboutMe;
