import React from 'react';

function Facebook({ className: classes = 'stroke-white' }) {
  return (
    <svg
      className={`${classes}`}
      viewBox="0 0 23 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 21.5C5.97715 21.5 1.5 17.0228 1.5 11.5C1.5 5.97715 5.97715 1.5 11.5 1.5C17.0228 1.5 21.5 5.97715 21.5 11.5C21.5 17.0228 17.0228 21.5 11.5 21.5ZM11.5 21.5V9.5C11.5 8.39543 12.3954 7.5 13.5 7.5H15M8 13.5H15"
        stroke-width="2"
      />
    </svg>
  );
}

export default Facebook;
