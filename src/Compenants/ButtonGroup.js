import "./Buttongroup.css";

const anchorbuttons = [
  <a href="#projects" key="projects">
    <button className="buttons" style={{ borderTopLeftRadius: 5 }}>
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M4 16h16V5H4v11zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.993V4.007C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.986c0 .556-.455 1.007-.992 1.007H13z"></path>
        </g>
      </svg>
      PROJECTS
    </button>
  </a>,
  <a href="#projects" key="Skills">
    <button className="buttons">
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.251.068a.5.5 0 01.227.58L9.677 6.5H13a.5.5 0 01.364.843l-8 8.5a.5.5 0 01-.842-.49L6.323 9.5H3a.5.5 0 01-.364-.843l8-8.5a.5.5 0 01.615-.09zM4.157 8.5H7a.5.5 0 01.478.647L6.11 13.59l5.732-6.09H9a.5.5 0 01-.478-.647L9.89 2.41 4.157 8.5z"
          clip-rule="evenodd"
        ></path>
      </svg>
      SKILLS
    </button>
  </a>,
  <a href="#aboutme" key="AboutMe">
    <button className="buttons" style={{ borderTopRightRadius: 5 }}>
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="#000"
          stroke-width="2"
          d="M5,12 C3.343,12 2,10.657 2,9 C2,7.343 3.343,6 5,6 C6.657,6 8,7.343 8,9 C8,10.657 6.657,12 5,12 Z M9,18 L9,16 C9,13.7504 7.2128,12 4.964,12 L5.0184,12 C2.7688,12 1,13.7504 1,16 L1,18 M12,7 L24,7 M12,17 L22,17 M12,12 L19,12"
        ></path>
      </svg>
      ABOUT ME
    </button>
  </a>,
  <a
    href="https://www.linkedin.com/in/william-valadez-097718232/"
    target="blank"
    key="LinkedIn"
  >
    <button className="buttons" style={{ borderBottomLeftRadius: 5 }}>
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z"></path>
      </svg>
      LINKEDIN
    </button>
  </a>,
  <a
    href="https://app.joinhandshake.com/stu/users/35279504"
    target="blank"
    key="Handshake"
  >
    <button className="buttons">
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 640 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M519.2 127.9l-47.6-47.6A56.252 56.252 0 0 0 432 64H205.2c-14.8 0-29.1 5.9-39.6 16.3L118 127.9H0v255.7h64c17.6 0 31.8-14.2 31.9-31.7h9.1l84.6 76.4c30.9 25.1 73.8 25.7 105.6 3.8 12.5 10.8 26 15.9 41.1 15.9 18.2 0 35.3-7.4 48.8-24 22.1 8.7 48.2 2.6 64-16.8l26.2-32.3c5.6-6.9 9.1-14.8 10.9-23h57.9c.1 17.5 14.4 31.7 31.9 31.7h64V127.9H519.2zM48 351.6c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16zm390-6.9l-26.1 32.2c-2.8 3.4-7.8 4-11.3 1.2l-23.9-19.4-30 36.5c-6 7.3-15 4.8-18 2.4l-36.8-31.5-15.6 19.2c-13.9 17.1-39.2 19.7-55.3 6.6l-97.3-88H96V175.8h41.9l61.7-61.6c2-.8 3.7-1.5 5.7-2.3H262l-38.7 35.5c-29.4 26.9-31.1 72.3-4.4 101.3 14.8 16.2 61.2 41.2 101.5 4.4l8.2-7.5 108.2 87.8c3.4 2.8 3.9 7.9 1.2 11.3zm106-40.8h-69.2c-2.3-2.8-4.9-5.4-7.7-7.7l-102.7-83.4 12.5-11.4c6.5-6 7-16.1 1-22.6L367 167.1c-6-6.5-16.1-6.9-22.6-1l-55.2 50.6c-9.5 8.7-25.7 9.4-34.6 0-9.3-9.9-8.5-25.1 1.2-33.9l65.6-60.1c7.4-6.8 17-10.5 27-10.5l83.7-.2c2.1 0 4.1.8 5.5 2.3l61.7 61.6H544v128zm48 47.7c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16c0 8.9-7.2 16-16 16z"></path>
      </svg>
      HANDSHAKE
    </button>
  </a>,
  <a href="#resume" key="Resume">
    <button className="buttons" style={{ borderBottomRightRadius: 5 }}>
      {" "}
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm-6 400H54a6 6 0 0 1-6-6V86a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v340a6 6 0 0 1-6 6zm-42-92v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm0-96v24c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h200c6.627 0 12 5.373 12 12zm-252 12c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36zm0 96c0 19.882-16.118 36-36 36s-36-16.118-36-36 16.118-36 36-36 36 16.118 36 36z"></path>
      </svg>
      RESUME
    </button>
  </a>,
  <a href="https://mail.google.com/mail/u/0/#inbox" key="Email">
    <button className="buttons" style={{ borderBottomRightRadius: 5 }}>
      {" "}
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"></path>
      </svg>
      GMAIL
    </button>
  </a>,
  <a href="https://github.com/willyv4" key="GitHub">
    <button className="buttons" style={{ borderBottomRightRadius: 5 }}>
      {" "}
      <svg
        className="icons"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="2em"
        width="2em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path>
      </svg>
      GitHub
    </button>
  </a>,
];

export default function GroupOrientation() {
  return (
    <div className="ButtonBox">
      <span>{anchorbuttons}</span>
    </div>
  );
}
