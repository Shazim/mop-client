import React from 'react';
import { Package } from 'components/Packages';
import { TextField } from 'components/atoms/form';
import RadioButton from 'components/atoms/buttons/RadioButton';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import Button from 'components/atoms/buttons/Button';

function LoggedIn({ title = 'You are logged in' }) {
  return (
    <div className="bg-pale-gray pt-48 pb-534">
      <div className="flex justify-between max-screen">
        <div>
          <div className="pb-14 text-secondary font-avenir-300 tracking-wider uppercase text-2xl">
            {title}
          </div>
          <div className="tracking-wider uppercase text-secondary text-xl font-medium font-avenir-reg mb-19">
            Your Payment Details
          </div>
          <div className="font-bold tracking text-secondary uppercase text-sm">
            pay for subcription via
          </div>
          <div className="flex pt-14 pb-23">
            <RadioButton label="Paypal" />
            <RadioButton label="Card" />
          </div>
          <div className="flex pb-27 mb-27 border-b border-border">
            <div className="mr-22 w-40%">
              <TextField label="Card number" mb="14" />
            </div>
            <div className="mr-22">
              <TextField label="Expiry Date" mb="14" />
            </div>
            <TextField label="CVC" mb="14" />
          </div>
          <CheckBox />
          <Button className="w-262 h-41 mb-20 mt-19">
            SUBSCRIBE TO THIS PLAN
          </Button>
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

export default LoggedIn;
