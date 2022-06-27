import React, { useState } from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Data from './data';
import { TextField } from 'components/atoms/form';

const Items = ({ data }) => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => () => {
    setShowData(!showData);
  };

  // console.log('item', data);
  const handleSize = () => {};

  return (
    <>
      <div className=" flex ">
        <div className="w-20 ml-22 mt-13 ">
          {showData ? null : <CheckBox onChange={handleSize} />}
        </div>
        <div className="flex-grow  w-134 ml-55 mt-13 font-nunito-normal text-left font-light text-base leading-22 text-black">
          {data.name}
        </div>
        <div>
          <TextField
            name="price"
            label=""
            className=" h-20 w-101  mr-50 sm:mr-10 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black"
          >
            {data.price}
          </TextField>
        </div>
        <div
          className="mt-19 mr-30 sm:mr-8 cursor-pointer"
          onClick={handleClick()}
        >
          <img
            src={
              showData
                ? '/images/icons/open-option.svg'
                : '/images/icons/close-option.svg'
            }
            alt=""
          />
        </div>
      </div>
      {showData && <Data papers={data.papers} />}
      <div className="hr-b mt-20"></div>
    </>
  );
};

export default Items;
