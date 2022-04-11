import React from 'react';

function LinkLabel({ label = 'View Featured Galleries' }) {
  return (
    <div className="flex">
      <img src="/images/Home/blocks.svg" />
      <div className="pl-14 text-primary text-xl sm:text-base tracking uppercase font-avenir-800">
        {label}
        <div className="border-b-2 border-secondary w-111 pt-6"></div>
      </div>
    </div>
  );
}

export default LinkLabel;
