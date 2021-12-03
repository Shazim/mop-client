import React from 'react';
import { Question } from '../FAQ';

function FAQ() {
  return (
    <div>
      <div className="tracking-wider text-secondary uppercase text-2xl text-center">
        FAQ <span className="text-primary">.</span>
      </div>
      <Question />
    </div>
  );
}

export default FAQ;
