import * as React from "react";

const ArrowDown: React.FC<React.SVGProps<SVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    style={{ flexShrink: 0,cursor:'pointer' }}
  >
    <path
      fill="#08090A"
      d="M9.811 12.552c.21 0 .39-.083.552-.244l3.657-3.75a.678.678 0 0 0-.483-1.152.7.7 0 0 0-.498.21l-3.223 3.32-3.227-3.32a.7.7 0 0 0-.499-.21.678.678 0 0 0-.483 1.157l3.657 3.745c.171.166.342.244.547.244"
    ></path>
  </svg>
);

export default ArrowDown;
