import React from 'react';
import { Package } from 'components/Packages';
import SwitchButton from 'components/atoms/buttons/SwitchButton';

function Packages({
  packages = [
    {
      popular: false,
      title: 'Starter',
      price: 8,
      description: 'beginners package',
    },
    {
      popular: true,
      title: 'Plus',
      price: 15,
      description: 'advanced package',
    },
    {
      popular: false,
      title: 'Pro',
      price: 25,
      description: 'advanced package',
    },
  ],
}) {
  return (
    <div className="max-screen  flex flex-col items-center">
      <div className="w-50% uppercase text-2xl text-center tracking-wider text-secondary font-avenir-reg ">
        subscription options to suit every level of photographer, from
        <span className="text-primary"> hobbyist</span> to a{' '}
        <span className="text-primary">professional</span>
      </div>
      <div className="flex justify-center uppercase font-bold tracking text-sm pt-52 pb-69">
        <div>monthly</div>
        <div className="mx-24">
          <SwitchButton />
        </div>
        <div>Yearly</div>
      </div>
      <div className="flex justify-between">
        {packages.map(({ popular, title, price, description }) => (
          <div className="mr-41">
            <Package
              popular={popular}
              description={description}
              price={price}
              title={title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Packages;
