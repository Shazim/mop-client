import React from 'react';

const Data2 = ({ paper_one, paper_two }) => {
  return (
    <>
      <div className="w-134 pl-16  mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
        {paper_one}
      </div>
      <div className="w-134 pl-16  mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
        {paper_two}
      </div>
    </>
  );
};

export default Data2;
