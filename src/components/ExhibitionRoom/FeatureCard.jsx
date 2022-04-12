import React from 'react';
import CheckBox from 'components/atoms/checkbox/CheckBox';

function FeatureCard() {
  return (
    <div className="card-featured w-292 relative">
      <div className="bg-gray-darker relative rounded-sm h-183">
        <img src="" alt="" />
        <div className="flex mt-11 ml-13">
          <CheckBox />
          <div className="ml-9 mt-3 admin-label--light uppercase">
            My Featured Photo
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-5">
        <div className="text-15 font-nunito-light font-normal tracking-tightest text-secondary">
          Artwork name
        </div>
        <div className="flex">
          <img src="/images/edit.svg" className="mr-14" />
          <img src="/images/delete.svg" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="text-15 font-normal font-nunito-light tracking-tightest text-secondary">
          Edit Description
        </div>
        <img src="/images/option.svg" className="mr-15" />
      </div>
    </div>
  );
}

export default FeatureCard;
