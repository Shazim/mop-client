import React from 'react';

function ToggleButton({
  className: classes = 'w-211 h-32',
  bg,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`font-bold text-sm text-secondary tracking leading-32 cursor-pointer ${classes} ${bg}`}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
