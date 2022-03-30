import React from 'react';
import { useState } from 'react';
import ToggleButton from '../togglebutton/ToggleButton';

function Counter({ active, width, onClick }) {
  const [count, setCount] = useState(0);

  const countHandler = (index, type) => {
    setCount((prev) => (type == 'add' ? prev + index : prev - index));
  };

  return (
    <div className={`${width} flex items-center`}>
      <ToggleButton
        bg={active ? 'bg-gray' : 'bg-white'}
        onClick={onClick}
        className="h-32 font-bold w-90% text-sm text-secondary tracking leading-32 uppercase"
      >
        limited edition of
      </ToggleButton>

      <div className="w-10% text-center">
        <img
          onClick={() => (active ? countHandler(1, 'add') : null)}
          src="/images/upArrow.svg"
          className="w-12 h-7 m-auto mb-4 link"
        />
        <p>{count}</p>
        <img
          onClick={() => (active ? countHandler(count > 0 ? 1 : 0) : null)}
          src="/images/downArrow.svg"
          className="w-12 h-7 m-auto mt-4 link"
        />
      </div>
    </div>
  );
}

export default Counter;
