import React, { useState } from 'react';
import { Question } from '../FAQ';

function FAQ() {
  return (
    <div>
      <div className="tracking-wider text-secondary uppercase text-2xl text-center font-avenir-300 font-light mb-30">
        FAQ <span className="text-primary">.</span>
      </div>
      <Question />
    </div>
  );
}

export default FAQ;
