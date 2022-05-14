import SelectOptions from 'components/atoms/form/SelectOptions';
import RangeSlider from 'components/atoms/rangeslider/RangeSlider';
import React from 'react';

const PricingSheet = () => {
  return (
    <div className="bg-gray-dark p-35">
      <div className="text-secondary mt-35 uppercase font-nunito-reg font-bold leading-8 text-sm tracking ml-45">
        Price Sheet Name
      </div>

      <div className="ml-45">
        <input type="text" placeholder="Max 100 characters" />
      </div>
      <div className="hr-b mt-25"></div>
      <div className="flex">
        <div className="ml-45 text-base text-secondary font-avenir-reg font-medium tracking-wider leading-55 uppercase">
          Available Product
        </div>
        <div className="ml-123 text-base text-secondary font-avenir-reg font-medium tracking-wider leading-55 uppercase">
          Paper
        </div>
      </div>
      <div className="flex justify-between">
        <div className="ml-55 font-nunito font-light leading-22 text-base">
          20
        </div>
        <div className="flex">
          <input type="checkbox" />
          <div className="ml-9 font-bold font-nunito-reg tracking uppercase text-secondary">
            Lustre
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <div className="ml-9 font-bold font-nunito-reg tracking uppercase text-secondary">
            Glossy
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <div className="ml-9 font-bold font-nunito-reg tracking uppercase text-secondary">
            Metalic
          </div>
        </div>
        <div className="flex">
          <input type="checkbox" />
          <div className="ml-9 font-bold font-nunito-reg tracking uppercase text-secondary">
            Velvet
          </div>
        </div>
      </div>
      <div className="hr-b mt-13"></div>
      <div className="ml-45 font-avenir-reg font-medium leading-54 text-base">
        Apply A Bulk Markup?
      </div>
      <div className="ml-45 font-nunito-light leading-22 text-base text-black ">
        Adding a bulk markup to all products will save you lots of time. Enter a
        percent or amount below. You can then edit each specific product markup
        in each row.
      </div>
      <div className="ml-45">
        <SelectOptions
          className="w-260 mt-22 mb-24"
          label="Percentage markup"
        />
        <RangeSlider />
      </div>
      <div className="ml-45 w-222 h-42  font-avenir-medium text-base leading-54 uppercase text-secondary tracking-wider">
        Cost Markup
      </div>
      <div className="ml-45 mt-16 w-145 h-52 bg-white text-center font-avenir-medium font-medium text-2xl leading-54 tracking-wider text-primary">
        +320%
      </div>
      <div className="hr-b mt-25"></div>
      <div className="ml-45 mt-37 font-avenir-reg font-medium text-xl text-secondary leading-54 uppercase tracking-wider">
        Pricing
      </div>
      <div className="ml-45 bg-white flex justify-between h-42">
        <div className="flex">
          <input type="checkbox" className="ml-40 mt-20 w-20" />
          <div className=" w-103 text-center font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider ml-10 ">
            Product
          </div>
        </div>
        <div className="w-103 text-center font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-45">
          Typology
        </div>
        <div className="w-51 text-center font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-50">
          Cost
        </div>
        <div className="w-138 text-center font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider mr-30">
          Cost Markup
        </div>
        <div className="w-51 mr-130 text-center font-avenir-reg font-medium text-base text-secondary uppercase leading-54 tracking-wider">
          Price
        </div>
      </div>
      <div className="ml-67 flex justify-between">
        <div className="w-20 ml-22 mt-8 ">
          {/* <input type="checkbox" /> */}
        </div>
        <div className="w-134 ml-80 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className=" ml-45  font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className=" ml-24  text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/open-option.svg" alt="" />
        </div>
      </div>
      <div className="ml-67 flex justify-between">
        <div className="w-22 ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-150 mt-8 font-nunito-normal text-left font-light text-base leading-22 text-black">
          Lustre
        </div>
        <div className="w-134 ml-28 h-22 font-nunito-normal font-light text-base leading-22 text-black">
          $0.67
        </div>
        <div className=" w-124 h-27 bg-white pl-12 font-nunito-normal font-light text-base leading-22 text-black text-left">
          +320%
        </div>
        <div className=" w-134 ml-48 font-nunito-normal font-light text-base leading-22 text-black mr-50">
          $3.00
        </div>
      </div>

      <div className="ml-67 flex justify-between">
        <div className="w-22 ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-150 mt-8 font-nunito-normal font-light text-left text-base leading-22 text-black">
          Lustre
        </div>
        <div className="w-134 ml-28 h-22 font-nunito-normal font-light text-base leading-22 text-black">
          $0.67
        </div>
        <div className=" w-124 h-27 bg-white pl-12 font-nunito-normal font-light text-base leading-22 text-black text-left">
          +320%
        </div>
        <div className=" w-134 ml-48 font-nunito-normal font-light text-base leading-22 text-black mr-50">
          $3.00
        </div>
      </div>
      <div className="hr-b mt-20"></div>

      <div className="ml-67 flex justify-between">
        <div className="ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-100 mt-8 font-nunito-normal font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="ml-60 h-22 font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className="ml-24 h-22 text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" h-22 font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
      <div className="ml-67 flex justify-between">
        <div className="ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-100 mt-8 font-nunito-normal font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="ml-60 h-22 font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className="ml-24 h-22 text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" h-22 font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
      <div className="ml-67 flex justify-between">
        <div className="ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-100 mt-8 font-nunito-normal font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="ml-60 h-22 font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className="ml-24 h-22 text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" h-22 font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
      <div className="ml-67 flex justify-between">
        <div className="ml-22 mt-8 h-22">
          <input type="checkbox" />
        </div>
        <div className="w-134 ml-100 mt-8 font-nunito-normal font-light text-base leading-22 text-black">
          6X4(15X10cm)
        </div>
        <div className="ml-60 h-22 font-nunito-normal font-light text-base leading-22 text-black"></div>
        <div className="ml-24 h-22 text-center font-nunito-normal font-light text-base leading-22 text-black "></div>
        <div className=" h-22 font-nunito-normal font-light text-base leading-22 text-black mr-113"></div>
        <div className="mt-19 mr-20 cursor-pointer">
          <img src="/images/icons/close-option.svg" alt="" />
        </div>
      </div>
      <div className="hr-b mt-20"></div>
      <div className=" mt-48 flex justify-end cursor-pointer">
        <button className=" w-240 h-33  bg-primary text-primary-lighter font-nunito-normal text-center font-bold leading-18 tracking uppercase">
          Save Price Sheet
        </button>
      </div>
    </div>
  );
};

export default PricingSheet;
