import React from 'react';

function Instagram({ className: classes = 'fill-white' }) {
  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 6.5H18M5.5 1.5H17.5C19.7091 1.5 21.5 3.29086 21.5 5.5V17.5C21.5 19.7091 19.7091 21.5 17.5 21.5H5.5C3.29086 21.5 1.5 19.7091 1.5 17.5V5.5C1.5 3.29086 3.29086 1.5 5.5 1.5ZM11.5 15.5C9.29086 15.5 7.5 13.7091 7.5 11.5C7.5 9.29086 9.29086 7.5 11.5 7.5C13.7091 7.5 15.5 9.29086 15.5 11.5C15.5 13.7091 13.7091 15.5 11.5 15.5Z"
        stroke-width="2"
      />
    </svg>
  );
}

export default Instagram;
