import React from 'react';

function SimplesTables() {
  return (
    <>
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
      {[...Array(2)].map(() => (
        <>
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
            <div className=" mt-21 mr-30 cursor-pointer">...</div>
          </div>
          <div className="hr-b mt-18"></div>
        </>
      ))}
    </>
  );
}

export default SimplesTables;
