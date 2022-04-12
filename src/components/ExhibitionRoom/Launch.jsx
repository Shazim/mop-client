import React from 'react';

function Launch() {
  return (
    <div>
      <div className="pt-38 pb-39 flex flex-col items-center">
        <div className="admin-h1">Congratulations!</div>
        <div className="admin-label--light pb-47">
          Your exhibition is now <span>live.</span> Get sharing!
        </div>
        <div className="flex w-100% ">
          <input
            className="bg-gray-lighter h-33 w-100% outline-none text-center"
            placeholder="exhibit.vip/gal/123456"
          />
          <button className="w-116 h-33 bg-gray admin-label shadow uppercase">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Launch;
