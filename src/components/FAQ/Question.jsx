import React from 'react';

function Question({ question = 'How many pictures can I store?' }) {
  return (
    <div className="flex text-black font-light pt-20 pb-18 px-19 justify-between border-t border-b border-border">
      <div>{question}</div>
      <img src="/images/arrows/downward.svg" className="link" alt="" />
    </div>
  );
}

export default Question;
