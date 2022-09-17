// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
// ====================== IMPORTED COMPONENTS ========================
import Button from 'components/atoms/buttons/Button';

const Package = ({
  popular = false,
  title = 'starter',
  price = '8',
  className: classes = 'sm:m-auto',
  description = 'beginners package',
  subscribeBtn = true,
  packageTotal = false,
  onClickSubscribeBtn,
  year,
}) => {
  const packages = [
    '10 galleries, 25GB storage',
    'Create a store. 5% fee to the Red dot gallery',
    'Personal naming,logo,video',
    'Limited design features',
    'Analytics (if available)',
    'Watermark',
  ];

  return (
    <div className={`w-312 lg:w-299 md:w-290 ${classes}`}>
      <div
        className={`relative bg-gray-lighter px-31 pt-22 lg:px-25 md:px-25 ${popular && 'mt-_20 sm:mt-0'
          }`}
      >
        {popular && (
          <div className="uppercase absolute top-_16 w-66% md:w-70% transform-x left-50% text-secondary font-bold text-sm tracking bg-gray text-center px-38 py-8">
            most popular
          </div>
        )}

        <div className="text-primary uppercase nunito-semibold text-2xl tracking-wider text-center">
          {title}
        </div>
        <div className="uppercase text-secondary tracking-wider text-sm nunito-semibold text-center">
          <span className="text-2xl ">${price}</span> per{' '}
          {year ? 'year' : 'month'}
        </div>
        <div className="text-secondary font-nunito-light pb-20  mt-17">
          {/* <span className=" font-bold">{description}</span> to get your work */}
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
        {subscribeBtn && (
          <Button
            className="w-251 h-33 mb-20 m-auto"
            onClick={onClickSubscribeBtn}
          >
            SUBSCRIBE
          </Button>
        )}
      </div>
      {packageTotal && (
        <div className="w-100% bg-gray-800 text-secondary text-base font-bold px-19 leading-22 py-19">
          <div className="flex justify-between capitalize">
            <p>sub total</p>
            <p>${price}</p>
          </div>
          <div className="flex justify-between capitalize">
            <p>vat</p>
            <p>${1.5}</p>
          </div>
          <div className="flex justify-between capitalize text-primary">
            <p>total</p>
            <p>${+price + 1.5}</p>
          </div>
          <p className="mt-4 font-reg font-light">
            Renews monthly, cancel any time.
          </p>
        </div>
      )}
    </div>
  );
};

export default Package;
