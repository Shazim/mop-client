import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';

function MenuTable() {
  return (
    <>
      <div className=" bg-white flex justify-between h-42">
        <div className="flex ml-22 sm:ml-10">
          <CheckBox
            className="mt-10 sm:w-20 sm:h-20"
            // onChange={() => handleFeature(id)}
            // checked={artwork_ids[id] == id}
          />
          <div className=" w-103 sm:w-47 sm:ml-20 mb-5 flex justify-center mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider ml-10 ">
            <span className="sm:hidden">Product</span>{' '}
            <span className="invisible sm:visible">Paper</span>
          </div>
        </div>
        <div className="w-103 sm:hidden flex justify-center mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-45">
          Typology
        </div>
        <div className="w-51 sm:w-40 sm:mr-0 flex justify-center mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-50">
          Cost
        </div>
        <div className="w-138 sm:w-62 sm:mr-0 flex justify-center mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-30">
          <span className="sm:hidden">Cost</span> <span>Markup</span>
        </div>
        <div className="w-51 sm:w-44 sm:mr-50 mr-130 flex justify-center mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="w-20 ml-22 mt-8 ">
          {/* <input type="checkbox" /> */}
        </div>
        <div className=" sm:hidden w-134 ml-80 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="   font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className=" ml-24  text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="sm:w-19 mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/open-option.svg" alt="" />
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="w-22 ml-22 mt-8 h-22 sm:ml-10">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="w-134 sm:ml-0 ml-150 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          Lustre
        </div>
        <div className="w-134 sm:ml-30 ml-28 h-22 font-nunito-normal font-light text-base leading-22 text-black">
          $0.67
        </div>
        <div className=" w-124 h-27 bg-white sm:bg-offwhite pl-12 font-nunito-normal font-light text-base leading-22 text-black text-left">
          +320%
        </div>
        <div className=" w-134 ml-48 font-nunito-normal font-light text-base leading-22 text-black mr-50">
          $3.00
        </div>
      </div>

      <div className=" flex justify-between">
        <div className="w-22 ml-22 mt-8 h-22 sm:ml-10">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="w-134 sm:ml-0 ml-150 mt-8 font-nunito-normal font-light text-left text-base leading-22 text-black">
          Lustre
        </div>
        <div className="w-134 ml-28 h-22 font-nunito-normal font-light text-base leading-22 text-black">
          $0.67
        </div>
        <div className=" w-124 h-27 sm:bg-offwhite bg-white pl-12 font-nunito-normal font-light text-base leading-22 text-black text-left">
          +320%
        </div>
        <div className=" w-134 ml-48 font-nunito-normal font-light text-base leading-22 text-black mr-50">
          $3.00
        </div>
      </div>
      <div className="hr-b mt-20"></div>

      <div className=" flex justify-between">
        <div className="ml-22 mt-8 h-22 sm:ml-10">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="w-134 sm:ml-0 ml-80 mt-8 font-nunito-normal font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="ml-60  h-22 font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className="ml-24 h-22 text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" h-22 font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19  mr-20 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
    </>
  );
}

export default MenuTable;
