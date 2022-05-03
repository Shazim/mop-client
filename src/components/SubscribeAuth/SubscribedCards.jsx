import React from 'react';
import { Form } from 'components/app/forms';
import Button from 'components/atoms/buttons/Button';
import CheckBox from 'components/atoms/checkbox/CheckBox';
import { TextField } from 'components/atoms/form';
import RadioButton from 'components/atoms/buttons/RadioButton';

function SubscribedCards({ title }) {
  return (
    <div className="w-100%">
      <p className="font-avenir-300 text-2xl text-secondary leading-38 tracking-wider uppercase">
        {title}
      </p>
      <p className="admin-h2 pt-14">your payment details</p>
      <div className="admin-label  pt-19 ">pay for subcription via</div>

      <div className="mt-14 h-100%">
        <Form initialValues={{ email: '', password: '', confirm: '' }}>
          <>
            <div className="w-100% flex mb-23">
              <div className="w-87 lg:w-100% md:w-100% sm:w-100% mr-18">
                <RadioButton name="card" value="Paypal" className="text-sm " />
              </div>
              <div className="w-100% lg:w-100% md:w-100% sm:w-100%">
                <RadioButton name="card" value="Card" className="text-sm" />
              </div>
            </div>
            <div className="flex">
              <div className="mr-22 w-50%">
                <TextField
                  name="confirm"
                  placeholder="ENTER LONG CARD NUMBER HERE"
                  height="38"
                  label="Card Number"
                />
              </div>
              <div className="mr-22 w-30%">
                <TextField
                  name="expiry"
                  type="date"
                  placeholder="00/00"
                  height="38"
                  label="Expiry Date"
                />
              </div>
              <div className="w-20%">
                <TextField
                  name="cvc"
                  type="number"
                  placeholder="XXX"
                  height="38"
                  label="CVC"
                />
              </div>
            </div>
            <div className="w-100% border-b border-border opacity-1 my-27 "></div>
            <div className="sm:hidden mb-19">
              <CheckBox value="I would like to receive insightful updates and emails. " />
            </div>
            <div className="w-100% sm:flex sm:justify-center">
              <Button
                className="w-262 h-41 mt-11 sm:w-95%"
                transform="uppercase"
              >
                Subscribe to this plan
              </Button>
            </div>
          </>
        </Form>
      </div>
    </div>
  );
}

export default SubscribedCards;
