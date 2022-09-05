import "./Buttongroup.css";

const buttons = [
  <button className="buttons" key="one">One</button>,
  <button className="buttons" key="two">Two</button>,
  <button className="buttons" key="three">Three</button>,
  <button className="buttons" key="one">One</button>,
  <button className="buttons" key="two">Two</button>,
  <button className="buttons" key="three">Three</button>,
];

export default function GroupOrientation() {
  return (
    <div className="ButtonBox">
      <span>{buttons}</span>
    </div>
  );
}
