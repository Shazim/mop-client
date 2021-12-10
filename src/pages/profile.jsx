import React from 'react';
import Button from 'components/atoms/buttons/Button';
import { TitleBar } from 'components/Menu';
import { Package } from 'components/Packages';
import { TextField } from 'components/atoms/form';

function Profile() {
  return (
    <div>
      <TitleBar title="Subscribe to this plan" />
      <div className="bg-pale-gray ">
        <div className="flex justify-between max-screen">
          <div className>
            <div className="pb-8 text-secondary font-avenir-300 tracking-wider uppercase text-2xl">
              Login
            </div>
            <div className="underline uppercase text-sm font-bold pb-17 text-primary">
              Don’t have an account? Sign Up
            </div>
            <div className>
              <Button className="w-245 h-42 mr-18">LOGIN WITH FACEBOOK</Button>
              <Button className="w-245 h-42 mr-18">LOGIN WITH INSTAGRAM</Button>
              <Button className="w-245 h-42 mr-18">lOGIN WITH PINTREST</Button>
            </div>
            <div className="w-100% text-center border-b border-border leading-small mt-80 mr-0 mb-40">
              <span className="px-14 bg-pale-gray uppercase font-bold text-sm text-secondary tracking ">
                or
              </span>
            </div>
            <div>
              <TextField label="Email Address" />
            </div>
            <div className="flex mt-10">
              <div>
                <TextField label="Password" />
              </div>
              <div className="ml-21">
                <TextField label="Confirm Password" />
              </div>
            </div>
            <Button className="w-184 mr-18">Login</Button>
          </div>
          <div>
            <Package />
          </div>
        </div>
      </div>
      <div>
        <div>You are logged in</div>
        <div>Your Payment Details</div>
        <div>pay for subcription via</div>
        <div>
          <div>radio button</div>
          <div>radio button</div>
        </div>
        <div>
          <div>input</div>
          <div>input</div>
          <div>input</div>
        </div>
        <div>checkbox</div>
        <Button></Button>
      </div>
    </div>
  );
}

export default Profile;
