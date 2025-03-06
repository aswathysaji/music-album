import * as React from "react";

const CheckedCheckBox: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      fill="#084782"
      fillRule="evenodd"
      d="M16 4a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zm-.08 4.552a.75.75 0 0 0-1.06.023L10.231 13.4l-1.582-1.77a.75.75 0 0 0-.977-.072l-.084.073a.75.75 0 0 0 0 1.06l2.084 2.33a.75.75 0 0 0 1.084-.024l.037-.026.083-.075 5.067-5.284a.75.75 0 0 0-.022-1.06"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default CheckedCheckBox;
