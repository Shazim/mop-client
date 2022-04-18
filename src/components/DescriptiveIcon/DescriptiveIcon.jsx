import React from 'react';

function DescriptiveIcon({
  source = '/images/services/satisfaction.svg',
  title = 'Satisfaction Guarantee',
}) {
  return (
    <div className="w-11% xl:w-15% lg:w-18% md:w-18% sm:w-80% sm:mx-auto sm:items-center items-center sm:mb-80 flex flex-col sm:flex-row">
      <img src={source} alt="" className="flex justify-center sm:w-65 m-auto" />
      <div className="pt-20 sm:pt-0 text-center w-100% sm:flex sm:justify-center sm:items-center sm:w-200 sm:ml-42 h-50">
        {title}
      </div>
    </div>
  );
}

export default DescriptiveIcon;
