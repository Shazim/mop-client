import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';
const Data = ({ papers }) => {
  return (
    <>
      {' '}
      {papers.map((p) => (
        <div className=" flex ">
          <div className="w-22 ml-22 mt-8 h-22 ">
            <CheckBox />
          </div>
          <div className="w-134 text-center pl-10 mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
            {p.name}
          </div>
        </div>
      ))}
    </>
  );
};

export default Data;
