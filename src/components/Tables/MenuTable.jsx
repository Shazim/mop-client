import React, { useEffect, useState } from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { useFetch, usePost } from 'hooks';
import { PriceSheet } from 'api/api-services';
import Data from './Data';

function MenuTable() {
  const { data: getData } = useFetch(PriceSheet);
  const { sizes = [] } = getData || [];

  const [clickedIndex, setClickedIndex] = useState({});
  const [showData, setShowData] = useState(false);

  const handleClick = (index) => () => {
    if (clickedIndex[index] === undefined) {
      setClickedIndex((state) => ({
        [index]: true,
      }));

      setShowData(true);
    } else {
      setClickedIndex((prv) => ({ ...prv, [index]: !prv[index] }));
      setShowData(false);
    }
  };

  return (
    <>
      <div className=" bg-white flex  h-42 ">
        <div className="flex ml-22 ">
          <CheckBox className="mt-10" />
        </div>
        <div className=" pl-44 flex-grow mb-5 mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider  ">
          size
        </div>

        <div className="w-51  mr-130  mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      {sizes.map((data, index) => (
        <>
          <div className=" flex ">
            <div className="w-20 ml-22 mt-8 ">
              {clickedIndex[index] && showData ? null : <CheckBox />}
            </div>
            <div className="flex-grow  w-134 ml-55 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
              {data.name}
            </div>
            <div className=" w-101 h-27 bg-white mr-40 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black ">
              {data.price}
            </div>

            <div
              className="mt-19 mr-30 cursor-pointer"
              onClick={handleClick(index)}
            >
              <img
                src={
                  clickedIndex[index] && showData
                    ? '/images/icons/open-option.svg'
                    : '/images/icons/close-option.svg'
                }
                alt=""
              />
            </div>
          </div>
          {clickedIndex[index] && showData && <Data papers={data.papers} />}
          <div className="hr-b mt-20"></div>
        </>
      ))}
    </>
  );
}

export default MenuTable;
