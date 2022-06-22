import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';

function MenuTable() {
  return (
    <>
      <div className=" bg-white flex  h-42 ">
        <div className="flex ml-22 ">
          <CheckBox
            className="mt-10"
            // onChange={() => handleFeature(id)}
            // checked={artwork_ids[id] == id}
          />
        </div>
        <div className=" pl-44 flex-grow mb-5 mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider  ">
          size
        </div>

        <div className="w-51  mr-130  mt-_5 font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      <div className=" flex ">
        <div className="w-20 ml-22 mt-8 ">
          {/* <input type="checkbox" /> */}
        </div>
        <div className="flex-grow  w-134 ml-55 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className=" w-101 h-27 bg-white mr-40 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black ">
          $0.00
        </div>
        <div className="mt-19 mr-30 cursor-pointer">
          <img src="/images/icons/open-option.svg" alt="" />
        </div>
      </div>
      <div className=" flex ">
        <div className="w-22 ml-22 mt-8 h-22 ">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="w-134 text-center pl-10 mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
          Lustre
        </div>
      </div>
      <div className=" flex ">
        <div className="w-22 ml-22 mt-8 h-22 ">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="w-134 text-center pl-10 mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
          Lustre
        </div>
      </div>

      <div className="hr-b mt-20"></div>

      <div className=" flex ">
        <div className="w-20 ml-22 mt-8 ">
          <CheckBox
          // onChange={() => handleFeature(id)}
          // checked={artwork_ids[id] == id}
          />
        </div>
        <div className="flex-grow  w-134 ml-55 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className=" w-101 h-27  mr-40 mt-8 pl-18 font-nunito-normal font-light text-base leading-22 text-black ">
          $0.00
        </div>
        <div className=" mt-19 mr-30 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
    </>
  );
}

export default MenuTable;
