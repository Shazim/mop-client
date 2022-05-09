import React, { useState } from 'react';

function Orders() {
  const data = [
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
    { id: 1, date: 'April2020', num: 589 },
  ];

  return (
    <div className="bg-gray">
      <div className="text-base text-secondary font-avenir-reg font-medium tracking-wider uppercase pt-38 mb-12">
        Sales
      </div>
      <div className="mb-33">
        <select name="" id=""></select>
      </div>
      <div className="bg-white flex w-1035 h-42 ">
        <div className="flex w-118px ml-18 mt-1 mb-1 flex-grow">
          <div className="text-base font-avenir-reg font-medium tracking-wider uppercase leading-10">
            MONTH
          </div>
          <img
            src="/images/icons/hide-filter.svg"
            alt=""
            className="w-16.63 h-17 mt-14 mb-12.58"
          />
        </div>
        <div className="flex mr-183">
          <div className="text-base font-avenir-reg font-medium tracking-wider uppercase leading-10 ">
            Total Visiters
          </div>
          <img
            src="/images/icons/hide-filter.svg"
            alt=""
            className="w-16.63 h-17 mt-14 mb-12.58 "
          />
        </div>
      </div>
      <div className="flex h-60 items-center">
        <div className="flex-grow font-nunito-reg font-light leading-5 text-base w-180 h-22 ml-18">
          April
        </div>
        <div className=" font-nunito-reg font-light leading-5 text-base w-180 h-22">
          589
        </div>
        <button className="w-116 h-33 bg-gray font-nunito-reg font-light leading-4 text-base tracking shadow mr-40">
          Export
        </button>
        <br />
      </div>
    </div>
  );
}

export default Orders;
