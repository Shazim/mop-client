import Button from 'components/atoms/buttons/Button';
import React from 'react';

function Package({
  popular = false,
  title = 'starter',
  price = '8',
  button = true,
  description = 'beginners package',
}) {
  const packages = [
    '10 galleries, 25GB storage',
    'Create a store. 5% fee to the Red dot gallery',
    'Personal naming,logo,video',
    'Limited design features',
    'Analytics (if available)',
    'Watermark',
  ];

  const bill = [
    { label: 'Sub Total', price: '15', color: 'text-secondary' },
    { label: 'VAT', price: '1.80', color: 'text-secondary' },
    { label: 'Total', price: '15', color: 'text-primary' },
  ];

  return (
    <div
      className={`relative bg-gray-lighter  pt-22 max-w-312  ${
        popular && 'mt-_20'
      }`}
    >
      <div className="px-31">
        {popular && (
          <div className="uppercase absolute top-_16 w-66% transform-x left-50% text-secondary font-bold text-sm tracking bg-gray text-center px-38 py-8">
            most popular
          </div>
        )}

        <div className="text-primary uppercase nunito-semibold text-2xl tracking-wider text-center">
          {title}
        </div>
        <div className="uppercase text-secondary tracking-wider text-sm nunito-semibold text-center">
          <span className="text-2xl ">${price}</span> per month
        </div>
        <div className="text-secondary font-nunito-light pb-20  mt-17">
          A <span className=" font-bold">{description}</span> to get your work
          seen and sell your work.
        </div>
        <div className="ml-14 ">
          {packages.map((item) => (
            <div className="flex pb-20">
              <img src="/images/tick.svg" alt="" />
              <div className="ml-13 text-xsm font-nunito-light text-secondary">
                {item}
              </div>
            </div>
          ))}
        </div>
        {button && (
          <Button className="w-251 h-33 mb-20  m-auto">SUBSCRIBE</Button>
        )}
      </div>
      {!button && (
        <div className="bg-gray pt-18 pl-30 pr-37 pb-21">
          {bill.map((item) => (
            <div
              className={`flex justify-between font-bold ${item.color} pb-3 text-base `}
            >
              <div>{item.label}</div>
              <div className="">${item.price}</div>
            </div>
          ))}
          <div className="pt-3 font-nunito-light text-base text-secondary ">
            Renews monthly, cancel any time.
          </div>
        </div>
      )}
    </div>
  );
}

export default Package;
