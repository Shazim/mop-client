import React from 'react';

function ToggleButton({
  className: classes = 'w-211 h-32 ',
  bg,
  text,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`font-bold text-sm  tracking leading-32 cursor-pointer ${classes} ${bg} ${text}`}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
