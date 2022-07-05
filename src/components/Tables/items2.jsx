import React, { useState } from 'react';
import Data2 from './data2';

const Items2 = ({ data }) => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };

  return (
    <>
      <div className=" flex link " onClick={handleClick}>
        <div className="flex-grow  w-134 ml-16 mt-13 font-nunito-normal text-left font-light text-base leading-22 text-black">
          {data.size_name}
        </div>
        <div className="w-101 h-27 sm:mr-0 mr-50 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black">
          ${data.price}
        </div>
        <div className="mt-19 sm:mr-0 mr-30 cursor-pointer">
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
      {showData && (
        <Data2
          paper_one={data.paper_one_name}
          paper_two={data.paper_two_name}
          onClick={handleClick}
        />
      )}
      <div className="hr-b mt-20"></div>
    </>
  );
};

export default Items2;
