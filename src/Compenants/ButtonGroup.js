import "./Buttongroup.css";

const anchorbuttons = [
  <a href="#projects"><button className="buttons" key="one">PROJECTS</button></a>,
  <a href="#projects"><button className="buttons" key="one">SKILLS</button></a>,
  <a href="aboutme"><button className="buttons" key="three">ABOUT ME</button></a>,
  <a href="https://www.linkedin.com/in/william-valadez-097718232/" target="blank" className="buttons" key="one">LINKED IN</a>,
  <a href="https://app.joinhandshake.com/stu/users/35279504" target="blank" className="buttons" key="two">HANDSHAKE</a>,
];

export default function GroupOrientation() {
  return (
    <div className="ButtonBox">
      <span>{anchorbuttons}</span>
    </div>
  );
}
