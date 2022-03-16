import React from 'react';

function ToggleButton({
  className: classes = 'w-211 h-32',
  bg,
  children,
  handler,
}) {
  return (
    <button
      onClick={() => handler((prv) => !prv)}
      className={`font-bold text-sm text-secondary tracking leading-32 ${classes} ${bg}`}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
