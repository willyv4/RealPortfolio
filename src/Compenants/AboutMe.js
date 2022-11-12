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
        Hello, I’m William Valadez! I have a strong passion for creating user
        interfaces, effortless user experiences, and functional programs! My web
        development journey began when I realized that managing in the
        manufacturing industry wasn’t as fun or challenging as my newfound
        obsession; coding. From that point on I’ve made changes to invest my
        personal time in fostering my tech skills. I have been resourceful,
        self-motivated, and diligent as I have taught myself web development.
        Over the past 10 months, I have become a competent developer, but I have
        a lot to learn. I have the grit and passion for it. My short-term goal
        is to land a web development position. I'm eager to work with and learn
        from professionals. I'm excited to put in the time and effort.
      </p>
      <div className="AboutMetriangle"></div>
    </div>
  );
};

export default AboutMe;
