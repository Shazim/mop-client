import React from 'react';

const Answer = ({ Answer = 'How many pictures can I store?' }) => {
  return (
    <div className="text-black px-19 pb-18 font-nunito-light text-base leading-22 ">
      <div>{Answer}</div>
    </div>
  );
};

export default Answer;
