import React from 'react';
import { useState } from 'react';
import Answer from './Answer';

function Question({ question = 'How many pictures can I store?' }) {
  const [showData, setShowData] = useState(false);
  const handleClick = () => {
    setShowData(!showData);
  };
  return (
    <div className="border-b border-border">
      <div className="flex text-black font-nunito-light pt-20 pb-18 px-19 justify-between border-t  border-border text-base leading-22">
        <div>{question}</div>
        <img
          src={
            showData
              ? '/images/icons/open-option.svg'
              : '/images/icons/close-option.svg'
          }
          className="link"
          alt=""
          onClick={handleClick}
        />
      </div>
      {showData && <Answer />}
    </div>
  );
}

export default Question;
