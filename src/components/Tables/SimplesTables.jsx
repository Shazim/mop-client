import React from 'react';

function SimplesTables() {
  return (
    <>
      <div className="flex bg-white justify-start pl-18 mt-28 h-42">
        <div className=" w-1/5 flex  justify-start font-avenir-reg font-normal text-base uppercase tracking-wider leading-54">
          Tax
        </div>
        <div className="w-1/5 font-avenir-reg font-normal flex justify-start text-base uppercase tracking-wider leading-54">
          Rate
        </div>
        <div className="w-1/5 font-avenir-reg font-normal flex justify-start text-base uppercase tracking-wider leading-54">
          Total Rate
        </div>
        <div className="w-1/5 font-avenir-reg font-normal text-base uppercase flex justify-start tracking-wider leading-54">
          On Shipping
        </div>
        <div className="w-1/5 font-avenir-reg font-normal text-base uppercase tracking-wider flex justify-start leading-54">
          On Digital
        </div>
        <div className="w-1/7 flex justify-start"></div>
      </div>
      <div className="hr-b"></div>
      {[...Array(2)].map(() => (
        <>
          <div className="flex justify-start pl-18 ">
            <div className="  w-1/5 mt-21 flex justify-start font-nunito-light text-base text-black leading-22 uppercase">
              UK
            </div>
            <div className="w-1/5  mt-21  flex justify-start font-nunito-light text-base text-black leading-22 uppercase">
              +2%
            </div>
            <div className="w-1/5  mt-21 pl-9 flex justify-start  font-nunito-light text-base text-black leading-22 uppercase">
              2%
            </div>
            <div className="w-1/5  mt-21 pl-17 flex justify-start font-nunito-light text-base text-black leading-22 uppercase">
              yes
            </div>
            <div className="w-1/5 mt-21 pl-25 flex justify-start font-nunito-light text-base text-black leading-22 uppercase">
              yes
            </div>
            <div className="w-1/7 mt-21 mr-15 flex justify-start cursor-pointer">
              ...
            </div>
          </div>
          <div className="hr-b mt-18"></div>
        </>
      ))}
    </>
  );
}

export default SimplesTables;
