import React from 'react';

function DescriptiveIcon({
  source = '/images/services/satisfaction.svg',
  title = 'Satisfaction Guarantee',
}) {
  return (
    <div className="w-8% flex flex-col items-center">
      <img src={source} alt="" className="flex justify-center m-auto" />
      <div className="pt-20 text-center w-100% ">{title}</div>
    </div>
  );
}

export default DescriptiveIcon;
