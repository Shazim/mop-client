import React, { useState } from 'react';

function Range() {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <>
      <div className="flex  justify-center justify-evenly">
        <div
          onClick={() => setRangeValue(0)}
          className="w-64 link font-nunito-light font-bold tracking leading-18 text-sm text-secondary"
        >
          Details
        </div>
        <div
          onClick={() => setRangeValue(1)}
          className="w-79 link font-nunito-light font-bold tracking leading-18 text-sm text-secondary"
        >
          Artwork
        </div>
        <div
          onClick={() => setRangeValue(2)}
          className="w-53 link font-nunito-light font-bold tracking leading-18 text-sm text-secondary"
        >
          Order
        </div>
        <div
          onClick={() => setRangeValue(3)}
          className="w-46 link font-nunito-light font-bold tracking leading-18 text-sm text-secondary"
        >
          Style
        </div>
        <div
          onClick={() => setRangeValue(4)}
          className="w-64 link font-nunito-light font-bold tracking leading-18 text-sm text-secondary"
        >
          Launch
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-23 h-23 rounded-full  bg-secondary"></div>
        <input
          class="range2 w-73% md:w-78% lg:w-77% xl:w-74% sm:w-77% z-1  mt-10 h-3 appearance-none bg-gray outline-none  overflow-hidden"
          type="range"
          min="0"
          value={rangeValue}
          max="4"
        />
        {rangeValue === 4 ? (
          <div className="w-23 h-23 rounded-full  bg-secondary"></div>
        ) : (
          <div className="w-23 h-23 rounded-full  bg-gray"></div>
        )}
      </div>
    </>
  );
}

export default Range;
