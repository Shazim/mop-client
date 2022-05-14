import React, { useState } from 'react';

const TaxRates = () => {
  const [rangeValue, setRangeValue] = useState(0);
  return (
    <div className="bg-gray-light p-33">
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
        <div className="w-23 h-23 rounded-full bg-secondary"></div>
        <input
          class="range2 w-74% z-1  mt-10 h-3 appearance-none bg-gray outline-none  overflow-hidden"
          type="range"
          min="0"
          value={rangeValue}
          max="4"
        />
        {rangeValue === 4 ? (
          <div className="w-23 h-23 rounded-full bg-secondary"></div>
        ) : (
          <div className="w-23 h-23 rounded-full bg-gray"></div>
        )}
      </div>
      <div className="mt-33 font-avenir-reg font-medium uppercase tracking-wider leading-54 text-secondary text-xl">
        Europe
      </div>
      <div className="flex bg-white justify-between mt-28 h-42">
        <div className="ml-18 w-57 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Tax
        </div>
        <div className="w-57 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Rate
        </div>
        <div className="w-110 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Total Rate
        </div>
        <div className="w-137 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          On Shipping
        </div>
        <div className="w-106 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          On Digital
        </div>
        <div></div>
      </div>
      <div className="hr-b"></div>

      <div className="ml-18 flex justify-between text-left">
        <div className="w-57 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          UK
        </div>
        <div className="w-57 pl-2 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          +2%
        </div>
        <div className="w-110 pl-15 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          2%
        </div>
        <div className="w-137 pl-35 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className="w-106 mt-21 pl-40 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className=" mt-21 mr-30">...</div>
      </div>
      <div className="hr-b mt-18"></div>

      <div className="ml-18 flex justify-between text-left">
        <div className="w-57 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          UK
        </div>
        <div className="w-57 pl-2 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          +2%
        </div>
        <div className="w-110 pl-15 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          2%
        </div>
        <div className="w-137 pl-35 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className="w-106 mt-21 pl-40 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className=" mt-21 mr-30">...</div>
      </div>
      <div className="hr-b mt-18"></div>

      <div className="mt-33 font-avenir-reg font-medium uppercase tracking-wider leading-54 text-secondary text-xl">
        North America
      </div>
      <div className="flex bg-white justify-between mt-28 h-42">
        <div className="ml-18 w-57 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Tax
        </div>
        <div className="w-57 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Rate
        </div>
        <div className="w-110 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Total Rate
        </div>
        <div className="w-137 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          On Shipping
        </div>
        <div className="w-106 font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          On Digital
        </div>
        <div></div>
      </div>
      <div className="hr-b"></div>

      <div className="ml-18 flex justify-between text-left">
        <div className="w-57 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          UK
        </div>
        <div className="w-57 pl-2 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          +2%
        </div>
        <div className="w-110 pl-15 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          2%
        </div>
        <div className="w-137 pl-35 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className="w-106 mt-21 pl-40 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className=" mt-21 mr-30">...</div>
      </div>
      <div className="hr-b mt-18"></div>

      <div className="ml-18 flex justify-between text-left">
        <div className="w-57 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          UK
        </div>
        <div className="w-57 pl-2 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          +2%
        </div>
        <div className="w-110 pl-15 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          2%
        </div>
        <div className="w-137 pl-35 mt-21 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className="w-106 mt-21 pl-40 font-nunito-light text-base text-black leading-22 uppercase">
          yes
        </div>
        <div className=" mt-21 mr-30">...</div>
      </div>
      <div className="hr-b mt-18"></div>
    </div>
  );
};

export default TaxRates;
