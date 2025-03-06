import * as React from "react";

const View: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
  >
    <path
      fill="#025992"
      fillRule="evenodd"
      d="M8 7.043c-.69 0-1.25.579-1.25 1.29s.56 1.29 1.25 1.29 1.25-.579 1.25-1.29c0-.71-.56-1.29-1.25-1.29m0-2.376c-2.362 0-4.692 1.747-5.333 3.666C3.307 10.253 5.638 12 8 12s4.692-1.747 5.333-3.667c-.64-1.92-2.971-3.666-5.333-3.666m0 5.766c-1.122 0-2.036-.942-2.036-2.1 0-1.157.914-2.099 2.036-2.099 1.123 0 2.036.942 2.036 2.1 0 1.157-.913 2.099-2.036 2.099"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default View;
