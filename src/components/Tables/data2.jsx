import React from 'react';

const Data2 = ({ paper_one, paper_two, onClick }) => {
  return (
    <>
      <div className="link" onClick={onClick}>
        <div className="w-134 pl-16  mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
          {paper_one}
        </div>
        <div className="w-134 pl-16  mt-8 font-nunito-normal  font-light text-base leading-22 text-black">
          {paper_two}
        </div>
      </div>
    </>
  );
};

export default Data2;
