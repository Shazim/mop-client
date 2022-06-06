import SelectedPackage from 'components/SelectedPackage/SelectedPackage';
import SubHeaderLayout from 'Layout/SubHeaderLayout';
import Button from 'components/atoms/buttons/Button';

import React from 'react';
import SubscribedCards from 'components/SubscribeAuth/SubscribedCards';

function SubscribeLogged() {
  return (
    <SubHeaderLayout title="subscribe to this plan">
      <div className="sm:px-0 flex pt-48 pb-299 sm:flex-col ">
        <div className="w-100% xl:w-60% lg:w-60% md:w-60% sm:w-100% sm:px-23 mr-44">
          <SubscribedCards title="You are logged in" />
        </div>
        <div className=" xl:w-40% lg:w-40% md:w-40% flex sm:px-23  sm:flex-col items-center justify-end sm:w-100% sm:justify-center sm:mt-20">
          <div className="sm:block hidden w-100% text-center mb-25">
            <p className="font-avenir-reg font-medium text-base leading-20 tracking-wider text-secondary-dark uppercase sm:hidden">
              here are details of the plan you’ve chosen. to continue, login or
              sign up below.
            </p>
          </div>
          <SelectedPackage />
        </div>
        <Button
          className=" hidden w-272 h-44 mt-11  sm:block sm:ml-auto sm:mr-auto sm:mt-35 "
          transform="uppercase"
        >
          Subscribe
        </Button>
      </div>
    </SubHeaderLayout>
  );
}

export default SubscribeLogged;
