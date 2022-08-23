import React from 'react';

const OrderTable2 = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between pt-20 ">
        <div className="w-20% font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase ml-15 sm:hidden">
          customer Number
        </div>
        <div className="w-20% font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase ">
          Shipping Address
        </div>
        <div className="w-20% font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase">
          Order date
        </div>
        <div className="w-25% font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase mr-40">
          Shipping Date
        </div>
      </div>
      <div className="flex ">
        <div>
          <div className=" sm:hidden w-50% ml-20 font-Nunito-reg font-light text-base text-black leading-22 uppercase">
            #123456{' '}
          </div>
          <img
            src="/images/table/tree.png"
            alt=""
            className="w-103 h-73 ml-20 mt-17 sm:hidden"
          />
        </div>
        <div className="w-23%  font-Nunito-reg font-light text-base text-black leading-22 uppercase text-right sm:text-left">
          <p>2 Green Street, </p>
          <p className="pr-57">Poole. </p>
          <p className="pr-40">BH14 6HG</p>
        </div>
        <div className="w-19% font-Nunito-reg font-light text-base text-black leading-22 uppercase text-right ">
          01/10/21
        </div>
        <div className="w-23%  font-Nunito-reg font-light text-base text-black leading-22 uppercase text-right">
          05/10/21
        </div>
      </div>
      <div className="mt-20 hr-b"></div>
      <div className="flex  justify-between mb-30 pb-20">
        <div className="w-285 h-216 mr-20 mt-50 ml-20">
          <img src="/images/table/tree.png" alt="" />
        </div>
        <div className="font-Avenir-reg text-secondary font-light text-base leading-22 tracking-wider uppercase  flex-grow mt-23">
          <p className="leading-54 font-medium">size</p>

          <p className="text-black">14 X 11 (36 x 28cm)</p>

          <p className="leading-54 font-medium">paper</p>

          <p className="text-black">Lustre</p>

          <p className="leading-54 font-medium">frame</p>

          <p className="text-black">Wood, Light</p>
        </div>
        <div className="font-Avenir-reg text-secondary font-medium text-base leading-54 tracking-wider uppercase mt-23 mr-140">
          <p>Order total</p>
          <p className="leading-22 font-light">£190.00</p>
        </div>
      </div>
    </div>
  );
};

export default OrderTable2;
