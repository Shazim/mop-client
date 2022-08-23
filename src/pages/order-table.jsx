import React, { useState, useEffect } from 'react';
import OrderTable2 from './order-table2';

const OrderTable = () => {
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowData(!showData);
  };
  return (
    <>
      <div className=" pt-28 ">
        <div className=" w-full flex  bg-white h-42 items-center ">
          <div className=" w-20% ml-20 flex ">
            <div className="font-Avenir-reg  text-secondary font-medium text-base leading-54 tracking-wider uppercase">
              <span>Order</span> <span className="sm:hidden">no</span>
            </div>
            <img
              src="/images/table/nameFilter.svg"
              alt=""
              className="ml-10 w-20 h-20 mt-15"
            />
          </div>
          <div className="w-20% flex justify-center">
            <div className="font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase">
              Date
            </div>
            <img
              src="/images/table/filterIcon.svg"
              alt=""
              className="ml-10 w-20 h-20 mt-15"
            />
          </div>
          <div className="w-20% flex justify-end sm:hidden">
            <div className="font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase">
              Amount
            </div>
            <img
              src="/images/table/filterIcon.svg"
              alt=""
              className="ml-10 w-20 h-20 mt-15"
            />
          </div>
          <div className=" w-20% flex  justify-end">
            <div className="font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase">
              Status
            </div>
            <img
              src="/images/table/filterIcon.svg"
              alt=""
              className="ml-10 w-20 h-20 mt-15"
            />
          </div>
          <div className="w-20% "></div>
        </div>
      </div>

      <div className="items-center h-151 pt-20">
        <div className="flex ">
          <div className="w-20% ml-20 font-Nunito-reg font-light text-base text-black leading-22 uppercase ">
            #123456
          </div>
          <div className="w-20% font-Nunito-reg font-light text-base text-black leading-22 uppercase text-center pr-25">
            12/10/21
          </div>
          <div className="w-20% sm:hidden font-Nunito-reg font-light text-base text-black leading-22 uppercase text-center pl-25">
            £190.00
          </div>
          <div className="w-20% font-Nunito-reg font-light text-base text-black leading-22 text-center pl-45 ">
            Completed
          </div>

          <div className="w-10% flex justify-end link" onClick={handleClick}>
            <img
              src={
                showData
                  ? '/images/icons/open-option.svg'
                  : '/images/icons/close-option.svg'
              }
              alt=""
              className="w-22 h-22"
            />
          </div>
        </div>
        {showData ? (
          <div className="mt-20">
            <OrderTable2 />
          </div>
        ) : (
          <img
            src="/images/table/tree.png"
            alt=""
            className="w-103 h-73 ml-20 mt-17"
          />
        )}
        <div className="hr-b mt-17"></div>
      </div>
    </>
  );
};

export default OrderTable;
