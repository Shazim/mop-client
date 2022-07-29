// ====================== IMPORTED LIBRARIES ========================
import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'routes';

// ====================== IMPORTED COMPONENTS ========================
import SelectedPackage from 'components/SelectedPackage/SelectedPackage';
import SubHeaderLayout from 'Layout/SubHeaderLayout';
import SubscribeAuth from 'components/SubscribeAuth/SubscribeAuth';

const SubscribeSignup = () => {
  const history = useHistory();

  const handleSignup = () => {
    history.push(routes.ROUTE_SUBSCRIBE_SIGNED);
  };

  return (
    <SubHeaderLayout title="subscribe to this plan">
      <div className="sm:px-0 flex pt-48 pb-299 sm:flex-col-reverse ">
        <div className="w-100% xl:w-60% lg:w-60% md:w-60% sm:w-100% sm:px-23 mr-44">
          <SubscribeAuth title="Sign up" onClick={handleSignup} />
        </div>
        <div className=" xl:w-40% lg:w-40% md:w-40% flex sm:px-23 sm:bg-gray-dark sm:flex-col items-center justify-end sm:w-100% sm:justify-center">
          <div className="sm:block hidden w-100% text-center mb-25">
            <p className="font-avenir-reg font-medium text-base leading-20 tracking-wider text-secondary-dark uppercase">
              here are details of the plan you’ve chosen. to continue, login or
              sign up below.
            </p>
          </div>
          <SelectedPackage />
        </div>
      </div>
    </SubHeaderLayout>
  );
};

export default SubscribeSignup;
