import React from 'react';
import { Package } from 'components/Packages';
import { TextField } from 'components/atoms/form';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';

function Login({
  title = 'LOGIN',
  description = 'Don’t have an account? Sign Up',
  checkBox = false,
}) {
  return (
    <div className="bg-pale-gray pb-534 pt-48">
      <div className="flex justify-between max-screen">
        <div>
          <div className="pb-8 text-secondary font-avenir-300 tracking-wider uppercase text-2xl">
            {title}
          </div>
          <div className="underline link uppercase text-sm tracking font-bold pb-17 text-primary">
            {description}
          </div>
          <div className>
            <Button className="w-245 h-42 mr-18">LOGIN WITH FACEBOOK</Button>
            <Button className="w-245 h-42 mr-18">LOGIN WITH INSTAGRAM</Button>
            <Button className="w-245 h-42 mr-18">LOGIN WITH PINTREST</Button>
          </div>
          <div className="w-100% text-center border-b border-border leading-small mt-80 mr-0 mb-40">
            <span className="px-14 bg-pale-gray uppercase font-bold text-sm text-secondary tracking ">
              or
            </span>
          </div>
          <div className="w-60%">
            <TextField label="Email Address" mb="14" />
          </div>
          <div className="flex mt-20 pb-29 border-b border-border">
            <div className="w-50%">
              <TextField label="Password" mb="14" />
            </div>
            <div className="ml-21 w-50%">
              <TextField label="Confirm Password" mb="14" />
            </div>
          </div>
          {checkBox && (
            <div className="pt-27">
              <CheckBox />
            </div>
          )}

          <Button className="w-262 mr-18 mt-30 h-41">{title}</Button>
        </div>
        <div>
          <Package
            button={false}
            title="plus"
            price="15"
            description="advanced package"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
