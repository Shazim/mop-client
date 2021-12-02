import Button from 'components/atoms/buttons/Button';
import React from 'react';

function Package() {
  const packages = [
    '10 galleries, 25GB storage',
    'Create a store. 5% fee to the Red dot gallery',
    'Personal naming,logo,video',
    'Limited design features',
    'Analytics (if available)',
    'Watermark',
  ];

  return (
    <div className="bg-card px-31 pt-22 max-w-312 m-auto">
      <div className="text-primary uppercase font-medium text-2xl tracking-wider text-center">
        starter
      </div>
      <div className="uppercase text-secondary tracking-wider text-sm font-medium text-center">
        <span className="text-2xl ">$8</span> per month
      </div>
      <div className="text-secondary font-light pb-20  mt-17">
        A <span className=" font-bold">beginners package</span> to get your work
        seen and sell your work.
      </div>
      <div className="ml-14 ">
        {packages.map((item) => (
          <div className="flex pb-20">
            <img src="/images/tick.svg" alt="" />
            <div className="ml-13 text-xsm font-light text-secondary">
              {item}
            </div>
          </div>
        ))}
      </div>
      <Button className="w-251 h-33 mb-20 m-auto">SUBSCRIBE</Button>
    </div>
  );
}

export default Package;
