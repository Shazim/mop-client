import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import TextField from 'components/atoms/form/TextField';
import SubHeader from 'components/molecules/header/SubHeader';
import Signup from 'components/molecules/signup/Signup';
import Package from 'components/Packages/package';
import React from 'react';
import Login from '../components/molecules/login/Login';

function Subscribe() {
  return (
    <div>
      <SubHeader title="subscribe to this plan" />
      <div className="bg-gray-dark sm:bg-white">
        <div className="max-screen sm:px-0 flex pt-48 pb-299 sm:flex-col-reverse ">
          <div className="w-65% xl:w-60% lg:w-60% md:w-60% sm:w-100% sm:px-23">
            <Login />
          </div>
          <div className="w-35% xl:w-40% lg:w-40% md:w-40% flex sm:px-23 sm:bg-gray-dark sm:flex-col items-center justify-end sm:w-100% sm:justify-center">
            <div className="sm:block hidden w-100% text-center mb-25">
              <p className="font-avenir-reg font-medium text-base leading-20 tracking-wider text-secondary-dark uppercase">
                here are details of the plan you’ve chosen. to continue, login
                or sign up below.
              </p>
            </div>
            <Package className="shadow" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
