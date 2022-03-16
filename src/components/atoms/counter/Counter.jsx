import React from 'react';
import ToggleButton from '../togglebutton/ToggleButton';

function Counter({ editionHandler, edition, width }) {
  return (
    <div className={`${width} flex items-center`}>
      <div className="h-32 w-90% bg-white pl-31">
        <ToggleButton className="font-bold text-sm text-secondary tracking leading-32 uppercase">
          limited edition of
        </ToggleButton>
      </div>
      <div className="w-10% text-center">
        <img
          onClick={() => editionHandler((prv) => prv + 1)}
          src="/images/upArrow.svg"
          className="w-12 h-7 m-auto mb-4 link"
        />
        <p
        // bg={openEdition ? 'bg-gray' : 'bg-white'}
        // handler={openEditionHandler}
        >
          10
        </p>
        <img
          onClick={() => editionHandler((prv) => (prv != 0 ? prv - 1 : prv))}
          src="/images/downArrow.svg"
          className="w-12 h-7 m-auto mt-4 link"
        />
      </div>
    </div>
  );
}

export default Counter;
